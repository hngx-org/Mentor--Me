/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { DashboardMenteeNavImg } from "@/public";
import { NotificationBingIcon } from "@/public/SVGs";

export type NavbarMenteeProps = {
  path?: string | null;
  action?: string | null;
  username?: string;
  imgSrc?: string;

  name?: string | null;
  bio?: string | null;
  email?: string | null;
  jobTitle?: string | null;
};
export const NavbarMentee = ({
  path,
  action,
  username,
  imgSrc,
  jobTitle,
  name,
  bio,
  email,
}: NavbarMenteeProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isView, setIsView] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMentor = pathname.startsWith("/mentor");

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <nav
      className={`${
        scrollY > 250
          ? "fixed top-0 left-0 bg-white/30 z-50 backdrop-blur-xl lg:ml-[274px]"
          : ""
      } flex w-full justify-between px-3 items-center  py-4   ${
        action === "edit-profile" ? "hidden" : ""
      }`}
    >
      <h3 className="uppercase  font-Hanken font-[700] text-[24px]">
        {path || "[PathName Here]"}
      </h3>
      {scrollY > 400 && (
        <button
          type="button"
          onClick={() => router.push("", { scroll: true })}
          className="animate-slideLeft translate-y-16 font-Hanken font-[500] border border-Neutra50 rounded-full px-2 py-1 text-[14px] hover:bg-white active:scale-90 transition-all duration-300"
        >
          Goto Top
        </button>
      )}
      <div className="flex items-center gap-3 relative">
        <NotificationBingIcon />
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
              <div className=" absolute h-[100px] w-[180px] top-16 -right-2 z-[999999] bg-black backdrop-blur-xl flex flex-col justify-between items-center  border border-Neutra20  text-lg font-medium font-Hanken  shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-xl before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:bg-black before:overflow-hidden before:-top-2 before:rotate-[140deg] before:right-4 before:z-[-1]">
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
                    className={` ${
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
};
