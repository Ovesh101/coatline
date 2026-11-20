"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { site } from "@/data/site";

/**
 * Floating trust card over the hero image.
 * Text-only (no stock crew photo) — authenticity > prettiness.
 */
export function FloatingTeamCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 8 }}
      animate={{ opacity: 1, y: 0, rotate: 4 }}
      transition={{ delay: 0.9, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="pointer-events-none absolute right-5 bottom-24 z-10 w-[220px] md:right-10 md:bottom-36 md:w-[260px]"
    >
      <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 md:p-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--color-cta)]/12 text-[var(--color-cta)]">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-[22px] font-bold text-[var(--color-ink)] md:text-[24px]">
              {site.founderYears}+ years
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)]/55">
              on Daman walls
            </p>
          </div>
        </div>
        <p className="mt-3 text-[12px] leading-snug text-[var(--color-ink)]/70">
          Our own crew. No sub-contracting. Same hands, every project.
        </p>
      </div>
    </motion.div>
  );
}
