import { ArrowRight, Clock, Calendar } from "lucide-react";

const posts = [
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

const tagColors: Record<string, string> = {
  "Node.js": "#68a063",
  TypeScript: "#3178c6",
  API: "#a855f7",
  React: "#61dafb",
  "Next.js": "#94a3b8",
  Performance: "#f59e0b",
  PostgreSQL: "#336791",
  Backend: "#7c3aed",
  Security: "#ef4444",
  JWT: "#f97316",
  DevOps: "#22d3ee",
  Turborepo: "#e2e8f0",
  Monorepo: "#8b5cf6",
  WebSocket: "#10b981",
  "Socket.io": "#25c2a0",
  Redis: "#dc382d",
};

export function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <section
      id="blog"
      style={{ background: "#080808" }}
      className="py-24 px-6"
    >
      {/* Divider */}
      <div
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }}
        className="h-px max-w-6xl mx-auto mb-24 -mt-1"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p style={{ color: "#a855f7" }} className="text-xs uppercase tracking-widest mb-3">
              {"// artigos"}
            </p>
            <h2 style={{ color: "#f1f5f9", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}>
              Escrita Técnica
            </h2>
            <p style={{ color: "#475569" }} className="mt-3 max-w-lg">
              Compartilho o que aprendo — de arquitetura a boas práticas do mundo real.
            </p>
          </div>
          <a
            href="#"
            style={{ color: "#a855f7", border: "1px solid rgba(168,85,247,0.3)" }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm hover:bg-[#a855f7]/10 transition-colors whitespace-nowrap"
          >
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        {/* Featured Post */}
        {featured && (
          <a
            href={featured.href}
            style={{
              background: "rgba(168,85,247,0.05)",
              border: "1px solid rgba(168,85,247,0.2)",
              transition: "all 0.3s",
            }}
            className="group block rounded-2xl p-6 md:p-8 mb-6 hover:border-[#a855f7]/50 hover:bg-[#a855f7]/8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    style={{
                      background: "rgba(168,85,247,0.2)",
                      border: "1px solid rgba(168,85,247,0.4)",
                      color: "#a855f7",
                      fontSize: "0.65rem",
                    }}
                    className="px-2.5 py-1 rounded-full uppercase tracking-widest"
                  >
                    Artigo em destaque
                  </span>
                </div>
                <h3
                  style={{ color: "#e2e8f0", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", lineHeight: 1.35 }}
                  className="mb-3 group-hover:text-[#a855f7] transition-colors"
                >
                  {featured.title}
                </h3>
                <p style={{ color: "#64748b", lineHeight: 1.7 }} className="text-sm mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: `${tagColors[tag] || "#a855f7"}15`,
                          color: tagColors[tag] || "#a855f7",
                          fontSize: "0.65rem",
                          border: `1px solid ${tagColors[tag] || "#a855f7"}30`,
                        }}
                        className="px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ color: "#334155" }} className="flex items-center gap-4 ml-auto text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {featured.readTime} de leitura
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(168,85,247,0.08)",
                  border: "1px solid rgba(168,85,247,0.15)",
                }}
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl flex-shrink-0 self-center group-hover:bg-[#a855f7]/15 transition-colors"
              >
                <ArrowRight size={20} color="#a855f7" className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        )}

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((post) => (
            <a
              key={post.id}
              href={post.href}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.25s",
              }}
              className="group block rounded-xl p-5 hover:border-[#a855f7]/25 hover:bg-[#a855f7]/5"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: `${tagColors[tag] || "#a855f7"}12`,
                      color: tagColors[tag] || "#a855f7",
                      fontSize: "0.62rem",
                    }}
                    className="px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                style={{ color: "#cbd5e1", lineHeight: 1.4 }}
                className="text-sm mb-2 group-hover:text-[#a855f7] transition-colors"
              >
                {post.title}
              </h3>

              <p style={{ color: "#475569", lineHeight: 1.6 }} className="text-xs mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div style={{ color: "#334155" }} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1">
                  <Calendar size={10} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={10} /> {post.readTime}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
