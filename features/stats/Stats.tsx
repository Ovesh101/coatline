import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Marquee } from "@/components/ui/marquee";
import { site } from "@/data/site";
import { Counter } from "./Counter";

export function Stats() {
  return (
    <>
      <Section tone="dark" className="!py-20 md:!py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {site.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-start gap-2">
                <Eyebrow className="!text-[var(--color-bg)]/60">{s.label}</Eyebrow>
                <p
                  className="font-display font-bold leading-none text-[var(--color-bg)]"
                  style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
                >
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <div className="border-y border-[var(--color-line)] bg-[var(--color-bg)] py-6">
        <Marquee
          items={site.serviceAreas}
          speed={38}
          className="font-display text-xl font-semibold text-[var(--color-ink)]/70 md:text-2xl"
        />
      </div>
    </>
  );
}
