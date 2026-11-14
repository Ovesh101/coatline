import type { SiteConfig } from "@/types/domain";

export const site: SiteConfig = {
  name: "Coatline",
  founder: "Akil Mulla",
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
  hours: [
    { label: "Mon – Sat", value: "9:00 am – 7:00 pm" },
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
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Google Business", href: "https://g.co/" },
  ],
  stats: [
    { label: "Years in business", value: 30, suffix: "+" },
    { label: "Homes & offices done", value: 500, suffix: "+" },
    { label: "Clients who come back", value: 95, suffix: "%" },
  ],
};
