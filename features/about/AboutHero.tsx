"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function AboutHero() {
  return (
    <Section className="page-top !pb-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <Eyebrow>About {site.name}</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mt-4 text-balance font-display font-bold tracking-tight text-[var(--color-ink)]"
              style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.95 }}
            >
              Painted by hand, for{" "}
              <span className="relative inline-block whitespace-nowrap">
                thirty years.
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
              transition={{ duration: 0.6, ease, delay: 0.25 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-ink)]/80"
            >
              Akil Mulla started Coatline in 1995 in Nani Daman with three painters. Thirty
              years on, he still runs the business. Same hands-on approach, bigger crew, more
              than 500 homes and offices done.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.35 }}
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink)]/70"
            >
              We don&apos;t sub-contract. Our own crew does the work. One supervisor stays with
              you from the first visit till the last wall is checked. That&apos;s the simple
              promise.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <a href="/contact">Get a free quote</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="/services">See what we do</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
                alt="Painter at work on a modern wall"
                fill
                priority
                className="object-cover"
                sizes="(min-width:768px) 40vw, 100vw"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-[var(--color-bg)]/95 p-4 backdrop-blur">
                <p className="font-display text-sm font-semibold text-[var(--color-ink)]">
                  Family-run contractor since 1995
                </p>
                <p className="mt-0.5 text-xs text-[var(--color-ink)]/70">
                  Nani Daman · Crew of 8 · Daman, Vapi & Silvassa
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
