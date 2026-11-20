import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ProjectShowcase } from "./ProjectShowcase";

const HOME_PROJECTS_LIMIT = 3;

export function FeaturedWork() {
  const featured = projects.slice(0, HOME_PROJECTS_LIMIT);
  const hasMore = projects.length > HOME_PROJECTS_LIMIT;

  return (
    <Section id="work" tone="sand">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Recent work</Eyebrow>
            <h2
              className="mt-3 font-display font-bold tracking-tight text-[var(--color-ink)]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Drag to see the difference.
            </h2>
            <p className="mt-4 text-[var(--color-ink)]/70">
              A few recent projects. Pull the handle to compare the before and after.
            </p>
          </div>
          <Button asChild size="md" variant="ghost">
            <Link href="/work">
              See all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-20">
          {featured.map((p, i) => (
            <ProjectShowcase key={p.slug} project={p} index={i} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <Button asChild size="lg">
              <Link href="/work">
                See all {projects.length} projects <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
