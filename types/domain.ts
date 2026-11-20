export type ImageRef = { src: string; alt: string; width?: number; height?: number };

export type ServiceSlug =
  | "interior"
  | "exterior"
  | "commercial"
  | "textures"
  | "waterproofing";

export type Service = {
  slug: ServiceSlug;
  title: string;
  summary: string;
  startingPrice?: { amount: number; unit: "sqft" | "room" | "day" };
  icon:
    | "paint-roller"
    | "brush"
    | "building"
    | "sparkles"
    | "droplets";
  features: string[];
  cover: ImageRef;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  completedAt: string; // ISO
  before: ImageRef;
  after: ImageRef;
  services: ServiceSlug[];
  summary: string;
  /** Optional full-detail fields. Older entries without them render a minimal page. */
  story?: string;
  gallery?: ImageRef[];
  durationDays?: number;
  areaSqft?: number;
  materials?: string[];
  testimonial?: { quote: string; author: string };
};

export type Testimonial = {
  id: string;
  name: string;
  location?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  source: "google" | "direct";
  sourceUrl?: string;
  avatar?: string;
};

export type Faq = { id: string; q: string; a: string; category?: string };

export type ProcessStep = {
  slug: string;
  title: string;
  body: string;
  icon: "phone" | "file" | "paint-roller" | "check";
};

export type Value = {
  title: string;
  body: string;
  icon: "file-check" | "hammer" | "shield";
};

export type Milestone = { year: string; title: string; body: string };

export type NavLink = { label: string; href: string };

export type GeoPoint = { lat: number; lng: number };

export type SiteConfig = {
  name: string;
  founder: string;
  /** Empty string = render monogram fallback. Set to /akil-mulla.jpg once real photo is ready. */
  founderPhoto: { src: string; alt: string };
  founderYears: number;
  tagline: string;
  description: string;
  url: string;
  email: string;
  secondaryEmail?: string;
  phone: string; // display format
  phoneRaw: string; // tel: format, e.g. +919876543210
  whatsapp: string; // wa.me format: 919876543210 (no +, no spaces)
  address: {
    street: string;
    city: string;
    region: string;
    postal: string;
    country: string;
  };
  geo: GeoPoint;
  /** Google Maps iframe src — embed URL (not share URL) */
  mapEmbedSrc: string;
  /** Google Maps deep link, opens native app on mobile */
  mapDirectionsUrl: string;
  hours: { label: string; value: string }[];
  serviceAreas: string[];
  social: { label: string; href: string }[];
  stats: { label: string; value: number; suffix?: string }[];
};
