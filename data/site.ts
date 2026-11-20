import type { SiteConfig } from "@/types/domain";

// Google Maps — Nani Daman, Daman and Diu, India.
// Replace with the exact pin for Coatline's office/workshop when available.
const DAMAN_GEO = { lat: 20.4166, lng: 72.835 } as const;

export const site: SiteConfig = {
  name: "Coatline",
  founder: "Akil Mulla",
  // TODO: When a real portrait is ready, drop it at /public/akil-mulla.jpg
  // (800×1000, warm natural light, head-and-shoulders) and change src to
  // "/akil-mulla.jpg". Until then we render a brand-coloured monogram.
  founderPhoto: {
    src: "",
    alt: "Akil Mulla, founder of Coatline — painting contractor in Daman since 1995",
  },
  founderYears: 30,
  tagline: "A fresh coat. A whole new feeling.",
  description:
    "Painting contractor in Daman since 1995. Run by Akil Mulla and a trained crew. Homes, shops and offices across Daman, Vapi and Silvassa.",
  url: "https://coatline.example",
  email: "akilmulla753@gmail.com",
  secondaryEmail: "oveshmulla1124@gmail.com",
  phone: "+91 98982 76978",
  phoneRaw: "+919898276978",
  whatsapp: "919898276978",
  address: {
    street: "Nani Daman",
    city: "Daman",
    region: "Daman and Diu",
    postal: "396210",
    country: "IN",
  },
  geo: DAMAN_GEO,
  mapEmbedSrc: `https://www.google.com/maps?q=${DAMAN_GEO.lat},${DAMAN_GEO.lng}&z=14&output=embed`,
  mapDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${DAMAN_GEO.lat},${DAMAN_GEO.lng}`,
  // Akil works contractor hours — early starts, late finishes, flexible for
  // clients. Avoid fixed opening times so we never turn away an early/late call.
  hours: [
    { label: "Mon – Sat", value: "Call anytime" },
    { label: "Sunday", value: "On call" },
  ],
  serviceAreas: [
    "Nani Daman",
    "Moti Daman",
    "Devka",
    "Jampore",
    "Dunetha",
    "Vapi",
    "Silvassa",
    "Sarigam",
  ],
  // No social profiles yet — business runs on word-of-mouth. Add later when active.
  social: [],
  stats: [
    { label: "Years in business", value: 30, suffix: "+" },
    { label: "Homes & offices done", value: 500, suffix: "+" },
    { label: "Clients who come back", value: 95, suffix: "%" },
  ],
};
