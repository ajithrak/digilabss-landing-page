# Digilabss — Landing Page

Apple-style one-page marketing site for Digilabss, a performance marketing
agency. Built for the Digilabss landing page developer hiring assignment.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion for scroll-triggered reveals and micro-interactions

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in as needed:

- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container ID. When set, the GTM
  snippet is injected in `src/app/layout.tsx` and a mock GA4 event
  (`generate_lead`) plus a mock Meta Pixel `track` call fire on lead form
  submit (see `src/lib/analytics.ts`).
- `LEAD_WEBHOOK_URL` — optional webhook (e.g. a Google Apps Script Web App
  bound to a Sheet) that `/api/lead` forwards every submission to.

## Lead capture

The "Book a call" form (`src/components/LeadForm.tsx`) does client-side
validation, then POSTs to `src/app/api/lead/route.ts`, which:

1. Validates the payload server-side.
2. Logs the lead (`console.log`) — visible in `npm run dev` output or your
   host's function logs.
3. Appends it to a local JSON-lines file for local verification.
4. Optionally forwards it to `LEAD_WEBHOOK_URL` if set.

## Deployment

Deploy to Vercel (recommended, zero-config for Next.js):

```bash
npx vercel
```

Or connect the GitHub repo directly in the Vercel dashboard for automatic
deploys on push to `main`.

## Strategy note

See [STRATEGY.md](./STRATEGY.md) for the write-up on how the full service
story was condensed into a single scroll while keeping the page fast.
