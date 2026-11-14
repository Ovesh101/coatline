import { site } from "@/data/site";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";

/**
 * Structured data for the home page:
 * - LocalBusiness (primary entity)
 * - Person (founder Akil Mulla)
 * - Service[] (what we sell)
 * - FAQPage (helps rich results)
 */
export function JsonLd() {
  const businessId = `${site.url}#business`;
  const founderId = `${site.url}#founder`;

  const founder = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": founderId,
    name: site.founder,
    jobTitle: "Founder & Painting Contractor",
    worksFor: { "@id": businessId },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: `${site.founder} Painting Contractor`,
    description: site.description,
    founder: { "@id": founderId },
    foundingDate: "1995",
    slogan: site.tagline,
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    areaServed: site.serviceAreas.map((a) => ({ "@type": "Place", name: a })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹",
    sameAs: site.social.map((s) => s.href),
  };

  const serviceList = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.summary,
    provider: { "@id": businessId },
    areaServed: site.serviceAreas.map((a) => ({ "@type": "Place", name: a })),
    ...(s.startingPrice && {
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: s.startingPrice.amount,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "INR",
          price: s.startingPrice.amount,
          unitText: s.startingPrice.unit,
        },
      },
    }),
  }));

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const graph = [localBusiness, founder, ...serviceList, faqPage];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
