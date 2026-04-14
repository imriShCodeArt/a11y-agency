"use client";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import type { PackageId, SitePackage } from "@/lib/site-packages";
import {
  PACKAGE_COLUMN_ORDER,
  PACKAGE_COMPARISON_ROWS,
  SITE_PACKAGES,
} from "@/lib/site-packages";

const packageById = SITE_PACKAGES.reduce(
  (acc, p) => {
    acc[p.id] = p;
    return acc;
  },
  {} as Record<PackageId, SitePackage>
);

const cellBorderSx = {
  border: 1,
  borderColor: "divider",
  borderStyle: "solid" as const,
};

/**
 * Responsive comparison matrix: grid lines, zebra rows, recommended-column emphasis, symmetric RTL-friendly spacing.
 */
export function PackageComparisonTable() {
  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      sx={{
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      <Box
        component="div"
        sx={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          px: { xs: 1.5, sm: 2 },
          pt: 2,
          pb: { xs: 1.5, sm: 2 },
        }}
      >
        <Table
          size="small"
          sx={{
            minWidth: 480,
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
          }}
        >
          <caption
            style={{
              captionSide: "top",
              textAlign: "start",
              padding: 0,
              marginBottom: 12,
            }}
          >
            <Typography
              component="span"
              variant="subtitle1"
              fontWeight={700}
              color="text.primary"
              sx={{ display: "block" }}
            >
              השוואת חבילות: סטארטר, צמיחה ורציף
            </Typography>
          </caption>
          <TableHead>
            <TableRow>
              <TableCell
                component="th"
                scope="col"
                sx={(theme) => ({
                  ...cellBorderSx,
                  width: "34%",
                  py: 1.5,
                  px: 1.5,
                  fontWeight: 700,
                  fontSize: "0.8125rem",
                  color: "text.secondary",
                  bgcolor: theme.palette.grey[100],
                  verticalAlign: "bottom",
                  textAlign: "start",
                })}
              >
                תכונה
              </TableCell>
              {PACKAGE_COLUMN_ORDER.map((id) => (
                <TableCell
                  key={id}
                  component="th"
                  scope="col"
                  align="center"
                  sx={(theme) => ({
                    ...cellBorderSx,
                    width: "22%",
                    py: 1.5,
                    px: 1,
                    fontWeight: 800,
                    fontSize: "0.9375rem",
                    lineHeight: 1.3,
                    verticalAlign: "bottom",
                    bgcolor: packageById[id].recommended
                      ? alpha(theme.palette.primary.main, 0.12)
                      : theme.palette.grey[100],
                    borderBottomColor: packageById[id].recommended
                      ? theme.palette.primary.main
                      : undefined,
                    borderBottomWidth: packageById[id].recommended ? 2 : 1,
                  })}
                >
                  {packageById[id].title}
                  {packageById[id].recommended ? (
                    <Typography
                      component="span"
                      variant="caption"
                      display="block"
                      sx={(theme) => ({
                        fontWeight: 700,
                        color: theme.palette.primary.dark,
                        marginTop: 0.5,
                        paddingInline: 0.75,
                        paddingBlock: 0.25,
                        borderRadius: 1,
                        bgcolor: alpha(theme.palette.primary.main, 0.2),
                        display: "inline-block",
                      })}
                    >
                      מומלץ
                    </Typography>
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {PACKAGE_COMPARISON_ROWS.map((row, index) => {
              const stripe = index % 2 === 1;
              return (
                <TableRow key={row.featureLabel}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={(theme) => ({
                      ...cellBorderSx,
                      py: 1.25,
                      px: 1.5,
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      textAlign: "start",
                      lineHeight: 1.45,
                      bgcolor: stripe
                        ? alpha(theme.palette.text.primary, 0.045)
                        : theme.palette.grey[50],
                    })}
                  >
                    {row.featureLabel}
                  </TableCell>
                  {PACKAGE_COLUMN_ORDER.map((id) => {
                    const recommended = Boolean(packageById[id].recommended);
                    return (
                      <TableCell
                        key={id}
                        align="center"
                        sx={(theme) => {
                          const base = stripe
                            ? alpha(theme.palette.text.primary, 0.035)
                            : theme.palette.background.paper;
                          const bg = recommended
                            ? alpha(
                                theme.palette.primary.main,
                                stripe ? 0.14 : 0.1
                              )
                            : base;
                          return {
                            ...cellBorderSx,
                            py: 1.25,
                            px: 1,
                            fontSize: "0.875rem",
                            fontWeight: recommended ? 600 : 500,
                            verticalAlign: "middle",
                            bgcolor: bg,
                          };
                        }}
                      >
                        {row.cells[id]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
}
