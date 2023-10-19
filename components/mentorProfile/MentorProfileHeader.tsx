"use client";

import Image from "next/image";
import React from "react";

import { ShareIcon } from "@/public/SVGs";
import { Button } from "../buttons/button";
import { ModalState } from "@/app/(mentor)/(dashboard-mentor)/mentor-profile/page";
import ParseReviewStars from "../ParseReview/ParseReviewStars";

type MentorProfileHeaderProps = {
  userName: string;
  userRole: string;
  userRating: number;
  userId?: string;
  email?: string;
  modal: React.Dispatch<React.SetStateAction<ModalState>>;
};

export default function MentorProfileHeader({
  userName,
  userRating,
  userRole,
  userId,
  email,
  modal,
}: MentorProfileHeaderProps) {
  return (
    <div className="w-[100%] h-[294px]   relative flex flex-col  ">
      <div className="h-[50%] w-[100%]  bg-blue-500 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 bg-cover bg-no-repeat" />
      <div className="h-[50%] w-[100%]  bg-white" />
      <div className=" w-[80%]   h-fit flex  flex-col items-center space-y-2 sm:space-x-2  sm:flex-row self-center absolute  top-[100px] sm:top-[100px] ">
        <div className=" w-[90px] h-[90px] sm:w-[180px] sm:h-[180px] border border-4 border-white rounded-full  ">
          <Image
            src={`https://api.dicebear.com/7.x/initials/png?seed=${userName}`}
            width={180}
            height={180}
            style={{ objectFit: "contain", borderRadius: "9999px" }}
            alt="ths profileImage"
          />
        </div>
        <div className=" w-[100%] flex flex-col items-center sm:flex-row sm:justify-between px-2 ">
          <div className="flex  flex-col items-center sm:items-start w-[100%]">
            <p className="text-Neutra60 font-[700] text-lg capitalize">
              {userName}
            </p>
            <div className="flex w-fit items-center">
              <ParseReviewStars review={userRating} />
              <span className="mx-2"> | </span>
              <p> reviews</p>
            </div>

            <p className="text-Neutra40 text-sm"> {userRole}</p>
            <p className="text-Neutra40 text-sm"> {email}</p>
          </div>
          <div className="flex justify-center space-x-4 min-w-fit py-2 items-center">
            <ShareIcon />
            <Button
              variant="outline-primary"
              paddingLess
              className="px-1  sm:px-2 sm:py-2 "
              onClick={() => {
                modal({
                  state: "basic info",
                  isOpen: true,
                });
              }}
            >
              Edit profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
