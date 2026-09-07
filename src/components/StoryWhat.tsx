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
    <section id="story" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            What we do
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            One team running the entire paid growth engine, end to end.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 border-t border-border pt-16 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.label} delay={i * 0.1}>
              <span className="text-xs text-muted">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-medium">{pillar.label}</h3>
              <p className="mt-2 text-muted">{pillar.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
