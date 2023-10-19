"use client";

/* eslint-disable import/prefer-default-export */
import Link from "next/link";
import "./Error.css";
import { useRouter } from "next/navigation";
import { BackwardIcon } from "@/public/SVGs";

export const Error404 = () => {
  const router = useRouter();

  return (
    <div
      id="error-wrapper"
      className="w-full text-white flex flex-col items-center justify-start text-[color:var(--color)] perspective-12 pt-24 lg:pt-32"
    >
      <h1
        id="error-heading"
        className="text-[7rem] sm:text-[12rem] lg:text-[15rem] 2xl:text-[17rem] uppercase "
      >
        404
      </h1>
      <div className="text-center uppercase leading-8 z-50 text-black">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-[3rem] sm:text-[6rem] xl:text-[10rem] uppercase not-found font-medium">
            not found
          </h1>
          <h2 className="text-2xl sm:text-3xl xl:text-4xl mt-10">
            We cannot find that page OR Something went wrong
          </h2>
        </div>

        <div className="mt-4 sm:mt-8">
          <div className="flex w-full justify-center gap-3">
            <Link
              href="/dashboard?path=h"
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
              Go-to Home
            </Link>
            <button
              type="button"
              onClick={() => router.back()}
              className="border border-gray-800 rounded-full px-4 py-2 w-fit flex gap-2 items-center justify-center"
            >
              <BackwardIcon />
              Go-Back
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 top-0 left-0 right-0 overflow-hidden">
        <div className="cloak__container">
          <div className="cloak" />
        </div>
      </div>
    </div>
  );
};
