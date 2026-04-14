"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#0f766e",
    },
    secondary: {
      main: "#7c3aed",
    },
  },
  typography: {
    fontFamily: "var(--font-rubik), system-ui, sans-serif",
  },
});
