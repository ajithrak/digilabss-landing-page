import Reveal from "./Reveal";

const pillars = [
  {
    label: "Strategy",
    detail: "Offer, audience, and funnel mapped before a single dollar moves.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Creative",
    detail: "Scroll-stopping ad creative produced and tested weekly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Media buying",
    detail: "Meta, Google, and TikTok budgets managed toward one number: profit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path d="M4 19V10M11 19V5M18 19v-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 19h16" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function StoryWhat() {
  return (
    <section id="story" className="relative px-6 py-8 sm:py-14 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            What we do
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            One team running the entire paid growth engine, end to end.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 pt-4 sm:mt-20 sm:grid-cols-3 sm:pt-8 lg:mt-20 lg:gap-20">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.label} delay={i * 0.1}>
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-foreground"
                style={{
                  background:
                    "linear-gradient(155deg, rgba(41,151,255,0.22), rgba(124,92,255,0.16) 55%, rgba(255,107,157,0.18))",
                }}
              >
                {pillar.icon}
              </div>
              <h3 className="mt-4 text-xl font-medium lg:text-2xl">{pillar.label}</h3>
              <p className="mt-2 text-muted lg:text-lg">{pillar.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
