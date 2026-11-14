import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { site } from "@/data/site";
import { QuoteForm } from "./QuoteForm";

export function ContactBand() {
  return (
    <Section id="contact" tone="dark">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Eyebrow className="!text-[var(--color-bg)]/60">Get in touch</Eyebrow>
            <h2
              className="mt-3 text-balance font-display font-bold tracking-tight text-[var(--color-bg)]"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.04 }}
            >
              Ready for a{" "}
              <span className="relative inline-block whitespace-nowrap">
                fresh coat?
                <span
                  className="absolute -bottom-1.5 left-0 h-[4px] w-full rounded-full"
                  style={{ background: "var(--color-cta)" }}
                />
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-[var(--color-bg)]/75">
              Share a few details. Our supervisor visits your place and gives you a written
              quote the same day. No obligation.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`tel:${site.phoneRaw}`}
                className="group inline-flex items-center gap-4 text-[var(--color-bg)] hover:text-[var(--color-cta)]"
              >
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-[var(--color-bg)] ring-1 ring-white/10 transition-all group-hover:text-[var(--color-cta)] group-hover:ring-[var(--color-cta)]/60">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bg)]/60">
                    Call
                  </span>
                  <span className="block font-display text-lg font-semibold">{site.phone}</span>
                </span>
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 text-[var(--color-bg)] hover:text-[var(--color-cta)]"
              >
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-[var(--color-bg)] ring-1 ring-white/10 transition-all group-hover:text-[var(--color-cta)] group-hover:ring-[var(--color-cta)]/60">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bg)]/60">
                    WhatsApp
                  </span>
                  <span className="block font-display text-lg font-semibold">
                    Reply within an hour
                  </span>
                </span>
              </a>
              <p className="flex items-start gap-4 text-sm text-[var(--color-bg)]/75">
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bg)]/60">
                    Serving
                  </span>
                  <span className="block">
                    {site.serviceAreas.slice(0, 5).join(" · ")} + more
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <QuoteForm variant="card" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
