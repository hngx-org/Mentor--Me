"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

import { NavbarMentee } from "../mentee-sessions/(ui)/NavbarMentee";
import MobileSideBar from "@/components/MobileSideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathParams = useSearchParams().get("path");
  const actionParams = useSearchParams().get("action");

  return (
    <>
      <MenteeSideBar path={pathParams} />

      <main className="lg:ml-[274px]">
        <NavbarMentee path={pathParams} action={actionParams} />

        <MobileSideBar action={actionParams} />
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
