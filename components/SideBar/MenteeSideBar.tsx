// @ts-nocheck

"use client";

import Link from "next/link";

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
import { DashboardMenteeNavImg } from "@/public";

export default function MenteeSideBar({
  light = false,
  path,
  userName,
  email,
  imgSrc,
}: SideBarMentorProps & { path?: string | null | undefined }) {
  const router = useRouter();
  return (
    <section
      className={`hidden w-[274px] border-[1px] py-7 px-4 min-h-screen h-screen fixed left-0 ${
        light ? "bg-[#fff]" : " bg-[#000] hidden lg:block"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="w-full pl-3">{light ? <Logo2 /> : <LogoIcon />}</div>
          <div className="mt-16 2xl:mt-20 ">
            <p className="font-Inter text-[14px]  leading-[20.3px] font-[500]   text-Neutra30 pl-3">
              MENU
            </p>
            <ul className="px-3  py-4  flex flex-col gap-2 xl:gap-y-6 cursor-pointer text-[13px]  ">
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
                      className={` font-Inter text-[14px] xl:text-xl font-[500] ${
                        light ? "text-[#008080]" : "text-[#fff]"
                      } `}
                    >
                      {link.label}
                    </span>
                    {link.label === "Communities" && (
                      <span className="text-white font-medium text-lg ">
                        ↗
                      </span>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-4 border-t-2 border-Neutra40 pt-4">
          <Link
            href="/"
            onClick={() => router.replace("/")}
            className="flex items-center w-full justify-start gap-4 pl-2 hover:brightness-150 transition-all duration-300 "
          >
            <LogoutIcon />

            <span className="  font-Inter text-[14px] xl:text-xl font-[500]  text-Error50">
              LogOut
            </span>
          </Link>
        </div>

        <div
          className={`${
            path === "profile" ? "border border-[#E5FFFF] rounded-2xl" : ""
          }`}
        >
          <Link href="/mentee-profile?path=profile" prefetch>
            <ul className="  cursor-pointer   ">
              <li className="flex gap-1 items-center  p-1 ">
                <Image
                  src={imgSrc || DashboardMenteeNavImg}
                  alt="mentee"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                <span className="  font-Inter tetx-[6px] font-[500]   text-Neutra30 overflow-hidden">
                  <span className={`${path === "profile" ? "text-white" : ""}`}>
                    {userName}
                  </span>
                  <br /> {email}
                </span>
              </li>
            </ul>
          </Link>
        </div>
      </div>
    </section>
  );
}
