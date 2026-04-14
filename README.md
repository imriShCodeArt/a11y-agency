# A11y Agency

Marketing site for a web accessibility agency (Next.js, TypeScript, MUI).

## Requirements

- **Node.js** 20+
- **Yarn** 4 (via [Corepack](https://nodejs.org/api/corepack.html))

## Install

```bash
corepack enable
yarn install
```

Copy environment placeholders and adjust locally:

```bash
cp .env.example .env.local
```

Edit `.env.local` with real values when you connect services (email, CMS, etc.). See comments in `.env.example` for staging and production.

## Scripts

| Command             | Description                                   |
| ------------------- | --------------------------------------------- |
| `yarn dev`          | Development server (http://localhost:3000)    |
| `yarn build`        | Production build                              |
| `yarn start`        | Run production build locally                  |
| `yarn lint`         | ESLint                                        |
| `yarn lint:a11y`    | ESLint on `src` only (accessibility-oriented) |
| `yarn typecheck`    | TypeScript (`tsc --noEmit`)                   |
| `yarn format`       | Prettier write                                |
| `yarn format:check` | Prettier check (CI)                           |

## Project layout

- `src/app` — Next.js App Router routes, layouts, and global styles
- `src/components` — Shared React components
- `src/content` — Content-oriented modules or static content helpers
- `src/lib` — Shared utilities, clients, and non-UI logic
- `src/theme` — Theme and design tokens

Path alias: `@/*` → `src/*` (see `tsconfig.json`).

## Deploy

The app is a standard Next.js deployment:

1. Connect the repository to [Vercel](https://vercel.com/) (or another Node host).
2. Set environment variables in the host dashboard to match `.env.example` (per environment: Preview ≈ staging, Production).
3. Build command: `yarn build`. Output: Next.js default.

CI runs `format:check`, `lint`, `typecheck`, and `yarn build` on pushes and pull requests to `main`.
