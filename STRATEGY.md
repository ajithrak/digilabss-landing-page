# Strategy Note

The brief for an Apple-style page is really a brief about subtraction. Apple's product
pages work because every section answers exactly one question before moving on — so the
first cut was structural: instead of separate "About / Services / Testimonials / Contact"
blocks, the page is one continuous argument — what we do, why it's different, proof it
works, how to start — each section a single screen-height beat rather than a sub-page.

Copy was the biggest casualty, deliberately. Every section header is one sentence, every
supporting line is one sentence, and detail that would normally become a paragraph became
either a number (the stats strip), a labeled pillar (the three-pillar grid), or a step
(the process timeline). If a sentence needed a "for example," it was cut rather than
expanded, since a live demo/testimonial page in a 4-day screening scope adds cost without
adding taste.

Visuals were built rather than sourced. Real video and photography would have carried the
most weight per Apple's playbook, but stock footage reads as generic and heavy video hurts
the mobile PageSpeed budget this brief also asks for — so motion carries the premium feel
instead: staggered hero entrance, scroll-triggered reveals per section, a soft animated
gradient field behind the hero, and a count-up on the stats strip. These are all
CSS/transform-driven or short-lived JS animations with no image or video decode cost.

Performance stayed non-negotiable by treating it as a design constraint, not a final pass.
There is no hero video, no external image requests, and no icon library — just gradients,
typography, and framer-motion's `whileInView` (which unmounts offscreen animation work).
Fonts are self-hosted via `next/font`, and the only client JS on the page is what animates
or validates the form.

The lead form and floating CTA carry the entire second half of the classic Apple page
(specs, pricing, "buy") condensed into one ask: book a call, with budget range doing the
qualifying work a longer form would otherwise do.
