import { useState } from "react";
import { extraTechs, skillCategories, skillsSummary, widthClassByLevel } from "@/data/skills";

const getLevelLabel = (level: number) => {
  if (level >= 90) {
    return {
      label: "Expert",
      badgeClass: "border-purple-500/35 bg-purple-500/10 text-purple-400",
      textClass: "text-purple-400",
      barClass: "from-purple-500/70 to-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.35)]",
    };
  }
  if (level >= 75) {
    return {
      label: "Avançado",
      badgeClass: "border-purple-500/35 bg-purple-500/10 text-purple-400",
      textClass: "text-purple-400",
      barClass: "from-purple-500/70 to-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.35)]",
    };
  }
  if (level >= 60) {
    return {
      label: "Intermediário",
      badgeClass: "border-indigo-500/35 bg-indigo-500/10 text-indigo-400",
      textClass: "text-indigo-400",
      barClass: "from-indigo-500/70 to-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.35)]",
    };
  }
  return {
    label: "Básico",
    badgeClass: "border-slate-600/35 bg-slate-700/30 text-slate-500",
    textClass: "text-slate-500",
    barClass: "from-slate-500/70 to-slate-500 shadow-[0_0_8px_rgba(100,116,139,0.35)]",
  };
};

export function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const active = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="bg-background px-6 py-24">
      <div className="-mt-1 mx-auto mb-24 h-px max-w-6xl bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="mb-3 text-xs uppercase tracking-widest text-purple-500">
            {"// habilidades"}
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-slate-900 dark:text-slate-100">
            Matriz de Competências
          </h2>
          <p className="mt-3 max-w-lg text-slate-600 dark:text-slate-500">
            Tecnologias que domino e aplico no dia a dia, organizadas por área.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={[
                  "flex min-w-max items-center gap-3 rounded-xl border px-5 py-3.5 text-left text-sm transition-colors hover:border-purple-500/25 hover:text-slate-700 dark:hover:text-slate-400",
                  activeTab === cat.id
                    ? "border-purple-500/40 bg-purple-500/12 text-purple-500"
                    : "border-slate-200/80 bg-slate-50/80 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-500",
                ].join(" ")}
              >
                <span className="text-base">{cat.icon}</span>
                <span className="tracking-wide">{cat.label}</span>
                {activeTab === cat.id && (
                  <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-purple-500 lg:block" />
                )}
              </button>
            ))}

            <div className="mt-4 hidden rounded-xl border border-purple-500/20 bg-purple-500/10 p-5 lg:block">
              <p className="mb-4 text-xs uppercase tracking-wider text-slate-600 dark:text-slate-500">Resumo</p>
              <div className="space-y-3">
                {skillsSummary.map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 dark:text-slate-600">{stat.label}</span>
                    <span className="text-sm text-purple-500">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-6 md:p-8 lg:col-span-2 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">{active.icon}</span>
              <div>
                <h3 className="text-slate-800 dark:text-slate-200">{active.label}</h3>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-600">
                  {active.skills.length} tecnologias
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {active.skills.map((skill) => {
                const level = getLevelLabel(skill.level);
                return (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 dark:text-slate-600">
                          {skill.years}
                        </span>
                        <span
                          className={[
                            "rounded-full border px-2 py-0.5 text-[0.65rem] tracking-wide",
                            level.badgeClass,
                          ].join(" ")}
                        >
                          {level.label}
                        </span>
                        <span className={["w-8 text-right text-xs tabular-nums", level.textClass].join(" ")}>
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                      <div
                        className={[
                          "h-full rounded-full bg-gradient-to-r transition-all duration-700",
                          widthClassByLevel[skill.level],
                          level.barClass,
                        ].join(" ")}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="mb-5 text-center text-xs uppercase tracking-widest text-slate-500 dark:text-slate-700">
            Também trabalhei com
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {extraTechs.map((tech) => (
              <span key={tech} className="cursor-default rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-[0.72rem] tracking-wide text-slate-500 transition-colors hover:border-purple-500/25 hover:text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-600 dark:hover:text-slate-500">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
