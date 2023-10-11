"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

import { NavbarMentee } from "../mentee-sessions/(ui)/NavbarMentee";
import MobileSideBar from "@/components/MobileSideBar";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathParams = useSearchParams().get("path");
  const actionParams = useSearchParams().get("action");

  return (
    <>
      <MenteeSideBar path={pathParams} />

      <main className="lg:ml-[274px]">
        <NavbarMentee path={pathParams} action={actionParams} />

        <MobileSideBar action={actionParams} />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </main>
    </>
  );
};

export default DashboardLayout;
