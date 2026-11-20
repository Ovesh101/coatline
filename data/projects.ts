import type { Project } from "@/types/domain";

/**
 * TODO — Replace placeholder Unsplash URLs with real project photos from Akil.
 *
 * For each project:
 *   1. Create /public/projects/{slug}/ folder.
 *   2. Drop: before.jpg, after.jpg, and 2–5 gallery photos (any filenames).
 *   3. Point `src` here at /projects/{slug}/filename.jpg (leading slash, no "public").
 *   4. Target 1600px wide, JPG ~250KB. Compress at tinypng.com before upload.
 *   5. Update the `alt` text to describe what's actually in the photo —
 *      good alt helps blind users and local SEO.
 *
 * Even ONE real photo per project beats three stock ones. Prioritise after.jpg.
 */

export const projects: Project[] = [
  {
    slug: "nani-daman-duplex-2024",
    title: "Nani Daman duplex — full interior repaint",
    location: "Nani Daman",
    completedAt: "2024-09-12",
    services: ["interior", "textures"],
    summary:
      "Six-room duplex transformed with soft neutrals and a hand-applied lime wash accent wall.",
    story:
      "A young family had just moved into a 20-year-old duplex in Nani Daman. The walls had faded unevenly over the years and the kids' rooms were covered in crayon. We stripped old paint, filled every crack, and built a palette of three soft neutrals so the home would feel bigger. One accent wall in the living room was hand-finished in lime wash — the kind of texture that catches late-afternoon light.",
    durationDays: 9,
    areaSqft: 2100,
    materials: [
      "Asian Paints Royale Health Shield (walls)",
      "Lime wash — hand-applied (accent wall)",
      "Low-VOC primer throughout",
      "Jotun enamel on all trim",
    ],
    before: {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      alt: "Living room before repaint — dated beige walls",
    },
    after: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      alt: "Living room after repaint — modern sage and cream",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
        alt: "Dining area in soft cream with sage trim",
      },
      {
        src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80",
        alt: "Lime-wash accent wall catching evening light",
      },
      {
        src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=80",
        alt: "Bedroom corner with neutral walls and warm wood",
      },
      {
        src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=80",
        alt: "Hallway in soft neutrals",
      },
    ],
    testimonial: {
      quote:
        "The crew covered every piece of furniture before starting. By the time they finished, the home looked brand new and spotless. Akil visited three times during the job to check everything himself.",
      author: "Rohit M., Nani Daman",
    },
  },
  {
    slug: "devka-bungalow-exterior",
    title: "Devka bungalow — exterior restoration",
    location: "Devka, Daman",
    completedAt: "2024-03-22",
    services: ["exterior", "waterproofing"],
    summary:
      "Full facade restoration with waterproofing before the monsoon. Scaffolding up in 4 days.",
    story:
      "Right before the monsoon this Devka bungalow had hairline cracks running along the west facade and visible damp near the roofline. We pressure-washed, sealed the cracks, applied elastomeric waterproofing on the exposed sides, then repainted with a 10-year weather coat. Work wrapped a full week before the first rains.",
    durationDays: 14,
    areaSqft: 3400,
    materials: [
      "Asian Paints Apex Ultima Protek (walls)",
      "Dr. Fixit elastomeric waterproofing",
      "Anti-fungal primer",
      "GI scaffolding (included)",
    ],
    before: {
      src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=80",
      alt: "Weathered bungalow exterior before restoration",
    },
    after: {
      src: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=1400&q=80",
      alt: "Restored bungalow exterior in warm cream",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80",
        alt: "Facade detail in warm cream",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
        alt: "Compound wall repainted and sealed",
      },
    ],
    testimonial: {
      quote:
        "They finished a full week before the rains and walked us through every seal. Not one drop of water came through this monsoon.",
      author: "Aisha K., Devka",
    },
  },
  {
    slug: "vapi-office-afterhours",
    title: "Vapi office — after-hours repaint",
    location: "Vapi industrial area",
    completedAt: "2023-11-04",
    services: ["commercial"],
    summary:
      "4,200 sqft office painted over three nights. Team returned Monday to zero disruption.",
    story:
      "The client runs a design office in Vapi and couldn't afford downtime. We moved in Friday night at 7pm, finished Sunday evening, handed over Monday morning. Furniture sealed, floors protected, every switch plate reattached. Not a single rescheduled meeting.",
    durationDays: 3,
    areaSqft: 4200,
    materials: [
      "Dulux Velvet Touch (walls)",
      "Low-VOC — safe to occupy immediately",
      "Sheet-level floor + furniture masking",
    ],
    before: {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
      alt: "Office before repaint — tired white walls",
    },
    after: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      alt: "Office after repaint — fresh modern finish",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1400&q=80",
        alt: "Open office in fresh neutral",
      },
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
        alt: "Meeting room after repaint",
      },
    ],
    testimonial: {
      quote:
        "Very professional team. They painted during our off-hours without disturbing work. Walls still look amazing six months later.",
      author: "Vikram R., Vapi",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
