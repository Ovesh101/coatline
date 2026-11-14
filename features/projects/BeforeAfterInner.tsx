"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import type { ImageRef } from "@/types/domain";

export default function BeforeAfterInner({ before, after }: { before: ImageRef; after: ImageRef }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] shadow-sm">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src={before.src} alt={before.alt} style={{ objectFit: "cover" }} />
        }
        itemTwo={
          <ReactCompareSliderImage src={after.src} alt={after.alt} style={{ objectFit: "cover" }} />
        }
        handle={
          <div className="pointer-events-auto h-full w-[3px] bg-[var(--color-cta)]">
            <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-cta)] text-white shadow-md">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="15 18 9 12 15 6" />
                <polyline points="9 18 15 12 9 6" transform="translate(6)" />
              </svg>
            </div>
          </div>
        }
        className="aspect-[16/10] md:aspect-[16/9]"
      />
    </div>
  );
}
