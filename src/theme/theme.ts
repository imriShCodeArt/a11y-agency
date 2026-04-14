"use client";

import type { Theme } from "@mui/material/styles";
import { alpha, createTheme } from "@mui/material/styles";
import { tokens } from "@/theme/tokens";

const { colors, typography: typo } = tokens;

const baseTheme = createTheme({
  direction: "rtl",
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,
    },
    background: {
      default: colors.neutral.background,
      paper: colors.neutral.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
    divider: colors.neutral.border,
    error: { main: colors.feedback.error },
    success: { main: colors.feedback.success },
    warning: { main: colors.feedback.warning },
    info: { main: colors.feedback.info },
    action: {
      hover: colors.action.hover,
      selected: colors.action.selected,
      focus: colors.action.focus,
      disabled: alpha(colors.text.primary, 0.28),
      disabledBackground: alpha(colors.text.primary, 0.08),
    },
  },
  spacing: tokens.spacing.unitPx,
  shape: {
    borderRadius: tokens.radii.md,
  },
  typography: {
    fontFamily: typo.fontFamily,
    h1: { ...typo.h1 },
    h2: { ...typo.h2 },
    h3: { ...typo.h3 },
    h4: { ...typo.h4 },
    h5: { ...typo.h5 },
    h6: { ...typo.h6 },
    subtitle1: { ...typo.subtitle1 },
    subtitle2: { ...typo.subtitle2 },
    body1: { ...typo.body1 },
    body2: { ...typo.body2 },
    caption: { ...typo.caption },
    overline: { ...typo.overline },
    button: { ...typo.button },
  },
});

const shadows = [...baseTheme.shadows];
shadows[1] = tokens.shadows.xs;
shadows[2] = tokens.shadows.sm;
shadows[6] = tokens.shadows.md;

export const theme = createTheme(baseTheme, {
  shadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: ({ theme: t }: { theme: Theme }) => ({
          ...t.typography.body1,
          backgroundColor: t.palette.background.default,
          color: t.palette.text.primary,
        }),
      },
    },

    MuiButtonBase: {
      styleOverrides: {
        root: ({ theme: t }: { theme: Theme }) => ({
          "&:focus-visible": {
            outline: `${tokens.focus.outlineWidth}px solid ${t.palette.primary.dark}`,
            outlineOffset: tokens.focus.outlineOffsetPx,
          },
        }),
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme: t }: { theme: Theme }) => ({
          borderRadius: t.shape.borderRadius,
          textTransform: typo.button.textTransform,
          fontWeight: typo.button.fontWeight,
          fontSize: typo.button.fontSize,
          lineHeight: typo.button.lineHeight,
          "&:active": {
            transform: "scale(0.99)",
          },
        }),
        containedPrimary: ({ theme: t }: { theme: Theme }) => ({
          backgroundColor: t.palette.primary.main,
          "&:hover": {
            backgroundColor: t.palette.primary.dark,
          },
          "&:disabled": {
            backgroundColor: alpha(t.palette.primary.main, 0.35),
            color: t.palette.primary.contrastText,
          },
        }),
        outlinedPrimary: ({ theme: t }: { theme: Theme }) => ({
          borderWidth: 2,
          borderColor: t.palette.primary.main,
          "&:hover": {
            borderWidth: 2,
            borderColor: t.palette.primary.dark,
            backgroundColor: alpha(t.palette.primary.main, 0.06),
          },
        }),
        textPrimary: ({ theme: t }: { theme: Theme }) => ({
          "&:hover": {
            backgroundColor: alpha(t.palette.primary.main, 0.08),
          },
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: ({ theme: t }: { theme: Theme }) => ({
          "&:focus-visible": {
            outline: `${tokens.focus.outlineWidth}px solid ${t.palette.primary.dark}`,
            outlineOffset: tokens.focus.outlineOffsetPx,
          },
        }),
      },
    },

    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
      styleOverrides: {
        root: ({ theme: t }: { theme: Theme }) => ({
          fontWeight: 500,
          color: t.palette.primary.dark,
          "&:hover": {
            color: t.palette.primary.main,
          },
          "&:focus-visible": {
            outline: `${tokens.focus.outlineWidth}px solid ${t.palette.primary.dark}`,
            outlineOffset: tokens.focus.outlineOffsetPx,
            borderRadius: t.shape.borderRadius,
          },
        }),
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: ({ theme: t }: { theme: Theme }) => ({
          backgroundImage: "none",
          borderRadius: t.shape.borderRadius,
        }),
        outlined: ({ theme: t }: { theme: Theme }) => ({
          borderColor: t.palette.divider,
        }),
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: ({ theme: t }: { theme: Theme }) => ({
          borderBottom: `1px solid ${t.palette.divider}`,
          boxShadow: "none",
        }),
      },
    },
  },
});
