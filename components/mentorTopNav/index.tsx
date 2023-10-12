import React, { FC } from "react";

import { NotificationIcon, ProfileIcon, ShoppingIcon } from "@/public/SVGs";

const MentorTopNav: FC = () => (
  <nav className=" w-full flex justify-between items-center py-3 px-3 bg-[#FFFF] cursor-pointer border-b-[1px] border--gray-400 ">
    <ul className=" items-center gap-10  font-Hanken hidden lg:flex text-NeutalBase ">
      <li className="font-[700] ">Home</li>
    </ul>

    <div className="flex items-center gap-5 text-NeutalBase">
      <NotificationIcon />

      <div className="flex items-center gap-2">
        <ProfileIcon />
        <div className=" md:flex flex-col  font-Inter hidden ">
          <span className=" text-[11px]">Funmi Oladapo</span>

          <span className=" text-[10px]">C++ Developer</span>
        </div>
      </div>
    </div>
  </nav>
);

export default MentorTopNav;
