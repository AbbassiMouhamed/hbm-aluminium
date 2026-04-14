# HBM ALU — Static Website

Modern, mobile-first static website for **HBM ALU** with:

- Mobile “app-style” bottom navigation
- Multilanguage UI (FR / EN / AR) with RTL support for Arabic
- Light/Dark theme toggle (persisted)
- Contact form that sends email via **Brevo Transactional Email** through a **Vercel Serverless Function**

> Note: The site is static, but the contact form requires a server-side endpoint to keep secrets private.

---

## Project Structure

- Pages: `index.html`, `about.html`, `services.html`, `projects.html`, `contact.html`
- Main modern styles: `css/hbm-modern.css`
- Main modern behavior (i18n, theme, contact submit): `js/hbm-modern.js`
- Email endpoint for Vercel: `api/contact.js` (POST `/api/contact`)

---

## Run Locally

### Option A (recommended): Run with Vercel Dev (supports `/api/contact`)

1. Install the Vercel CLI:
   - `npm i -g vercel`
2. From the project folder, start dev server:
   - `vercel dev`
3. Open the local URL printed by Vercel (typically `http://localhost:3000`).

### Option B: Simple static server (no API)

If you only want to preview the UI (contact sending won’t work without `/api/contact`):

- `npx serve .`

Avoid opening HTML files directly with `file://...` because browsers will block `fetch()` to local file URLs.

---

## Contact Form (Brevo)

The contact form posts to `/api/contact` (implemented by `api/contact.js`).

### Required environment variables

Set these in **Vercel Project → Settings → Environment Variables**.

You can use either:

**Option A (recommended): Brevo HTTP API**

- `BREVO_API_KEY`
- `BREVO_TO_EMAIL`
- `BREVO_FROM_EMAIL` (must be an allowed/verified sender in Brevo)
- `BREVO_FROM_NAME` (optional)

**Option B: Brevo SMTP**

- `BREVO_TO_EMAIL`
- `SMTP_HOST` (usually `smtp-relay.brevo.com`)
- `SMTP_PORT` (usually `587`)
- `BREVO_SMTP_USER`
- `BREVO_SMTP_KEY`
- `SMTP_FROM`

### `.env` for local development

A `.env.example` file exists in the repo with placeholder values.

For local testing with `vercel dev`, create your own `.env` (do not commit it) based on `.env.example`.

```bash
BREVO_API_KEY=your_real_brevo_api_key
BREVO_TO_EMAIL=contact@yourdomain.com
BREVO_FROM_EMAIL=no-reply@yourdomain.com
BREVO_FROM_NAME=HBM ALU Website
```

Security note: do not expose `.env` publicly.

---

## Deploy to Vercel

1. Push this repo to GitHub (or another git provider).
2. Import the project in Vercel.
3. Add the environment variables listed above.
4. Deploy.

After deployment, the form will POST to:

- `https://YOUR-DOMAIN.vercel.app/api/contact`

---

## Troubleshooting

### Contact form returns `server_not_configured`

- The env vars are missing in Vercel.
- Redeploy after adding env vars.

### Contact form returns `brevo_error`

- Check that `BREVO_FROM_EMAIL` is verified/allowed in Brevo.
- Confirm the API key is for Brevo Transactional Email.

### CORS / `origin 'null'` errors

- Don’t open pages via `file://...`.
- Use `vercel dev` or a local HTTP server.
