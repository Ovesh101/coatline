"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, FileText, PaintRoller, CheckCircle2 } from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { processSteps } from "@/data/process";
import type { ProcessStep } from "@/types/domain";

const iconMap: Record<ProcessStep["icon"], React.ComponentType<{ className?: string }>> = {
  phone: Phone,
  file: FileText,
  "paint-roller": PaintRoller,
  check: CheckCircle2,
};

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Process() {
  const ref = useRef<HTMLDivElement>(null);

  // scrollYProgress: 0 when section enters viewport, 1 when it leaves.
  // Clamp so we can safely feed its values into width/height animations.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 50%"],
  });
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="process">
      <Container>
        <div className="mb-12 max-w-2xl md:mb-16">
          <Eyebrow>How it works</Eyebrow>
          <h2
            className="mt-3 text-balance font-display font-bold tracking-tight text-[var(--color-ink)]"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.04 }}
          >
            Four steps, zero surprises.
          </h2>
        </div>

        <div ref={ref}>
          {/* ── Desktop ── horizontal, scroll-filled rail */}
          <div className="relative hidden grid-cols-4 gap-6 md:grid">
            {/* rail */}
            <div
              className="pointer-events-none absolute top-6 h-[2px] rounded-full bg-[var(--color-ink)]/10"
              style={{ left: "1.5rem", right: "1.5rem" }}
              aria-hidden
            >
              {/* dashed base */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, var(--color-ink) 0 6px, transparent 6px 14px)",
                  opacity: 0.12,
                }}
              />
              {/* solid teal fill, driven by scroll */}
              <motion.div
                style={{ width: fillWidth }}
                className="absolute inset-y-0 left-0 origin-left rounded-full bg-[var(--color-cta)]"
              />
            </div>

            {processSteps.map((s, i) => (
              <ProcessStepCard key={s.slug} step={s} index={i} total={processSteps.length} />
            ))}
          </div>

          {/* ── Mobile ── vertical, scroll-filled rail */}
          <ol className="relative md:hidden">
            <div
              className="pointer-events-none absolute left-[23px] top-3 bottom-3 w-[2px] overflow-hidden rounded-full bg-[var(--color-ink)]/10"
              aria-hidden
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, var(--color-ink) 0 6px, transparent 6px 12px)",
                  opacity: 0.12,
                }}
              />
              <motion.div
                style={{ height: fillHeight }}
                className="absolute inset-x-0 top-0 origin-top rounded-full bg-[var(--color-cta)]"
              />
            </div>

            {processSteps.map((s, i) => (
              <MobileProcessStep key={s.slug} step={s} index={i} />
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

function ProcessStepCard({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
  total: number;
}) {
  const Icon = iconMap[step.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      className="relative"
    >
      <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-cta)] text-white shadow-md shadow-[var(--color-cta)]/20 ring-4 ring-[var(--color-bg)]">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]/50">
        Step {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-1.5 font-display text-2xl font-semibold text-[var(--color-ink)]">
        {step.title}
      </h3>
      <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-[var(--color-ink)]/70">
        {step.body}
      </p>
    </motion.div>
  );
}

function MobileProcessStep({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = iconMap[step.icon];
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.08, ease }}
      className="relative flex gap-5 pb-8 last:pb-0"
    >
      <div className="relative z-10 flex-none">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-cta)] text-white shadow-md shadow-[var(--color-cta)]/25 ring-4 ring-[var(--color-bg)]">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="pt-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]/50">
          Step {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-[var(--color-ink)]">
          {step.title}
        </h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-ink)]/70">
          {step.body}
        </p>
      </div>
    </motion.li>
  );
}
