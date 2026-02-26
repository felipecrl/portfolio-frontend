import { useState, useRef, useEffect } from "react";
import { Briefcase, GraduationCap, Award, ExternalLink, ChevronDown } from "lucide-react";

type EntryType = "work" | "education" | "achievement";

interface TimelineEntry {
  id: number;
  type: EntryType;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  duration: string;
  current?: boolean;
  description: string;
  highlights: string[];
  tags: string[];
}

const entries: TimelineEntry[] = [
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

const typeConfig: Record<EntryType, { icon: typeof Briefcase; label: string; color: string; bg: string }> = {
  work: {
    icon: Briefcase,
    label: "Experiência",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.12)",
  },
  education: {
    icon: GraduationCap,
    label: "Educação",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.12)",
  },
  achievement: {
    icon: Award,
    label: "Conquista",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
  },
};

const filters: { label: string; value: EntryType | "all" }[] = [
  { label: "Tudo", value: "all" },
  { label: "Experiência", value: "work" },
  { label: "Educação", value: "education" },
  { label: "Conquistas", value: "achievement" },
];

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const config = typeConfig[entry.type];
  const Icon = config.icon;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
      className="relative flex gap-5 md:gap-8"
    >
      {/* Timeline Spine & Icon */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Icon dot */}
        <div
          style={{
            background: config.bg,
            border: `2px solid ${config.color}`,
            boxShadow: `0 0 12px ${config.color}40`,
          }}
          className="w-10 h-10 rounded-xl flex items-center justify-center z-10 flex-shrink-0"
        >
          <Icon size={16} color={config.color} />
        </div>
        {/* Vertical line */}
        <div
          style={{
            background: "linear-gradient(to bottom, rgba(168,85,247,0.3), rgba(168,85,247,0.05))",
            width: "1px",
            flex: 1,
            marginTop: "6px",
          }}
        />
      </div>

      {/* Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid ${expanded ? `${config.color}30` : "rgba(255,255,255,0.07)"}`,
          transition: "border-color 0.3s, background 0.3s",
          marginBottom: "20px",
        }}
        className={`flex-1 rounded-xl overflow-hidden ${expanded ? "bg-[#a855f7]/3" : ""}`}
      >
        {/* Card Header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-5 md:p-6 group"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              {/* Type Badge + Period */}
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span
                  style={{
                    background: config.bg,
                    color: config.color,
                    border: `1px solid ${config.color}35`,
                    fontSize: "0.62rem",
                  }}
                  className="px-2.5 py-0.5 rounded-full uppercase tracking-widest"
                >
                  {config.label}
                </span>
                {entry.current && (
                  <span
                    style={{
                      background: "rgba(74,222,128,0.1)",
                      border: "1px solid rgba(74,222,128,0.3)",
                      color: "#4ade80",
                      fontSize: "0.62rem",
                    }}
                    className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full"
                  >
                    <span
                      style={{ background: "#4ade80", boxShadow: "0 0 4px #4ade80" }}
                      className="w-1.5 h-1.5 rounded-full"
                    />
                    Atual
                  </span>
                )}
              </div>

              {/* Role */}
              <h3
                style={{ color: "#e2e8f0", lineHeight: 1.3 }}
                className="text-base mb-1"
              >
                {entry.role}
              </h3>

              {/* Company + Location */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {entry.companyUrl ? (
                  <a
                    href={entry.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ color: config.color }}
                    className="flex items-center gap-1 text-xs hover:underline"
                  >
                    {entry.company}
                    <ExternalLink size={10} />
                  </a>
                ) : (
                  <span style={{ color: config.color }} className="text-xs">
                    {entry.company}
                  </span>
                )}
                <span style={{ color: "#1e293b" }} className="text-xs hidden sm:inline">·</span>
                <span style={{ color: "#475569" }} className="text-xs">
                  {entry.location}
                </span>
              </div>
            </div>

            {/* Right side: period + expand */}
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <div className="text-right">
                <p style={{ color: "#64748b" }} className="text-xs whitespace-nowrap">
                  {entry.period}
                </p>
                {entry.duration && (
                  <p style={{ color: "#334155" }} className="text-xs mt-0.5">
                    {entry.duration}
                  </p>
                )}
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#475569",
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
                className="w-6 h-6 rounded-md flex items-center justify-center"
              >
                <ChevronDown size={13} />
              </div>
            </div>
          </div>
        </button>

        {/* Expandable Body */}
        <div
          style={{
            maxHeight: expanded ? "600px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
          }}
        >
          <div
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            className="px-5 md:px-6 pt-5 pb-6 space-y-5"
          >
            {/* Description */}
            <p style={{ color: "#64748b", lineHeight: 1.75 }} className="text-sm">
              {entry.description}
            </p>

            {/* Highlights */}
            <div>
              <p style={{ color: "#334155" }} className="text-xs uppercase tracking-widest mb-3">
                Destaques
              </p>
              <ul className="space-y-2">
                {entry.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      style={{
                        background: config.color,
                        boxShadow: `0 0 6px ${config.color}60`,
                        marginTop: "6px",
                        flexShrink: 0,
                      }}
                      className="w-1.5 h-1.5 rounded-full"
                    />
                    <span style={{ color: "#94a3b8", lineHeight: 1.6 }} className="text-sm">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#475569",
                    fontSize: "0.68rem",
                  }}
                  className="px-2.5 py-1 rounded-lg tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Timeline() {
  const [activeFilter, setActiveFilter] = useState<EntryType | "all">("all");

  const filtered = activeFilter === "all"
    ? entries
    : entries.filter((e) => e.type === activeFilter);

  return (
    <section
      id="timeline"
      style={{ background: "#080808" }}
      className="py-24 px-6"
    >
      {/* Divider */}
      <div
        style={{
          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)",
        }}
        className="h-px max-w-6xl mx-auto mb-24 -mt-1"
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p style={{ color: "#a855f7" }} className="text-xs uppercase tracking-widest mb-3">
            {"// trajetória"}
          </p>
          <h2
            style={{ color: "#f1f5f9", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}
          >
            Histórico Profissional
          </h2>
          <p style={{ color: "#475569" }} className="mt-3 max-w-lg">
            Uma linha do tempo da minha carreira — empresas, formação e conquistas que me moldaram como engenheiro.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[
            { label: "Anos de carreira", value: "5+" },
            { label: "Empresas", value: "3" },
            { label: "Países atendidos", value: "6+" },
            { label: "Certificações", value: "2" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              className="rounded-xl p-4 text-center"
            >
              <p
                style={{
                  background: "linear-gradient(135deg, #a855f7, #c026d3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "1.6rem",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </p>
              <p style={{ color: "#334155" }} className="text-xs mt-1.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              style={{
                background:
                  activeFilter === f.value
                    ? "rgba(168,85,247,0.15)"
                    : "rgba(255,255,255,0.03)",
                border:
                  activeFilter === f.value
                    ? "1px solid rgba(168,85,247,0.5)"
                    : "1px solid rgba(255,255,255,0.07)",
                color: activeFilter === f.value ? "#a855f7" : "#64748b",
                transition: "all 0.2s",
              }}
              className="px-4 py-1.5 rounded-lg text-xs tracking-wide hover:border-[#a855f7]/30"
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div>
          {filtered.map((entry, index) => (
            <TimelineCard key={entry.id} entry={entry} index={index} />
          ))}

          {/* End dot */}
          <div className="flex items-center gap-5 md:gap-8">
            <div className="flex flex-col items-center flex-shrink-0 w-10">
              <div
                style={{
                  background: "rgba(168,85,247,0.08)",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
                className="w-3 h-3 rounded-full"
              />
            </div>
            <p style={{ color: "#1e293b" }} className="text-xs italic mb-5">
              Início da jornada · 2018
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
