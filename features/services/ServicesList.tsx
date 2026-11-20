"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { site } from "@/data/site";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function ServicesList() {
  return (
    <Section id="list" className="!pt-0">
      <Container>
        <div className="flex flex-col gap-10">
          {services.map((s, i) => {
            const flipped = i % 2 === 1;
            return (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease }}
                className="group grid transform-gpu grid-cols-1 overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-sm transition duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-[var(--color-cta)]/50 hover:shadow-[0_24px_48px_-20px_rgba(14,26,43,0.22)] md:grid-cols-12"
              >
                <div
                  className={`relative aspect-[5/4] overflow-hidden md:aspect-auto md:col-span-5 ${
                    flipped ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={s.cover.src}
                    alt={s.cover.alt}
                    fill
                    className="transform-gpu object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(min-width:768px) 42vw, 100vw"
                  />
                  <div className="absolute left-5 top-5 inline-flex h-11 items-center gap-2 rounded-full bg-[var(--color-bg)]/95 px-4 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cta)]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)]">
                      {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-5 p-6 md:col-span-7 md:p-14">
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h2 className="min-w-0 font-display text-[28px] font-semibold leading-tight text-[var(--color-ink)] sm:text-3xl md:text-5xl md:leading-[1.02]">
                      {s.title}
                    </h2>
                    <span className="inline-flex flex-none items-center whitespace-nowrap rounded-full bg-[var(--color-sand)]/50 px-3 py-1 text-[13px] font-medium text-[var(--color-ink)] sm:px-4 sm:py-1.5 sm:text-sm">
                      Free written quote
                    </span>
                  </div>
                  <p className="max-w-xl text-[17px] leading-relaxed text-[var(--color-ink)]/75">
                    {s.summary}
                  </p>
                  <ul className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[15px] text-[var(--color-ink)]/85"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--color-cta)]/15 text-[var(--color-cta)]">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Button asChild size="md">
                      <a href="/contact">
                        Get a quote <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild size="md" variant="ghost">
                      <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi! I want a quote for ${s.title}.`)}`} target="_blank" rel="noopener">
                        Ask on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
