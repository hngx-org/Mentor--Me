"use client";

import React, { useContext } from "react";
import MobileSideBar from "@/components/MobileSideBar";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";
import MenteeNavBar from "@/components/menteeTopNav";
import HomeNavBar from "@/components/homeNavbar";
import AuthCtx from "@/context/AuthCtx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ctx = useContext(AuthCtx);
  // ctx?.setUserAuth({ id: "_kisi", token: "dfgpsps" });
  const id = ctx?.userAuth.id;
  // console.log(id);

  return !id ? (
    <main className="pt-[7rem]">
      <HomeNavBar />
      {children}
    </main>
  ) : (
    <>
      <MobileSideBar />
      <MenteeSideBar />

      <main className="lg:ml-[274px]">
        <MenteeNavBar />
        {children}
      </main>
    </>
  );
}
