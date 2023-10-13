"use client";

import React, { useContext } from "react";
import MobileSideBar from "@/components/MobileSideBar";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

import HomeNavBar from "@/components/homeNavbar";
import AuthCtx from "@/context/AuthCtx";
import { NavbarMentee } from "@/components/menteeTopNav/NavbarMentee";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const ctx = useContext(AuthCtx);
  const id = ctx?.userAuth.id;

  // return !id ? ()
  return (
    <main className="pt-[7rem]">
      <HomeNavBar />
      {children}
    </main>
  ) : (
    <>
      <MobileSideBar />
      <MenteeSideBar />

      <main className="lg:ml-[274px]">
        <NavbarMentee />
        {children}
      </main>
    </>
  );
}
