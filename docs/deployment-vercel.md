# Vercel deployment (Hobby) — staging, previews, production

This project targets **[Vercel](https://vercel.com/)** on the **Hobby** plan with **Next.js** and **Yarn 4**. The repo includes `vercel.json` so installs use **Corepack** + **`yarn install --immutable`**.

## 1. Connect the Git repository

If not done yet: Vercel → **Add New Project** → import this GitHub repo. Vercel auto-detects Next.js.

## 2. Production branch = `main`

1. Vercel → **Project** → **Settings** → **Git**.
2. Set **Production Branch** to **`main`**.
3. Every merge to `main` triggers a **Production** deployment.

## 3. Preview deployments (automatic)

- **Pull requests** and **pushes to branches other than the production branch** get **Preview** deployments automatically.
- Confirm in the Vercel **Deployments** tab that a recent PR shows a **Preview** deployment and opens successfully.

_(Manual verification: open the deployment URL and smoke-test the app.)_

## 4. Staging via a dedicated `staging` branch

On Hobby, **branch previews** (not separate “Custom Environments”) give you a **persistent preview URL for the `staging` branch** as long as that branch exists on the remote.

**Recommended workflow**

1. Keep **`staging`** aligned with what you want to QA (often **`main` + selected changes**, or **`main`** after releases).
2. Push to **`staging`** when you want a new staging build:
   ```bash
   git checkout staging
   git merge main   # or cherry-pick / PR into staging
   git push origin staging
   ```
3. In **Deployments**, open the deployment for branch **`staging`** and use its **Preview** URL as your staging smoke-test target.

**Bootstrap `staging` from `main` (one-time)**

```bash
git fetch origin
git checkout main
git pull origin main
git branch -f staging main
git push -u origin staging
```

If `staging` already exists and you only need it to match `main` (non-destructive to others’ work, coordinate first):

```bash
git checkout staging
git merge origin/main
git push origin staging
```

## 5. Environment variables (Development / Preview / Production)

Set variables in **Project → Settings → Environment Variables**.

| Scope           | Typical use                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Production**  | Live site on `main` (e.g. real `RESEND_API_KEY`, Sanity production dataset, `NEXT_PUBLIC_SITE_URL` = production URL).                                                                           |
| **Preview**     | All preview deployments (PRs + branches like `staging`). Use **staging/sandbox** keys and `NEXT_PUBLIC_SITE_URL` = the **staging preview URL** or a stable staging domain if you add one later. |
| **Development** | Optional: values for `vercel dev` if you use it; local dev usually uses **`.env.local`** (not committed).                                                                                       |

**Names** should match **`.env.example`**. Never commit secrets.

### Branch-specific Preview variables (`staging` only)

Hobby **Preview** variables apply to **all** previews unless you use features that scope by branch (availability can change on Vercel; check current docs). If `staging` needs different values than PR previews:

- Prefer **different variable values** in **Preview** that are safe for both (e.g. shared staging CMS), **or**
- Use a **separate Vercel project** for staging (still Hobby-eligible as a second project), **or**
- Upgrade to a plan that supports **environment targeting** if required.

Document any team decision here when you choose an approach.

## 6. Build output

- **Build command:** `yarn build` (Vercel default for this stack).
- **Output:** Next.js default (no `output: 'export'` in this repo).

## 7. Error monitoring and verification

**Built in today**

- **[@vercel/analytics](https://vercel.com/docs/analytics)** and **Speed Insights** (already in the app layout) — usage/performance, not exception tracking.

**Recommended next steps (manual)**

- Use **Vercel → Project → Logs** (runtime / build) for failures.
- Optional: add **[Sentry](https://docs.sentry.io/platforms/javascript/guides/nextjs/)** (or similar) for exception monitoring; create a Sentry project, add env vars in Vercel, and follow their Next.js App Router setup.

**Manual checklist**

- [ ] Open a **Preview** deployment from a feature branch and confirm the app loads.
- [ ] Push **`staging`** and confirm the **latest `staging` deployment** matches the expected commit and URL.
- [ ] Merge to **`main`** and confirm **Production** updates.
- [ ] Confirm **Production** and **Preview** env vars match the intended URLs and keys.

## References

- [Vercel environments](https://vercel.com/docs/deployments/environments)
- [Environment variables](https://vercel.com/docs/projects/environment-variables)
