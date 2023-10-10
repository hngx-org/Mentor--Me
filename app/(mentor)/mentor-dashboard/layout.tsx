import React, { ReactNode } from "react";

import HomeNavBar from "@/components/HomeNavbar copy";
import MobileSideBar from "@/components/MobileSideBar";
import MentorSideBar from "@/components/SideBar/MentorSideBar";

export default function MentorResourcesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="grid grid-cols-[auto,_minmax(0,_1fr)] grid-rows-[auto,_1fr]">
      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        <HomeNavBar />
      </div>
      <div className="col-start-1 col-end-2 row-span-full">
        <MentorSideBar className="sticky top-0" />
      </div>
      <MobileSideBar />
      <div className="col-start-2 col-end-3 row-start-2 row-end-3">
        {children}
      </div>
    </main>
  );
}
