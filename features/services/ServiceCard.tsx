"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PaintRoller, Paintbrush, Building2, Sparkles, Droplets, ArrowUpRight } from "lucide-react";
import type { Service } from "@/types/domain";

const icons = {
  "paint-roller": PaintRoller,
  brush: Paintbrush,
  building: Building2,
  sparkles: Sparkles,
  droplets: Droplets,
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.icon];
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-cta)] hover:shadow-lg"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={service.cover.src}
          alt={service.cover.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        />
        <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-bg)]/90 backdrop-blur">
          <Icon className="h-5 w-5 text-[var(--color-ink)]" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
            {service.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 flex-none text-[var(--color-ink)]/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-[var(--color-cta)]" />
        </div>
        <p className="text-sm leading-relaxed text-[var(--color-ink)]/70">{service.summary}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          {service.startingPrice && (
            <span className="inline-flex items-center rounded-full bg-[var(--color-sand)]/40 px-3 py-1 text-[12px] font-medium text-[var(--color-ink)]">
              from ₹{service.startingPrice.amount} / {service.startingPrice.unit}
            </span>
          )}
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)]/40">
            {service.features.length} inclusions
          </span>
        </div>
      </div>
    </motion.article>
  );
}
