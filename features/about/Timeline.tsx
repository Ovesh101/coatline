"use client";

import { motion } from "framer-motion";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { milestones } from "@/data/timeline";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Timeline() {
  return (
    <Section tone="sand">
      <Container>
        <div className="mb-14 max-w-xl">
          <Eyebrow>Timeline</Eyebrow>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-[var(--color-ink)]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            Thirty years, five chapters.
          </h2>
        </div>

        <ol className="relative mx-auto max-w-3xl">
          <span
            aria-hidden
            className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--color-ink)]/20 md:left-[121px]"
          />
          {milestones.map((m, i) => (
            <motion.li
              key={m.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              className="relative flex gap-6 pb-10 pl-10 md:pl-[160px]"
            >
              <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center md:left-[108px]">
                <span className="absolute inset-0 rounded-full bg-[var(--color-cta)]/20" />
                <span className="relative h-3 w-3 rounded-full bg-[var(--color-cta)] ring-4 ring-[var(--color-sand)]/70" />
              </span>
              <div className="hidden md:block absolute left-0 top-0 w-[88px] font-display text-lg font-bold text-[var(--color-ink)]">
                {m.year}
              </div>
              <div>
                <p className="font-display text-sm font-bold text-[var(--color-cta)] md:hidden">
                  {m.year}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-[var(--color-ink)] md:mt-0">
                  {m.title}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink)]/75">
                  {m.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
