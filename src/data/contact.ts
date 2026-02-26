import { Github, Linkedin, Mail } from "lucide-react";

import type { SocialLink } from "@/types/content";

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/felipecrl",
    handle: "@felipecrl",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felipecoelho1/",
    handle: "linkedin.com/in/felipecoelho1",
  },
  {
    icon: Mail,
    label: "E-mail",
    href: "mailto:contato@felipecoelho.dev.br",
    handle: "contato@felipecoelho.dev.br",
  },
];
