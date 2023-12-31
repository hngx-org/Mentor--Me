/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MenteeDashboardProfileImg } from "@/public";
import { EditIcon } from "@/public/SVGs";

import UpdateProfileForm from "./forms/UpdateProfileForm";
import ExperienceForm from "./forms/ExperienceForm";
import SocialsForm from "./forms/SocialsForm";

type UpdateProfileTabsProp = {
  id: number;
  title: string;
  tab: string;
};
const updateProfileTabs: UpdateProfileTabsProp[] = [
  {
    id: 1,
    title: "Basic info",
    tab: "basic-info",
  },
  {
    id: 2,
    title: "Experience",
    tab: "experience",
  },
  {
    id: 3,
    title: "Social Links",
    tab: "socials",
  },
];
export default function UpdateProfile() {
  const [isDark, setIsDark] = useState(true);

  const [formData, setFormData] = useState({
    name: "",

    bio: "",
  });
  const isDisabled = !formData.name || !formData.bio;
  const [activeTab, setActiveTab] = useState<string | null | undefined>("");

  const router = useRouter();
  const params = useSearchParams().get("tab");
  const paramsAction = useSearchParams().get("action");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // save to local storage
  useEffect(() => {
    setActiveTab(params || "basic-info");
    if (typeof localStorage !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (theme === "light") {
        setIsDark(false);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "light" : "light");
  }, [isDark]);

  return (
    <div
      className={`w-full justify-start  flex flex-col items-start gap-8 h-full min-h-screen relative   px-4 pb-16 sm:pb-0 sm:pl-10 lg:pl-20 ${
        isDark ? "bg-gray-950" : ""
      }`}
    >
      <Link
        href={
          paramsAction === "edit-mentor"
            ? "/mentor-profile?path=profile"
            : "/mentee-profile?path=profile"
        }
        className="absolute top-5 right-5 h-[40px] w-[40px] flex justify-center items-center bg-black hover:bg-transparent group/close transition-all duration-300"
      >
        <p
          className={`before:transition-all duration-300 before:font-bold before:hidden relative before:absolute before:content-['Close?'] group-hover/close:before:block before:top-1 before:right-0 before:text-xl ${
            isDark ? "text-white/80" : "text-Neutra40"
          }`}
        >
          <button className="text-white text-2xl font-medium group-hover/close:opacity-0">
            X
          </button>
        </p>
      </Link>

      <div
        className={`pt-16 select-none  font-medium text-xl font-Inter ${
          isDark
            ? "font-semibold uppercase bg-gradient-to-r from-[#0d62ff] via-[#00ffb7] to-[#ff00fb] bg-clip-text text-transparent"
            : "text-Neutra50"
        }`}
      >
        <p>Update your profile details</p>
      </div>
      <div
        className={`flex gap-4 w-full justify-between xl:max-w-[900px] xl:ml-[-17px] sm:max-w-[400px] px-2 sm:p-4 ${
          isDark ? "border-gray-800 border-t border-b" : ""
        }`}
      >
        {updateProfileTabs.map((session) => (
          <button
            className={`${
              isDark && activeTab === session.tab
                ? "text-white"
                : "text-Neutra40"
            } cursor-pointer capitalize text-[14px] sm:text-[18px] font-Hanken pb-2 border-b-[2px] border-[#f9fafc]   ${
              activeTab === session.tab && !isDark
                ? "!border-Accent1 text-black font-medium"
                : activeTab === session.tab && isDark
                ? "!border-Accent3  font-medium"
                : ""
            }`}
            key={session.id}
            onClick={() => {
              router.push(`?action=edit-profile&tab=${session.tab}`, {
                scroll: false,
              });
              setActiveTab(session.tab);
            }}
          >
            {session.title}
          </button>
        ))}
      </div>
      {activeTab === "basic-info" && <UpdateProfileForm isDark={isDark} />}
      {activeTab === "experience" && <ExperienceForm isDark={isDark} />}
      {activeTab === "socials" && <SocialsForm isDark={isDark} />}
    </div>
  );
}
