"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { ErrorCard } from "@/components/errors/ErrorCard";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    toast.error(error.message, { position: "top-center" });
  }, [error]);
  return <ErrorCard message={error} reset={reset} />;
}
