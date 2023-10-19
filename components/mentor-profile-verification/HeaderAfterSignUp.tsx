/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { DashboardMenteeNavImg } from "@/public";
import { BulletIcon, NotificationBingIcon } from "@/public/SVGs";
import { useAuthCtx } from "@/context/AuthContext";

interface Steps {
  step: number;
  path?: string | null;
  action?: string | null;
  username?: string;
  imgSrc?: string;
  name?: string | null;
  jobTitle?: string | null;
}

export default function HeaderAfterSignUp({
  step,
  path,
  action,
  username,
  imgSrc,
  jobTitle,
  name,
}: Steps) {
  const { user } = useAuthCtx();
  const router = useRouter();
  const [isView, setIsView] = useState(false);
  const isStep1To4 = step >= 1 && step <= 4;
  const pathname = usePathname();
  const isMentor = pathname.startsWith("/mentor");
  const h1ClassName = isStep1To4
    ? "font-Hanken font-[700]  md:text-2xl text-xl text-Neutra20"
    : "font-Hanken font-[700] md:text-2xl text-xl text-NeutalBase";

  return (
    <nav className="flex justify-between items-center py-5 md:px-4 px-2 bg-[#FFFF] cursor-pointer border-b">
      <div className="flex items-center">
        <h1 className={h1ClassName}>Mentor Account </h1>

        {isStep1To4 && (
          <div className="md:flex hidden">
            <BulletIcon />
            <p className="font-Hanken font-[700] md:text-2xl text-xl text-NeutalBase">
              {step === 1
                ? "Certifications"
                : step === 2
                ? "Qualifications"
                : step === 3
                ? " Achievements & Awards"
                : "Identification"}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-5 relative">
        <span className="md:block hidden">
          <NotificationBingIcon />
        </span>

        <div
          className={` ${
            isView
              ? "hidden"
              : "text-[12px] text-Neutra40  font-Hanken hidden sm:block"
          }  `}
        >
          <p className="font-[500] text-black text-[14px]">
            {name || "Username"}
          </p>
          {/* @ts-ignore */}
          <p>{jobTitle || "Job Title"}</p>
        </div>

        <div
          className="cursor-pointer relative  rounded-full select-none"
          onClick={() => setIsView(!isView)}
          role="dialog"
        >
          <Image
            src={imgSrc || DashboardMenteeNavImg}
            alt="mentor"
            width={40}
            height={40}
            className="object-cover rounded-full"
          />

          {isView && (
            <>
              <div
                className="min-h-screen h-screen top-0 left-0 w-full fixed z-[99] opacity-0 bg-black/25 cursor-default"
                role="dialog"
                onClick={() => setIsView(!isView)}
              />
              <div className=" absolute h-[100px] w-[180px] top-16 -right-2 z-[999999] bg-black backdrop-blur-xl flex flex-col justify-start items-center  border border-Neutra20  text-lg font-medium font-Hanken  shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-xl before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:bg-black before:overflow-hidden before:-top-2 before:rotate-[140deg] before:right-4 before:z-[-1]">
                <button
                  type="button"
                  disabled={path === "profile"}
                  className={`${
                    path === "profile" ? "opacity-70 !cursor-not-allowed" : ""
                  } flex items-center w-full justify-start  border-b border-Neutra50 pb-1 hover:bg-gray-800/60 rounded-tl-xl rounded-tr-xl  pl-6`}
                  onClick={() => {
                    router.push(
                      `${
                        isMentor
                          ? "/mentor-profile?path=profile"
                          : "/mentee-profile?path=profile"
                      }`,
                      {
                        scroll: false,
                      }
                    );
                    setIsView(false);
                  }}
                >
                  <Link
                    className={`text-[12px] text-Neutra10  font-Hanken   flex flex-col items-start ${
                      path === "profile" ? "opacity-50 !cursor-not-allowed" : ""
                    } `}
                    prefetch
                    href={
                      isMentor
                        ? "/mentor-profile?path=profile"
                        : "/mentee-profile?path=profile"
                    }
                  >
                    <div className="   text-[12px] text-Neutra10  font-Hanken hidden sm:block ">
                      <p className="font-[500] text-white text-[14px]">
                        {username || "Username"}
                      </p>
                      <p>{jobTitle || "JobTitle"}</p>
                    </div>
                  </Link>
                </button>
                <button
                  type="button"
                  className="pl-6 text-white flex items-center  w-full justify-start gap-4  hover:bg-gray-800/60 px-2 p-1 rounded-bl-xl rounded-br-xl "
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
