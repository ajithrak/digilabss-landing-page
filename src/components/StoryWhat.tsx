import Reveal from "./Reveal";

const pillars = [
  {
    label: "Strategy",
    detail: "Offer, audience, and funnel mapped before a single dollar moves.",
  },
  {
    label: "Creative",
    detail: "Scroll-stopping ad creative produced and tested weekly.",
  },
  {
    label: "Media buying",
    detail: "Meta, Google, and TikTok budgets managed toward one number: profit.",
  },
];

export default function StoryWhat() {
  return (
    <section id="story" className="relative px-6 py-32 sm:py-40 lg:px-12">
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

        <div className="mt-20 grid gap-16 border-t border-border pt-16 sm:grid-cols-3 lg:gap-20 lg:pt-20">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.label} delay={i * 0.1}>
              <span className="text-xs text-muted">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-medium lg:text-2xl">{pillar.label}</h3>
              <p className="mt-2 text-muted lg:text-lg">{pillar.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
