import React from "react";
import Image from "next/image";

import Link from "next/link";
import { mentorCardHero, mentorCardAvatar, verified } from "@/public";

import { CalenderIcon, ClockIcon, IconVerfied } from "@/public/SVGs";
import { Button } from "../buttons/button";
// import Button from "@/components/ui/Button";

type Props = {
  id: string | number;
  mentorName: string;
  verify: boolean;
  mentorPostion: string;
  cardHero: string;
  mentorAvatar: string;
  date: string;
  time: string;
  title: string;
  desc: string;
};

const MentorCard: React.FC<Props> = ({
  id,
  mentorName,
  verify,
  mentorPostion,
  cardHero,
  mentorAvatar,
  date,
  time,
  title,
  desc,
}) => (
  <div className="mentorCard xl:max-w-[295px] lg:max-w-[225px]  max-w-[182px] xl:w-[295px]  lg:w-[225px] w-[182px]  h-fit border border-Neutra10 lg:rounded-[8px] rounded-[5px] pb-3 flex flex-col flex-shrink-0">
    <div className="card h-full w-full font-Hanken flex flex-col gap-3 lg:gap-3 items-center">
      <Image
        alt="members"
        src={mentorCardHero}
        width={298}
        height={183}
        className="flex lg:w-[100%] lg:aspect-[298/183]object-cover "
      />
      <div className="info w-full px-2 lg:px-[14px] lg:gap-[10px] flex flex-col gap-[4px] ">
        <div className="w-fit flex lg:gap-1 gap-[3px] flex-col justify-center text-center">
          <div className="flex gap-1 items-center">
            <Image
              alt="members"
              src={mentorAvatar}
              height={24}
              className="block xl:w-[24px] xl:h-[24px] w-[12px] h-[12px]"
            />
            <p className="text-NeutalBase font-semibold xl:text-[18px] text-[12px] lg:leading-[14px] leading-none ">
              {mentorName}
            </p>

            {/* <IconVerfied className="lg:w-6 w-3 aspect-square" /> */}
            {verify ? (
              <Image
                alt="members"
                src={verified}
                width={24}
                height={24}
                className="block xl:w-[24px] xl:h-[24px] w-[12px] h-[12px]"
              />
            ) : (
              <div className="" />
            )}
          </div>
          <p className="text-Neutra30 font-normal lg:text-xs text-[10px] leading-none">
            {mentorPostion}
          </p>
        </div>
        <div className="time flex lg:gap-[10px] lg:justify-normal justify-between xl:text-xs text-[10px] font-norm">
          <div className="w-fit flex gap-x-[3px] items-center">
            {" "}
            <CalenderIcon className=" w-[13px] aspect-square" />{" "}
            <span className="">{date}</span>{" "}
          </div>
          <div className="w-fit flex gap-x-[3px] items-center">
            {" "}
            <ClockIcon className=" w-[13px] aspect-square" />{" "}
            <span className="">{time}</span>{" "}
          </div>
        </div>
        <div className="topic font-semibold xl:text-[18px] text-[12px] lg:leading-[21.6px] leading-[16px]">
          {title}
        </div>
      <div className="desc font-normal xl:text-[12px] text-[10px] leading-[120%]  h-[48px] xl:h-[57.6px] overflow-clip ">
          {desc}
        </div>
        <div className="border-b border-Neutra10 border-[.25px] lg:flex hidden  " />
      </div>
      <Link href="/mentee-communities/forums">
        <button
          type="button"
          className="text-[10px] lg:text-[16px] font-Inter whitespace-nowrap px-[38px]  py-[10.5px] lg:py-[16px]  bg-white border font-medium  border-NeutalBase text-NeutalBase flex items-center gap-x-1 rounded-[8px]"
        >
          Join ClassRoom
        </button>
      </Link>
    </div>
  </div>
);

export default MentorCard;
