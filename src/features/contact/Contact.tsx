import { useState } from "react";
import { Send, Download, Github, Linkedin, Twitter, Mail, CheckCircle2, Loader2 } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/felipecoelho",
    handle: "@felipecoelho",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/felipecoelho",
    handle: "Felipe Coelho",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    href: "https://twitter.com/felipecoelho",
    handle: "@felipecoelho_",
  },
  {
    icon: Mail,
    label: "E-mail",
    href: "mailto:contato@felipecoelho.dev",
    handle: "contato@felipecoelho.dev",
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1800);
  };

  return (
    <section
      id="contact"
      style={{ background: "#070707" }}
      className="py-24 px-6"
    >
      {/* Divider */}
      <div
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }}
        className="h-px max-w-6xl mx-auto mb-24 -mt-1"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <p style={{ color: "#a855f7" }} className="text-xs uppercase tracking-widest mb-3">
            {"// contato"}
          </p>
          <h2 style={{ color: "#f1f5f9", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}>
            Vamos Conversar
          </h2>
          <p style={{ color: "#475569" }} className="mt-3 max-w-lg mx-auto">
            Seja para um projeto, uma colaboração ou só para trocar uma ideia — estou sempre aberto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Panel */}
          <div className="lg:col-span-2 space-y-5">
            {/* Resume Download */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(124,58,237,0.08))",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
              className="rounded-xl p-6"
            >
              <h3 style={{ color: "#e2e8f0" }} className="text-base mb-2">
                Currículo
              </h3>
              <p style={{ color: "#64748b" }} className="text-xs mb-5 leading-relaxed">
                Baixe meu currículo completo com histórico profissional, formação e projetos.
              </p>
              <a
                href="#"
                download="Felipe_Coelho_CV.pdf"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                  boxShadow: "0 0 20px rgba(168,85,247,0.3)",
                  color: "#fff",
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                <Download size={15} />
                Download CV (PDF)
              </a>
            </div>

            {/* Social Links */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              className="rounded-xl p-6"
            >
              <h3 style={{ color: "#e2e8f0" }} className="text-base mb-4">
                Redes Sociais
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "all 0.2s",
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5 group"
                  >
                    <social.icon size={16} color="#64748b" className="group-hover:text-[#a855f7] flex-shrink-0" />
                    <div className="min-w-0">
                      <p style={{ color: "#94a3b8" }} className="text-xs">
                        {social.label}
                      </p>
                      <p style={{ color: "#475569" }} className="text-xs truncate">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            className="lg:col-span-3 rounded-xl p-6 md:p-8"
          >
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <div
                  style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                >
                  <CheckCircle2 size={28} color="#a855f7" />
                </div>
                <h3 style={{ color: "#e2e8f0" }} className="text-lg mb-2">
                  Mensagem enviada!
                </h3>
                <p style={{ color: "#64748b" }} className="text-sm mb-6">
                  Obrigado pelo contato. Responderei em breve.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{ border: "1px solid rgba(168,85,247,0.3)", color: "#a855f7" }}
                  className="px-5 py-2 rounded-lg text-sm hover:bg-[#a855f7]/10 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 style={{ color: "#e2e8f0" }} className="text-base mb-6">
                  Enviar Mensagem
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={{ color: "#64748b" }} className="block text-xs uppercase tracking-wider mb-2">
                      Nome
                    </label>
                    <input
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#e2e8f0",
                        outline: "none",
                      }}
                      className="w-full px-4 py-3 rounded-xl text-sm placeholder:text-[#334155] focus:border-[#a855f7]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label style={{ color: "#64748b" }} className="block text-xs uppercase tracking-wider mb-2">
                      E-mail
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#e2e8f0",
                        outline: "none",
                      }}
                      className="w-full px-4 py-3 rounded-xl text-sm placeholder:text-[#334155] focus:border-[#a855f7]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ color: "#64748b" }} className="block text-xs uppercase tracking-wider mb-2">
                    Assunto
                  </label>
                  <input
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    placeholder="Como posso ajudar?"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#e2e8f0",
                      outline: "none",
                    }}
                    className="w-full px-4 py-3 rounded-xl text-sm placeholder:text-[#334155] focus:border-[#a855f7]/50 transition-colors"
                  />
                </div>

                <div>
                  <label style={{ color: "#64748b" }} className="block text-xs uppercase tracking-wider mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Conte mais sobre seu projeto ou ideia..."
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#e2e8f0",
                      outline: "none",
                      resize: "none",
                    }}
                    className="w-full px-4 py-3 rounded-xl text-sm placeholder:text-[#334155] focus:border-[#a855f7]/50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                    boxShadow: "0 0 24px rgba(168,85,247,0.35)",
                    color: "#fff",
                    opacity: status === "sending" ? 0.8 : 1,
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <div
              style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}
              className="w-6 h-6 rounded-md flex items-center justify-center"
            >
              <span style={{ color: "#fff", fontSize: "0.6rem" }}>FC</span>
            </div>
            <span style={{ color: "#334155" }} className="text-xs">
              Felipe Coelho · Full-Stack Developer
            </span>
          </div>
          <p style={{ color: "#1e293b" }} className="text-xs">
            © {new Date().getFullYear()} — Feito com React & TypeScript
          </p>
        </div>
      </div>
    </section>
  );
}
