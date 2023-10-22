/* eslint-disable import/no-extraneous-dependencies */

"use client";

import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Discussion,
  Member,
} from "@/app/(mentor)/(dashboard-mentor)/mentor-community/data";
import { membersCardAvatar } from "@/public";

interface Props {
  slug: string;
  name: string;
  members: Member[];
  description: string;
  discussLength: number;
  setIsLastCard: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  //   discussions: Discussion[];
}

export type CommunityDiscussions = {
  name: string;
  members: Member[];
  description: string;
  discussions: Discussion[];
};

const Forum = ({
  name,
  members,
  description,
  slug,
  discussLength,
  index,
  setIsLastCard,
}: Props) => {
  const discussionRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const entry = useIntersectionObserver(discussionRef, {
    threshold: 0.9,
  });
  const isVisible = !!entry?.isIntersecting;
  const noOfMembers = members.length.toString();
  const membersPhoto = members.slice(0, 3);

  useEffect(() => {
    if (index === discussLength - 1 && isVisible) {
      setIsLastCard(true);
    } else if (index === 0 && isVisible) {
      setIsLastCard(false);
    }
  }, [isVisible]);

  return (
    // <div
    //   ref={discussionRef}
    //   className="flex flex-col gap-4 justify-between max-w-[18.4375rem] border-[1px] border-solid border-Neutra10 rounded-lg p-6 shrink-0"
    // >
    //   <h3 className="text-sm font-medium md:text-2xl md:font-semibold font-Inter md:font-Hanken text-NeutalBase">
    //     {name}
    //   </h3>
    //   <div className="flex gap-2">
    //     {/* Member pictures */}
    //     {/* <div className="flex items-center">

    //       {membersPhoto.map((member, idx) => (
    //         <div
    //           className={`w-[1.5rem] border-solid rounded-full overflow-hidden border-2 border-NeutalBase relative ${
    //             idx === 1 ? "right-3" : idx === 2 ? "right-6" : ""
    //           } ${idx === 1 ? "-z-10" : idx === 2 ? "-z-20" : ""}`}
    //           key={member.name}
    //         >
    //           <Image
    //             src={
    //               member.profilePhotoUrl !== undefined // could simply use non-null assertion operator but this is safer
    //                 ? member.profilePhotoUrl
    //                 : ""
    //             }
    //             className="object-cover aspect-square"
    //             alt="Member"
    //           />
    //         </div>
    //       ))}
    //     </div> */}
    //     <Image src={membersCardAvatar} className="object-cover " alt="Member" />
    //     {/* Member count */}
    //     <span className="text-[0.625rem] md:text-base relative font-medium underline text-Accent1 font-Hanken ">
    //       {noOfMembers} members
    //     </span>
    //   </div>
    //   <p className="text-xs md:text-[1.125rem] font-Hanken text-Neutral60 leading-[1.3]">
    //     {description}
    //   </p>
    //   <Link
    //     href={`${
    //       pathname === "/communities"
    //         ? "/welcome/login"
    //         : pathname === "/mentor-community"
    //         ? `/mentor-community/${slug}`
    //         : `/mentee-community/${slug}`
    //     }`}
    //     className="text-xs text-center md:text-base border-solid border-[1px] p-4 md:py-5 md:px-10 w-full md:w-fit mx-auto border-NeutalBase rounded-lg font-medium font-Inter"
    //   >
    //     Join Discussion
    //   </Link>
    // </div>
    <div
      className="discussioncard  flex flex-col flex-shrink-0 lg:pt-4 lg:px-[19px] lg:pb-[30px] px-2 py-4 border border-Neutra10 lg:rounded-[8px] rounded-[6.2px] justify-center items-center  gap-4 lg:gap-[35px] xl:gap-[45px] xl:max-w-[295px] lg:max-w-[225px]  max-w-[182px] xl:w-[295px]  lg:w-[225px] w-[182px]   lg:min-h-[220px]  h-fit   "
      ref={discussionRef}
    >
      <div className="text flex flex-col xl:gap-[14px] lg:gap-[10px] gap-2 font-Hanken  text-left w-full">
        <p className=" text-NeutalBase font-semibold xl:text-[24px] lg:text-[19px] text-[14px] leading-[120%] line-clamp-1 ">
          {name}
        </p>

        <div className=" text-Accent1 font-medium xl:text-[16px] lg:text-[13px] text-[10px] leading-[110%]  flex xl:gap-2 lg:gap-[0] gap-[4.9px] items-center relative">
          <Image
            alt="members"
            src={membersCardAvatar}
            width={36}
            height={20}
            className="flex  xl:h-6 xl:w-[56] h-4 w-9 lg:h-[22px]  lg:w-[51px] "
          />{" "}
          <span className="xl:underline"> {`${members.length} Members`}</span>
        </div>

        <p className=" text-Neutra50 font-normal xl:text-[18px] lg:text-[16px] text-[10px] h-[52px] lg:h-[83.2px] xl:h-[93.6px] line-clamp-4 leading-[130%] overflow-clip">
          {description}
        </p>
      </div>
      {/* change to custoom  */}
      {/* <button className=" xl:py-5 xl:px-10 xl:text-[12px] font-Hanken font-semibold border border-black mx-auto min-h-[35px]">
        Join Discussion
      
      </button> */}

      <Link
        href={`${
          pathname === "/communities"
            ? "/welcome/login"
            : pathname === "/mentor-community"
            ? `/mentor-community/${slug}`
            : `/mentee-community/${slug}`
        }`}
      >
        <button
          type="button"
          className="text-[10px] lg:text-[16px] font-Inter whitespace-nowrap px-[38px]  py-[10.5px] lg:py-[16px]  bg-white border font-medium  border-NeutalBase text-NeutalBase flex items-center gap-x-1 rounded-[8px]"
        >
          Join Discussion
        </button>
      </Link>
    </div>
  );
};

export default Forum;
