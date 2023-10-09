"use client";

import Link from "next/link";
import React, { useState } from "react";
import AboutMentor from "@/components/mentor-dashboard/AboutMentor";
import MentorSession from "@/components/mentor-dashboard/MentorSession";
import UnverifiedMentorCard from "@/components/mentor-dashboard/UnverifiedMentorCard";
import Footer from "@/components/Footer";

const page = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  return (
    <div>
      <div className="flex">
        <div className="w-full px-5 py-10 lg:p-20 bg-[#f9fafc]">
          {!isVerified && <UnverifiedMentorCard />}
          <MentorSession isVerified={isVerified} />
          <AboutMentor />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
