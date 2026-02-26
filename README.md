# Portfolio

Projeto de portfolio pessoal em React + Vite, com Tailwind e componentes UI (Radix/MUI).

## Requisitos

- Node.js 18+ (recomendado)
- pnpm (ou npm/yarn)

## Como rodar

```bash
pnpm install
pnpm dev
```

Acesse o app em `http://localhost:5173`.

## Scripts

- `pnpm dev`: inicia o servidor de desenvolvimento
- `pnpm build`: gera o build de producao
- `pnpm preview`: visualiza o build localmente
- `pnpm typecheck`: checagem de tipos com TypeScript
- `pnpm lint`: lint com ESLint
- `pnpm format`: formatacao com Prettier

## Stack

- React 18 + Vite 6
- TypeScript
- Tailwind CSS 4
- Radix UI / MUI

## Estrutura (principal)

```
src/
  App.tsx
  features/
    navigation/
    hero/
    projects/
    skills/
    timeline/
    blog/
    contact/
  shared/
    ui/
    styles/
```

## Alias

O alias `@` aponta para `src` (configurado no Vite).

## Observacoes

- O layout principal e montado em `App.tsx`.
- Os blocos da pagina ficam em `src/features/*`.
