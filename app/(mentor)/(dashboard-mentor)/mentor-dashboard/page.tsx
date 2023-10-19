/* eslint-disable jsx-a11y/aria-role */

"use client";

import React, { useEffect, useState } from "react";
import AboutMentor from "@/components/mentor-dashboard/AboutMentor";
import MentorSession from "@/components/mentor-dashboard/MentorSession";
import UnverifiedMentorCard from "@/components/mentor-dashboard/UnverifiedMentorCard";
import Modal from "@/components/mentor-dashboard/Modal";
import FilterBar from "@/components/mentor-dashboard/FilterBar";
import useAuth from "@/context/useAuth";
import ProtectedRoute from "@/context/ProtectedRoute";

const page = () => {
  const { data } = useAuth();
  // const role = data?.userDetails.role;
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (
      data?.userDetails?.emailVerified &&
      data?.userDetails?.emailVerified === true
    ) {
      setIsVerified(true);
    }
  }, [data]);

  return (
    <ProtectedRoute role="mentor">
      <div className="">
        <div className="px-5 py-10 lg:p-10 bg-[#f9fafc]">
          <FilterBar />
          {isVerified && (
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
    </ProtectedRoute>
  );
};

export default page;
