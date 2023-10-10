/* eslint-disable react/button-has-type */
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MenteeDashboardProfileImg } from "@/public";
import { EditIcon } from "@/public/SVGs";
import Button from "@/app/(mentee)/mentee-sessions/(ui)/VxrcelBtn";
import UpdateProfileForm from "./forms/UpdateProfileForm";

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
    title: "Social links",
    tab: "social_links",
  },
];
export default function UpdateProfile() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const isDisabled =
    !formData.name || !formData.email || !formData.message || !formData.phone;
  const [activeTab, setActiveTab] = useState<string | null | undefined>("");

  const router = useRouter();
  const params = useSearchParams().get("tab");

  useEffect(() => {
    setActiveTab(params || "basic-info");
  }, [params]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full justify-start  flex flex-col items-start gap-8 h-full min-h-screen relative   px-4 pb-16 sm:pb-0 ">
      <Link
        href="/mentee-profile?path=profile"
        className="absolute top-5 right-5 h-[40px] w-[40px] flex justify-center items-center bg-black"
      >
        <button className="text-white text-2xl font-medium">X</button>
      </Link>
      <div className="pt-10 sm:pt-16 text-Neutra50 font-medium text-lg font-Inter">
        <p>Update your profile details</p>
      </div>
      <div className="flex gap-4 w-full justify-between max-w-[400px]">
        {updateProfileTabs.map((session) => (
          <button
            className={` cursor-pointer capitalize text-[14px] sm:text-[18px] font-Hanken pb-2 border-b-[2px] border-[#f9fafc]  text-Neutra40 ${
              activeTab === session.tab
                ? "!border-Accent1 text-black font-medium"
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
      {activeTab === "basic-info" && <UpdateProfileForm />}
    </div>
  );
}
