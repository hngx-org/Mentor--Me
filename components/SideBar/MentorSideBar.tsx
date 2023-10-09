// @ts-nocheck

"use client";

import Link from "next/link";

import { sidebarMentorLinks } from "@/lib/Constant";
import {
  Logo2,
  LogoIcon,
  LogoutIcon,
  ProfileIcon,
  SettingIcon,
} from "@/public/SVGs";

export type SideBarMentorProps = {
  light?: boolean;
  path?: string;
  className?: string;
};

export default function MentorSideBar({
  light = false,
  path,
  className,
}: SideBarMentorProps) {
  return (
    <section
      className={`w-[274px] min-h-screen border-[1px] relative p-5 hidden lg:flex ${
        light ? "bg-[#fff]" : "bg-[#000]"
      } ${className}`}
    >
      <div className="flex flex-col">
        <div>
          <div className="w-full pl-3">{light ? <Logo2 /> : <LogoIcon />}</div>
          <div className="mt-14">
            <p className="font-Inter text-[14px]  leading-[20.3px] font-[500]   text-Neutra30 pl-3">
              MENU
            </p>
            <ul className="px-3  py-2  gap-1 cursor-pointer text-[14px]">
              {sidebarMentorLinks.map((link) => (
                <Link key={link.id} href={link.path} prefetch>
                  <li
                    className={`flex gap-3 mt-4  ${
                      light && path === link.label.toLowerCase()
                        ? "bg-[#E5FFFF]"
                        : !light && path === link.label.toLowerCase()
                        ? " bg-Neutra50"
                        : ""
                    } rounded-[5px] p-2 items-center`}
                  >
                    {light ? link.iconLight : link.iconDark}

                    <span
                      className={` font-Inter text-[14px] font-[500] ${
                        light ? " text-NeutalBase" : "text-[#fff]"
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

        <div className="my-10 border-t-2 border-Neutra40">
          <ul className="px-3  py-2 flex flex-col gap-2 cursor-pointer">
            <li className="flex gap-3 rounded-[5px] p-2">
              <SettingIcon />

              <span
                className={` font-Inter text-[14px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Setting
              </span>
            </li>
            <li className="flex gap-2  rounded-[5px] p-2">
              <LogoutIcon />

              <span className="font-Inter text-[14px] font-[500]  text-Error50">
                LogOut
              </span>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-1">
          <ul className="cursor-pointer">
            <li className="flex gap-3 items-center  p-2">
              <ProfileIcon />

              <span className="font-Inter text-[14px] font-[500]   text-Neutra30">
                <span className={`${light ? "text-[#000]" : "text-Neutra30"}`}>
                  Funmi Oladapo
                </span>
                <br /> funmi@zurimp.com
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
