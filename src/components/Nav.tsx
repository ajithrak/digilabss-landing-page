"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          Digilabss
        </a>
        <a
          href="#book-a-call"
          className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/90 transition hover:border-accent-a/60 hover:text-white"
        >
          Book a call
        </a>
      </div>
    </motion.header>
  );
}
