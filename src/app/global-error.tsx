"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          padding: "2rem",
          maxWidth: "32rem",
        }}
      >
        <h1 style={{ fontSize: "1.5rem" }}>Something went wrong</h1>
        <p style={{ color: "#555" }}>
          A critical error occurred. Please reload the page or try again later.
        </p>
        {process.env.NODE_ENV === "development" ? (
          <pre
            style={{
              fontSize: "0.75rem",
              overflow: "auto",
              background: "#f5f5f5",
              padding: "1rem",
            }}
          >
            {error.message}
          </pre>
        ) : null}
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
