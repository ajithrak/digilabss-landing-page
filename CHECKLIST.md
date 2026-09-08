# Assignment Checklist — Digilabss Landing Page Developer

Based on `Digilabss_Landing_Page_Developer_Assignment.pdf`. Legend: ✅ done · ⚠️ partial / needs attention · ❌ not started.

## 1. Design Direction

- ✅ Lead with visuals, not paragraphs — sections are one headline + one line + visual/motion (no dense text blocks)
- ✅ Large, confident typography and generous white space
- ⚠️ Animated/video-based hero that sets the tone — hero is animated (staggered entrance + gradient background), but there's no actual video; a deliberate design choice ([STRATEGY.md](./STRATEGY.md)) to keep it fast, not literally what the brief describes
- ✅ Scroll-triggered reveals (sections/stats animate in, not all at once)
- ✅ Subtle animated background element (drifting gradient orbs, CSS-driven)
- ✅ Full service story condensed into one continuous page (no separate "pages"/blocks)
- ✅ Persistent, unobtrusive "Book a Call" (floating sticky CTA, appears after hero)

## 2. Tech Stack

- ✅ Built with Next.js (App Router) + Tailwind CSS
- ✅ Framer Motion for scroll-based animation, 3+ distinct motion moments:
  - Hero entrance (staggered fade/slide)
  - Scroll-triggered reveals per section + stats count-up
  - Background gradient drift + hover/tap micro-interactions (sticky CTA, "why" visual card)

## 3. Functionality

- ✅ Working "Book a Call" lead form (name, email, company, budget range) with client-side validation
- ✅ Dummy CRM integration — `/api/lead` validates server-side, logs every submission, and appends to a local file; verified end-to-end with a real test submission
  - ⚠️ Brief also mentions "or Google Sheet" — form supports forwarding to a webhook URL (`LEAD_WEBHOOK_URL`, e.g. a Google Apps Script Sheet endpoint) but this hasn't been wired to an actual live Sheet
- ✅ Basic tracking scaffolding — GTM container injection + mock GA4 (`generate_lead` dataLayer event) + mock Meta Pixel call on form submit, confirmed firing in testing
  - ⚠️ No real GTM/GA4/Pixel IDs are configured yet (env vars are empty by default) — needs real container IDs before it's live-trackable

## 4. Performance and Responsiveness

- ⚠️ Buttery-smooth scrolling, no jank/layout shift — not formally measured (no Lighthouse CLS run), but there are no images/video to cause shift, and fonts load via `next/font` (no FOUT-driven reflow)
- ❌ Google PageSpeed Insights ≥ 85 on mobile — **could not run**: the public PSI API's unauthenticated quota is exhausted (`429 rateLimitExceeded`, a shared daily quota unrelated to this project) and retrying didn't help. Needs to be run manually — see note below.
- ⚠️ Core Web Vitals (LCP, CLS, INP) in the "good" range — not measured via Lighthouse, but real lab signals from the deployed site's own Performance API are healthy: TTFB ~20ms, DOMContentLoaded ~70ms, full load ~120ms, ~665KB total decoded payload (no images/video at all). These are unthrottled numbers, not the throttled slow-4G/mid-tier-CPU conditions PageSpeed mobile actually tests against, so they're a good sign but not a substitute for the real score.
- ✅ Lazy loading / compressed media / optimized video — satisfied by having no heavy media to begin with (gradients/typography/motion only); would need revisiting if real photography/video is added later

**Action needed from you:** open [pagespeed.web.dev](https://pagespeed.web.dev/) and run it against `https://digilabss-landing-page-tawny.vercel.app/` (mobile tab). Paste the score back here and I'll fix anything under 85.

## 5. Strategy Note

- ✅ 200–300 word write-up in [STRATEGY.md](./STRATEGY.md) covering what was cut, what became visual, and how performance was kept in mind

## 6. Deployment

- ✅ Deployed live on Vercel: **https://digilabss-landing-page-tawny.vercel.app/** — verified loading correctly, no console errors
- ✅ Live link and GitHub repo both shareable — [github.com/ajithrak/digilabss-landing-page](https://github.com/ajithrak/digilabss-landing-page)

---

## Net summary

**Solidly done (10 of ~17 line items):** design direction, motion/animation requirements, lead form + dummy CRM, mock tracking, strategy note, GitHub repo, and now deployment.

**Still open before this can be submitted:**
1. Run an actual PageSpeed Insights mobile score against the live URL (blocked on my end by API quota — needs you to run it manually, link above) and fix anything under 85
2. Decide whether to wire the form to a real Google Sheet (or leave the dummy CRM as-is — likely fine for a screening task)
3. Drop in real GTM/GA4/Meta Pixel IDs if you want tracking to actually report somewhere live
