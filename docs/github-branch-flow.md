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

| Workflow                  | When it runs                      | What it enforces                                                                       |
| ------------------------- | --------------------------------- | -------------------------------------------------------------------------------------- |
| **Branch flow (main)**    | PRs targeting `main`              | Head must be **`staging`** or **`hotfix/*`**.                                          |
| **Branch flow (staging)** | PRs targeting `staging`           | Head must be **`main`**, **`feature/*`**, **`fix/*`**, **`chore/*`**, or bot branches. |
| **Test quality**          | PRs/pushes to `main` or `staging` | `format:check`, `lint`, `typecheck`, `yarn build`.                                     |
| **Sync main → staging**   | Push to `main`                    | Opens a **main → staging** PR if none exists (keeps staging aligned with production).  |

### Sync workflow: `GitHub Actions is not permitted to create or approve pull requests`

The default **`GITHUB_TOKEN`** can create PRs only when the repository allows it.

**Option A (recommended):** In the GitHub repo, go to **Settings → Actions → General → Workflow permissions** and enable **Allow GitHub Actions to create and approve pull requests** (wording may vary slightly). Save. The workflow already requests `pull-requests: write`.

**Option B:** Add a repository secret **`SYNC_STAGING_FROM_MAIN_TOKEN`** with a **fine-grained PAT** (this repo: Contents **Read**, Pull requests **Read and write**, Metadata **Read**) or a **classic PAT** with **`repo`** scope. The workflow uses that token instead of `GITHUB_TOKEN` when the secret is set.

## Branch protection (you configure in GitHub)

In **Settings → Rules → Rulesets** (or **Branches → Branch protection**), protect both **`main`** and **`staging`**:

1. **Require a pull request** before merging (and reviews if you want).
2. **Require status checks to pass** before merging:
   - For **`main`**: require **`build`** (from **Test quality**) and **`main-source`** (from **Branch flow (main)**).
   - For **`staging`**: require **`build`** and **`staging-source`** (from **Branch flow (staging)**).

Exact check names appear on a green PR under **Checks**; if GitHub shows a combined label (e.g. `Branch flow (main) / main-source`), use that in the ruleset.

3. **Restrict who can push** (optional): disallow direct pushes to `main` and `staging` so all changes go through PRs.

Until these rules are enabled, the workflows still run and fail invalid PRs, but merges could be allowed if someone bypasses checks—**turn on required checks** for enforcement.

## Vercel

See **`docs/deployment-vercel.md`**: production branch **`main`**, **`staging`** preview URL, Preview vs Production env vars.
