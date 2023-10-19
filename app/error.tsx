"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error">
      <div className="flex flex-row-reverse items-center min-h-screen p-4 max-w-[1440px] mx-auto max-[832px]:flex-col max-[832px]:justify-center">
        <img
          className="w-1/2 max-[832px]:w-full"
          src="/server.svg"
          alt="server"
        />
        <div className="font-Inter max-[832px]:items-center max-[832px]:mt-4">
          <h1 className="font-medium mb-[0.8em] text-[#333333] text-2xl">
            Something went wrong
          </h1>
          <p className="mb-6 text-[#4f4f4f] text-base">
            Your request couldn&apos;t be processed by the server. Try{" "}
            <button
              type="button"
              onClick={() => reset()}
              className="border-none outline-none bg-transparent underline cursor-pointer font-medium"
            >
              refreshing the page
            </button>
            , if the issue persists, leave a complaint on{" "}
            <a
              className="text-Accent1 font-medium"
              href="https://github.com/hngx-org/Mentor--Me/issues/new"
            >
              our repo.
            </a>
          </p>
          <Link href="/">
            <button
              type="button"
              className="text-white py-2 px-4 border-none outline-none rounded-lg cursor-pointer bg-[#2f80ed] font-Inter"
            >
              Take me home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
