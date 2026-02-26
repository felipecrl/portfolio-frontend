# Portfolio

Portfolio pessoal em React + Vite com arquitetura por componentes, dados desacoplados da UI, TypeScript estrito, lint moderno (ESLint 9 flat config) e Tailwind CSS 4.

## Requisitos

- Node.js 20 LTS+
- npm 10+

## Instalação

```bash
npm install
npm run dev
```

Aplicação disponível em `http://localhost:5173`.

## Scripts

- `npm run dev`: servidor local
- `npm run build`: build de produção
- `npm run preview`: preview do build
- `npm run typecheck`: validação de tipos
- `npm run lint`: lint com ESLint
- `npm run format`: formatação com Prettier

## Stack Atual

- React 18 + Vite 7
- TypeScript 5
- Tailwind CSS 4
- Interface enxuta com componentes próprios da aplicação

## Estrutura

```
src/
  App.tsx
  components/
    navigation/
    hero/
    projects/
    skills/
    timeline/
    blog/
    contact/
  data/
  types/
  styles/
```

## Padrões de Qualidade

- Sem estilos inline (`style={{ ... }}`) nos componentes de aplicação.
- Componentes organizados por responsabilidade em `src/components`.
- Dados estáticos centralizados em `src/data`.
- Tipagens compartilhadas centralizadas em `src/types`.
- Lint + typecheck obrigatórios antes de build.
- Dependências de runtime mínimas para reduzir superfície de ataque.

## Segurança

- Links externos com `rel="noopener noreferrer"`.
- Auditoria de dependências via `npm audit --omit=dev`.
- Pacotes não utilizados removidos do projeto.
