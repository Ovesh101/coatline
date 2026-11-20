import type { Service } from "@/types/domain";

/**
 * Starting prices are intentionally omitted — pricing varies by site condition,
 * paint grade and access. Every quote is bespoke. If you ever want to show a
 * starting price again, set `startingPrice: { amount, unit }` on a service.
 */

export const services: Service[] = [
  {
    slug: "interior",
    title: "Interior Painting",
    summary:
      "Walls, ceilings, doors and trim. We prepare the surface properly before the first coat.",
    icon: "paint-roller",
    features: ["Putty + primer", "Two-coat finish", "Furniture covered", "1-year warranty"],
    cover: {
      src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
      alt: "Interior wall freshly painted in sage",
    },
  },
  {
    slug: "exterior",
    title: "Exterior Painting",
    summary:
      "Monsoon-ready paint for building fronts, balconies and compound walls. Scaffolding included.",
    icon: "brush",
    features: ["Pressure wash", "Anti-fungal primer", "10-year weather coat", "Scaffolding incl."],
    cover: {
      src: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=1200&q=80",
      alt: "House exterior freshly repainted",
    },
  },
  {
    slug: "commercial",
    title: "Shops & Offices",
    summary:
      "After-hours painting for shops, offices and restaurants in Daman, Vapi and Silvassa.",
    icon: "building",
    features: ["Night / weekend work", "Fast turnaround", "No business downtime", "Written quote"],
    cover: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      alt: "Bright modern office interior",
    },
  },
  {
    slug: "textures",
    title: "Textures & Finishes",
    summary:
      "Lime wash, Roman clay, stucco and metallic finishes. Hand-applied by our trained crew.",
    icon: "sparkles",
    features: ["Lime wash", "Roman clay", "Metallic finish", "Sample swatches"],
    cover: {
      src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
      alt: "Textured wall with soft shadow",
    },
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    summary:
      "Terrace, bathroom and exterior wall sealing. We find the leak first, then fix it.",
    icon: "droplets",
    features: ["Leak check", "Elastomeric coating", "5-year warranty", "Done before monsoon"],
    cover: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      alt: "Waterproofed terrace with clean finish",
    },
  },
];
