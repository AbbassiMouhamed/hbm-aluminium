export const runtime = "nodejs";

function json(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
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
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

async function sendViaSmtp({ host, port, user, pass, from, to, replyTo, subject, html }) {
  const nodemailer = await import("nodemailer");

  const transporter = nodemailer.default.createTransport({
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

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const name = String(body?.name || "").trim();
  const phone = String(body?.phone || "").trim();
  const email = String(body?.email || "").trim();
  const service = String(body?.service || "").trim();
  let message = String(body?.message || "").trim();

  if (!name || !phone || !email || !service) {
    return json(400, { ok: false, error: "missing_fields" });
  }
  if (!isValidEmail(email)) {
    return json(400, { ok: false, error: "invalid_email" });
  }
  if (message.length < 3) message = "(no message)";

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
  const canUseSmtp = Boolean(toEmail && smtpHost && smtpPort && smtpUser && smtpKey && smtpFrom);

  if (!canUseApi && !canUseSmtp) {
    return json(500, { ok: false, error: "server_not_configured" });
  }

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
        return json(502, {
          ok: false,
          error: "brevo_error",
          status: resp.status,
          response: text,
        });
      }

      return json(200, { ok: true });
    } catch {
      return json(502, { ok: false, error: "fetch_error" });
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
    return json(200, { ok: true });
  } catch {
    return json(502, { ok: false, error: "smtp_error" });
  }
}

export function GET() {
  return json(405, { ok: false, error: "method_not_allowed" });
}
