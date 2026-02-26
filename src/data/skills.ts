import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Front-end",
    icon: "🖥️",
    skills: [
      { name: "React / Next.js", level: 95, years: "4 anos" },
      { name: "TypeScript", level: 90, years: "3 anos" },
      { name: "CSS / Tailwind", level: 92, years: "4 anos" },
      { name: "Vue.js", level: 72, years: "2 anos" },
      { name: "React Native", level: 78, years: "2 anos" },
    ],
  },
  {
    id: "backend",
    label: "Back-end",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: 93, years: "4 anos" },
      { name: "Python / FastAPI", level: 80, years: "3 anos" },
      { name: "PostgreSQL", level: 88, years: "3 anos" },
      { name: "MongoDB", level: 82, years: "3 anos" },
      { name: "Redis", level: 75, years: "2 anos" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: "🔧",
    skills: [
      { name: "Docker / Compose", level: 82, years: "3 anos" },
      { name: "AWS (EC2, S3, RDS)", level: 74, years: "2 anos" },
      { name: "CI/CD (GitHub Actions)", level: 80, years: "2 anos" },
      { name: "Kubernetes", level: 62, years: "1 ano" },
      { name: "Terraform", level: 58, years: "1 ano" },
    ],
  },
  {
    id: "tools",
    label: "Ferramentas",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 97, years: "5 anos" },
      { name: "GraphQL", level: 80, years: "2 anos" },
      { name: "REST APIs", level: 96, years: "4 anos" },
      { name: "Jest / Testing", level: 84, years: "3 anos" },
      { name: "Figma", level: 70, years: "2 anos" },
    ],
  },
];

export const skillsSummary = [
  { label: "Anos de experiência", value: "5+" },
  { label: "Projetos entregues", value: "40+" },
  { label: "Contribuições OSS", value: "120+" },
  { label: "Tecnologias", value: "20+" },
];

export const extraTechs = [
  "Prisma",
  "tRPC",
  "Zustand",
  "React Query",
  "Axios",
  "Zod",
  "ESLint",
  "Prettier",
  "Storybook",
  "Cypress",
  "Playwright",
  "Nginx",
  "Linux",
];

