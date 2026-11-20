import type { Testimonial } from "@/types/domain";

/**
 * Placeholder testimonials — anonymised by locality until real client reviews
 * are collected.
 *
 * TODO (when Akil has 5–10 happy clients willing to be named):
 *   1. Ask permission to use their first name + last initial.
 *   2. Add `source: "google"` + `sourceUrl` once Google Business Profile is live.
 *   3. Optionally add `avatar: "/testimonials/{id}.jpg"` at 160×160 round.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Homeowner",
    location: "Nani Daman",
    rating: 5,
    source: "direct",
    quote:
      "Akil bhai has painted our home three times over the years. Always on time, always clean, never a surprise on the bill. The only contractor we trust.",
  },
  {
    id: "t2",
    name: "Homeowner",
    location: "Moti Daman",
    rating: 5,
    source: "direct",
    quote:
      "The crew covered every piece of furniture before starting. By the time they finished, the home looked brand new and spotless.",
  },
  {
    id: "t3",
    name: "Office client",
    location: "Vapi",
    rating: 5,
    source: "direct",
    quote:
      "Hired them for a commercial space after seeing my friend's living room. The written quote was clear and the work was faster than promised.",
  },
  {
    id: "t4",
    name: "Office client",
    location: "Silvassa",
    rating: 5,
    source: "direct",
    quote:
      "Very professional team. They painted after our office hours without disturbing work. Walls still look spotless months later.",
  },
];
