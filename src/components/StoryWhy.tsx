"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function StoryWhy() {
  return (
    <section className="relative overflow-hidden px-6 py-32 sm:py-40">
      <div className="mx-auto grid max-w-5xl items-center gap-16 sm:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Why it matters
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Most agencies optimize channels. We optimize the business.
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted">
            Split strategy, creative, and buying across three vendors and
            everyone hits their own KPI while the P&amp;L stalls. We run all
            three as one loop, so every test feeds the next decision.
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square w-full max-w-sm justify-self-center rounded-[2rem] border border-border p-1"
        >
          <div
            className="flex h-full w-full flex-col justify-between rounded-[1.75rem] p-8"
            style={{
              background:
                "linear-gradient(155deg, rgba(41,151,255,0.18), rgba(124,92,255,0.12) 55%, rgba(255,107,157,0.14))",
            }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Blended CAC
            </span>
            <div>
              <span className="text-6xl font-semibold tracking-tight">-38%</span>
              <p className="mt-2 text-sm text-muted">
                Average cost-per-acquisition drop across active clients,
                first 90 days.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
