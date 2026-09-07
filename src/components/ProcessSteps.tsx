import Reveal from "./Reveal";

const steps = [
  {
    step: "01",
    title: "Audit",
    detail: "We map your current funnel, spend, and creative to find the real bottleneck.",
  },
  {
    step: "02",
    title: "Build",
    detail: "Offer, tracking, and creative system go live inside the first two weeks.",
  },
  {
    step: "03",
    title: "Scale",
    detail: "Winning angles get budget. Losing ones get cut. Weekly, not quarterly.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative px-6 py-32 sm:py-40 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            How to start
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Three steps between now and your first winning campaign.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border sm:block" />
          <div className="grid gap-12 sm:grid-cols-3 lg:gap-20">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.12}>
                <div className="relative">
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-sm text-muted">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-medium lg:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-muted lg:text-lg">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
