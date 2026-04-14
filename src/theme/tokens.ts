/**
 * Design tokens — single source of truth for the marketing UI (issue #4).
 * Consumed by `theme.ts`; contrast targets WCAG 2.2 AA for body UI text on default surfaces.
 */

export const tokens = {
  colors: {
    primary: {
      main: "#0f766e",
      light: "#14b8a6",
      dark: "#0d5c56",
      /** ~7:1 on primary.main for large UI text */
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6d28d9",
      light: "#8b5cf6",
      dark: "#5b21b6",
      contrastText: "#ffffff",
    },
    neutral: {
      background: "#fafaf9",
      paper: "#ffffff",
      border: "#e7e5e4",
      borderStrong: "#d6d3d1",
    },
    text: {
      /** ~15.3:1 on white */
      primary: "#1c1917",
      /** ~7:1 on white */
      secondary: "#57534e",
      /** ~4.6:1 on white — use for non-essential only */
      disabled: "#a8a29e",
    },
    action: {
      hover: "rgba(28, 25, 23, 0.06)",
      selected: "rgba(15, 118, 110, 0.12)",
      focus: "rgba(15, 118, 110, 0.2)",
    },
    feedback: {
      error: "#b91c1c",
      errorBg: "#fef2f2",
      success: "#15803d",
      warning: "#b45309",
      info: "#0369a1",
    },
  },

  /** MUI spacing factor: `theme.spacing(n) => n * unitPx` */
  spacing: {
    unitPx: 8,
  },

  radii: {
    none: 0,
    xs: 4,
    sm: 6,
    md: 10,
    lg: 14,
    xl: 20,
    full: 9999,
  },

  /** Elevation shadows (sRGB, subtle neutrals) */
  shadows: {
    xs: "0 1px 2px rgba(28, 25, 23, 0.05)",
    sm: "0 2px 8px rgba(28, 25, 23, 0.07)",
    md: "0 4px 16px rgba(28, 25, 23, 0.08)",
    focusRing: "0 0 0 3px rgba(15, 118, 110, 0.35)",
  },

  focus: {
    /** Visible against `neutral.paper` / `neutral.background` */
    outlineWidth: 2,
    outlineOffsetPx: 2,
  },

  typography: {
    fontFamily: `"var(--font-rubik)", system-ui, -apple-system, "Segoe UI", sans-serif`,
    h1: {
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "1.875rem",
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.45,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.65,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.55,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: "0.04em",
      /** Hebrew-first: avoid synthetic “uppercase” labels */
      textTransform: "none" as const,
    },
    button: {
      fontSize: "0.9375rem",
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: "none" as const,
    },
  },
} as const;

export type DesignTokens = typeof tokens;
