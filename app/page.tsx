import { Hero } from "@/features/hero";
import { Stats } from "@/features/stats";
import { ServicesGrid } from "@/features/services";
import { Process } from "@/features/process";
import { FeaturedWork } from "@/features/projects";
import { Testimonials } from "@/features/testimonials";
import { Faq } from "@/features/faq";
import { ContactBand } from "@/features/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <Faq />
      <ContactBand />
    </>
  );
}
