"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 88px)" }}
          className="group fixed left-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-bg)]/95 text-[var(--color-ink)] shadow-[0_10px_30px_-12px_rgba(14,26,43,0.3)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[var(--color-cta)] hover:text-[var(--color-cta)] md:!bottom-8 md:left-8 md:h-12 md:w-12"
        >
          <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
