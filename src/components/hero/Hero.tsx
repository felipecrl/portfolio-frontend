import { useEffect, useRef } from "react";
import { Github, ExternalLink, ArrowDown } from "lucide-react";
import { techStack } from "@/data/hero";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];

    const init = (w: number, h: number) => {
      canvas.width = w;
      canvas.height = h;
      particles = [];
      for (let i = 0; i < 90; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: Math.random() * 1.8 + 0.4,
          alpha: Math.random() * 0.6 + 0.15,
        });
      }
    };

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(168,85,247,${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0) {
        cancelAnimationFrame(animId);
        init(width, height);
        animate();
      }
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <span className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm tracking-wider text-purple-500">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_6px_#4ade80]" />
            Disponível para projetos
          </span>
        </div>

        <h1 className="mb-4 text-[clamp(3rem,8vw,5.5rem)] leading-[1.1] tracking-[-0.02em]">
          <span className="text-slate-900 dark:text-slate-100">Felipe</span>{" "}
          <span className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent">
            Coelho
          </span>
        </h1>

        <p className="mb-6 text-[clamp(0.9rem,2vw,1.1rem)] uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
          Desenvolvedor Full-Stack
        </p>

        <p className="mx-auto mb-10 max-w-[560px] text-base leading-relaxed text-slate-600 dark:text-slate-500">
          Construo aplicações web de alta performance do front ao back — com paixão
          por código limpo, arquitetura escalável e experiências que encantam.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/felipecoelho"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 px-6 py-3 text-sm tracking-wide text-white shadow-[0_0_24px_rgba(168,85,247,0.4)] transition-opacity hover:opacity-90"
          >
            <Github size={16} />
            Ver GitHub
          </a>
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 rounded-xl border border-purple-500/40 px-6 py-3 text-sm tracking-wide text-purple-500 transition-colors hover:bg-purple-500/10"
          >
            <ExternalLink size={16} />
            Ver Projetos
          </button>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-700">
            Stack Tecnológica
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={[
                  "cursor-default rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs tracking-wide transition-colors hover:border-purple-500/40 dark:border-white/10 dark:bg-white/5",
                  tech.tone,
                ].join(" ")}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="mx-auto mt-16 flex animate-bounce flex-col items-center gap-2 text-slate-500 dark:text-slate-700 transition-colors hover:text-purple-500"
          aria-label="Ir para projetos"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}