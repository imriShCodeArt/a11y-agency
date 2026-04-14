/**
 * Canonical MVP routes — keep in sync with `docs/route-map.md` and filesystem routes under `src/app`.
 */

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const servicePages = [
  {
    href: "/services/accessibility-risk-review",
    label: "Accessibility Risk Review",
  },
  {
    href: "/services/full-accessibility-audit",
    label: "Full Accessibility Audit",
  },
  {
    href: "/services/remediation-sprint",
    label: "Remediation Sprint",
  },
  {
    href: "/services/statement-compliance",
    label: "Accessibility Statement & Compliance Support",
  },
  {
    href: "/services/ongoing-maintenance",
    label: "Ongoing Accessibility Maintenance",
  },
] as const;

export const legalNav = [
  { href: "/accessibility-statement", label: "Accessibility statement" },
  { href: "/privacy", label: "Privacy" },
] as const;
