import { useEffect, useRef, useState } from "react";
import { Award, Briefcase, ChevronDown, ExternalLink, GraduationCap } from "lucide-react";
import type { EntryType, TimelineEntry } from "@/types/content";
import { timelineEntries, timelineFilters, timelineStats } from "@/data/timeline";

const typeConfig = {
  work: {
    icon: Briefcase,
    label: "Experiência",
    tone: "text-purple-500",
    badge: "border-purple-500/35 bg-purple-500/10 text-purple-500",
    iconBox: "border-purple-500/60 bg-purple-500/10 shadow-[0_0_12px_rgba(168,85,247,0.25)]",
    bullet: "bg-purple-500",
  },
  education: {
    icon: GraduationCap,
    label: "Educação",
    tone: "text-blue-400",
    badge: "border-blue-400/35 bg-blue-400/10 text-blue-400",
    iconBox: "border-blue-400/60 bg-blue-400/10 shadow-[0_0_12px_rgba(96,165,250,0.2)]",
    bullet: "bg-blue-400",
  },
  achievement: {
    icon: Award,
    label: "Conquista",
    tone: "text-amber-400",
    badge: "border-amber-400/35 bg-amber-400/10 text-amber-400",
    iconBox: "border-amber-400/60 bg-amber-400/10 shadow-[0_0_12px_rgba(245,158,11,0.2)]",
    bullet: "bg-amber-400",
  },
} as const;

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([item]) => {
        if (item.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const config = typeConfig[entry.type];
  const Icon = config.icon;

  return (
    <div
      ref={cardRef}
      className={[
        "relative flex gap-5 transition-all duration-500 md:gap-8",
        visible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
      ].join(" ")}
    >
      <div className="flex shrink-0 flex-col items-center">
        <div className={["z-10 flex h-10 w-10 items-center justify-center rounded-xl border-2", config.iconBox].join(" ")}>
          <Icon size={16} className={config.tone} />
        </div>
        <div className="mt-1.5 h-full w-px bg-gradient-to-b from-purple-500/35 to-purple-500/5" />
      </div>

      <div
        className={[
          "mb-5 flex-1 overflow-hidden rounded-xl border bg-slate-50/80 transition-colors dark:bg-white/5",
          expanded ? "border-purple-500/30 bg-purple-500/[0.035]" : "border-slate-200/80 dark:border-white/10",
        ].join(" ")}
      >
        <button onClick={() => setExpanded((state) => !state)} className="group w-full p-5 text-left md:p-6" type="button">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="mb-2.5 flex flex-wrap items-center gap-2">
                <span className={["rounded-full border px-2.5 py-0.5 text-[0.62rem] uppercase tracking-widest", config.badge].join(" ")}>
                  {config.label}
                </span>
                {entry.current && (
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[0.62rem] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_#4ade80]" />
                    Atual
                  </span>
                )}
              </div>

              <h3 className="mb-1 text-base leading-snug text-slate-800 dark:text-slate-200">{entry.role}</h3>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {entry.companyUrl ? (
                  <a
                    href={entry.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className={["flex items-center gap-1 text-xs hover:underline", config.tone].join(" ")}
                  >
                    {entry.company}
                    <ExternalLink size={10} />
                  </a>
                ) : (
                  <span className={["text-xs", config.tone].join(" ")}>{entry.company}</span>
                )}
                <span className="hidden text-xs text-slate-500 dark:text-slate-800 sm:inline">·</span>
                <span className="text-xs text-slate-500 dark:text-slate-600">{entry.location}</span>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-2">
              <div className="text-right">
                <p className="whitespace-nowrap text-xs text-slate-600 dark:text-slate-500">{entry.period}</p>
                {entry.duration && <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-700">{entry.duration}</p>}
              </div>
              <div
                className={[
                  "flex h-6 w-6 items-center justify-center rounded-md border border-slate-200/80 bg-white text-slate-500 transition-transform duration-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-600",
                  expanded ? "rotate-180" : "rotate-0",
                ].join(" ")}
              >
                <ChevronDown size={13} />
              </div>
            </div>
          </div>
        </button>

        <div
          className={[
            "overflow-hidden transition-all duration-300",
            expanded ? "max-h-[640px]" : "max-h-0",
          ].join(" ")}
        >
          <div className="space-y-5 border-t border-slate-200/80 px-5 pb-6 pt-5 md:px-6 dark:border-white/5">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-500">{entry.description}</p>

            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-700">Destaques</p>
              <ul className="space-y-2">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <span className={["mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", config.bullet].join(" ")} />
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span key={tag} className="rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-[0.68rem] tracking-wide text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-600">
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

  const filteredEntries = activeFilter === "all"
    ? timelineEntries
    : timelineEntries.filter((entry) => entry.type === activeFilter);

  return (
    <section id="timeline" className="bg-background px-6 py-24">
      <div className="-mt-1 mx-auto mb-24 h-px max-w-6xl bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-14">
          <p className="mb-3 text-xs uppercase tracking-widest text-purple-500">{"// trajetória"}</p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-slate-900 dark:text-slate-100">Histórico Profissional</h2>
          <p className="mt-3 max-w-lg text-slate-600 dark:text-slate-500">
            Uma linha do tempo da minha carreira — empresas, formação e conquistas que me moldaram como engenheiro.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {timelineStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-center dark:border-white/10 dark:bg-white/5">
              <p className="bg-gradient-to-br from-purple-500 to-purple-700 bg-clip-text text-[1.6rem] leading-none text-transparent">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-700">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {timelineFilters.map((filterOption) => (
            <button
              key={filterOption.value}
              type="button"
              onClick={() => setActiveFilter(filterOption.value)}
              className={[
                "rounded-lg border px-4 py-1.5 text-xs tracking-wide transition-colors",
                activeFilter === filterOption.value
                  ? "border-purple-500/50 bg-purple-500/15 text-purple-500"
                  : "border-slate-200/80 bg-slate-50/80 text-slate-600 hover:border-purple-500/30 dark:border-white/10 dark:bg-white/5 dark:text-slate-500",
              ].join(" ")}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        <div>
          {filteredEntries.map((entry, index) => (
            <TimelineCard key={entry.id} entry={entry} index={index} />
          ))}

          <div className="flex items-center gap-5 md:gap-8">
            <div className="flex w-10 shrink-0 flex-col items-center">
              <div className="h-3 w-3 rounded-full border border-purple-500/20 bg-purple-500/10" />
            </div>
            <p className="mb-5 text-xs italic text-slate-500 dark:text-slate-800">Início da jornada · 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}
