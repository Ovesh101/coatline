import type { Metadata } from "next";
import { ProjectsHero, ProjectsGrid } from "@/features/projects";
import { ContactBand } from "@/features/contact";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Work",
  description: `Painting projects completed by ${site.name} across Daman, Vapi and Silvassa — homes, bungalows, shops and offices.`,
};

export default function WorkIndexPage() {
  return (
    <>
      <ProjectsHero count={projects.length} />
      <ProjectsGrid />
      <ContactBand />
    </>
  );
}
