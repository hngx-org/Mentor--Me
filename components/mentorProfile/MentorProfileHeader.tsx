"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

import { ShareIcon } from "@/public/SVGs";
import { Button } from "../buttons/button";
import { ModalState } from "@/app/(mentor)/(dashboard-mentor)/mentor-profile/page";

type MentorProfileHeaderProps = {
  userName: string;
  userRole: string;
  userRating: number;
  userId?: string;
  mentorship?: string;
  openModal: React.Dispatch<React.SetStateAction<ModalState>>;
};

export default function MentorProfileHeader({
  userName,
  userRating,
  userRole,
  userId,
  mentorship,
  openModal,
}: MentorProfileHeaderProps) {
  const [randomColor, setRandomColor] = useState("");

  const randomColors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#8b00ff",
    "#ffa500",
    "#ff00ff",
    "#00ffff",
    "#000000",
  ];
  const getRandomColor = () => {
    const random = Math.floor(Math.random() * randomColors.length);
    return randomColors[random];
  };
  useEffect(() => {
    const color = getRandomColor();
    setRandomColor(color);
  }, []);

  return (
    <div className="w-[100%] h-[294px]   relative flex flex-col  ">
      <div className="h-[50%] w-[100%]  bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400  bg-cover bg-no-repeat" />
      <div className="h-[50%] w-[100%]  bg-white" />
      <div className=" w-[80%]   h-fit flex  flex-col items-center space-y-2 sm:space-x-2  sm:flex-row self-center absolute  top-[100px] sm:top-[90px] ">
        <div className=" w-[90px] h-[90px]  sm:w-fit sm:h-fit  border rounded-full border-[6px] border-white ">
          <Image
            src={`https://api.dicebear.com/7.x/initials/png?seed=${userName}`}
            width={200}
            height={200}
            sizes="500px"
            style={{
              objectFit: "cover",
              borderRadius: "9999px",
            }}
            alt="ths profileImage"
            quality={100}
          />
        </div>
        <div className=" w-[100%] flex flex-col items-center sm:flex-row sm:justify-between px-2 ">
          <div className="flex  flex-col items-center sm:items-start w-[100%]">
            <p className="text-Neutra60 font-[700] text-lg capitalize">
              {userName}
            </p>
            <p className="text-Neutra40 text-sm"> {userRole}</p>
            <p className="text-Neutra40 text-sm"> {mentorship}</p>
          </div>
          <div className="flex justify-center space-x-4 min-w-fit py-2 items-center">
            <ShareIcon />
            <Button
              variant="outline-primary"
              paddingLess
              className="px-1  sm:px-2 sm:py-2 "
              onClick={() => {
                openModal({
                  isOpen: true,
                  state: "basic info",
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
