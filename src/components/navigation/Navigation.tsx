import { useState, useEffect } from "react";
import { Menu, X, Code2, Moon, Sun } from "lucide-react";
import { navLinks } from "@/data/navigation";

const THEME_KEY = "portfolio-theme";
type ThemeMode = "light" | "dark";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState<ThemeMode>("dark");

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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  };

  return (
    <header
      className={[
        "fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-purple-500/20 bg-background/90 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("#hero")} className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
              <Code2 size={16} color="white" />
          </div>
          <span className="text-sm tracking-wider text-slate-800 dark:text-slate-200">
            FelipeCoelho<span className="text-purple-500">.</span>dev<span className="text-purple-500">.</span>br
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={[
                    "group relative text-sm tracking-wide transition-colors hover:text-purple-500",
                    isActive ? "text-purple-500" : "text-slate-600 dark:text-slate-400",
                  ].join(" ")}
                >
                  {link.label}
                  <span
                    className={[
                      "absolute -bottom-1 left-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full",
                      isActive ? "w-full" : "w-0",
                    ].join(" ")}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/50 text-purple-500 transition-colors hover:bg-purple-500/10"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="https://github.com/felipecoelho"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center gap-2 rounded-lg border border-purple-500/50 px-4 py-1.5 text-sm text-purple-500 transition-colors hover:bg-purple-500/10 md:flex"
          >
            GitHub
          </a>
        </div>

        <button
          className="text-slate-600 dark:text-slate-400 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="flex flex-col gap-4 border-t border-purple-500/20 bg-background/95 px-6 py-6 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-left text-sm tracking-wide text-slate-600 dark:text-slate-400 transition-colors hover:text-purple-500"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Tema Claro" : "Tema Escuro"}
          </button>

          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm tracking-wide text-slate-600 dark:text-slate-400 transition-colors hover:text-purple-500"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}