"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

const SHOW_THRESHOLD_PX = 480;
const WHATSAPP_MESSAGE = `Hi ${site.name}! I'd like a free painting quote.`;

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_THRESHOLD_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="group"
          aria-label="Quick contact"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 flex items-stretch gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-bg)]/95 p-1.5 shadow-[0_18px_40px_-16px_rgba(14,26,43,0.4)] backdrop-blur-xl md:hidden"
          style={{ paddingBottom: "max(6px, env(safe-area-inset-bottom))" }}
        >
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-3 text-sm font-semibold text-[var(--color-bg)] transition-transform active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" />
            Call now
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
