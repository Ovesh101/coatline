import type { Project } from "@/types/domain";

export const projects: Project[] = [
  {
    slug: "bandra-duplex-2024",
    title: "Nani Daman duplex — full interior repaint",
    location: "Nani Daman",
    completedAt: "2024-09-12",
    services: ["interior", "textures"],
    summary:
      "Six-room duplex transformed with soft neutrals and a hand-applied lime wash accent wall.",
    before: {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      alt: "Living room before repaint — dated beige walls",
    },
    after: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      alt: "Living room after repaint — modern sage and cream",
    },
  },
  {
    slug: "juhu-bungalow-exterior",
    title: "Devka bungalow — exterior restoration",
    location: "Devka, Daman",
    completedAt: "2024-03-22",
    services: ["exterior", "waterproofing"],
    summary:
      "Full facade restoration with waterproofing before the monsoon. Scaffolding up in 4 days.",
    before: {
      src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=80",
      alt: "Weathered bungalow exterior before restoration",
    },
    after: {
      src: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=1400&q=80",
      alt: "Restored bungalow exterior in warm cream",
    },
  },
  {
    slug: "andheri-office-afterhours",
    title: "Vapi office — after-hours repaint",
    location: "Vapi industrial area",
    completedAt: "2023-11-04",
    services: ["commercial"],
    summary:
      "4,200 sqft office painted over three nights. Team returned Monday to zero disruption.",
    before: {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
      alt: "Office before repaint — tired white walls",
    },
    after: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      alt: "Office after repaint — fresh modern finish",
    },
  },
];
