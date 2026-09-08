"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4.2, suffix: "x", label: "Average return on ad spend" },
  { value: 120, suffix: "+", label: "Active campaigns managed" },
  { value: 38, suffix: "M+", label: "Ad budget under management" },
  { value: 90, suffix: "d", label: "Median time to profitability" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        setDisplay(Number.isInteger(value) ? Math.round(v).toString() : v.toFixed(1));
      },
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative px-6 py-8 sm:py-12 lg:px-12 lg:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 sm:gap-y-12 sm:grid-cols-4 xl:max-w-[min(96rem,90vw)]"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 px-2 text-sm text-muted lg:text-base">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
