# RTL and locale (Hebrew-first)

## Current behavior

- The document uses `lang="he"` and `dir="rtl"` in the root layout.
- MUI runs with `direction: "rtl"` and Emotion styles pass through `stylis-plugin-rtl` via `AppRouterCacheProvider` options (`key: "muirtl"`).
- Primary typography uses [Rubik](https://fonts.google.com/specimen/Rubik) with **Latin + Hebrew** subsets.
- Navigation labels live in `src/lib/routes.ts` and are **Hebrew** for first-release UX.

## Spacing and alignment

- Prefer **logical** CSS in `sx` where mirroring matters, e.g. `marginInlineEnd` instead of `marginRight` for gaps that should follow inline flow.
- MUI `Stack` `spacing` and flex `justifyContent` generally respect RTL; spot-check any custom `left` / `right` / `ml` / `mr` when adding UI.

## Icons and directional UI

- Prefer MUI icons for chevrons and similar cues so expansion and alignment follow theme direction.
- Re-check any custom SVG or absolute positioning when adding new components.

## Future English (or other locales)

1. **Routing**
   - Option A: locale prefix (`/en/...`) with Next.js segment layout `[locale]`.
   - Option B: separate subtree or domain; same components, different copy source.

2. **Document**
   - Set `lang` and `dir` per locale (`en` + `ltr`, `he` + `rtl`) on `<html>` (or a wrapper) from layout props or middleware.

3. **Theme**
   - Build theme with `createTheme({ direction: locale === "he" ? "rtl" : "ltr", ... })` and consider **two Emotion caches**: one with `stylis-plugin-rtl`, one without (LTR), keyed by locale—only one provider should wrap the tree per request.

4. **Content**
   - Move strings to messages (e.g. next-intl, JSON, or CMS) so nav and metadata stay aligned with the active locale.

5. **Metadata**
   - Use localized `title` / `description` and `alternates.languages` when SEO for both languages matters.

Until then, keep **Hebrew + RTL** as the single shipped experience.
