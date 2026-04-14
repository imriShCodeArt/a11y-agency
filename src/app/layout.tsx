import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Box from "@mui/material/Box";
import { AppThemeProvider } from "@/components/AppThemeProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { defaultLocale, defaultTextDirection } from "@/lib/locale";
import { site } from "@/lib/site";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  variable: "--font-rubik",
  display: "swap",
});

function metadataBase(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (raw) {
    try {
      return new URL(raw);
    } catch {
      /* use fallback below */
    }
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: metadataBase(),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.defaultDescription,
  openGraph: {
    locale: "he_IL",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} dir={defaultTextDirection}>
      <body className={rubik.variable}>
        <AppThemeProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <SiteHeader />
            <Box component="main" id="main-content" sx={{ flex: 1 }}>
              {children}
            </Box>
            <SiteFooter />
          </Box>
          <Analytics />
          <SpeedInsights />
        </AppThemeProvider>
      </body>
    </html>
  );
}
