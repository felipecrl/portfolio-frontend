import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nome é obrigatório")
    .max(80, "Nome deve ter no máximo 80 caracteres"),
  email: z
    .string()
    .trim()
    .min(1, "E-mail é obrigatório")
    .email("Digite um e-mail válido")
    .max(120, "E-mail deve ter no máximo 120 caracteres"),
  subject: z
    .string()
    .trim()
    .min(1, "Assunto é obrigatório")
    .max(120, "Assunto deve ter no máximo 120 caracteres"),
  message: z
    .string()
    .trim()
    .min(1, "Mensagem é obrigatória")
    .max(1500, "Mensagem deve ter no máximo 1500 caracteres"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

export type ContactStatus = "idle" | "sending" | "sent";
