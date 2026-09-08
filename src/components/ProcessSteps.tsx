import Reveal from "./Reveal";

const steps = [
  {
    step: "Step 01",
    title: "Audit",
    detail: "We map your current funnel, spend, and creative to find the real bottleneck.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.9-4.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "Step 02",
    title: "Build",
    detail: "Offer, tracking, and creative system go live inside the first two weeks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3-3.3 3.3z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "Step 03",
    title: "Scale",
    detail: "Winning angles get budget. Losing ones get cut. Weekly, not quarterly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path d="M4 16l5-5 4 4 7-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 8h5v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative px-6 py-8 sm:py-14 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            How to start
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Three steps between now and your first winning campaign.
          </h2>
        </Reveal>

        <div className="relative mt-12 sm:mt-20">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border sm:block" />
          <div className="grid gap-12 sm:grid-cols-3 lg:gap-20">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.12}>
                <div className="relative">
                  <div
                    className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full text-foreground"
                    style={{
                      background:
                        "linear-gradient(155deg, rgba(41,151,255,0.22), rgba(124,92,255,0.16) 55%, rgba(255,107,157,0.18))",
                    }}
                  >
                    {s.icon}
                  </div>
                  <span className="text-xs text-muted">{s.step}</span>
                  <h3 className="mt-1 text-xl font-medium lg:text-2xl">{s.title}</h3>
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
