"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { ServiceCard } from "./ServiceCard";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function ServicesGrid() {
  return (
    <Section id="services">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Services</Eyebrow>
            <h2
              className="mt-3 max-w-xl font-display font-bold tracking-tight text-[var(--color-ink)]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Every wall. Same care.
            </h2>
          </div>
          <p className="max-w-sm text-[var(--color-ink)]/70">
            Homes, shops, offices, and specialty finishes. Every job gets a free written
            quote — no guesswork, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}

          {/* 6th tile — fills the grid, strong CTA */}
          <motion.a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I have a specific requirement I'd like to discuss.")}`}
            target="_blank"
            rel="noopener"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: Math.min(services.length, 3) * 0.06, ease }}
            className="group relative flex h-full transform-gpu flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-[var(--color-ink)]/15 bg-[var(--color-sand)]/25 p-8 transition duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:border-[var(--color-cta)] hover:bg-[var(--color-cta)]/8 hover:shadow-[0_24px_48px_-20px_rgba(14,26,43,0.22)]"
          >
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-cta)] text-white shadow-sm">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-[var(--color-ink)]">
                Something else?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]/70">
                Custom finish, big project, tight deadline — WhatsApp us and we&apos;ll sort it out.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-[var(--color-cta)]">
              Chat on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.a>
        </div>
      </Container>
    </Section>
  );
}
