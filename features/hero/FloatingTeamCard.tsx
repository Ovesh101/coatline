"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FloatingTeamCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 10 }}
      animate={{ opacity: 1, y: 0, rotate: 5 }}
      transition={{ delay: 0.9, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="pointer-events-none absolute right-6 bottom-28 z-10 w-40 md:w-56 md:bottom-36 md:right-10"
    >
      <div className="rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
            alt="Painting crew smiling"
            fill
            className="object-cover"
            sizes="(min-width:768px) 224px, 160px"
          />
        </div>
        <p className="mt-2 px-1 pb-1 text-[11px] font-medium text-[var(--color-ink)]/70">
          Our in-house crew · 8 painters
        </p>
      </div>
    </motion.div>
  );
}
