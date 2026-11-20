"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5500, stopOnInteraction: false })],
  );
  const [selected, setSelected] = useState(0);
  // Snap count comes from Embla, not testimonials.length — on desktop multiple
  // cards fit per view so Embla reports fewer snaps than items.
  const [snapCount, setSnapCount] = useState(testimonials.length);

  useEffect(() => {
    if (!embla) return;
    const sync = () => {
      setSelected(embla.selectedScrollSnap());
      setSnapCount(embla.scrollSnapList().length);
    };
    embla.on("select", sync);
    embla.on("reInit", sync);
    sync();
    return () => {
      embla.off("select", sync);
      embla.off("reInit", sync);
    };
  }, [embla]);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  return (
    <Section>
      <Container>
        <div className="mb-14 flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Clients</Eyebrow>
            <h2
              className="mt-3 font-display font-bold tracking-tight text-[var(--color-ink)]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Three decades of repeat clients.
            </h2>
            <p className="mt-4 text-[var(--color-ink)]/70">
              A few of the kind words clients have shared over the years. Names kept
              private — we&apos;ll list verified reviews as they come in.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <Button
              variant="icon"
              size="icon"
              onClick={() => embla?.scrollPrev()}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="icon"
              size="icon"
              onClick={() => embla?.scrollNext()}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="relative flex min-w-0 flex-[0_0_85%] flex-col gap-5 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:flex-[0_0_42%] lg:flex-[0_0_32%]"
              >
                <Quote
                  aria-hidden
                  className="absolute right-6 top-6 h-10 w-10 text-[var(--color-sand)]"
                />
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--color-cta)] text-[var(--color-cta)]" />
                  ))}
                </div>
                <p className="text-[17px] leading-relaxed text-[var(--color-ink)]/85">
                  “{t.quote}”
                </p>
                <div className="mt-auto">
                  <p className="font-display font-semibold text-[var(--color-ink)]">{t.name}</p>
                  {t.location && (
                    <p className="text-xs text-[var(--color-ink)]/60">{t.location}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selected ? "w-8 bg-[var(--color-cta)]" : "w-2 bg-[var(--color-ink)]/20"
              }`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
