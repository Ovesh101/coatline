"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function ServicesHero() {
  return (
    <Section className="page-top !pb-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <Eyebrow>Services</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mt-4 text-balance font-display font-bold tracking-tight text-[var(--color-ink)]"
              style={{ fontSize: "clamp(40px, 7vw, 92px)", lineHeight: 0.98 }}
            >
              Five services.{" "}
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
              transition={{ duration: 0.6, ease, delay: 0.25 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-ink)]/75"
            >
              Our own crew. Our own tools. One supervisor on your project from start to
              finish. Every job gets a written quote with the final number — and that
              quote is always free.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <a href="/contact">
                  Get a free quote <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#list">Browse services</a>
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
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=85"
                alt="Painter applying a fresh coat to a modern interior"
                fill
                priority
                className="object-cover"
                sizes="(min-width:768px) 40vw, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
