import React, { ReactNode } from "react";

import MobileSideBar from "@/components/MobileSideBar";
// import MentorSideBar from "@/components/SideBar/MentorSideBar";
import SidebarMentor from "@/components/mentor/SidebarMentor";
// import HomeNavBar from "@/components/homeNavbar";
import MentorTopNav from "@/components/mentorTopNav";

export default function MentorResourcesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="grid grid-cols-[auto,_minmax(0,_1fr)] grid-rows-[auto,_1fr]">
      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        <MentorTopNav />
      </div>
      <div className="col-start-1 col-end-2 h-[100vh] sticky top-0 row-span-full">
        <SidebarMentor />
      </div>
      <MobileSideBar />
      <div className="col-start-2 col-end-3 row-start-2 row-end-3">
        {children}
      </div>
    </main>
  );
}
