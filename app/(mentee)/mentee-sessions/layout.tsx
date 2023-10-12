"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

import { NavbarMentee } from "../mentee-sessions/(ui)/NavbarMentee";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams().get("path");

  return (
    <>
      <MenteeSideBar path={searchParams} />

      <main className="lg:ml-[274px]">
        <NavbarMentee path={searchParams} />

        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
