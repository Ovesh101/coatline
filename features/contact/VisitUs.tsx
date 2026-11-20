"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function VisitUs() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Eyebrow>Visit us</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease }}
              className="mt-4 font-display font-semibold tracking-tight text-[var(--color-ink)]"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
            >
              Based in Nani Daman — a short drive from anywhere in town.
            </motion.h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-ink)]/70">
              Our workshop and crew are based in Nani Daman. We travel across
              Daman, Vapi and Silvassa every day. Drop by to see finish samples
              in person, or send us a WhatsApp — whichever is easier.
            </p>

            <address className="mt-8 not-italic">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--color-cta)]/12 text-[var(--color-cta)]">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-[var(--color-ink)]">
                    {site.address.street}
                  </p>
                  <p className="text-sm text-[var(--color-ink)]/70">
                    {site.address.city}, {site.address.region} {site.address.postal}
                  </p>
                </div>
              </div>
            </address>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="md">
                <a href={site.mapDirectionsUrl} target="_blank" rel="noopener">
                  <Navigation className="h-4 w-4" /> Get directions
                </a>
              </Button>
              <Button asChild size="md" variant="ghost">
                <a href={`tel:${site.phoneRaw}`}>
                  <Phone className="h-4 w-4" /> Call before you come
                </a>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="md:col-span-7"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-sm md:aspect-[16/11]">
              <iframe
                src={site.mapEmbedSrc}
                title={`${site.name} on Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
              <a
                href={site.mapDirectionsUrl}
                target="_blank"
                rel="noopener"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-xs font-semibold text-[var(--color-bg)] shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="h-3.5 w-3.5" />
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
