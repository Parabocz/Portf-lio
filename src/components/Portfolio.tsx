"use client";

import { motion } from "motion/react";
import { siteManagerCase, waLink, waMessages } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Portfolio() {
  return (
    <section id="portfolio" className="grid-rule bg-void py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:max-w-7xl lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet">{siteManagerCase.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Prova técnica, não promessa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{siteManagerCase.note}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-surface p-8 lg:p-14"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-violet/20 blur-[100px]" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {siteManagerCase.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-violet">{siteManagerCase.tagline}</p>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                {siteManagerCase.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {siteManagerCase.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={waLink(waMessages.portfolio)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-violet/50 underline-offset-4 hover:text-violet"
              >
                Quero um sistema assim →
              </a>
            </div>

            <ul className="space-y-4 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {siteManagerCase.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 font-mono text-xs text-violet">→</span>
                  <span className="text-sm leading-relaxed text-ink-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
