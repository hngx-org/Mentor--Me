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
      <div className="h-[223px] grow w-full bg-Accent1 flex-1 rounded-lg flex justify-center items-end lg:h-[235px]">
        <div className="h-[218px] w-full px-8 lg:px-5 bg-white rounded-lg border p-1 border-slate-100  flex justify-between flex-col lg:pb-6 lg:h-[230px]">
          <div className="flex justify-between item-center trim p-2 mt-2">
            <h3 className="font-Hanken font-bold text-base whitespace-nowrap pr-1">
              Portfolio Review
            </h3>
            <div className="cursor-pointer">
              <MySettingsIcon />
            </div>
          </div>
          <div className="font-Hanken text-sm font-normal flex flex-col h-[58px] gap-4 justify-between lg:mt-[-50px]">
            <p>
              {time} mins
              <span className="  h-[7px] inline-block rounded-full bg-neutral-500 mx-1" />
              {mode ? "Private" : "Public"}
            </p>
            <p className="text-neutral-500 font-base cursor-pointer underline leading-5 underline-offset-4">
              View Details
            </p>
          </div>
          <div>
            <div className="hidden lg:text-Accent1 lg:font-base lg:flex cursor-pointer lg:justify-between lg:items-center">
              <p className="underline underline-offset-4">Copy Link</p>
              <p className="underline underline-offset-4">Share Session</p>
            </div>
            <div className="cursour-pointer flex justify-start items-center gap-1 lg:hidden">
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
