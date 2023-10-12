import React from "react";
import SidebarMentor from "@/components/mentor/SidebarMentor";
import MobileSideBar from "@/components/mentor/MobileSiderBar";
import MenteeNavBar from "@/components/menteeTopNav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:block">
        <SidebarMentor />
      </div>
      <div className="flex flex-col w-full">
        <MenteeNavBar />
        <div className="flex-grow lg:hidden">{children}</div>
        <MobileSideBar  />
      </div>
    </div>
  );
};

export default Layout;