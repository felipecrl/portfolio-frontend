import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import type { SocialLink } from "@/types/content";

export const socialLinks: SocialLink[] = [
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
