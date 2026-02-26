import { useState } from "react";
import { CheckCircle2, Download, Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactForm, type ContactStatus } from "@/types/forms";
import { socialLinks } from "@/data/contact";

const initialFormState: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: initialFormState,
    mode: "onSubmit",
  });

  const onSubmit = () => {
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      reset(initialFormState);
    }, 1200);
  };

  return (
    <section id="contact" className="bg-background px-6 py-24">
      <div className="-mt-1 mx-auto mb-24 h-px max-w-6xl bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-left">
          <p className="mb-3 text-xs uppercase tracking-widest text-purple-500">{"// contato"}</p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-slate-900 dark:text-slate-100">Vamos Conversar</h2>
          <p className="mt-3 max-w-lg text-slate-600 dark:text-slate-500">
            Seja para um projeto, uma colaboração ou só para trocar uma ideia — estou sempre aberto.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="flex h-full flex-col gap-5 lg:col-span-2">
            <div className="rounded-xl border border-purple-500/25 bg-gradient-to-br from-purple-500/15 to-purple-600/10 p-6">
              <h3 className="mb-2 text-base text-slate-800 dark:text-slate-200">Currículo</h3>
              <p className="mb-5 text-xs leading-relaxed text-slate-600 dark:text-slate-500">
                Baixe meu currículo completo com histórico profissional, formação e projetos.
              </p>
              <a
                href="#"
                download="Felipe_Coelho_CV.pdf"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 py-3 text-sm text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-opacity hover:opacity-90"
              >
                <Download size={15} />
                Download CV (PDF)
              </a>
            </div>

            <div className="flex flex-1 flex-col rounded-xl border border-slate-200/80 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="mb-4 text-base text-slate-800 dark:text-slate-200">Redes Sociais</h3>
              <div className="flex flex-1 flex-col gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-1 items-center gap-3 rounded-lg border border-slate-200/80 bg-white px-3 py-4 transition-colors hover:border-purple-500/30 hover:bg-purple-500/5 dark:border-white/10 dark:bg-white/5"
                  >
                    <social.icon size={16} className="shrink-0 text-slate-600 transition-colors group-hover:text-purple-500 dark:text-slate-500" />
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 dark:text-slate-400">{social.label}</p>
                      <p className="truncate text-xs text-slate-600 dark:text-slate-500">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-6 md:p-8 lg:col-span-3 dark:border-white/10 dark:bg-white/5">
            {status === "sent" ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-purple-500/25 bg-purple-500/10">
                  <CheckCircle2 size={28} className="text-purple-500" />
                </div>
                <h3 className="mb-2 text-lg text-slate-800 dark:text-slate-200">Mensagem enviada!</h3>
                <p className="mb-6 text-sm text-slate-600 dark:text-slate-500">Obrigado pelo contato. Responderei em breve.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="rounded-lg border border-purple-500/30 px-5 py-2 text-sm text-purple-500 transition-colors hover:bg-purple-500/10"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h3 className="mb-6 text-base text-slate-800 dark:text-slate-200">Enviar Mensagem</h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-500">Nome</label>
                    <input
                      {...register("name")}
                      maxLength={80}
                      autoComplete="name"
                      placeholder="Seu nome"
                      className={[
                        "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 placeholder:opacity-100 focus:border-purple-500/50 dark:bg-white/10 dark:text-slate-200 dark:placeholder:text-slate-400",
                        errors.name ? "border-rose-500/35 dark:border-rose-400/45" : "border-slate-300 dark:border-white/10",
                      ].join(" ")}
                    />
                    {errors.name && <p className="mt-1 text-xs text-rose-500 dark:text-rose-300">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-500">E-mail</label>
                    <input
                      {...register("email")}
                      type="email"
                      maxLength={120}
                      autoComplete="email"
                      placeholder="seu@email.com"
                      className={[
                        "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 placeholder:opacity-100 focus:border-purple-500/50 dark:bg-white/10 dark:text-slate-200 dark:placeholder:text-slate-400",
                        errors.email ? "border-rose-500/35 dark:border-rose-400/45" : "border-slate-300 dark:border-white/10",
                      ].join(" ")}
                    />
                    {errors.email && <p className="mt-1 text-xs text-rose-500 dark:text-rose-300">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-500">Assunto</label>
                  <input
                    {...register("subject")}
                    maxLength={120}
                    placeholder="Como posso ajudar?"
                    className={[
                      "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 placeholder:opacity-100 focus:border-purple-500/50 dark:bg-white/10 dark:text-slate-200 dark:placeholder:text-slate-400",
                      errors.subject ? "border-rose-500/35 dark:border-rose-400/45" : "border-slate-300 dark:border-white/10",
                    ].join(" ")}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-rose-500 dark:text-rose-300">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-500">Mensagem</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    maxLength={1500}
                    placeholder="Conte mais sobre seu projeto ou ideia..."
                    className={[
                      "w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 placeholder:opacity-100 focus:border-purple-500/50 dark:bg-white/10 dark:text-slate-200 dark:placeholder:text-slate-400",
                      errors.message ? "border-rose-500/35 dark:border-rose-400/45" : "border-slate-300 dark:border-white/10",
                    ].join(" ")}
                  />
                  {errors.message && <p className="mt-1 text-xs text-rose-500 dark:text-rose-300">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 py-3.5 text-sm text-white shadow-[0_0_24px_rgba(168,85,247,0.35)] transition-opacity hover:opacity-90 disabled:opacity-80"
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

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 sm:flex-row dark:border-white/10">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-purple-600">
              <span className="text-[0.6rem] text-white">FC</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-700">Felipe Coelho · Full-Stack Developer</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-800">© {new Date().getFullYear()} — Feito com React & TypeScript</p>
        </div>
      </div>
    </section>
  );
}
