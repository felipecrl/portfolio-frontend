import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Projetos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Trajetória", href: "#timeline" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        background: isScrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(168,85,247,0.15)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 group"
        >
          <div
            style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}
            className="w-8 h-8 rounded-lg flex items-center justify-center"
          >
            <Code2 size={16} color="white" />
          </div>
          <span style={{ color: "#e2e8f0" }} className="tracking-wider text-sm">
            Felipe<span style={{ color: "#a855f7" }}>.</span>dev
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    color: isActive ? "#a855f7" : "#94a3b8",
                    transition: "color 0.2s",
                  }}
                  className="text-sm tracking-wide hover:text-[#a855f7] relative group"
                >
                  {link.label}
                  <span
                    style={{
                      background: "#a855f7",
                      width: isActive ? "100%" : "0%",
                      transition: "width 0.3s ease",
                    }}
                    className="absolute -bottom-1 left-0 h-px group-hover:w-full"
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="https://github.com/felipecoelho"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: "1px solid rgba(168,85,247,0.5)",
            color: "#a855f7",
            transition: "all 0.2s",
          }}
          className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm hover:bg-[#a855f7]/10"
        >
          GitHub
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          style={{ color: "#94a3b8" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{ background: "rgba(8,8,8,0.98)", borderTop: "1px solid rgba(168,85,247,0.15)" }}
          className="md:hidden px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{ color: "#94a3b8" }}
              className="text-left text-sm tracking-wide hover:text-[#a855f7]"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}