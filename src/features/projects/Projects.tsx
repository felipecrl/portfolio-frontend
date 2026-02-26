import { useState } from "react";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { ImageWithFallback } from "@/shared/figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "DevFlow",
    description:
      "Plataforma de gestão de projetos para equipes de desenvolvimento. Kanban em tempo real, integração com GitHub e analytics avançados.",
    image: "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    demo: "https://devflow.demo",
    repo: "https://github.com/felipecoelho/devflow",
    stars: 342,
    forks: 58,
    featured: true,
  },
  {
    id: 2,
    title: "CryptoWatch",
    description:
      "Dashboard de monitoramento de criptomoedas com dados em tempo real, alertas personalizados e análise de portfólio.",
    image: "https://images.unsplash.com/photo-1669054626218-f0b57b8ec632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["React", "Redis", "WebSocket", "Chart.js"],
    demo: "https://cryptowatch.demo",
    repo: "https://github.com/felipecoelho/cryptowatch",
    stars: 218,
    forks: 34,
    featured: true,
  },
  {
    id: 3,
    title: "NoteSync",
    description:
      "Aplicativo de notas colaborativas em tempo real com suporte a Markdown, histórico de versões e compartilhamento.",
    image: "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["React", "Socket.io", "MongoDB", "TypeScript"],
    demo: "https://notesync.demo",
    repo: "https://github.com/felipecoelho/notesync",
    stars: 176,
    forks: 29,
    featured: false,
  },
  {
    id: 4,
    title: "AuthKit",
    description:
      "Biblioteca open-source de autenticação para Node.js. Suporte a OAuth2, JWT, MFA e gerenciamento de sessões.",
    image: "https://images.unsplash.com/photo-1762330469123-ce98036eff16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["Node.js", "TypeScript", "JWT", "OAuth2"],
    demo: "https://authkit.demo",
    repo: "https://github.com/felipecoelho/authkit",
    stars: 491,
    forks: 87,
    featured: true,
  },
  {
    id: 5,
    title: "ShopAPI",
    description:
      "API RESTful completa para e-commerce com catálogo, carrinho, pagamentos via Stripe e relatórios.",
    image: "https://images.unsplash.com/photo-1619462729211-c8fd019ceae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["Node.js", "PostgreSQL", "Stripe", "Docker"],
    demo: "https://shopapi.demo",
    repo: "https://github.com/felipecoelho/shopapi",
    stars: 134,
    forks: 41,
    featured: false,
  },
  {
    id: 6,
    title: "OpenAPI Studio",
    description:
      "Ferramenta visual para criação, teste e documentação de APIs REST. Suporte a importação de specs Swagger.",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["React", "Express", "TypeScript", "OpenAPI"],
    demo: "https://openapi-studio.demo",
    repo: "https://github.com/felipecoelho/openapi-studio",
    stars: 267,
    forks: 52,
    featured: false,
  },
];

const filters = ["Todos", "React", "Node.js", "TypeScript", "PostgreSQL"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section
      id="projects"
      style={{ background: "#080808" }}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p style={{ color: "#a855f7" }} className="text-xs uppercase tracking-widest mb-3">
            {"// projetos"}
          </p>
          <h2
            style={{ color: "#f1f5f9", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}
          >
            Trabalhos em Destaque
          </h2>
          <p style={{ color: "#475569" }} className="mt-3 max-w-lg">
            Uma seleção de projetos open-source e aplicações que resolvi construir.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                background: activeFilter === f ? "rgba(168,85,247,0.15)" : "rgba(255,255,255,0.03)",
                border: activeFilter === f ? "1px solid rgba(168,85,247,0.5)" : "1px solid rgba(255,255,255,0.07)",
                color: activeFilter === f ? "#a855f7" : "#64748b",
                transition: "all 0.2s",
              }}
              className="px-4 py-1.5 rounded-lg text-xs tracking-wide hover:border-[#a855f7]/30"
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.3s ease",
              }}
              className="group rounded-xl overflow-hidden hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  style={{ background: "linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 60%)" }}
                  className="absolute inset-0"
                />
                {project.featured && (
                  <span
                    style={{
                      background: "rgba(168,85,247,0.2)",
                      border: "1px solid rgba(168,85,247,0.4)",
                      color: "#a855f7",
                    }}
                    className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full"
                  >
                    Destaque
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 style={{ color: "#e2e8f0" }} className="text-base">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span style={{ color: "#475569" }} className="flex items-center gap-1 text-xs">
                      <Star size={11} /> {project.stars}
                    </span>
                    <span style={{ color: "#475569" }} className="flex items-center gap-1 text-xs">
                      <GitFork size={11} /> {project.forks}
                    </span>
                  </div>
                </div>

                <p style={{ color: "#64748b", lineHeight: 1.6 }} className="text-xs mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(168,85,247,0.08)",
                        color: "#94a3b8",
                        fontSize: "0.65rem",
                      }}
                      className="px-2 py-0.5 rounded tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                      color: "#fff",
                      fontSize: "0.72rem",
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:opacity-85 transition-opacity"
                  >
                    <ExternalLink size={11} /> Demo ao vivo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#64748b",
                      fontSize: "0.72rem",
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:border-[#a855f7]/40 hover:text-[#a855f7] transition-all"
                  >
                    <Github size={11} /> Repositório
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/felipecoelho"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#a855f7",
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm hover:bg-[#a855f7]/10 transition-colors"
          >
            <Github size={15} />
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
