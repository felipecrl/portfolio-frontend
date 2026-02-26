import type { ProjectItem } from "@/types/content";

export const projectFilters = ["Todos", "React", "Node.js", "TypeScript", "PostgreSQL"];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "DevFlow",
    description:
      "Plataforma de gestão de projetos para equipes de desenvolvimento. Kanban em tempo real, integração com GitHub e analytics avançados.",
    image: "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    demo: "https://devflow.demo",
    repo: "https://github.com/felipecoelho/devflow",
    stars: 342,
    forks: 58,
    featured: true,
  },
  {
    id: 2,
    title: "CryptoWatch",
    description:
      "Dashboard de monitoramento de criptomoedas com dados em tempo real, alertas personalizados e análise de portfólio.",
    image: "https://images.unsplash.com/photo-1669054626218-f0b57b8ec632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["React", "Redis", "WebSocket", "Chart.js"],
    demo: "https://cryptowatch.demo",
    repo: "https://github.com/felipecoelho/cryptowatch",
    stars: 218,
    forks: 34,
    featured: true,
  },
  {
    id: 3,
    title: "NoteSync",
    description:
      "Aplicativo de notas colaborativas em tempo real com suporte a Markdown, histórico de versões e compartilhamento.",
    image: "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["React", "Socket.io", "MongoDB", "TypeScript"],
    demo: "https://notesync.demo",
    repo: "https://github.com/felipecoelho/notesync",
    stars: 176,
    forks: 29,
    featured: false,
  },
  {
    id: 4,
    title: "AuthKit",
    description:
      "Biblioteca open-source de autenticação para Node.js. Suporte a OAuth2, JWT, MFA e gerenciamento de sessões.",
    image: "https://images.unsplash.com/photo-1762330469123-ce98036eff16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["Node.js", "TypeScript", "JWT", "OAuth2"],
    demo: "https://authkit.demo",
    repo: "https://github.com/felipecoelho/authkit",
    stars: 491,
    forks: 87,
    featured: true,
  },
  {
    id: 5,
    title: "ShopAPI",
    description:
      "API RESTful completa para e-commerce com catálogo, carrinho, pagamentos via Stripe e relatórios.",
    image: "https://images.unsplash.com/photo-1619462729211-c8fd019ceae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["Node.js", "PostgreSQL", "Stripe", "Docker"],
    demo: "https://shopapi.demo",
    repo: "https://github.com/felipecoelho/shopapi",
    stars: 134,
    forks: 41,
    featured: false,
  },
  {
    id: 6,
    title: "OpenAPI Studio",
    description:
      "Ferramenta visual para criação, teste e documentação de APIs REST. Suporte a importação de specs Swagger.",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    tags: ["React", "Express", "TypeScript", "OpenAPI"],
    demo: "https://openapi-studio.demo",
    repo: "https://github.com/felipecoelho/openapi-studio",
    stars: 267,
    forks: 52,
    featured: false,
  },
];
