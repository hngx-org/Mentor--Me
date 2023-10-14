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
    <section className="w-full max-lg:pb-16 relative">
      <div className="flex w-full h-[230px] max-sm:h-[200px]">
        <Image
          src="/assets/mentor-profileBanner.png"
          alt="cover"
          width={2000}
          height={500}
        />
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
