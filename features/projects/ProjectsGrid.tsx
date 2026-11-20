import { Container } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { ProjectShowcase } from "./ProjectShowcase";

export function ProjectsGrid() {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <div className="flex flex-col gap-20 md:gap-24">
          {projects.map((p, i) => (
            <ProjectShowcase key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
