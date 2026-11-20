import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { ProjectDetail } from "@/features/projects";
import { ContactBand } from "@/features/contact";
import { site } from "@/data/site";

type PageProps = { params: Promise<{ slug: string }> };

// Dynamic segment: params is awaited at request time. Opt out of the
// instant-navigation static-shell assertion — the page is still fully
// prerendered via generateStaticParams, just not "instant" in Next 16's sense.
export const instant = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  const title = `${project.title} · ${project.location}`;
  const description = project.summary;

  return {
    title,
    description,
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      type: "article",
      images: [{ url: project.after.src, alt: project.after.alt }],
    },
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <ProjectDetail project={project} />
      <ContactBand />
    </>
  );
}
