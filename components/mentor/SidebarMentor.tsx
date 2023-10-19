// @ts-nocheck

"use client";

import Link from "next/link";
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

export type SideBarMentorProps = {
  light?: boolean;
  imgSrc?: string;

  name?: string | null;
  bio?: string | null;
  email?: string | null;
  jobTitle?: string | null;
};

export default function SidebarMentor({
  light,
  path,
  imgSrc,
  name,
  bio,
  email,
  jobTitle,
}: SideBarMentorProps & { path?: string | null | undefined }) {
  const { user } = useAuthCtx();

  // const [imgUrl, setImgUrl] = useState("");
  // const email = userData.data?.user.email;
  // const profileImg = `https://api.dicebear.com/7.x/initials/png?seed=${
  //   imgUrl || ""
  // }`;

  // may or may not need this
  // useEffect(() => {
  //   if (email) {
  //     setImgUrl(email);
  //   }
  // }, [imgUrl]);

  return (
    <section
      className={`hidden w-[240px]  p-5 min-h-screen h-full fixed lg:flex left-0 top-0 ${
        light ? "bg-[#fff]" : " bg-[#000]"
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="w-full pl-3">
            <LogoIcon />
          </div>
          <div className="mt-8">
            <p className="font-Inter tetx-[14px]  leading-[10.3px] font-[500]   text-Neutra30 pl-3">
              MENU
            </p>
            <ul className="  mt-2 px-4  py-2  gap-[2px] cursor-pointer  ">
              {sidebarMentorLinks.map((link) => (
                <Link key={link.id} href={link.path} prefetch>
                  <li
                    className={`flex gap-3  hover:bg-Neutra50 transition-all duration-300   ${
                      light && path === link.label.toLowerCase()
                        ? "bg-[#E5FFFF]"
                        : !light && path === link.label.toLowerCase()
                        ? " bg-Neutra50"
                        : ""
                    } rounded-[5px] p-2 items-center`}
                  >
                    <span>{link.iconDark}</span>

                    <span
                      className={` font-Inter text-[12px] font-[500]  ${
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

        <div className="mt-5 my-3 border-t-2 border-Neutra40  flex flex-col gap-2 ">
          <div className="flex items-center w-full justify-start gap-4  pt-4 pl-2 hover:brightness-150 transition-all duration-300 ">
            <SettingIcon />

            <span className="  font-Inter text-[12px]  font-[500]  text-[#ffff] cursor-pointer">
              Setting
            </span>
          </div>
          <Link
            href="/welcome/login?path=login"
            className="flex items-center w-full justify-start gap-4 pl-2 hover:brightness-150 transition-all duration-300 "
          >
            <LogoutIcon />

            <span className="  font-Inter text-[12px] font-[500]  text-Error50">
              LogOut
            </span>
          </Link>
        </div>
        {/* profile */}

        <Link
          href="/mentor-profile?path=profile"
          prefetch
          className="bottom-3  mt-2"
        >
          <AuthProfileCard
            path={path}
            email={email}
            user={name}
            styles="text-Neutra30 "
          />
        </Link>
      </div>
    </section>
  );
}
