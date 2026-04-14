"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="he" dir="rtl">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          padding: "2rem",
          maxWidth: "32rem",
        }}
      >
        <h1 style={{ fontSize: "1.5rem" }}>משהו השתבש</h1>
        <p style={{ color: "#555" }}>
          אירעה תקלה קריטית. רעננו את הדף או נסו שוב מאוחר יותר.
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
          נסו שוב
        </button>
      </body>
    </html>
  );
}
