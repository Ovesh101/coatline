"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Quote,
  Ruler,
  Sparkles,
} from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "./BeforeAfter";
import { formatFullDate, formatIndianNumber } from "@/lib/utils/format";
import { getServiceTitle } from "@/lib/utils/services";
import type { Project } from "@/types/domain";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function ProjectDetail({ project }: { project: Project }) {
  const facts: { icon: React.ReactNode; label: string; value: string }[] = [
    { icon: <MapPin className="h-4 w-4" />, label: "Location", value: project.location },
    {
      icon: <Calendar className="h-4 w-4" />,
      label: "Completed",
      value: formatFullDate(project.completedAt),
    },
  ];
  if (project.durationDays) {
    facts.push({
      icon: <Clock className="h-4 w-4" />,
      label: "Duration",
      value: `${project.durationDays} days`,
    });
  }
  if (project.areaSqft) {
    facts.push({
      icon: <Ruler className="h-4 w-4" />,
      label: "Area",
      value: `${formatIndianNumber(project.areaSqft)} sqft`,
    });
  }

  return (
    <article className="page-top pb-20 md:pb-32">
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]/60 transition-colors hover:text-[var(--color-ink)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All work
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mt-6 max-w-3xl"
        >
          <Eyebrow>Project · {formatFullDate(project.completedAt)}</Eyebrow>
          <h1
            className="mt-4 text-balance font-display font-bold tracking-tight text-[var(--color-ink)]"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1 }}
          >
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink)]/75 md:text-[19px]">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[var(--color-ink)]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)]/70"
              >
                {getServiceTitle(s)}
              </span>
            ))}
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="mt-12"
        >
          <BeforeAfter before={project.before} after={project.after} />
          <p className="mt-3 text-center text-xs text-[var(--color-ink)]/50">
            Drag the handle to compare before and after
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8">
            {project.story && (
              <section>
                <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)] md:text-3xl">
                  The story
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-[var(--color-ink)]/80">
                  {project.story}
                </p>
              </section>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <section className="mt-16">
                <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)] md:text-3xl">
                  More of the space
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.gallery.map((img, i) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, ease, delay: Math.min(i, 3) * 0.08 }}
                      className={`relative overflow-hidden rounded-2xl border border-[var(--color-line)] ${
                        i === 0 ? "aspect-[4/5] sm:col-span-2 sm:aspect-[16/9]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        priority={i === 0}
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                        sizes="(min-width:1024px) 600px, (min-width:640px) 50vw, 100vw"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {project.testimonial && (
              <section className="mt-16 rounded-2xl bg-[var(--color-sand)]/35 p-8 md:p-10">
                <Quote className="h-7 w-7 text-[var(--color-cta)]" />
                <blockquote className="mt-4 font-display text-xl leading-relaxed text-[var(--color-ink)] md:text-2xl">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)]/60">
                  — {project.testimonial.author}
                </p>
              </section>
            )}
          </div>

          <aside className="md:col-span-4">
            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:sticky md:top-6">
              <h3 className="font-display text-base font-semibold text-[var(--color-ink)]">
                Project facts
              </h3>
              <dl className="mt-5 space-y-4">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--color-cta)]/12 text-[var(--color-cta)]">
                      {f.icon}
                    </span>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)]/50">
                        {f.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-medium text-[var(--color-ink)]">
                        {f.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              {project.materials && project.materials.length > 0 && (
                <div className="mt-8 border-t border-[var(--color-line)] pt-6">
                  <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)]/50">
                    <Sparkles className="h-3.5 w-3.5" /> Materials used
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink)]/80">
                    {project.materials.map((m) => (
                      <li key={m} className="flex gap-2 leading-snug">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--color-ink)]/40" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button asChild size="md" className="mt-8 w-full">
                <Link href="/contact">Get a quote like this</Link>
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
