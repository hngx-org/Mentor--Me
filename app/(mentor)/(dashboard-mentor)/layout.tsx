"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

import MobileSideBar from "@/components/MobileSideBar";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { NavbarMentee } from "@/components/menteeTopNav/NavbarMentee";
import SidebarMentor from "@/components/mentor/SidebarMentor";
import useAuth from "@/context/useAuth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathParams = useSearchParams().get("path");
  const actionParams = useSearchParams().get("action");
  const { data } = useAuth();
  const username = data?.userDetails.fullName;
  // const profileImg = `https://api.dicebear.com/7.x/initials/png?seed=${username}`;
  const email = data?.userDetails.email;
  const jobTitle = data?.certifications;
  const nameParams = useSearchParams().get("name");
  const bioParams = useSearchParams().get("bio");
  const emailParams = useSearchParams().get("email");
  const mentorshipParams = useSearchParams().get("mentorship");

  const profileImg = `https://api.dicebear.com/7.x/initials/png?seed=${
    nameParams || email
  }`;
  return (
    <>
      <SidebarMentor
        path={pathParams}
        name={nameParams}
        imgSrc={profileImg}
        email={emailParams}
      />

      <main className="lg:ml-[274px]">
        <NavbarMentee
          path={pathParams}
          action={actionParams}
          username={username}
          name={nameParams}
          imgSrc={profileImg}
          email={emailParams}
          bio={bioParams}
          jobTitle={mentorshipParams}
        />

        <MobileSideBar path={pathParams} action={actionParams} />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </main>
    </>
  );
};

export default DashboardLayout;
