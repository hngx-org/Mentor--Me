import React from "react";
// import MobileSideBar from "@/components/MobileSideBar";
// import MenteeSideBar from "@/components/SideBar/MenteeSideBar";
import MenteeNavBar from "@/components/menteeTopNav";
import HomeNavBar from "@/components/homeNavbar";

// removed lg:ml-[274px] from main

// commented out MenteeSidebar and MobileSidebar and MenteeNavbar

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <MenteeSideBar />
      <MobileSideBar /> */}

      <main className="pt-[7rem]">
        {/* <MenteeNavBar /> */}
        <HomeNavBar />
        {children}
      </main>
    </>
  );
}
