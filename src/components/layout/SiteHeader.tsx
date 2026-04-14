"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useId, useState } from "react";
import { NavLink } from "@/components/NavLink";
import { isPrimaryNavActive, primaryNav } from "@/lib/routes";
import { site } from "@/lib/site";

const headerCtaHref = "/contact";
const headerCtaLabel = "צור קשר";

export function SiteHeader() {
  const pathname = usePathname() ?? "";
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();
  const drawerId = `${menuId}-nav-drawer`;

  const openMobile = useCallback(() => setMobileOpen(true), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar
          component="nav"
          aria-label="ניווט ראשי"
          sx={{ gap: 2, flexWrap: "wrap" }}
        >
          <NavLink
            href="/"
            underline="none"
            color="inherit"
            active={isPrimaryNavActive(pathname, "/")}
            sx={{
              marginInlineEnd: { xs: 0, md: 4 },
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            {site.name}
          </NavLink>

          <Box sx={{ flexGrow: 1, minWidth: 8 }} />

          <Stack
            direction="row"
            component="ul"
            spacing={2}
            flexWrap="wrap"
            useFlexGap
            sx={{
              display: { xs: "none", md: "flex" },
              listStyle: "none",
              m: 0,
              p: 0,
              alignItems: "center",
            }}
          >
            {primaryNav.map((item) => (
              <Box key={item.href} component="li">
                <NavLink
                  href={item.href}
                  underline="hover"
                  active={isPrimaryNavActive(pathname, item.href)}
                >
                  {item.label}
                </NavLink>
              </Box>
            ))}
          </Stack>

          <Button
            component={NextLink}
            href={headerCtaHref}
            variant="contained"
            color="primary"
            sx={{ display: { xs: "none", md: "inline-flex" } }}
          >
            {headerCtaLabel}
          </Button>

          <IconButton
            color="inherit"
            type="button"
            edge="end"
            aria-label="פתיחת תפריט ניווט"
            aria-expanded={mobileOpen}
            aria-controls={drawerId}
            onClick={openMobile}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon aria-hidden />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={closeMobile}
        // Under RTL, MUI flips only the Slide direction, not paper `left: 0`, so the panel
        // would sit on the physical left but animate from the right. Force the same motion as
        // LTR left drawers: enter from off-screen left, slide into view toward the right.
        SlideProps={{ direction: "right" }}
        ModalProps={{
          keepMounted: true,
        }}
        slotProps={{
          paper: {
            id: drawerId,
            component: "nav",
            "aria-label": "תפריט ניווט",
            sx: { width: { xs: "min(100vw - 48px, 320px)", sm: 320 }, p: 0 },
          },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "flex-start",
            minHeight: { xs: 56, sm: 64 },
            px: 1,
          }}
        >
          <IconButton
            type="button"
            onClick={closeMobile}
            aria-label="סגירת תפריט"
            edge="start"
          >
            <CloseIcon aria-hidden />
          </IconButton>
        </Toolbar>
        <Stack
          component="ul"
          spacing={0}
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            px: 2,
            pb: 2,
          }}
        >
          {primaryNav.map((item) => (
            <Box key={item.href} component="li">
              <NavLink
                href={item.href}
                underline="hover"
                active={isPrimaryNavActive(pathname, item.href)}
                onClick={closeMobile}
                sx={{ display: "block", py: 1.5, px: 1, borderRadius: 1 }}
              >
                {item.label}
              </NavLink>
            </Box>
          ))}
        </Stack>
        <Box sx={{ px: 2, pb: 3, pt: 1 }}>
          <Button
            component={NextLink}
            href={headerCtaHref}
            variant="contained"
            color="primary"
            fullWidth
            onClick={closeMobile}
          >
            {headerCtaLabel}
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
