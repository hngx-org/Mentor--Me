"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

import MobileSideBar from "@/components/MobileSideBar";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { NavbarMentee } from "@/components/menteeTopNav/NavbarMentee";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathParams = useSearchParams().get("path");
  const actionParams = useSearchParams().get("action");

  return (
    <>
      <MenteeSideBar path={pathParams} />

      <main className="lg:ml-[274px]">
        <NavbarMentee path={pathParams} action={actionParams} />

        <MobileSideBar path={pathParams} action={actionParams} />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </main>
    </>
  );
};

export default DashboardLayout;
