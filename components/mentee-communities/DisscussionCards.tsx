import React from "react";

import Image from "next/image";
import Link from "next/link";
// import Button from "@/components/ui/Button";

import { membersCardAvatar } from "@/public";
import { Button } from "../buttons/button";

type Props = {
  title: string;
  members: number | string;
  desc: string;
  id: number;
};

const DiscussionCards: React.FC<Props> = ({ title, members, desc, id = 1 }) => (
  <div className="discussioncard  flex flex-col flex-shrink-0 lg:pt-4 lg:px-[19px] lg:pb-[30px] px-2 py-4 border border-Neutra10 lg:rounded-[8px] rounded-[6.2px] justify-center items-center  gap-2 lg:max-w-[295px]   lg:w-[18vw] md:w-[23vw] w-[40vw]  md:min-h-[220px]  h-fit   ">
    <div className="text flex flex-col xl:gap-[14px] gap-2 font-Hanken xl:mb-[45px] text-left">
      <p className=" text-NeutalBase font-semibold xl:text-[24px] text-[14px] leading-[28.8px]  ">
        {title}
      </p>

      <div className=" text-Accent1 font-medium xl:text-[16px] text-[10px] leading-[19.2px]  flex xl:gap-2 gap-[4.9px] items-center relative">
        <Image
          alt="members"
          src={membersCardAvatar}
          width={56}
          height={24}
          className="block xl:w-[56px] xl:h-[24px] w-[26px] h-[12px]"
        />{" "}
        <span className="xl:underline"> {`${members} Members`}</span>
      </div>

      <p className=" text-Neutra50 font-normal xl:text-[18px] xl:leading-[21.6px] text-[10px] leading-[14.4px] ">
        {desc}
      </p>
    </div>
    {/* change to custoom  */}
    {/* <button className=" xl:py-5 xl:px-10 xl:text-[12px] font-Hanken font-semibold border border-black mx-auto min-h-[35px]">
        Join Discussion
      
      </button> */}

    <Link href="/mentee-communities/forums">
      <button
        type="button"
        className="text-[10px]  whitespace-nowrap px-[30px]   py-[16px]  bg-white border  border-NeutalBase text-NeutalBase flex items-center gap-x-1 rounded-[8px]"
      >
        Join Discussion
      </button>
    </Link>
  </div>
);

export default DiscussionCards;
