"use client";

import dynamic from "next/dynamic";
import type { ImageRef } from "@/types/domain";

const Slider = dynamic(() => import("./BeforeAfterInner"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[16/10] animate-pulse rounded-2xl bg-[var(--color-sand)]/30 md:aspect-[16/9]" />
  ),
});

export function BeforeAfter(props: { before: ImageRef; after: ImageRef }) {
  return <Slider {...props} />;
}
