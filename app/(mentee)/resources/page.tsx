import React from "react";
import Link from "next/link";
import { BookIcon } from "@/public/SVGs";

const Resources = () => (
  <div className="w-full max-w-[447px] h-screen flex flex-col justify-center items-center mx-auto px-2">
    <BookIcon />
    <p className="mt-6 mb-7 font-Hanken text-Neutra40 text-lg">
      You have no resources yet
    </p>
    <p className="mb-[66px] font-Hanken text-[#121212] text-lg text-center">
      Click on “Get new resources” to start exploring
    </p>
    <Link href="/resources/explore?path=Explore Resources" className="w-full">
      <button
        type="button"
        className="font-Hanken text-white rounded-lg bg-NeutalBase h-12 mb-4 w-full"
      >
        Get New Resources
      </button>
    </Link>
  </div>
);

export default Resources;
