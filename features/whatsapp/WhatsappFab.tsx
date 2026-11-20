"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

const message = `Hi ${site.name}! I saw your website and would like a free painting quote.`;

export function WhatsappFab() {
  return (
    <motion.a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className="group fixed bottom-8 right-8 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:inline-flex"
    >
      <span
        aria-hidden
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30"
      />
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative h-6 w-6"
        aria-hidden
      >
        <path d="M.057 24l1.687-6.163A11.868 11.868 0 010 11.86C0 5.335 5.335 0 11.892 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c0 6.557-5.335 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.519 5.273l-.999 3.648 3.969-1.04zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </motion.a>
  );
}
