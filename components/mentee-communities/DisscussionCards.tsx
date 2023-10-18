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

const DiscussionCards: React.FC<Props> = ({ title, members, desc, id }) => (
  <div className="discussioncard  flex flex-col flex-shrink-0 lg:pt-4 lg:px-[19px] lg:pb-[30px] px-2 py-4 border border-Neutra10 lg:rounded-[8px] rounded-[6.2px] justify-center items-center  gap-4 lg:gap-[35px] xl:gap-[45px] xl:max-w-[295px] lg:max-w-[225px]  max-w-[182px] xl:w-[295px]  lg:w-[225px] w-[182px]   lg:min-h-[220px]  h-fit   ">
    <div className="text flex flex-col xl:gap-[14px] lg:gap-[10px] gap-2 font-Hanken  text-left">
      <p className=" text-NeutalBase font-semibold xl:text-[24px] lg:text-[19px] text-[14px] leading-[120%]  ">
        {title}
      </p>

      <div className=" text-Accent1 font-medium xl:text-[16px] lg:text-[13px] text-[10px] leading-[110%]  flex xl:gap-2 lg:gap-[0] gap-[4.9px] items-center relative">
        <Image
          alt="members"
          src={membersCardAvatar}
          width={36}
          height={20}
          className="flex  xl:h-6 xl:w-[56] h-4 w-9 lg:h-[22px]  lg:w-[51px] "
        />{" "}
        <span className="xl:underline"> {`${members} Members`}</span>
      </div>

      <p className=" text-Neutra50 font-normal xl:text-[18px] lg:text-[14px] text-[10px] leading-[130%] ">
        {desc}
      </p>
    </div>
    {/* change to custoom  */}
    {/* <button className=" xl:py-5 xl:px-10 xl:text-[12px] font-Hanken font-semibold border border-black mx-auto min-h-[35px]">
        Join Discussion
      
      </button> */}

    <Link href={`/mentee-community/forums/${id}`}>
      <button
        type="button"
        className="text-[10px] lg:text-[16px] font-Inter whitespace-nowrap px-[38px]  py-[10.5px] lg:py-[16px]  bg-white border font-medium  border-NeutalBase text-NeutalBase flex items-center gap-x-1 rounded-[8px]"
      >
        Join Discussion
      </button>
    </Link>
  </div>
);

export default DiscussionCards;
