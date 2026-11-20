"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "./BeforeAfter";
import { formatMonthYear } from "@/lib/utils/format";
import { getServiceTitle } from "@/lib/utils/services";
import type { Project } from "@/types/domain";

const ease = [0.2, 0.8, 0.2, 1] as const;

/**
 * Single project row with before/after slider + copy block.
 * Alternates image side on odd indices. Used on home teaser + /work index.
 */
export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease }}
      className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 ${
        flipped ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div className="md:col-span-8">
        <BeforeAfter before={project.before} after={project.after} />
      </div>
      <div className="md:col-span-4">
        <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)] md:text-3xl">
          {project.title}
        </h3>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--color-ink)]/60">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {project.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" /> {formatMonthYear(project.completedAt)}
          </span>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink)]/80">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.services.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[var(--color-ink)]/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-ink)]/70"
            >
              {getServiceTitle(s)}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="md">
            <Link href={`/work/${project.slug}`}>
              View project <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="md" variant="ghost">
            <Link href="/contact">Get a quote</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
