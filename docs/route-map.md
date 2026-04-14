# MVP route map

Canonical URL structure for the marketing site. **Keep this file aligned with** `src/lib/routes.ts` and the folders under `src/app`.

| Path                                  | Page                                                            |
| ------------------------------------- | --------------------------------------------------------------- |
| `/`                                   | Home                                                            |
| `/services`                           | Services overview                                               |
| `/services/accessibility-risk-review` | Accessibility Risk Review                                       |
| `/services/full-accessibility-audit`  | Full Accessibility Audit                                        |
| `/services/remediation-sprint`        | Remediation Sprint                                              |
| `/services/statement-compliance`      | Accessibility Statement & Compliance Support (service offering) |
| `/services/ongoing-maintenance`       | Ongoing Accessibility Maintenance                               |
| `/packages`                           | Packages                                                        |
| `/about`                              | About                                                           |
| `/faq`                                | FAQ                                                             |
| `/contact`                            | Contact                                                         |
| `/accessibility-statement`            | Site accessibility statement (legal / disclosure)               |
| `/privacy`                            | Privacy                                                         |

## Errors and fallbacks

| Mechanism                  | Purpose                                              |
| -------------------------- | ---------------------------------------------------- |
| `src/app/not-found.tsx`    | Custom **404** for unknown routes                    |
| `src/app/error.tsx`        | Route-level **error boundary** with retry            |
| `src/app/global-error.tsx` | Root **fallback** when the root layout cannot render |

## Notes

- The service URL **`/services/statement-compliance`** is intentionally distinct from **`/accessibility-statement`** (the published statement for _this_ website).
- Metadata for standard pages should use `pageMetadata()` from `src/lib/metadata.ts` so titles follow the root `title.template`.
