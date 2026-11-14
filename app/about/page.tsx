import type { Metadata } from "next";
import { Stats } from "@/features/stats";
import { Testimonials } from "@/features/testimonials";
import { ContactBand } from "@/features/contact";
import { AboutHero, Values, Timeline } from "@/features/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — Daman's family-run painting contractor since 1995.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Stats />
      <Values />
      <Timeline />
      <Testimonials />
      <ContactBand />
    </>
  );
}
