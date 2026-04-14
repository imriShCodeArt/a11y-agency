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
          משהו השתבש
        </Typography>
        <Typography variant="body1" color="text.secondary" component="p">
          נסו שוב. אם הבעיה נמשכת, פנו אלינו דרך עמוד צור קשר.
        </Typography>
        <Button type="button" variant="contained" onClick={reset}>
          נסו שוב
        </Button>
      </Stack>
    </Container>
  );
}
