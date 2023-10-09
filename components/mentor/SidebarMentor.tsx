// @ts-nocheck

"use client";

import Link from "next/link";
import { sidebarMentorLinks } from "@/lib/constants";
import { LogoIcon, LogoutIcon, ProfileIcon, SettingIcon } from "@/public/SVGs";

export type SideBarMentorProps = {
  light?: boolean;
};

export default function SidebarMentor({ light = false }: SideBarMentorProps) {
  return (
    <section
      className={`w-[274px] border-[1px]  p-7 h-[900px] relative ${
        light ? "bg-[#fff]" : " bg-[#000]"
      }`}
    >
      <div className="flex flex-col">
        <div className="">{light ? "" : <LogoIcon />}</div>

        {/* menu */}

        <div>
          {/* <div className="w-full pl-3">
            <LogoIcon />
          </div> */}
          <div className="mt-20">
            <p className="font-Inter text-[14px] leading-[20.3px] font-[500] text-Neutra30 pl-3">
              MENU
            </p>
            <ul className="px-3 py-4  gap-4 cursor-pointer">
              {sidebarMentorLinks.map((link) => (
                <Link key={link.id} href={link.path} prefetch>
                  <li
                    className={`flex gap-3 mt-4  ${
                      light ? "bg-[#E5FFFF]" : ""
                    } rounded-[5px] p-2 items-center`}
                  >
                    <span>{link.iconDark}</span>

                    <span
                      className={` font-Inter text-[14px] font-[500] ${
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

        <div className="my-10 border-t-2 border-Neutra40">
          <ul className=" px-3  py-4 flex flex-col gap-4 cursor-pointer">
            <li className="flex gap-3 rounded-[5px] p-2">
              <span>
                <SettingIcon />
              </span>
              <span
                className={`font-Inter text-[14px] font-[500] ${
                  light ? "text-[#40444B]" : "text-[#fff]"
                } `}
              >
                Settings
              </span>
            </li>
            <li className="flex gap-3 rounded-[5px] p-2">
              <span>
                <LogoutIcon />
              </span>
              <span className="  font-Inter text-[14px] font-[500]  text-Error50">
                LogOut
              </span>
            </li>
          </ul>
        </div>
        {/* profile */}

        <div className=" absolute bottom-3">
          <ul className="  cursor-pointer   ">
            <li className="flex gap-3 items-center p-2">
              <span>
                <ProfileIcon />
              </span>
              <span className="  font-Inter text-[14px] font-[500]   text-Neutra30">
                <span className={`${light ? "text-[#000]" : " text-Neutra30"}`}>
                  {" "}
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
