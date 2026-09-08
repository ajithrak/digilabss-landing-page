# Assignment Checklist — Digilabss Landing Page Developer

Based on `Digilabss_Landing_Page_Developer_Assignment.pdf`. Legend: ✅ done · ⚠️ partial / needs attention · ❌ not started.

## 1. Design Direction

- ✅ Large-screen content width: content was fixed at `max-w-6xl` (1152px) for every screen ≥1024px, so its share of the viewport dropped from 80% at 1440px down to just 60% at 1920px and kept shrinking on bigger monitors. Replaced with a fluid `min(96rem, 90vw)` formula active from 1280px up, capped at 1536px so ultrawide monitors don't get unreadably long lines. Verified on the real rendered page: 1920px now renders at 1536px (80%, up from 60%), with zero dip at the 1280px handoff (1152px on both sides) and no change in the 1024–1279px range (was already viewport-bound). Also capped the lead form's own width (`max-w-md`) so its inputs don't stretch full-width on huge screens.
- ✅ Hero "SCROLL" cue: originally absolute-positioned at `bottom-8` regardless of hero content height — on short/landscape viewports the vertically-centered CTA row sat close enough to the bottom to visually collide with it (button and link text overlapping the SCROLL label). First hid it below `sm:`, but that didn't cover short-but-wide viewports where `sm:` is still active. Removed it entirely rather than keep patching collision cases — it was decorative only, no functional loss.
- ✅ Lead with visuals, not paragraphs — *revised*: "What we do" and "How to start" were originally plain numbered text lists (01/02/03 + headline + line) with no visual lead-in, which didn't actually satisfy this. Replaced the bare numbers with gradient icon badges (target/spark/chart-bars for the pillars, magnifier/wrench/trend-line for the steps) so each item now leads with a glyph before the text.
- ✅ Large, confident typography and generous white space — *revised twice*: mobile spacing was originally too generous (unconditional `py-32`/`py-40` on every section, plus a floating "SCROLL" cue alone in empty hero space). First pass shrank the hero (`min-h-screen` → `85vh` on mobile, hero 812px → 690px) and hid the SCROLL cue below `sm:`, but only halved each section's own padding — missed that **adjacent sections' padding stacks at every seam** (bottom-padding + next section's top-padding), so the real gap was still double. Measured on the live site: seams were 128px (16% of a 375×812 viewport) at 4 of 5 boundaries. Second pass halved the base padding again; re-measured after: **mobile seams now 64–96px (8–12%)**, tablet 56–112px (5–11%), desktop 80–160px (9–18%, intentionally roomier given the extra screen space).
- ⚠️ Animated/video-based hero that sets the tone — hero is animated (staggered entrance + gradient background), but there's no actual video; a deliberate design choice ([STRATEGY.md](./STRATEGY.md)) to keep it fast, not literally what the brief describes
- ✅ Scroll-triggered reveals (sections/stats animate in, not all at once)
- ✅ Subtle animated background element (drifting gradient orbs, CSS-driven) — *revised*: was originally confined to the hero only (`absolute`, hero-scoped), so every section after it sat on flat black. Moved to page-level and `fixed` so the same subtle motion is visible behind the whole page, not just the top.
- ✅ Full service story condensed into one continuous page — *revised*: technically one page, but read as visually separate boxed sections (a full-width `border-y` on the stats strip was the clearest seam). Removed that border and unified the background per above so sections now blend into one continuous scroll instead of stacked blocks.
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
- ✅ Google PageSpeed Insights ≥ 85 on mobile — **ran it via pagespeed.web.dev (real Lighthouse audit, not the rate-limited public API): Performance = 97/100 on mobile**, well above the 85 target. Also 100/100 on desktop. Re-checked after the visual-continuity fixes (fixed background, icon badges): 96/100. Re-checked again after the seam-gap spacing fix: back to **97/100** — no regression across either round of changes.
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
