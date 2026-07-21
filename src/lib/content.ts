export const business = {
  name: "Gustavo Parabocz",
  role: "Criação de Sites e Aplicativos",
  whatsappNumber: "5542999569470",
  phoneDisplay: "(42) 99956-9470",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  hero: "Olá, Gustavo! Vi seu site e quero conversar sobre um projeto.",
  about: "Olá, Gustavo! Vim pelo site e quero te conhecer melhor sobre um projeto.",
  services: "Olá, Gustavo! Tenho interesse em um dos seus serviços de desenvolvimento.",
  portfolio: "Olá, Gustavo! Vi o case do Site Manager e quero um projeto assim.",
  final: "Olá, Gustavo! Bora tirar meu projeto do papel?",
} as const;

export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "institucional",
    eyebrow: "// 01",
    title: "Sites institucionais",
    description:
      "Presença digital rápida, responsiva e fácil de encontrar — construída pra passar credibilidade no primeiro scroll.",
    bullets: ["Design sob medida, não template", "SEO técnico desde a fundação", "Performance real, não só no papel"],
  },
  {
    id: "ecommerce",
    eyebrow: "// 02",
    title: "E-commerce",
    description:
      "Loja própria, sem taxa por venda e sem depender de marketplace pra existir. Do catálogo ao checkout.",
    bullets: ["Catálogo e carrinho sob controle total", "Integração com pagamento e frete", "Painel simples pra você gerenciar"],
  },
  {
    id: "apps",
    eyebrow: "// 03",
    title: "Aplicativos web e desktop",
    description:
      "Sistemas internos, painéis de gestão e ferramentas sob medida — pra automatizar o que hoje é planilha e retrabalho.",
    bullets: ["Banco de dados e lógica de negócio próprios", "Interface pensada pro uso diário", "Funciona offline quando precisa"],
  },
  {
    id: "reforma",
    eyebrow: "// 04",
    title: "Reforma de sites existentes",
    description:
      "Site antigo, lento ou quebrado em algum navegador? Eu assumo, diagnostico e entrego de novo — sem começar do zero à toa.",
    bullets: ["Auditoria de performance e código", "Modernização sem perder o que já rankeia", "Migração sem downtime"],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Briefing",
    description: "Conversa direta sobre o que seu negócio precisa, prazo e orçamento — sem enrolação.",
  },
  {
    step: "02",
    title: "Proposta",
    description: "Escopo fechado por escrito: o que entra, o que não entra, quanto custa e quando entrega.",
  },
  {
    step: "03",
    title: "Build",
    description: "Desenvolvimento com checkpoints — você acompanha o progresso, não só o resultado final.",
  },
  {
    step: "04",
    title: "Entrega",
    description: "Site no ar, testado em dispositivos reais, com um período de ajustes incluso.",
  },
];

export const siteManagerCase = {
  eyebrow: "// case real",
  name: "Site Manager",
  tagline: "Gestão de clientes e finanças para freelancers de desenvolvimento",
  description:
    "Um aplicativo desktop que eu mesmo uso no dia a dia: gerencia carteira de clientes, contratos, hospedagem e o financeiro do negócio inteiro — 100% offline, sem depender de nuvem de terceiros.",
  stack: ["Electron", "React + TypeScript", "SQLite (sql.js, WASM)", "Recharts"],
  features: [
    "Grid de clientes com status, vencimento de domínio e receita gerada",
    "Painel financeiro com MRR, projeção de 12 meses e ranking de receita",
    "Contador de expiração de hosting com alerta visual dinâmico",
    "Backup e restauração completos, sem depender de servidor",
  ],
  note:
    "Ferramenta real, em uso — não é peça de portfólio inventada pra parecer bem em site.",
} as const;

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
] as const;
