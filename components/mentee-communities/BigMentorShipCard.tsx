import React, { Suspense } from "react";
import Image from "next/image";

import { CalenderIcon, ClockIcon } from "@/public/SVGs";
import Loading from "@/app/(mentor)/loading";
// import Button from "@/components/ui/Button";

type Props = {
  id: number | string;
  mentorCardHero: string;
  mentorImage: string;
  mentorName: string;
  verify: boolean;
  mentorPostion: string;
  date: string;
  time: string;
  title: string;
  desc: string;
};

const BigMentorShipCard: React.FC<Props> = ({
  id,
  mentorCardHero,
  mentorImage,
  mentorName,
  verify,
  mentorPostion,
  date,
  time,
  title,
  desc,
}) => (
  <div className="bigMentorshipCard lg:rounded-[8px] rounded-[5px]   hidden lg:flex  gap-4 ">
    {/* <div className="image  flex-shrink-0  aspect-[551/336]  xl:w-[551px] lg:w-[400px] overflow-hidden rounded-[8px]">
      {" "}
      <Image
        alt="members"
        src={mentorCardHero}
        width={606}
        height={400}
        className="block  aspect-[298/183]  w-[110%] object-cover "
      />
    </div> */}
    <Suspense key={id} fallback={<Loading />}>
      <div className="image  flex-shrink-0  aspect-[551/336]  xl:w-[551px] lg:w-[400px] overflow-hidden rounded-[8px]">
        {" "}
        <Image
          alt="members"
          src={mentorCardHero}
          width={606}
          height={400}
          className="block  aspect-[298/183]  w-[110%] object-cover "
        />
      </div>
    </Suspense>
    .
    <div className="info px-[14px] xl:gap-[10px]  flex flex-col font-Hanken text-NeutalBase ">
      <div className="topic font-bold xl:text-[46px] lg:text-[40px] xl:leading-[56px] lg:leading-[50px] whitespace-nowrap">
        {title}
      </div>
      <div className="w-fit flex gap-1 flex-col justify-center text-center">
        <div className="flex gap-1 items-center">
          <Image
            alt="members"
            src={mentorImage}
            width={37}
            height={37}
            className="lg:w-[30px] aspect-square xl:w-[37px]"
          />
          <p className="font-semibold xl:text-[24px] lg:text-[18px] leading-[28.8px] ">
            {mentorName}
          </p>
        </div>
        <p className="text-Neutra30 font-normal text-[18px] leading-[21.6px]">
          Science and Technology
        </p>
      </div>
      <div className="time flex xl:gap-[14px] lg:gap-[8px] text-[16px] text-Neutra30 font-normal">
        <div className="w-fit flex gap-x-[6px] items-center">
          {" "}
          <CalenderIcon className=" w-[21px] aspect-square" />{" "}
          <span className="">{date}</span>{" "}
        </div>
        <div className="w-fit flex gap-x-[6px] items-center">
          {" "}
          <ClockIcon className=" w-[21px] aspect-square" />{" "}
          <span className="">{time}</span>{" "}
        </div>
      </div>

      <div className="desc font-normal xl:text-2xl lg:text-[18px] xl:h-[96px] h-[54px] overflow-clip">
        {desc}
      </div>

      <button
        type="button"
        className="text-[10px]  whitespace-nowrap px-[40px]   py-[16px]   w-fittext-white border  bg-NeutalBase flex items-center gap-x-1 rounded-[8px] w-fit text-white"
      >
        {" "}
        Join ClassRoom
      </button>
    </div>
  </div>
);

export default BigMentorShipCard;
