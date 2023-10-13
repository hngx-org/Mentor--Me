import React, { ReactNode } from "react";

import MentorTopNav from "@/components/mentorTopNav";
import MobileSideBar from "@/components/MobileSideBar";
import SidebarMentor from "@/components/mentor/SidebarMentor";

export default function MentorCommLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="grid grid-cols-[auto,_minmax(0,_1fr)] grid-rows-[auto,_1fr]">
      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        <MentorTopNav />
      </div>
      <section className="col-start-1 col-end-2 sticky top-0 h-[100vh] row-span-full">
        <SidebarMentor />
      </section>
      <MobileSideBar />
      <section className="col-start-2 col-end-3 row-start-2 row-end-3">
        {children}
      </section>
    </main>
  );
}
