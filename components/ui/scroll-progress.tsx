"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin teal line at the top of the viewport that tracks page scroll.
 * Minimal, premium, zero layout cost.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-[var(--color-cta)]"
    />
  );
}
