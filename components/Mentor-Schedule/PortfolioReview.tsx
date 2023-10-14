"use client";

import React from "react";
import { MySettingsIcon, SharePlaneIcon } from "@/svgs/Schedule/ScheduleMentor";

interface PortfolioReviewProps {
  time: number;
  mode: boolean;
  // Add other props if needed
}

function PortfolioReview({ time, mode }: PortfolioReviewProps) {
  return (
    <div>
      <div className="h-[223px] w-full bg-Accent1 rounded-lg flex max-w-[295px] justify-center items-end lg:h-[235px]">
        <div className="h-[218px] w-full lg:px-5 bg-white rounded-lg border p-1 border-slate-100 grid grid-rows-6 grid-cols-3 lg:pb-6 lg:h-[230px]">
          <div className="flex justify-between item-center trim p-2 mt-2 col-span-full row-span-2 text-left">
            <h3 className="font-Hanken font-bold text-base whitespace-nowrap pr-1">
              Portfolio Review
            </h3>
            <div className="cursor-pointer hidden">
              <MySettingsIcon />
            </div>
          </div>
          <div className="font-Hanken text-sm font-normal flex flex-col h-[58px] gap-4 justify-between col-span-full row-span-3 ">
            <p>
              {time} mins
              <span className="  h-[7px] inline-block rounded-full bg-neutral-500 mx-3" />
              {mode ? "Private" : "Public"}
            </p>
            <p className="text-neutral-500 font-base cursor-pointer underline leading-5 underline-offset-4">
              View Details
            </p>
          </div>
          <div className=" col-span-full ">
            <div className="hidden lg:text-Accent1 lg:text-sm gap-4 lg:flex cursor-pointer lg:justify-between lg:items-center">
              <p className="underline underline-offset-4">Copy Link</p>
              <p className="underline underline-offset-4">Share Session</p>
            </div>
            <div className="cursour-pointer flex justify-start items-center gap-1 pb-1 lg:hidden">
              <SharePlaneIcon />{" "}
              <p className="font-Hanken font-normal text-Accent1 underline underline-offset-2">
                Share Session
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioReview;
