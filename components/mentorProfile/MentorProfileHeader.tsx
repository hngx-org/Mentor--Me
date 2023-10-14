"use client";

import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { EditIcon, ProfileImage } from "@/public";

import { ShareIcon } from "@/public/SVGs";
import LoadingSpinner from "../loaders/LoadingSpinner";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";

type MentorProfileHeaderProps = {
  userName: string;
  userRole: string;
  userRating: number;
  userId?: string;
  email?: string;
};

export default function MentorProfileHeader({
  userName,
  userRating,
  userRole,
  userId,
  email,
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
<<<<<<< HEAD
    <div className="w-[100%] h-[294px]   relative flex flex-col  ">
      <div className="h-[50%] w-[100%]  bg-blue-500 bg-[url('/assets/mentor-profileBanner.png')] bg-cover bg-no-repeat" />
      <div className="h-[50%] w-[100%]  bg-white" />
      <div className=" w-[80%]   h-fit flex  flex-col items-center space-y-2 sm:space-x-2  sm:flex-row self-center absolute  top-[100px] sm:top-[80px] ">
        <div className=" w-[90px] h-[90px] sm:w-[200px] sm:h-[200px]   ">
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
            <p className="text-Neutra40 text-sm"> {userRole}</p>
            <p className="text-Neutra40 text-sm"> {email}</p>
          </div>
          <div className="flex justify-center space-x-4 min-w-fit py-2 items-center">
            <ShareIcon />
            <Button
              variant="outline-primary"
              paddingLess
              className="px-1  sm:px-2 sm:py-2 "
            >
              Edit profile
            </Button>
          </div>
        </div>
=======
    <section className="w-full max-lg:pb-16 relative">
      <div className="flex w-full h-[230px] max-sm:h-[200px]">
        <Image
          src="/assets/mentor-profileBanner.png"
          alt="cover"
          width={2000}
          height={500}
        />
>>>>>>> dev
      </div>

      {/* <div className="h-[50%] w-[100%]  bg-white" /> */}
      <div className="flex w-full justify-between items-center max-sm:flex-col max-sm:items-start max-sm:pl-6">
        <div className="flex items-center gap-6  w-full max-sm:flex-col max-sm:items-start max-lg:gap-6">
          <div className="relative -mt-12 sm:pl-5">
            <Suspense fallback={<LoadingSpinner />}>
              {userName ? (
                <div
                  className="w-[200px] h-[200px] rounded-full text-white font-bold font-Hanken uppercase text-7xl flex items-center justify-center "
                  style={{ backgroundColor: randomColor }}
                >
                  {userName[0]}
                </div>
              ) : (
                <div
                  className="w-[200px] h-[200px] rounded-full text-white font-bold font-Hanken uppercase text-7xl flex items-center justify-center "
                  style={{ backgroundColor: randomColor }}
                >
                  <LoadingSpinner />
                </div>
              )}
            </Suspense>
          </div>
          <div className="flex flex-col">
            <p className="flex gap-4 font-Inter font-bold lg:text-[32px] text-Neutra50 items-center capitalize">
              <span>{userName}</span>
            </p>
            <p className="uppercase">{userRole}</p>
          </div>
        </div>
        <Link
          href="/mentor-profile?action=edit-mentor"
          className="sm:w-full max-sm:mt-4  flex justify-center items-center  gap-2"
        >
          <Button
            className="px-4 py-2 "
            title="Edit Profile"
            variant="secondary"
          />
          <ShareIcon />
        </Link>
      </div>
    </section>
  );
}
