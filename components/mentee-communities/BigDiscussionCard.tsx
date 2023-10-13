import React from "react";
import Image from "next/image";
import { bigDiscussionCardHero, mentorCardAvatar } from "@/public";

import messageIcon from "../../public/assets/Icons/mentee-communities/messagesIcon.svg";
import sendIcon from "../../public/assets/Icons/mentee-communities/sendIcon.svg";
import { Button } from "../buttons/button";

type Props = {
  mentor: boolean;
  heroCard: string;
  name: string;
  image: any;
  title: string;
  desc: string;
};

export default function BigDiscussionCard({
  mentor,
  image,
  heroCard,
  name,

  title,
  desc,
}: Props): React.ReactElement {
  return (
    <div className="bigDiscussioncard flex flex-col lg:flex-row border py-4 md:pl-4 md:pr-[30px] px-auto rounded-[10px] gap-x-9 gap-y-4">
      {mentor && (
        <div className="image overflow-hidden aspect-square lg:w-[295px] w-[320px] max-w-[90vw] rounded-[10px] flex flex-shrink-0">
          <Image
            alt="members"
            src={bigDiscussionCardHero}
            width={295}
            height={382}
            className="block w-[100%] aspect-[298/382] object-cover  "
          />
        </div>
      )}

      <div className="info flex flex-col lg:gap-5 gap-2">
        <div className="w-fit flex gap-1 flex-col justify-center text-left">
          <div className="flex lg:gap-4 gap-2 items-center">
            <Image
              alt="members"
              src={mentorCardAvatar}
              width={37}
              height={37}
              className="block lg:w-[37px] lg:h-[37px] w-[24px] h-[24px]"
            />
            <div className="">
              <p className="text-NeutalBase font-semibold lg:text-[18px] text-[14px] leading-[20px]  lg:mb-2">
                {name}
              </p>
              <p className="text-Neutra30 font-normal lg:text-xs text-[10px]">
                {mentor ? "Mentor" : "Student"}
              </p>
            </div>
          </div>
        </div>
        <div className="text flex flex-col gap-2">
          <div className="topic font-medium lg:text-[24px] text-[14px] lg:leading-[28.8px] leading-[20px]">
            {title}
          </div>
          <div className="desc font-normal lg:text-[17px] lg:leading-[21.6px] text-[12px] leading-[14.4px] ">
            {desc}
          </div>
        </div>{" "}
        <div className="largeButton">
          {" "}
          <div className="buttons lg:gap-5 gap-4 flex">
            <button
              type="button"
              className="  flex items-center gap-x-1 rounded-[4px] lg:rounded-[8px] lg:text-[16px] text-[12px] whitespace-nowrap lg:px-[30px]   lg:py-[10px] px-[2px]   py-[10px] text-Accent1  border-0"
            >
              <Image
                alt="icon"
                width={24}
                height={24}
                src={messageIcon}
                className="lg:w-6 lg:h-6 h-4 w-4"
              />
              14 Comments
            </button>
            <button
              type="button"
              className="  flex items-center gap-x-1 rounded-[4px] lg:rounded-[8px] lg:text-[16px] text-[12px] whitespace-nowrap lg:px-[30px]   lg:py-[10px] px-[2px]   py-[10px] text-Accent1  border-0"
            >
              <Image
                alt="icon"
                width={24}
                height={24}
                src={sendIcon}
                className="lg:w-6 lg:h-6 h-4 w-4"
              />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
