"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

import MobileSideBar from "@/components/MobileSideBar";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { NavbarMentee } from "@/components/menteeTopNav/NavbarMentee";
import SidebarMentor from "@/components/mentor/SidebarMentor";
import { useAuthCtx } from "@/context/AuthContext";
import useAuth from "@/context/useAuth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathParams = useSearchParams().get("path");
  const actionParams = useSearchParams().get("action");
  const { user } = useAuthCtx();
  const { data } = useAuth();
  const email = data?.userDetails?.email;
  const userName = data?.userDetails?.fullName;
  const jobTitle = data?.mentorship_type;
  const bio = data?.userDetails.bio;

  const profileImg = `https://api.dicebear.com/7.x/initials/png?seed=${
    userName || email
  }`;
  return (
    <>
      <SidebarMentor
        path={pathParams}
        name={userName}
        imgSrc={profileImg}
        email={email}
      />

      <main className="lg:ml-[274px]">
        <NavbarMentee
          path={pathParams}
          action={actionParams}
          username={userName}
          name={userName}
          imgSrc={profileImg}
          email={email}
          bio={bio}
          jobTitle={jobTitle}
        />

        <MobileSideBar path={pathParams} action={actionParams} />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </main>
    </>
  );
};

export default DashboardLayout;
