// @ts-nocheck

"use client";

import Link from "next/link";
import { Suspense } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { SideBarMentorProps } from "./SidebarMentor";
import {
  Logo2,
  LogoIcon,
  LogoutIcon,
  LogoutMenteeIcon,
  ProfileIcon,
  SettingIcon,
} from "@/public/SVGs";

import { sidebarMenteeLinks } from "@/lib/Constant";
import AuthProfileCard from "../cards/auth-profile-card/AuthProfileCard";
import useAuth from "@/context/useAuth";
import LoadingSpinner from "../loaders/LoadingSpinner";

export default function MenteeSideBar({
  light = false,
  path,
  userName,
  email,
  imgSrc,
}: SideBarMentorProps & { path?: string | null | undefined }) {
  const logoutHandler = () => {
    localStorage.clear();
  };

  return (
    <section
      className={`hidden w-[240px] border-[1px] py-7 px-4 min-h-screen h-screen fixed left-0 ${
        light ? "bg-[#fff]" : " bg-[#000] hidden lg:block"
      }`}
    >
      <div className="flex flex-col justify-between h-full relative">
        <div>
          <div className="w-full pl-3">{light ? <Logo2 /> : <LogoIcon />}</div>
          <div className="mt-10  ">
            <p className="font-Inter text-[14px]  leading-[20.3px] font-[500]   text-Neutra30 pl-3">
              MENU
            </p>
            <ul className="px-3  py-4  flex flex-col gap-[10px]  cursor-pointer text-[13px]  ">
              {sidebarMenteeLinks.map((link) => (
                <Link key={link.id} href={link.path} prefetch>
                  <li
                    className={`hover:bg-Neutra50 transition-all duration-300 flex gap-3  ${
                      light && path === link.label
                        ? "bg-[#E5FFFF]"
                        : path === link.label
                        ? " bg-Neutra50"
                        : ""
                    } rounded-[5px] p-2 items-center`}
                  >
                    <span>{link.iconDark}</span>
                    <span
                      className={` font-Inter text-[14px]  font-[500] ${
                        light ? "text-[#008080]" : "text-[#fff]"
                      } `}
                    >
                      {link.label}
                    </span>
                    {/* {link.label === "Communities" && (
                      <span className="text-white font-medium text-lg ">
                        ↗
                      </span>
                    )} */}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-Neutra40 pt-4">
          <div className="flex items-center w-full justify-start gap-4 pt-6 pl-2 hover:brightness-150 transition-all duration-300 ">
            <SettingIcon />

            <span className="  font-Inter text-[14px]  font-[500]  text-[#ffff] cursor-pointer">
              Setting
            </span>
          </div>
          <Link
            onClick={logoutHandler}
            href="/welcome/login?path=login"
            className="flex items-center w-full justify-start gap-4 pt-6 pl-2 hover:brightness-150 transition-all duration-300 "
          >
            <LogoutIcon />

            <span className="  font-Inter text-[14px]  font-[500]  text-Error50">
              LogOut
            </span>
          </Link>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <Link
            href="/mentee-profile?path=profile"
            prefetch
            className="bottom-3 lg:hidden  mt-2"
          >
            <AuthProfileCard
              path={path}
              email={email}
              user={userName}
              styles="text-Neutra30 "
              profileImg={imgSrc}
            />
          </Link>
        </Suspense>
      </div>
    </section>
  );
}
