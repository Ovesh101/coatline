import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/section";
import { QuoteForm } from "@/features/contact";
import { Faq } from "@/features/faq";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get a free painting quote from ${site.name}. Daman-based painting contractor. Same-week visits and written quotes.`,
};

export default function ContactPage() {
  return (
    <>
      <section
        className="relative text-[var(--color-bg)]"
        style={{ background: "var(--color-frame)" }}
      >
        <Container>
          <div className="grid grid-cols-1 gap-14 py-24 md:grid-cols-12 md:gap-16 md:py-32">
            <div className="md:col-span-6">
              <Eyebrow className="!text-[var(--color-bg)]/60">Get in touch</Eyebrow>
              <h1
                className="mt-4 text-balance font-display font-bold tracking-tight text-[var(--color-bg)]"
                style={{ fontSize: "clamp(40px, 7vw, 92px)", lineHeight: 0.98 }}
              >
                Let&apos;s talk about your{" "}
                <span className="relative inline-block whitespace-nowrap">
                  walls.
                  <span
                    className="absolute -bottom-1.5 left-0 h-[5px] w-full rounded-full"
                    style={{ background: "var(--color-cta)" }}
                  />
                </span>
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--color-bg)]/80">
                Call us, WhatsApp us, or fill the form. Our supervisor visits your place the
                same week and gives you a written quote the same day.
              </p>

              <div className="mt-10 space-y-5">
                <ContactRow icon={<Phone className="h-4 w-4" />} label="Call" href={`tel:${site.phoneRaw}`} value={site.phone} />
                <ContactRow
                  icon={<MessageCircle className="h-4 w-4" />}
                  label="WhatsApp"
                  href={`https://wa.me/${site.whatsapp}`}
                  value="Chat with us"
                />
                <ContactRow
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  href={`mailto:${site.email}`}
                  value={site.email}
                />
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bg)]/60">
                    <Clock className="h-3.5 w-3.5" /> Hours
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-bg)]/90">
                    {site.hours.map((h) => (
                      <li key={h.label}>
                        <span className="text-[var(--color-bg)]/60">{h.label}</span> — {h.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bg)]/60">
                    <MapPin className="h-3.5 w-3.5" /> Service areas
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {site.serviceAreas.map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] text-[var(--color-bg)]/85"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <QuoteForm variant="card" />
            </div>
          </div>
        </Container>
      </section>

      <Faq />
    </>
  );
}

function ContactRow({
  icon,
  label,
  href,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  value: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener" : undefined}
      className="group flex items-center gap-4 text-[var(--color-bg)]"
    >
      <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-[var(--color-bg)] ring-1 ring-white/10 transition-all group-hover:text-[var(--color-cta)] group-hover:ring-[var(--color-cta)]/60">
        {icon}
      </span>
      <span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bg)]/60">
          {label}
        </span>
        <span className="block font-display text-lg font-semibold transition-colors group-hover:text-[var(--color-cta)]">
          {value}
        </span>
      </span>
    </a>
  );
}
