"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const heroHeight = window.innerHeight;
      const nearBottom =
        window.innerHeight + window.scrollY >
        document.body.scrollHeight - 400;
      setVisible(window.scrollY > heroHeight * 0.6 && !nearBottom);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#book-a-call"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
        >
          Book a call
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
