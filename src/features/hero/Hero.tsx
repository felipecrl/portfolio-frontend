import { useEffect, useRef } from "react";
import { Github, ExternalLink, ArrowDown } from "lucide-react";

const techStack = [
  { name: "React", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Node.js", color: "#68a063" },
  { name: "Next.js", color: "#ffffff" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ed" },
  { name: "Python", color: "#f7c948" },
  { name: "Redis", color: "#dc382d" },
  { name: "AWS", color: "#ff9900" },
  { name: "GraphQL", color: "#e535ab" },
];

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

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.alpha})`;
        ctx.fill();

        // Draw connections
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

    // Use ResizeObserver to reliably get dimensions after layout
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
    <section
      id="hero"
      style={{ background: "#080808", minHeight: "100vh" }}
      className="relative flex items-center justify-center overflow-hidden"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Glow Orb */}
      <div
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        className="absolute pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <div className="flex justify-center mb-8">
          <span
            style={{
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#a855f7",
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm tracking-wider"
          >
            <span
              style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }}
              className="w-2 h-2 rounded-full inline-block animate-pulse"
            />
            Disponível para projetos
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
          className="mb-4"
        >
          <span style={{ color: "#f1f5f9" }}>Felipe</span>{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #c026d3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Coelho
          </span>
        </h1>

        {/* Title */}
        <p
          style={{ color: "#94a3b8", letterSpacing: "0.2em", fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          className="uppercase mb-6 tracking-widest"
        >
          Full-Stack Developer
        </p>

        {/* Bio */}
        <p
          style={{ color: "#64748b", maxWidth: "560px", lineHeight: 1.7 }}
          className="mx-auto mb-10 text-base"
        >
          Construo aplicações web de alta performance do front ao back — com paixão
          por código limpo, arquitetura escalável e experiências que encantam.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/felipecoelho"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              boxShadow: "0 0 24px rgba(168,85,247,0.4)",
              color: "#fff",
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <Github size={16} />
            Ver GitHub
          </a>
          <button
            onClick={scrollToProjects}
            style={{
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#a855f7",
              background: "transparent",
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm tracking-wide hover:bg-[#a855f7]/10 transition-colors"
          >
            <ExternalLink size={16} />
            Ver Projetos
          </button>
        </div>

        {/* Tech Stack */}
        <div>
          <p style={{ color: "#334155" }} className="text-xs uppercase tracking-widest mb-4">
            Stack Tecnológica
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: tech.color,
                  fontSize: "0.75rem",
                }}
                className="px-3 py-1.5 rounded-lg tracking-wide hover:border-[#a855f7]/40 transition-colors cursor-default"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToProjects}
          style={{ color: "#334155" }}
          className="flex flex-col items-center gap-2 mt-16 mx-auto hover:text-[#a855f7] transition-colors animate-bounce"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}