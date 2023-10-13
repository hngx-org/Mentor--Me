// @ts-nocheck
import Link from "next/link";

import { SideBarMentorProps } from "./SidebarMentor";
import {
  Logo2,
  LogoIcon,
  LogoutIcon,
  ProfileIcon,
  SettingIcon,
} from "@/public/SVGs";

import { sidebarMenteeLinks } from "@/lib/Constant";

export default function MenteeSideBar({
  light = false,
  path,
}: SideBarMentorProps & { path?: string | null | undefined }) {
  return (
    <section
      className={`hidden w-[274px] border-[1px] p-7 h-[100vh] fixed left-0 ${
        light ? "bg-[#fff]" : " bg-[#000] hidden lg:block"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="w-full pl-3">{light ? <Logo2 /> : <LogoIcon />}</div>
          <div className="mt-10 2xl:mt-20 ">
            <p className="font-Inter text-[14px]  leading-[20.3px] font-[500]   text-Neutra30 pl-3">
              MENU
            </p>
            <ul className="px-3  py-4 flex flex-col gap-2 cursor-pointer text-[13px]  ">
              {sidebarMenteeLinks.map((link) => (
                <Link key={link.id} href={link.path} prefetch>
                  <li
                    className={`flex gap-3  ${
                      light && path === link.label
                        ? "bg-[#E5FFFF]"
                        : path === link.label
                        ? " bg-Neutra50"
                        : ""
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

        <div className="my-4 border-t-2 border-Neutra40 ">
          <ul className=" px-3  py-1 flex flex-col  cursor-pointer">
            {/* <Link href="/mentee-settings?path=settings">
              <li
                className={`flex gap-2 rounded-[5px] p-2 items-center ${
                  light && path === "settings"
                    ? "bg-[#E5FFFF]"
                    : !light && path === "settings"
                    ? " bg-Neutra50"
                    : ""
                }`}
              >
                <SettingIcon />
                <span className="font-Inter text-[11px] font-[500]  rounded-[5px] p-2 text-white">
                  Setting
                </span>
              </li>
            </Link> */}
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

        <div className=" relative bottom-4">
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
