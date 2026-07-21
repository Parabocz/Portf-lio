"use client";

import { motion } from "motion/react";
import { services } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  return (
    <section id="servicos" className="grid-rule bg-void py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:max-w-7xl lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet">{"// serviços"}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            O que eu construo
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-violet/40"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet/0 blur-3xl transition-colors duration-500 group-hover:bg-violet/20" />
              <p className="font-mono text-xs text-ink-muted">{service.eyebrow}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{service.description}</p>
              <ul className="mt-5 space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
