"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { theme } from "@/theme/theme";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider
      options={{
        enableCssLayer: true,
        key: "muirtl",
        // prefixer must run before rtlPlugin so transforms and label positioning mirror correctly (MUI RTL guide).
        stylisPlugins: [prefixer, rtlPlugin],
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
