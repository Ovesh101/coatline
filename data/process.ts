import type { ProcessStep } from "@/types/domain";

export const processSteps: ProcessStep[] = [
  {
    slug: "consult",
    title: "Consult",
    icon: "phone",
    body: "Call or WhatsApp us. Our supervisor visits your place the same week — free of charge.",
  },
  {
    slug: "quote",
    title: "Quote",
    icon: "file",
    body: "A written, itemised quote — timeline, materials and warranty. No hidden extras.",
  },
  {
    slug: "paint",
    title: "Paint",
    icon: "paint-roller",
    body: "Our crew protects your furniture, preps every surface, and paints with low-VOC products.",
  },
  {
    slug: "walkthrough",
    title: "Walkthrough",
    icon: "check",
    body: "We walk every room together. Only when you're happy do we invoice.",
  },
];
