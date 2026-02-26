import { useState } from "react";

const skillCategories = [
  {
    id: "frontend",
    label: "Front-end",
    icon: "🖥️",
    skills: [
      { name: "React / Next.js", level: 95, years: "4 anos" },
      { name: "TypeScript", level: 90, years: "3 anos" },
      { name: "CSS / Tailwind", level: 92, years: "4 anos" },
      { name: "Vue.js", level: 72, years: "2 anos" },
      { name: "React Native", level: 78, years: "2 anos" },
    ],
  },
  {
    id: "backend",
    label: "Back-end",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: 93, years: "4 anos" },
      { name: "Python / FastAPI", level: 80, years: "3 anos" },
      { name: "PostgreSQL", level: 88, years: "3 anos" },
      { name: "MongoDB", level: 82, years: "3 anos" },
      { name: "Redis", level: 75, years: "2 anos" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: "🔧",
    skills: [
      { name: "Docker / Compose", level: 82, years: "3 anos" },
      { name: "AWS (EC2, S3, RDS)", level: 74, years: "2 anos" },
      { name: "CI/CD (GitHub Actions)", level: 80, years: "2 anos" },
      { name: "Kubernetes", level: 62, years: "1 ano" },
      { name: "Terraform", level: 58, years: "1 ano" },
    ],
  },
  {
    id: "tools",
    label: "Ferramentas",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 97, years: "5 anos" },
      { name: "GraphQL", level: 80, years: "2 anos" },
      { name: "REST APIs", level: 96, years: "4 anos" },
      { name: "Jest / Testing", level: 84, years: "3 anos" },
      { name: "Figma", level: 70, years: "2 anos" },
    ],
  },
];

const getLevelLabel = (level: number) => {
  if (level >= 90) return { label: "Expert", color: "#a855f7" };
  if (level >= 75) return { label: "Avançado", color: "#7c3aed" };
  if (level >= 60) return { label: "Intermediário", color: "#6366f1" };
  return { label: "Básico", color: "#475569" };
};

export function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const active = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section
      id="skills"
      style={{ background: "#070707" }}
      className="py-24 px-6"
    >
      {/* Divider line */}
      <div
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }}
        className="h-px max-w-6xl mx-auto mb-24 -mt-1"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p style={{ color: "#a855f7" }} className="text-xs uppercase tracking-widest mb-3">
            {"// habilidades"}
          </p>
          <h2 style={{ color: "#f1f5f9", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}>
            Matriz de Competências
          </h2>
          <p style={{ color: "#475569" }} className="mt-3 max-w-lg">
            Tecnologias que domino e aplico no dia a dia, organizadas por área.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tab List */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  background: activeTab === cat.id
                    ? "rgba(168,85,247,0.12)"
                    : "rgba(255,255,255,0.02)",
                  border: activeTab === cat.id
                    ? "1px solid rgba(168,85,247,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                  color: activeTab === cat.id ? "#a855f7" : "#64748b",
                  transition: "all 0.2s",
                  minWidth: "fit-content",
                }}
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm text-left hover:border-[#a855f7]/25 hover:text-[#94a3b8]"
              >
                <span className="text-base">{cat.icon}</span>
                <span className="tracking-wide">{cat.label}</span>
                {activeTab === cat.id && (
                  <span
                    style={{ background: "#a855f7" }}
                    className="ml-auto w-1.5 h-1.5 rounded-full hidden lg:block"
                  />
                )}
              </button>
            ))}

            {/* Quick Stats */}
            <div
              style={{
                background: "rgba(168,85,247,0.06)",
                border: "1px solid rgba(168,85,247,0.15)",
              }}
              className="hidden lg:block mt-4 p-5 rounded-xl"
            >
              <p style={{ color: "#64748b" }} className="text-xs tracking-wider uppercase mb-4">Resumo</p>
              <div className="space-y-3">
                {[
                  { label: "Anos de experiência", value: "5+" },
                  { label: "Projetos entregues", value: "40+" },
                  { label: "Contribuições OSS", value: "120+" },
                  { label: "Tecnologias", value: "20+" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span style={{ color: "#475569" }} className="text-xs">{stat.label}</span>
                    <span style={{ color: "#a855f7" }} className="text-sm">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Panel */}
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            className="lg:col-span-2 rounded-xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">{active.icon}</span>
              <div>
                <h3 style={{ color: "#e2e8f0" }}>{active.label}</h3>
                <p style={{ color: "#475569" }} className="text-xs mt-0.5">
                  {active.skills.length} tecnologias
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {active.skills.map((skill) => {
                const { label: levelLabel, color } = getLevelLabel(skill.level);
                return (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span style={{ color: "#cbd5e1" }} className="text-sm">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span style={{ color: "#475569" }} className="text-xs">
                          {skill.years}
                        </span>
                        <span
                          style={{
                            background: `${color}18`,
                            color,
                            border: `1px solid ${color}40`,
                            fontSize: "0.65rem",
                          }}
                          className="px-2 py-0.5 rounded-full tracking-wide"
                        >
                          {levelLabel}
                        </span>
                        <span style={{ color }} className="text-xs tabular-nums w-8 text-right">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div
                      style={{ background: "rgba(255,255,255,0.05)" }}
                      className="h-1.5 rounded-full overflow-hidden"
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${color}80, ${color})`,
                          boxShadow: `0 0 8px ${color}60`,
                          transition: "width 1s ease",
                        }}
                        className="h-full rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tech badges - additional */}
        <div className="mt-12">
          <p style={{ color: "#334155" }} className="text-xs uppercase tracking-widest mb-5 text-center">
            Também trabalhei com
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Prisma", "tRPC", "Zustand", "React Query", "Axios", "Zod", "ESLint",
              "Prettier", "Storybook", "Cypress", "Playwright", "Nginx", "Linux",
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#475569",
                  fontSize: "0.72rem",
                }}
                className="px-3 py-1.5 rounded-lg tracking-wide hover:border-[#a855f7]/25 hover:text-[#64748b] transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
