import type { Metadata } from "next";
import { Process } from "@/features/process";
import { Faq } from "@/features/faq";
import { ContactBand } from "@/features/contact";
import { ServicesHero, ServicesList } from "@/features/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Residential, commercial and specialty painting contracts — fully managed by ${site.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <Process />
      <Faq />
      <ContactBand />
    </>
  );
}
