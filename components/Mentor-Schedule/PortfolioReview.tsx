"use client";

import React from "react";
import { MySettingsIcon, SharePlaneIcon } from "@/svgs/Schedule/ScheduleMentor";

interface PortfolioReviewProps {
  sessionName: string;
  relevantTopics: string;
  sessionType?: string; // Optional property
  time: string | number;
  date: number | string;
  description: string;
}

function PortfolioReview({
  relevantTopics,
  sessionName,
  sessionType,
  time,
  date,
  description,
}: PortfolioReviewProps) {
  return (
    <div>
      <div className="h-[235px] max-w-[295px] border-t-4 border-Accent1 border-x border-b rounded-lg px-2 py-5 flex flex-col justify-start gap-5">
        <div className="flex justify-between item-center ">
          <h3 className="font-Hanken font-bold text-base ">{sessionName}</h3>
          <div className="hidden md:block cursor-pointer">
            <MySettingsIcon />
          </div>
        </div>
        <div className="font-Hanken text-sm font-normal flex flex-col h-[58px] gap-4 justify-between col-span-full row-span-3 ">
          <p>{time} mins</p>
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
  );
}

export default PortfolioReview;
