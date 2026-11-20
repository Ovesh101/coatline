import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getProjectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const workRoutes: MetadataRoute.Sitemap = getProjectSlugs().map((slug) => ({
    url: `${site.url}/work/${slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes];
}
