import { site } from "@/data/site";
import { Phone, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-frame)] text-[var(--color-bg)]">
      <div
        className="mx-auto grid gap-10 px-5 py-16 md:grid-cols-4 md:px-10"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div>
          <p className="font-display text-2xl font-bold">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm opacity-80">{site.tagline}</p>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] opacity-60">
            Based in
          </p>
          <p className="mt-2 text-sm opacity-90">
            {site.address.street}, {site.address.city}
          </p>
          <p className="text-sm opacity-70">Founded by {site.founder} · 1995</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-60">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-[var(--color-cta)]">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 hover:text-[var(--color-cta)]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-[var(--color-cta)]">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-60">
            Hours
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <li key={h.label} className="opacity-90">
                <span className="opacity-60">{h.label}</span> — {h.value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-60">
            Service areas
          </p>
          <p className="mt-4 text-sm opacity-90">{site.serviceAreas.join(" · ")}</p>
        </div>
      </div>

      <div
        className="mx-auto flex flex-col gap-4 border-t border-white/10 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <p className="text-xs opacity-60">
          © {site.name}. Daman&apos;s painting contractor since 1995.
        </p>
        {site.social.length > 0 && (
          <ul className="flex gap-6 text-xs">
            {site.social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="opacity-70 hover:opacity-100"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
