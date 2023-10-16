// @ts-nocheck

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarMentorLinks } from "@/lib/Constant";
import {
  LogoIcon,
  LogoutIcon,
  LogoutMenteeIcon,
  ProfileIcon,
  SettingIcon,
} from "@/public/SVGs";
import { useAuthCtx } from "@/context/AuthContext";
import AuthProfileCard from "../cards/auth-profile-card/AuthProfileCard";
import useAuth from "@/context/useAuth";

export type SideBarMentorProps = {
  light?: boolean;
};

export default async function SidebarMentor({
  light,
  path,
}: SideBarMentorProps & { path?: string | null | undefined }) {
  const { data } = useAuth();
  const email = data?.userDetails.email;
  const username = data?.userDetails.fullName;

  return (
    <section
      className={`hidden w-[274px]  p-5 min-h-screen h-full fixed lg:flex left-0 top-0 ${
        light ? "bg-[#fff]" : " bg-[#000]"
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        {/* <div className="h-[82px]">
					<LogoIcon />
				</div> */}

        {/* menu */}

        <div>
          <div className="w-full pl-3">
            <LogoIcon />
          </div>
          <div className="mt-20">
            <p className="  font-Inter tetx-[14px]  leading-[20.3px] font-[500]   text-Neutra30 pl-3">
              MENU
            </p>
            <ul className="l px-3  py-4  gap-4 cursor-pointer text-xl">
              {sidebarMentorLinks.map((link) => (
                <Link key={link.id} href={link.path} prefetch>
                  <li
                    className={`flex gap-3  ${
                      light && path === link.label.toLowerCase()
                        ? "bg-[#E5FFFF]"
                        : !light && path === link.label.toLowerCase()
                        ? " bg-Neutra50"
                        : ""
                    } rounded-[5px] p-2 items-center`}
                  >
                    <span>{link.iconDark}</span>

                    <span
                      className={` font-Inter tetx-[14px] font-[500] ${
                        light ? "text-[#008080]" : "text-[#fff]"
                      } `}
                    >
                      {link.label}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        {/* logout */}

        <div className="py-6 border-t-2 border-Neutra40 ">
          <Link
            href="/welcome/login?path=login"
            className="flex items-center w-full justify-start gap-4 pl-2 hover:brightness-150 transition-all duration-300 "
          >
            <span className="h-7 w-7 !rotate-180 xl:w-8 xl:h-8 opacity-0 animate-slideLeft">
              <LogoutMenteeIcon />
            </span>
            <span className="  font-Inter text-[14px] xl:text-xl font-[500]  text-Error50">
              LogOut
            </span>
          </Link>
        </div>
        {/* profile */}

        <Link href="/mentor-profile?path=profile" prefetch>
          {/* <ul className="  cursor-pointer   ">
            <li className="flex gap-3 items-center  p-1">
              <div className="overflow-hidden rounded-full">
                <Image width={44} height={44} src="" alt="profile" />
              </div>
              <span className="  font-Inter tetx-[10px] font-[500]   text-Neutra30">
                <span className={`${path === "profile" ? "text-white" : ""}`}>
                  Funmi Oladapo
                </span>
                <br /> ihaveperks@gmail.com
              </span>
            </li>
          </ul> */}
          <AuthProfileCard
            email={email}
            user={username}
            styles="text-Neutra30"
          />
        </Link>
      </div>
    </section>
  );
}
