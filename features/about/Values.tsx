"use client";

import { motion } from "framer-motion";
import { FileCheck, Hammer, Shield } from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { values } from "@/data/values";
import type { Value } from "@/types/domain";

const iconMap: Record<Value["icon"], React.ComponentType<{ className?: string }>> = {
  "file-check": FileCheck,
  hammer: Hammer,
  shield: Shield,
};

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Values() {
  return (
    <Section>
      <Container>
        <div className="mb-14 max-w-xl">
          <Eyebrow>Our values</Eyebrow>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-[var(--color-ink)]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            Three things we won&apos;t compromise on.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((v, i) => {
            const Icon = iconMap[v.icon];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 transition-all hover:-translate-y-1 hover:border-[var(--color-cta)] hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-cta)]/12 text-[var(--color-cta)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-6 font-display text-xs font-semibold tracking-[0.2em] text-[var(--color-ink)]/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-ink)]">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]/70">
                  {v.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
