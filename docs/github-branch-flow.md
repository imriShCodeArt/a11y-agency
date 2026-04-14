# Git branch flow: feature → staging → main

Production (**Vercel Production**) tracks **`main`**. Integration QA uses the **`staging`** branch (Vercel **Preview** for that branch). Work happens on **`feature/*`**, **`fix/*`**, and **`chore/*`** branches (see `.cursor/rules/github-workflow.mdc`).

## Flow

```text
feature|fix|chore/<issue>-<name>  ──PR──►  staging  ──PR──►  main  ──►  production
       │                                    ▲
       │                                    │
       └────────────── (optional) main ─────┘   sync PR when staging should match production
```

1. **Implement** on `feature/<n>-…`, `fix/<n>-…`, or `chore/<n>-…`.
2. Open a **pull request into `staging`**. After review and green checks, **merge** → updates the staging deployment.
3. When staging is ready for release, open a **pull request from `staging` into `main`**. After merge → **Production** deploy.

### Exceptions

- **`hotfix/*` → `main`**: allowed for emergencies (workflow **Branch flow (main)**). Use sparingly; backport into `staging` afterward so branches do not diverge forever.
- **`main` → `staging`**: allowed to **refresh staging** from production (sync PR).

## Automation in this repo

| Workflow                   | When it runs                | What it enforces                                                                       |
| -------------------------- | --------------------------- | -------------------------------------------------------------------------------------- |
| **Branch flow (main)**     | PRs targeting `main`        | Head must be **`staging`** or **`hotfix/*`**.                                          |
| **Branch flow (staging)**  | PRs targeting `staging`     | Head must be **`main`**, **`feature/*`**, **`fix/*`**, **`chore/*`**, or bot branches. |
| **Test quality (main)**    | PRs/pushes to **`main`**    | `format:check`, `lint`, `typecheck`, `yarn build`.                                     |
| **Test quality (staging)** | PRs/pushes to **`staging`** | Same checks as main.                                                                   |

## Branch protection (you configure in GitHub)

In **Settings → Rules → Rulesets** (or **Branches → Branch protection**), protect both **`main`** and **`staging`**:

1. **Require a pull request** before merging (and reviews if you want).
2. **Require status checks to pass** before merging:
   - For **`main`**: require **`build`** from **Test quality (main)** (check label is usually `Test quality (main) / build`) and **`main-source`** from **Branch flow (main)**.
   - For **`staging`**: require **`build`** from **Test quality (staging)** (`Test quality (staging) / build`) and **`staging-source`** from **Branch flow (staging)**.

Exact check names appear on a green PR under **Checks**; use those strings in the ruleset (they can differ slightly by GitHub UI version).

3. **Restrict who can push** (optional): disallow direct pushes to `main` and `staging` so all changes go through PRs.

Until these rules are enabled, the workflows still run and fail invalid PRs, but merges could be allowed if someone bypasses checks—**turn on required checks** for enforcement.

## Vercel

See **`docs/deployment-vercel.md`**: production branch **`main`**, **`staging`** preview URL, Preview vs Production env vars.
