"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pt-24 pb-16 sm:min-h-screen sm:pt-20 sm:pb-0"
    >
      <AnimatedBackground />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-3xl flex-col items-center text-center lg:max-w-5xl"
      >
        <motion.span
          variants={item}
          className="mb-6 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted"
        >
          Paid acquisition, engineered
        </motion.span>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Growth that looks
          <br />
          <span className="gradient-text">effortless.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-lg text-muted sm:text-xl lg:max-w-2xl lg:text-2xl"
        >
          Digilabss plans, creates, and buys performance media for businesses
          across the US, UK, and beyond — one continuous system, not a bundle
          of tactics.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:mt-14"
        >
          <a
            href="#book-a-call"
            className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition hover:opacity-90 lg:px-8 lg:py-4 lg:text-base"
          >
            Book a call
          </a>
          <a
            href="#story"
            className="text-sm text-muted underline underline-offset-4 transition hover:text-foreground lg:text-base"
          >
            See how it works
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-xs tracking-[0.2em] text-muted sm:block"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
