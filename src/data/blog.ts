import type { BlogPost } from "@/types/content";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Construindo APIs Escaláveis com Node.js e TypeScript",
    excerpt:
      "Um guia completo sobre arquitetura, middlewares, validação com Zod e padrões de projeto para APIs REST de alta performance.",
    date: "10 Fev 2026",
    readTime: "12 min",
    tags: ["Node.js", "TypeScript", "API"],
    href: "#",
    featured: true,
  },
  {
    id: 2,
    title: "React Server Components: Um Mergulho Profundo",
    excerpt:
      "Entendendo a diferença entre Server e Client Components, quando usar cada um e como RSC muda a arquitetura das aplicações Next.js.",
    date: "22 Jan 2026",
    readTime: "9 min",
    tags: ["React", "Next.js", "Performance"],
    href: "#",
    featured: false,
  },
  {
    id: 3,
    title: "PostgreSQL: Tuning de Performance para Apps de Alto Tráfego",
    excerpt:
      "Índices, query plans, connection pooling com PgBouncer e dicas práticas para escalar bancos de dados relacionais.",
    date: "5 Jan 2026",
    readTime: "15 min",
    tags: ["PostgreSQL", "Performance", "Backend"],
    href: "#",
    featured: false,
  },
  {
    id: 4,
    title: "JWT vs Sessions: Escolhendo a Autenticação Certa",
    excerpt:
      "Uma análise honesta das tradeoffs entre autenticação baseada em token e sessões, com exemplos de implementação e boas práticas de segurança.",
    date: "18 Dez 2025",
    readTime: "8 min",
    tags: ["Security", "Node.js", "JWT"],
    href: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Monorepo com Turborepo: Do Zero ao Deploy",
    excerpt:
      "Como estruturar um monorepo profissional com Turborepo, workspaces, shared packages e pipelines de CI/CD otimizados.",
    date: "2 Dez 2025",
    readTime: "11 min",
    tags: ["DevOps", "Turborepo", "Monorepo"],
    href: "#",
    featured: false,
  },
  {
    id: 6,
    title: "WebSockets na Prática: Chat em Tempo Real com Socket.io",
    excerpt:
      "Implementando comunicação bidirecional, rooms, eventos customizados e escalonamento horizontal com Redis Adapter.",
    date: "15 Nov 2025",
    readTime: "10 min",
    tags: ["WebSocket", "Socket.io", "Redis"],
    href: "#",
    featured: false,
  },
];

export const blogTagTone: Record<string, string> = {
  "Node.js": "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  TypeScript: "border-blue-500/25 bg-blue-500/10 text-blue-700 dark:text-blue-400",
  API: "border-purple-500/25 bg-purple-500/10 text-purple-700 dark:text-purple-400",
  React: "border-cyan-400/25 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300",
  "Next.js": "border-slate-400/25 bg-slate-400/10 text-slate-700 dark:text-slate-300",
  Performance: "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  PostgreSQL: "border-blue-400/25 bg-blue-400/10 text-blue-700 dark:text-blue-300",
  Backend: "border-purple-500/25 bg-purple-500/10 text-purple-700 dark:text-purple-400",
  Security: "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-400",
  JWT: "border-orange-500/25 bg-orange-500/10 text-orange-700 dark:text-orange-400",
  DevOps: "border-cyan-500/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
  Turborepo: "border-slate-300/25 bg-slate-300/10 text-slate-700 dark:text-slate-200",
  Monorepo: "border-purple-400/25 bg-purple-400/10 text-purple-700 dark:text-purple-300",
  WebSocket: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  "Socket.io": "border-teal-500/25 bg-teal-500/10 text-teal-700 dark:text-teal-400",
  Redis: "border-red-500/25 bg-red-500/10 text-red-700 dark:text-red-400",
};
