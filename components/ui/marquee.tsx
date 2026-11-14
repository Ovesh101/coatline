"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

/**
 * Infinite marquee strip — great for logos, cities, tags.
 * Duplicates the track once and animates for a seamless loop.
 */
export function Marquee({
  items,
  speed = 40,
  separator = "✦",
  className,
}: {
  items: string[];
  speed?: number; // seconds for one full loop
  separator?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        <MarqueeTrack items={items} separator={separator} />
        <MarqueeTrack items={items} separator={separator} />
      </motion.div>
    </div>
  );
}

function MarqueeTrack({
  items,
  separator,
}: {
  items: string[];
  separator: React.ReactNode;
}) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((it, i) => (
        <span key={`${it}-${i}`} className="flex items-center gap-10">
          <span>{it}</span>
          <span aria-hidden className="text-[var(--color-cta)]/70">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );
}
