import { useState } from "react";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { projectFilters, projects } from "@/data/projects";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="mb-3 text-xs uppercase tracking-widest text-purple-500">
            {"// projetos"}
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-slate-900 dark:text-slate-100">
            Trabalhos em Destaque
          </h2>
          <p className="mt-3 max-w-lg text-slate-600 dark:text-slate-500">
            Uma seleção de projetos open-source e aplicações que resolvi construir.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={[
                "rounded-lg border px-4 py-1.5 text-xs tracking-wide transition-colors",
                activeFilter === f
                  ? "border-purple-500/50 bg-purple-500/15 text-purple-500"
                  : "border-slate-200/80 bg-slate-50/80 text-slate-600 hover:border-purple-500/30 dark:border-white/10 dark:bg-white/5 dark:text-slate-500",
              ].join(" ")}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/80 transition-colors hover:border-purple-500/30 hover:bg-purple-500/5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative overflow-hidden h-44">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent dark:from-[#080808]/90" />
                {project.featured && (
                  <span className="absolute right-3 top-3 rounded-full border border-purple-500/40 bg-purple-500/20 px-2 py-0.5 text-xs text-purple-500">
                    Destaque
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base text-slate-800 dark:text-slate-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-600">
                      <Star size={11} /> {project.stars}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-600">
                      <GitFork size={11} /> {project.forks}
                    </span>
                  </div>
                </div>

                <p className="mb-4 text-xs leading-relaxed text-slate-600 dark:text-slate-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded bg-purple-500/10 px-2 py-0.5 text-[0.65rem] tracking-wide text-slate-500 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 border-t border-slate-200/80 pt-3 dark:border-white/5">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 px-3 py-1.5 text-[0.72rem] text-white transition-opacity hover:opacity-85"
                  >
                    <ExternalLink size={11} /> Demo ao vivo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-[0.72rem] text-slate-600 transition-colors hover:border-purple-500/40 hover:text-purple-500 dark:border-white/15 dark:text-slate-500"
                  >
                    <Github size={11} /> Repositório
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/felipecrl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 px-6 py-3 text-sm text-purple-500 transition-colors hover:bg-purple-500/10"
          >
            <Github size={15} />
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
