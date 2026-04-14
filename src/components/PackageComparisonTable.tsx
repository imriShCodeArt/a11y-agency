import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
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

/**
 * Responsive comparison matrix: horizontal scroll on narrow viewports, semantic table with captions and scoped headers.
 */
export function PackageComparisonTable() {
  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      sx={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <Table size="small" sx={{ minWidth: 520 }}>
        <caption
          style={{
            captionSide: "top",
            textAlign: "start",
            padding: "12px 16px",
          }}
        >
          <Typography component="span" variant="subtitle1" fontWeight={600}>
            השוואת חבילות: סטארטר, צמיחה ורציף
          </Typography>
        </caption>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="col" sx={{ fontWeight: 700 }}>
              תכונה
            </TableCell>
            {PACKAGE_COLUMN_ORDER.map((id) => (
              <TableCell
                key={id}
                component="th"
                scope="col"
                align="center"
                sx={{ fontWeight: 700, minWidth: 100, verticalAlign: "bottom" }}
              >
                {packageById[id].title}
                {packageById[id].recommended ? (
                  <Typography
                    component="span"
                    variant="caption"
                    display="block"
                    color="primary"
                    sx={{ fontWeight: 600 }}
                  >
                    מומלץ
                  </Typography>
                ) : null}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {PACKAGE_COMPARISON_ROWS.map((row) => (
            <TableRow key={row.featureLabel}>
              <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                {row.featureLabel}
              </TableCell>
              {PACKAGE_COLUMN_ORDER.map((id) => (
                <TableCell key={id} align="center">
                  {row.cells[id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
