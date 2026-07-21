"use client";

import { motion } from "motion/react";
import { waLink, waMessages, business } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-void py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative mx-auto max-w-3xl px-6 text-center lg:px-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet">{"// vamos começar"}</p>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          Seu projeto não vai se construir sozinho.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
          Me chama no WhatsApp e me conta o que você precisa — em poucos minutos eu já te digo
          se dá, o que envolve e quanto tempo leva.
        </p>

        <a
          href={waLink(waMessages.final)}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo to-violet px-10 py-5 text-base font-semibold text-white shadow-[0_8px_40px_-8px_var(--color-violet-glow)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Iniciar projeto no WhatsApp
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>

        <p className="mt-6 font-mono text-xs text-ink-muted">{business.phoneDisplay}</p>
      </motion.div>
    </section>
  );
}
