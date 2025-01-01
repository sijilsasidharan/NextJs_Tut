"use client"; // Error boundaries must be Client Components

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
      </body>
    </html>
  );
}
