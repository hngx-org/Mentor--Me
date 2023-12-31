"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

import MobileSideBar from "@/components/MobileSideBar";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { NavbarMentee } from "@/components/menteeTopNav/NavbarMentee";
import SidebarMentor from "@/components/mentor/SidebarMentor";
import useAuth from "@/context/useAuth";
import ProtectedRoute from "@/context/ProtectedRoute";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathParams = useSearchParams().get("path");
  const actionParams = useSearchParams().get("action");

  const { data } = useAuth();
  console.log(data);
  const email = data?.userDetails?.email;
  const userName = data?.userDetails?.fullName;
  const jobTitle = data?.mentorship_type;

  const profileImg = `https://api.dicebear.com/7.x/initials/png?seed=${
    userName || email
  }`;
  return (
    <ProtectedRoute>
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      <SidebarMentor
        path={pathParams}
        name={userName}
        imgSrc={profileImg}
        email={email}
      />
      {/* </Suspense> */}

      <main className="lg:ml-[240px]">
        <Suspense fallback={<LoadingSpinner />}>
          <NavbarMentee
            path={pathParams}
            action={actionParams}
            username={userName}
            name={userName}
            imgSrc={profileImg}
            jobTitle={jobTitle}
          />
        </Suspense>
        <MobileSideBar path={pathParams} action={actionParams} />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </main>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
