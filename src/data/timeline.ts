import type { TimelineEntry } from "@/types/content";

export const timelineFilters = [
  { label: "Tudo", value: "all" as const },
  { label: "Experiência", value: "work" as const },
  { label: "Educação", value: "education" as const },
  { label: "Conquistas", value: "achievement" as const },
];

export const timelineEntries: TimelineEntry[] = [
  {
    id: 1,
    type: "work",
    role: "Senior Full-Stack Engineer",
    company: "Nubank",
    companyUrl: "https://nubank.com.br",
    location: "São Paulo, SP · Remoto",
    period: "Jan 2024 — Presente",
    duration: "2 anos",
    current: true,
    description:
      "Liderança técnica no time de plataforma de crédito, desenvolvendo microsserviços de alta disponibilidade que processam milhões de transações diárias. Mentoria de desenvolvedores júnior e participação ativa em decisões de arquitetura.",
    highlights: [
      "Reduzi o tempo de processamento de crédito em 40% com otimizações de query e caching no Redis",
      "Arquitetei a migração de monolito para microsserviços, reduzindo deploy time de 2h para 8min",
      "Liderei equipe de 6 engenheiros na entrega do módulo de parcelamento Pix",
    ],
    tags: ["React", "TypeScript", "Clojure", "PostgreSQL", "Kafka", "AWS"],
  },
  {
    id: 2,
    type: "work",
    role: "Full-Stack Developer",
    company: "Totvs",
    companyUrl: "https://totvs.com",
    location: "São Paulo, SP · Híbrido",
    period: "Mar 2022 — Dez 2023",
    duration: "1 ano e 9 meses",
    description:
      "Desenvolvimento de módulos do ERP Protheus e construção de interfaces modernas em React para o ecossistema TOTVS Fluig. Foco em performance, acessibilidade e integração com APIs legadas.",
    highlights: [
      "Construí o design system interno em React utilizado por 12 times de produto",
      "Integrei mais de 30 endpoints de APIs REST com contrato OpenAPI 3.0",
      "Aumentei cobertura de testes de 18% para 74% no módulo financeiro",
    ],
    tags: ["React", "Node.js", "TypeScript", "Docker", "Oracle DB"],
  },
  {
    id: 3,
    type: "work",
    role: "Desenvolvedor Front-end",
    company: "Agência Pixel",
    location: "Belo Horizonte, MG · Presencial",
    period: "Jun 2021 — Fev 2022",
    duration: "9 meses",
    description:
      "Desenvolvimento de landing pages, e-commerces e painéis administrativos para clientes de médio porte. Primeiro contato profissional com ciclos rápidos de entrega e comunicação com clientes.",
    highlights: [
      "Entreguei 14 projetos no prazo em ambiente de alta pressão",
      "Implementei CI/CD com GitHub Actions reduzindo erros em produção em 60%",
      "Migrei 3 projetos legados de jQuery para React 18",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Figma", "Vercel"],
  },
  {
    id: 4,
    type: "education",
    role: "Bacharelado em Ciência da Computação",
    company: "UFMG — Universidade Federal de Minas Gerais",
    companyUrl: "https://ufmg.br",
    location: "Belo Horizonte, MG",
    period: "2018 — 2022",
    duration: "4 anos",
    description:
      "Formação sólida em fundamentos de computação: algoritmos, estruturas de dados, sistemas operacionais, redes e engenharia de software. TCC sobre otimização de consultas em bancos de dados distribuídos.",
    highlights: [
      "TCC com nota 9.8 — Otimização de joins em bancos distribuídos com algoritmos genéticos",
      "Monitor voluntário de Estruturas de Dados por 2 semestres",
      "Participante ativo do grupo de estudos de sistemas distribuídos",
    ],
    tags: ["Algoritmos", "C++", "Python", "Banco de Dados", "Redes"],
  },
  {
    id: 5,
    type: "achievement",
    role: "AWS Certified Solutions Architect – Associate",
    company: "Amazon Web Services",
    location: "Certificação Global",
    period: "Nov 2023",
    duration: "",
    description:
      "Certificação que valida conhecimento em design de sistemas distribuídos na AWS, cobrindo EC2, S3, RDS, Lambda, VPC e boas práticas de segurança e alta disponibilidade.",
    highlights: [
      "Score: 847/1000 (Aprovação mínima: 720)",
      "Cobre arquitetura de alta disponibilidade e recuperação de desastres",
    ],
    tags: ["AWS", "Cloud", "Arquitetura"],
  },
];

export const timelineStats = [
  { label: "Anos de carreira", value: "5+" },
  { label: "Empresas", value: "3" },
  { label: "Países atendidos", value: "6+" },
  { label: "Certificações", value: "2" },
];
