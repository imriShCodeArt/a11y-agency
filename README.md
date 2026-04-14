# A11y Agency

Marketing site for a web accessibility agency (Next.js, TypeScript, MUI). **Default UI is Hebrew (RTL)**; see `docs/rtl-and-locale.md`.

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
- `src/theme` — MUI theme, component defaults, and `tokens.ts` (colors, type scale, spacing unit, radii, shadows)

Path alias: `@/*` → `src/*` (see `tsconfig.json`).

**Git / releases:** open PRs to **`staging`** first; merge **`staging` → `main`** for production. Details and branch protection: **`docs/github-branch-flow.md`**.

## Deploy

**Vercel (recommended):** see **`docs/deployment-vercel.md`** for Hobby setup — production on **`main`**, **`staging`** branch previews, Preview vs Production env vars, and monitoring notes.

Summary:

1. Import the repo in [Vercel](https://vercel.com/); production branch **`main`** (configure in Project → Settings → Git).
2. Use **`vercel.json`** so installs run `corepack enable && yarn install --immutable` (Yarn 4).
3. Set environment variables per **Production** / **Preview** / **Development** to match `.env.example`.
4. Keep a remote **`staging`** branch for a stable staging preview URL (see deployment doc).

CI runs `format:check`, `lint`, `typecheck`, and `yarn build` on pushes and pull requests to `main`.
