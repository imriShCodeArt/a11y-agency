"use client";

import { useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container maxWidth="sm" component="article" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack spacing={2}>
        <Typography variant="h1" component="h1">
          Something went wrong
        </Typography>
        <Typography variant="body1" color="text.secondary" component="p">
          Please try again. If the problem continues, reach out via the Contact
          page.
        </Typography>
        <Button type="button" variant="contained" onClick={reset}>
          Try again
        </Button>
      </Stack>
    </Container>
  );
}
