"use client";

import { motion } from "motion/react";
import { waLink, waMessages } from "@/lib/content";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={waLink(waMessages.final)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar Gustavo no WhatsApp"
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-surface shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_30px_-8px_var(--color-violet-glow)] sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-violet/30 blur-xl motion-safe:animate-pulse" />
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 fill-ink sm:h-8 sm:w-8"
      >
        <path d="M16.02 4C9.4 4 4 9.4 4 16.02c0 2.17.58 4.28 1.68 6.14L4 28l6.02-1.64a12 12 0 0 0 6 1.61h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 9.4 22.65 4 16.02 4Zm0 21.9a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-3.57.97.96-3.48-.24-.36a9.87 9.87 0 0 1-1.53-5.31c0-5.46 4.44-9.9 9.9-9.9 5.46 0 9.9 4.44 9.9 9.9s-4.44 9.78-10 9.78Zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </motion.a>
  );
}
