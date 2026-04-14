# HBM ALU — Next.js Website

Production website for **HBM ALU**, migrated from a static template to **Next.js App Router** for:

- Faster navigation + smoother interactions
- A clean place for “logic layers” (e.g. contact form email sending)
- Built-in SEO primitives (per-page metadata, semantic headings)

## Routes

- `/` (Home)
- `/about`
- `/services`
- `/projects`
- `/contact`
- `POST /api/contact` (send contact form email)

## Key Files

- Global layout: `src/app/layout.js`
- Page routes: `src/app/*/page.js`
- API route: `src/app/api/contact/route.js`
- Static assets (CSS/JS/images/fonts): `public/`

## Run Locally

1. Install dependencies:
	- `npm install`
2. Create a local env file:
	- copy `.env.example` → `.env.local`
	- fill in your Brevo credentials
3. Start dev server:
	- `npm run dev`
4. Open:
	- http://localhost:3000

Important: don’t open pages via `file://...` (browser will block API calls).

## Environment Variables (Brevo)

The contact form can send email using **either** Brevo HTTP API or SMTP.

Required (both options):

- `BREVO_TO_EMAIL`

Option A (recommended): Brevo HTTP API

- `BREVO_API_KEY`
- `BREVO_FROM_EMAIL`
- `BREVO_FROM_NAME` (optional)

Option B: Brevo SMTP

- `SMTP_HOST` (usually `smtp-relay.brevo.com`)
- `SMTP_PORT` (usually `587`)
- `BREVO_SMTP_USER`
- `BREVO_SMTP_KEY`
- `SMTP_FROM`

## Deploy

Deploy to Vercel as a standard Next.js project, and set the same environment variables in:
Vercel → Project Settings → Environment Variables.
