"use client";

import { motion } from "framer-motion";
import { Container, Eyebrow } from "@/components/ui/section";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function ProjectsHero({ count }: { count: number }) {
  return (
    <section className="page-top pb-10 md:pb-16">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Our work</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mt-4 text-balance font-display font-bold tracking-tight text-[var(--color-ink)]"
            style={{ fontSize: "clamp(40px, 7vw, 92px)", lineHeight: 0.98 }}
          >
            {count} projects.{" "}
            <span className="relative inline-block whitespace-nowrap">
              One standard.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease }}
                className="absolute -bottom-1.5 left-0 h-[5px] w-full origin-left rounded-full"
                style={{ background: "var(--color-cta)" }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-ink)]/75"
          >
            Homes, bungalows, shops and offices across Daman, Vapi and Silvassa.
            Tap any project to see the full story, before-and-after, and
            exactly which materials we used.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
