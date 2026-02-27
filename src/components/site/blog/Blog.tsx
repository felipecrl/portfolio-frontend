import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts, blogTagTone } from "@/data/blog";

export function Blog() {
  const featured = blogPosts.find((post) => post.featured);
  const rest = blogPosts.filter((post) => !post.featured);

  return (
    <section id="blog" className="bg-background px-6 py-24">
      <div className="-mt-1 mx-auto mb-24 h-px max-w-6xl bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-purple-500">{"// artigos"}</p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-slate-900 dark:text-slate-100">Escrita Técnica</h2>
            <p className="mt-3 max-w-lg text-slate-600 dark:text-slate-500">
              Compartilho o que aprendo — de arquitetura a boas práticas do mundo real.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-purple-500/30 px-4 py-2 text-sm text-purple-500 transition-colors hover:bg-purple-500/10"
          >
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        {featured && (
          <a
            href={featured.href}
            className="group mb-6 block rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6 transition-colors hover:border-purple-500/50 hover:bg-purple-500/15 md:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full border border-purple-500/40 bg-purple-500/20 px-2.5 py-1 text-[0.65rem] uppercase tracking-widest text-purple-500">
                    Artigo em destaque
                  </span>
                </div>

                <h3 className="mb-3 text-[clamp(1.1rem,2.5vw,1.5rem)] leading-tight text-slate-800 dark:text-slate-200 transition-colors group-hover:text-purple-500">
                  {featured.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-500">{featured.excerpt}</p>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className={[
                          "rounded-full border px-2.5 py-1 text-[0.65rem]",
                          blogTagTone[tag] ?? "border-purple-500/25 bg-purple-500/10 text-purple-400",
                        ].join(" ")}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="ml-auto flex items-center gap-4 text-xs text-slate-500 dark:text-slate-700">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {featured.readTime} de leitura
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center self-center rounded-xl border border-purple-500/20 bg-purple-500/10 transition-colors group-hover:bg-purple-500/15 md:h-14 md:w-14">
                <ArrowRight size={20} className="text-purple-500 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <a
              key={post.id}
              href={post.href}
              className="group block rounded-xl border border-slate-200/80 bg-slate-50/80 p-5 transition-colors hover:border-purple-500/25 hover:bg-purple-500/5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-3 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={[
                      "rounded px-2 py-0.5 text-[0.62rem]",
                      blogTagTone[tag] ?? "border-purple-500/25 bg-purple-500/10 text-purple-400",
                    ].join(" ")}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 transition-colors group-hover:text-purple-500">
                {post.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-500">{post.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-700">
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
