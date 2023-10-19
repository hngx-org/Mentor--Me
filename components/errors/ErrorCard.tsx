/* eslint-disable import/prefer-default-export */
import Typewriter from "typewriter-effect";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import LoadingSpinner from "../loaders/LoadingSpinner";

export const ErrorCard = ({
  reset,
  message,
}: {
  reset: () => void;
  message: Error & { digest?: string };
}) => {
  const [showStack, setShowStack] = useState(false);
  const handleError = () => {
    resetThePage();
  };

  function resetThePage() {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  }
  useEffect(() => {
    // refresh the page
    handleError();
  }, []);

  return (
    <div
      id="error-wrapper"
      className="w-full text-white flex flex-col items-center justify-start text-[color:var(--color)] perspective-12 pt-20 overflow-hidden"
    >
      <h1
        id="error-heading"
        className="font-Inter sm:font-bold text-[5rem] sm:text-[10rem] xl:text-[15rem] uppercase w-fit bg-gradient-to-r from-[#00ffd5] via-[#0075fa] to-[#ff00aa] bg-clip-text text-transparent select-none"
      >
        Error
      </h1>
      <div className="text-center  leading-8 z-50">
        <div className="flex flex-col  items-center px-6 justify-center">
          <h2 className="text-2xl uppercase sm:text-4xl xl:text-5xl mb-6">
            <span className="font-semibold">
              {message.name ? ` (${message.name})` : null}:
            </span>
            <span className="font-medium text-rose-500 pl-4">
              {message.message}
            </span>
          </h2>
          <h2 className="text-2xl sm:text-4xl xl:text-5xl mb-6">
            {message.cause ? ` (${message.cause})` : null}
          </h2>
          <p className="tracking-wide mx-3 mb-4 lg:uppercase">
            We are fairly sure that page used to be here, but seems to have gone
            missing. We do apologise on its behalf.
          </p>

          <div className="flex w-full justify-center gap-3 max-sm:flex-col max-sm:items-center mb-10">
            <Link
              href="/"
              className="border border-gray-800 rounded-full px-4 py-2 w-fit flex gap-2 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </Link>
            <button
              type="button"
              onClick={() => reset()}
              className="border border-gray-800 rounded-full p-2 px-4 uppercase flex gap-2 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Try again
            </button>
            <button
              type="button"
              onClick={handleError}
              className="border border-gray-800 rounded-full p-2 px-4 uppercase flex gap-2 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Refresh
            </button>
          </div>
        </div>
        {showStack ? (
          <div className="w-full justify-center flex px-8 flex-col mb-6">
            <h2 className="text-xl sm:text-2xl text-left mb-6 text-rose-700 bg-rose-700/20 p-1 sm:p-2 rounded-xl">
              <Typewriter
                component="h2"
                options={{
                  autoStart: true,
                  loop: false,
                  strings: message.stack || "",
                  delay: 20,
                  cursor: "_",
                }}
              />
            </h2>
            <div>
              <button
                type="button"
                onClick={() => setShowStack(false)}
                className="border border-gray-800 rounded-full p-2 px-4 uppercase"
              >
                Hide Error
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center items-center gap-4">
            <button
              className="border border-gray-800 rounded-full p-2 px-4 uppercase"
              type="button"
              onClick={() => setShowStack(true)}
            >
              Show Error Stack?
            </button>
            <LoadingSpinner color="border-black" innerColor="border-black/20" />
          </div>
        )}
      </div>
      <div className="fixed bottom-0 top-0 left-0 right-0 overflow-hidden">
        <div className="cloak__container">
          <div className="cloak" />
        </div>
      </div>
    </div>
  );
};
