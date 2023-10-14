"use client";

import React, { useState } from "react";
import AboutMentor from "@/components/mentor-dashboard/AboutMentor";
import MentorSession from "@/components/mentor-dashboard/MentorSession";
import UnverifiedMentorCard from "@/components/mentor-dashboard/UnverifiedMentorCard";
import Modal from "@/components/mentor-dashboard/Modal";
import FilterBar from "@/components/mentor-dashboard/FilterBar";

const page = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="">
      <div className="px-5 py-10 lg:p-10 bg-[#f9fafc]">
        <FilterBar />
        {!isVerified && (
          <UnverifiedMentorCard
            isVerified={isVerified}
            setIsVerified={setIsVerified}
          />
        )}
        <MentorSession
          isVerified={isVerified}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <AboutMentor />
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default page;
