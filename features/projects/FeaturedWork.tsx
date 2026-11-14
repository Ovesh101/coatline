"use client";

import { motion } from "framer-motion";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { BeforeAfter } from "./BeforeAfter";
import { MapPin, Calendar } from "lucide-react";

const ease = [0.2, 0.8, 0.2, 1] as const;

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { month: "short", year: "numeric" });
}

export function FeaturedWork() {
  return (
    <Section id="work" tone="sand">
      <Container>
        <div className="mb-14 max-w-2xl">
          <Eyebrow>Recent work</Eyebrow>
          <h2
            className="mt-3 font-display font-bold tracking-tight text-[var(--color-ink)]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Drag to see the difference.
          </h2>
          <p className="mt-4 text-[var(--color-ink)]/70">
            A few projects from the last year. Pull the handle to compare the before and after.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease }}
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-8">
                <BeforeAfter before={p.before} after={p.after} />
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)] md:text-3xl">
                  {p.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--color-ink)]/60">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" /> {p.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> {formatDate(p.completedAt)}
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink)]/80">
                  {p.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[var(--color-ink)]/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-ink)]/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
