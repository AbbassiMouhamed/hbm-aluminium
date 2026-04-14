// Vercel Serverless Function: /api/contact
// Receives JSON: { name, phone, email, service, message }
// Env vars:
// - BREVO_API_KEY (required)
// - BREVO_TO_EMAIL (required)
// - BREVO_FROM_EMAIL (required; must be an allowed sender in Brevo)
// - BREVO_FROM_NAME (optional)

function json(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

async function sendViaSmtp({
  host,
  port,
  user,
  pass,
  from,
  to,
  replyTo,
  subject,
  html,
}) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: Number(port) === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    html,
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email) {
  // Simple, pragmatic validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

async function readBody(req) {
  // Some runtimes populate req.body; others don't.
  if (req && req.body !== undefined) return req.body;

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return {};

  const contentType = String(req.headers?.["content-type"] || "");
  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams(raw);
    const obj = {};
    for (const [k, v] of params.entries()) obj[k] = v;
    return obj;
  }

  // Unknown content-type; best-effort JSON parse
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { ok: false, error: "method_not_allowed" });
  }

  const toEmail = process.env.BREVO_TO_EMAIL;

  // Option A: Brevo HTTP API
  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.BREVO_FROM_EMAIL;
  const fromName = process.env.BREVO_FROM_NAME || "HBM ALU Website";

  // Option B: Brevo SMTP
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.BREVO_SMTP_USER;
  const smtpKey = process.env.BREVO_SMTP_KEY;
  const smtpFrom = process.env.SMTP_FROM;

  const canUseApi = Boolean(apiKey && toEmail && fromEmail);
  const canUseSmtp = Boolean(
    toEmail && smtpHost && smtpPort && smtpUser && smtpKey && smtpFrom,
  );

  if (!canUseApi && !canUseSmtp) {
    return json(res, 500, { ok: false, error: "server_not_configured" });
  }

  let body = await readBody(req);
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const name = String(body?.name || "").trim();
  const phone = String(body?.phone || "").trim();
  const email = String(body?.email || "").trim();
  const service = String(body?.service || "").trim();
  let message = String(body?.message || "").trim();

  if (!name || !phone || !email || !service) {
    return json(res, 400, { ok: false, error: "missing_fields" });
  }

  if (!isValidEmail(email)) {
    return json(res, 400, { ok: false, error: "invalid_email" });
  }

  if (message.length < 3) message = "(no message)";

  const subject = `Nouveau message (Site) - ${service}`;

  const html =
    '<div style="font-family:Arial,sans-serif;line-height:1.5">' +
    "<h2>Nouveau message depuis le site</h2>" +
    `<p><strong>Nom:</strong> ${escapeHtml(name)}</p>` +
    `<p><strong>Téléphone:</strong> ${escapeHtml(phone)}</p>` +
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
    `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` +
    `<p><strong>Message:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>` +
    "</div>";

  // Prefer API if both are configured.
  if (canUseApi) {
    const payload = {
      sender: { name: fromName, email: fromEmail },
      to: [{ email: toEmail, name: "HBM ALU" }],
      replyTo: { email, name },
      subject,
      htmlContent: html,
    };

    try {
      const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify(payload),
      });

      const text = await resp.text();
      if (!resp.ok) {
        return json(res, 502, {
          ok: false,
          error: "brevo_error",
          status: resp.status,
          response: text,
        });
      }

      return json(res, 200, { ok: true });
    } catch {
      return json(res, 502, { ok: false, error: "fetch_error" });
    }
  }

  try {
    await sendViaSmtp({
      host: smtpHost,
      port: Number(smtpPort),
      user: smtpUser,
      pass: smtpKey,
      from: smtpFrom,
      to: toEmail,
      replyTo: `${name} <${email}>`,
      subject,
      html,
    });
    return json(res, 200, { ok: true });
  } catch {
    return json(res, 502, { ok: false, error: "smtp_error" });
  }
};
