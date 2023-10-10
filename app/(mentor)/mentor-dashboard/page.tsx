"use client";

import Link from "next/link";
import React, { useState } from "react";
import AboutMentor from "@/components/mentor-dashboard/AboutMentor";
import MentorSession from "@/components/mentor-dashboard/MentorSession";
import UnverifiedMentorCard from "@/components/mentor-dashboard/UnverifiedMentorCard";
import Footer from "@/components/Footer";
import MentorSideBar from "@/components/SideBar/MentorSideBar";
import Modal from "@/components/mentor-dashboard/Modal";
import MenteeNavBar from "@/components/menteeTopNav";

const page = () => {
  const [isVerified, setIsVerified] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex">
      <div className="min-w-240px h-screen">
        <MentorSideBar />
      </div>
      <div>
        <MenteeNavBar />
        <div className="w-full px-5 py-10 lg:p-20 bg-[#f9fafc]">
          {!isVerified && <UnverifiedMentorCard />}
          <MentorSession
            isVerified={isVerified}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <AboutMentor />
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default page;
