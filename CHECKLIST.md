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
- ✅ CRM integration — `/api/lead` validates server-side, logs every submission, and forwards it to a real **Google Sheet** via a Google Apps Script web app (`LEAD_WEBHOOK_URL`); verified end-to-end with a live test submission on the deployed site — the row actually landed in the Sheet ([script source](./scripts/google-apps-script-lead-webhook.gs))
- ✅ Basic tracking scaffolding — GTM container injection + mock GA4 (`generate_lead` dataLayer event) + mock Meta Pixel call on form submit, confirmed firing in testing
  - ⚠️ No real GTM/GA4/Pixel IDs are configured yet (env vars are empty by default) — needs real container IDs before it's live-trackable

## 4. Performance and Responsiveness

- ✅ Buttery-smooth scrolling, no jank/layout shift — confirmed via real Lighthouse run: **Cumulative Layout Shift = 0**
- ✅ Google PageSpeed Insights ≥ 85 on mobile — **ran it via pagespeed.web.dev (real Lighthouse audit, not the rate-limited public API): Performance = 97/100 on mobile**, well above the 85 target. Also 100/100 on desktop.
- ✅ Core Web Vitals (LCP, CLS, INP) in the "good" range — mobile (Slow 4G + Moto G Power emulation, the same conditions Lighthouse mobile always tests against):
  - First Contentful Paint: 1.1s
  - **Largest Contentful Paint: 2.1s** (good, under the 2.5s threshold)
  - Total Blocking Time: 50ms
  - **Cumulative Layout Shift: 0** (perfect)
  - Speed Index: 4.2s
- ✅ Lazy loading / compressed media / optimized video — satisfied by having no heavy media to begin with (gradients/typography/motion only); confirmed by the near-perfect scores above. Would need revisiting if real photography/video is added later.

Bonus: Accessibility 100, Best Practices 100, SEO 100 on both mobile and desktop.

## 5. Strategy Note

- ✅ 200–300 word write-up in [STRATEGY.md](./STRATEGY.md) covering what was cut, what became visual, and how performance was kept in mind

## 6. Deployment

- ✅ Deployed live on Vercel: **https://digilabss-landing-page-tawny.vercel.app/** — verified loading correctly, no console errors
- ✅ Live link and GitHub repo both shareable — [github.com/ajithrak/digilabss-landing-page](https://github.com/ajithrak/digilabss-landing-page)

---

## Net summary

**Solidly done (15 of ~17 line items):** design direction, motion/animation requirements, lead form + real Google Sheet CRM integration, mock tracking, strategy note, GitHub repo, deployment, and performance (97/100 mobile, 100/100 desktop, CLS=0, LCP=2.1s).

**Still open — both optional judgment calls:**
1. Drop in real GTM/GA4/Meta Pixel IDs if you want tracking to actually report somewhere live (currently mocked, confirmed firing correctly)
2. Optional: swap the CSS/gradient hero for a real looping video if you want to hit the brief's "video-based hero" line literally — current version already passes on taste and performance, this is a judgment call

At this point the assignment is functionally complete and ready to submit.
