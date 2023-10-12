import React from "react";
import SidebarMentor from "@/components/mentor/SidebarMentor";
import MobileSideBar from "@/components/mentor/MobileSiderBar";
import MenteeNavBar from "@/components/menteeTopNav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:block">
        <SidebarMentor />
      </div>
      <div className="flex flex-col w-full">
        <MenteeNavBar />
        <div className="flex-grow">{children}</div>
        <MobileSideBar className="lg:hidden" />
      </div>
    </div>
  );
};

export default Layout;