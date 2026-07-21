"use client";

import { useState } from "react";
import { motion } from "motion/react";
import RippleGrid from "./RippleGrid";
import { waLink, waMessages } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

function getGridProps() {
  if (typeof window === "undefined") {
    return { gridSize: 12, rippleIntensity: 0.04, mouseInteraction: true, opacity: 0.5 };
  }
  const isSmall = window.innerWidth < 768;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return {
    gridSize: isSmall ? 8 : 12,
    rippleIntensity: prefersReduced ? 0 : isSmall ? 0.03 : 0.04,
    mouseInteraction: !isSmall && !prefersReduced,
    opacity: isSmall ? 0.35 : 0.5,
  };
}

export default function Hero() {
  const [gridProps] = useState(getGridProps);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-void">
      <div className="absolute inset-0">
        <RippleGrid
          gridColor="#7C3AED"
          gridThickness={13}
          fadeDistance={1.4}
          vignetteStrength={2.2}
          glowIntensity={0.18}
          {...gridProps}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/20 via-void/40 to-void" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted"
        >
          <span className="text-violet">$</span> gustavo --role=&quot;dev&quot; --status=&quot;disponível&quot;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
        >
          Sites e aplicativos <span className="text-gradient">sob medida</span>, prontos pra converter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg"
        >
          Eu projeto e desenvolvo do zero — sem template, sem atalho. Cada projeto é código
          pensado pro seu negócio, do primeiro pixel ao deploy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={waLink(waMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo to-violet px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_var(--color-violet-glow)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Fale comigo no WhatsApp
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <span className="font-mono text-xs text-ink-muted">
            resposta em até 24h úteis
          </span>
        </motion.div>
      </div>
    </section>
  );
}
