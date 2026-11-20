import { services } from "@/data/services";
import type { Service, ServiceSlug } from "@/types/domain";

const BY_SLUG: Record<ServiceSlug, Service> = services.reduce(
  (acc, s) => {
    acc[s.slug] = s;
    return acc;
  },
  {} as Record<ServiceSlug, Service>,
);

/** Find a service by slug. Returns undefined if the slug is unknown. */
export function getService(slug: ServiceSlug): Service | undefined {
  return BY_SLUG[slug];
}

/** Get the display title for a service slug. Falls back to the slug itself. */
export function getServiceTitle(slug: ServiceSlug): string {
  return BY_SLUG[slug]?.title ?? slug;
}
