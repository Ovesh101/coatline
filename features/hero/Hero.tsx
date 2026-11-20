"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaintedEdge } from "./PaintedEdge";
import { SocialProofPill } from "./SocialProofPill";
import { FloatingTeamCard } from "./FloatingTeamCard";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="mx-auto grid grid-cols-1 items-stretch gap-10 px-5 pt-6 pb-24 md:min-h-[82dvh] md:grid-cols-12 md:gap-16 md:px-10 md:pt-12 md:pb-32"
        style={{ maxWidth: "var(--container-max)" }}
      >
        {/* LEFT */}
        <div className="relative z-10 flex flex-col justify-center md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="text-balance font-display font-bold tracking-[-0.03em] text-[var(--color-ink)]"
            style={{
              fontSize: "clamp(40px, 8.5vw, 120px)",
              lineHeight: 0.98,
            }}
          >
            A fresh coat. A whole new{" "}
            <span className="relative inline-block whitespace-nowrap">
              feeling.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.6, ease }}
                className="absolute -bottom-1.5 left-0 h-[5px] w-full origin-left rounded-full"
                style={{ background: "var(--color-cta)" }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--color-ink)]/70 md:mt-8 md:text-[17px]"
          >
            Painting contractor in Daman since 1995. We bring our own crew, our own tools, and
            a written quote with the final price before we start. Homes, shops and offices
            across Daman, Vapi and Silvassa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 md:gap-5"
          >
            <SocialProofPill />
            <Button asChild size="lg">
              <a href="/contact">
                Get Started <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 1 }}
            className="mt-10 flex items-start gap-3 text-[13px] leading-snug text-[var(--color-ink)]/60"
          >
            <span
              className="relative mt-1 inline-flex h-2 w-2 flex-none items-center justify-center"
              aria-hidden
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-cta)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-cta)]" />
            </span>
            <span className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
              <span>Painting contractor since 1995</span>
              <span className="hidden sm:inline" aria-hidden>
                ·
              </span>
              <span>Serving Daman, Vapi &amp; Silvassa</span>
            </span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="relative aspect-[4/5] h-full w-full overflow-hidden rounded-2xl md:aspect-[3/4] md:min-h-[520px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=85"
              alt="Painter applying a fresh coat to a modern interior wall"
              fill
              priority
              className="object-cover"
              sizes="(min-width:768px) 42vw, 100vw"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
            />
          </motion.div>
          <FloatingTeamCard />
        </div>
      </div>

      {/* Painted edge bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.5 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[80px] md:h-[120px]"
      >
        <PaintedEdge className="h-full w-full" />
      </motion.div>

    </section>
  );
}
