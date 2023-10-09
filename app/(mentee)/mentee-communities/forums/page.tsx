import React from "react";

import Image from "next/image";
import Link from "next/link";
import BigDiscussionCard from "@/components/mentee-communities/BigDiscussionCard";

import { membersCardAvatar } from "@/public";
import messageedit from "../../../../public/assets/Icons/mentee-communities/messageEdit.svg";
import { Button } from "@/components/buttons/button";

type Props = {
  join: boolean;
};
export default function Forums(): React.ReactElement {
  return (
    <div className="forums startDiscussion joinDiscussion lg:px-[85px] max-w-[100vw] md:px-12 px-6 flex flex-col  gap-y-8 lg:pt-10 pt-4">
      <div className="search border border-[#CCCCCC]  lg:w-[599px] w-[40%] md:py-2 md:px-3 p-[16px] rounded-[6px] ml-[2vw] ">
        <input
          type="text"
          className=" text-[14px] font-normal leading-[20.3px] text-Neutra20 w-full font-Inter outline-0 "
          placeholder="Search for community"
        />
      </div>

      <div className="heading flex  md:flex-row flex-col gap-y-6 md:items-center">
        {" "}
        <div className="title flex flex-col xl:gap-[14px] gap-2 font-Hanken xl:mb-[45px] text-left lg:w-[70%]">
          <p className=" text-NeutalBase font-semibold lg:text-[32px] text-[18px] lg:leading-[38px] leading-5  ">
            Tech Titans
          </p>

          <div className=" text-Accent1 font-medium lg:text-[18px] text-[10px] leading-[22px]  flex  lg:gap-2 gap-[8px] items-center relative">
            <Image
              alt="members"
              src={membersCardAvatar}
              width={56}
              height={24}
              className="block lg:w-[56px] lg:h-[24px] w-[26px] h-[12px]"
            />{" "}
            <span className=""> {`${13} Members`}</span>
          </div>

          <p className=" text-Neutra50 font-normal lg:text-[18px] lg:leading-[21.6px] text-[14px] leading-[14.4px] w-[90%]">
            Connect with industry-leading mentors in science and technology.
            Explore the cutting edge together.
          </p>
        </div>
        <div className="largeButton lg:flex hidden">
          <Link href="/mentee-communities/forums/new-discussion">
      {/* <Button
              variant="primary"
              className="text-[10px]  whitespace-nowrap px-[40px]   py-[16px] xl:max-w-fit  l"
              type="button"
              title="Start a disscussion"
              iconPresent={messageedit}
            /> */}
            <button
              type="button"
              className="text-[10px]  whitespace-nowrap px-[40px]   py-[16px]  text-white border  bg-NeutalBase flex items-center gap-x-1 rounded-[8px]"
            >
              {" "}
              <Image alt="icon" width={20} height={20} src={messageedit} />
              Start a disscussion
            </button>

          </Link>
        </div>
        <div className="smallButton lg:hidden flex">
          {" "}
          <Link href="/mentee-communities/forums/new-discussion">

            <button
              type="button"
              className="whitespace-nowrap px-[40px]   py-[16px]    h-fit  w-fit flex lg:hidden text-white border  bg-NeutalBase items-center rounded-[8px]"
            >
              Start a disscussion
            </button>

          </Link>
        </div>
      </div>

      <BigDiscussionCard mentor />
      <BigDiscussionCard mentor={false} />
      <BigDiscussionCard mentor={false} />
      <BigDiscussionCard mentor={false} />
    </div>
  );
}
