"use client";

import { motion } from "motion/react";
import ProfileCard from "./ProfileCard";
import { business, waLink, waMessages } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section id="sobre" className="grid-rule bg-void py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:max-w-7xl lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto w-full max-w-xs lg:max-w-none"
        >
          <ProfileCard
            avatarUrl="/gustavo-avatar.png"
            miniAvatarUrl="/gustavo-avatar.png"
            name={business.name}
            title={business.role}
            handle="gustavoparabocz"
            status="Disponível para novos projetos"
            contactText="Chamar no WhatsApp"
            behindGlowColor="rgba(124, 58, 237, 0.22)"
            behindGlowSize="55%"
            innerGradient="linear-gradient(145deg,#4f46e58c 0%,#7c3aed44 100%)"
            onContactClick={() => window.open(waLink(waMessages.about), "_blank", "noopener,noreferrer")}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet">{"// sobre"}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Quem escreve o código é quem entrega o projeto.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-ink-muted lg:max-w-2xl lg:text-lg">
            <p>
              Sou o Gustavo — desenvolvo sites e aplicativos sob medida, do briefing ao deploy.
              Sem agência no meio, sem terceirização: o mesmo desenvolvedor que conversa com você
              é quem escreve, testa e entrega o código.
            </p>
            <p>
              Também sou estudante de Engenharia de Produção na Universidade Tecnológica Federal
              do Paraná (UTFPR) — é de lá que vem a disciplina de processo que você vê na seção
              abaixo: escopo fechado, prazo real e checkpoints, não promessa vaga.
            </p>
            <p>
              Trabalho em sites institucionais, e-commerce, sistemas web e desktop — e uso as
              mesmas ferramentas que ofereço aos meus clientes no meu próprio negócio. O{" "}
              <a href="#portfolio" className="text-ink underline decoration-violet/50 underline-offset-4 hover:text-violet">
                Site Manager
              </a>{" "}
              logo abaixo é a prova disso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
