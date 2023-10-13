"use client";

import Image from "next/image";
import { useState } from "react";

export default function MentorProfileTabLayout() {
  const [active, setActive] = useState("basic info");
  return (
    <div className="w-[100%] my-10">
      <div className="flex justify-between w-[100%] text-Neutra10 text-xs sm:text-base">
        <div>
          <p> basic info</p>
        </div>
        <div>
          <p> Experience/ Certifications</p>
        </div>
        <div>
          <p>Social links</p>
        </div>
      </div>
      {active === "basic info" && <BasicInfoTab />}
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="w-[100%] flex">
      <div className="w-[50px] h-[50px] rounded-full   object-cover flex overflow-clip justify-center">
        <Image
          src="/assets/mentor1.png"
          width={60}
          height={60}
          alt="profile"
          className="object-cover"
          style={{ objectFit: "contain", borderRadius: "9999px" }}
        />
      </div>
      <div>
        <p> h</p>
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
