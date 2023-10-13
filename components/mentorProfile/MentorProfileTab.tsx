"use client";

import Image from "next/image";
import { useState } from "react";

export type ModalType = {
  state: "basic info" | "Experience/ Certification" | "Social links";
};

export default function MentorProfileTabLayout({
  modalState,
}: {
  modalState: string;
}) {
  const [active, setActive] = useState(modalState);

  return (
    <div className="w-[100%] my-10">
      <div className="flex justify-between w-[100%] text-Neutra10 text-xs sm:text-base cursor-pointer">
        <div
          onClick={() => {
            setActive("basic info");
          }}
          className={`${
            active === "basic info" ? "border-b-2  border-Accent1" : ""
          }`}
          role="presentation"
        >
          <p> basic info</p>
        </div>
        <div
          onClick={() => {
            setActive("Experience/ Certification");
          }}
          className={`${
            active === "Experience/ Certification"
              ? "border-b-2  border-Accent1"
              : "border-0"
          }`}
          role="presentation"
        >
          <p> Experience/ Certifications</p>
        </div>
        <div
          onClick={() => {
            setActive("Social links");
          }}
          className={`${
            active === "Social links" ? "border-b-2  border-Accent1" : ""
          }`}
          role="presentation"
        >
          <p>Social links</p>
        </div>
      </div>
      {active === "basic info" && <BasicInfoTab />}
      {active === "Experience/ Certification" && (
        <p className="h-[100%] flex justify-center my-20 ">in progress</p>
      )}
      {active === "Social links" && (
        <p className="h-[100%] flex justify-center my-20 "> in progress</p>
      )}
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="w-[100%] flex flex-col h-[100px] space-x-4 my-10">
      <p>change profile photo</p>
      <div className="w-[100%] flex h-[100px] space-x-4 my-10 ">
        <div className="w-[54px]  h-[54px] sm:w-[54px] sm:h-[54px]  rounded-full relative px-2">
          <Image
            style={{ objectFit: "cover", borderRadius: "100%" }}
            src="/assets/mentor3.png"
            fill
            alt="profile"
          />
        </div>

        <div className="space-y-2">
          <p className="font-bold text-Accent1  text-sm ">Upload file</p>
          <p className="text-Neutra10 text-sm ">
            Make sure the file is below 2mb
          </p>
        </div>
      </div>
    </div>
  );
}
function BasicInfoTab() {
  return (
    <div className="w-[100%]">
      <ProfileCard />
      <div>
        <p> h</p>
      </div>
    </div>
  );
}
