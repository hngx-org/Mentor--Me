"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MentorCard from "./MentorCard";
import { mentorCardAvatar } from "@/public";
import { getMentorInfo } from "@/lib/apiHelper";

type MentorDataType = {
  date: string;
  firstname: string;
  timezone: string;
  review: number;
  nextAvailable: string;
  topic: string;
  contentImage: string;
  id: string;
  time: string;
  title: string;
  content: string;
  lastname: string;
};

const MentorGrid: React.FC = () => {
  const [mentorInfo, setMentorInfo] = useState([] as MentorDataType[]);

  useEffect(() => {
    getMentorInfo(setMentorInfo);
  }, []);

  console.log(mentorInfo);

  function capitalizeFirstLetter(string: string) {
    if (string && string.length > 0) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string; // Return the input string if it's undefined or empty
  }

  const pathname = usePathname();
  // const communitiesPath = pathname === "/communities";

  return (
    <div className="mentorGrid lg:mt-[64px] md:mt[40px] mt-[23px]    text-NeutalBase font-Inter overflow-hidden">
      <div className="title  lg:flex justify-between border-b border-Neutra10 pb-[14.5px] pt-[2.5]  mb-10 w-full hidden  ">
        <h2 className="  font-medium text-[24px] leading-[28.8px]  w-fit ">
          Free Mentorship Sessions
        </h2>
        <Link
          href={`${
            pathname === "/mentor-community"
              ? "/mentor-community/mentorships"
              : pathname === "/mentee-communities"
              ? "/mentee-communities/mentorships"
              : "communities/mentorships"
          }`}
        >
          <div className="seeMore  text-Accent1 lg:font-medium lg:text-[16px] lg:leading-[25.2px] mr-6 cursor-pointer ">
            View more
          </div>
        </Link>
      </div>

      <h2 className=" title-small  w-fit lg:hidden flex font-semibold   text-[16px] md:text-[20px] leading-[20px] pb-[15px]   ">
        Free Mentorship Sessions
      </h2>

      {/* <div className="lg:grid lg:grid-cols-4 hidden ">
      <MentorCard />
      <MentorCard />
      <MentorCard />
      <MentorCard />
    </div>
    <div className="md:grid grid-cols-3 lg:hidden hidden ml-6">
      <MentorCard />
      <MentorCard />
      <MentorCard />
    </div>
    <div className="grid grid-cols-2 md:hidden ">
      <MentorCard />
      <MentorCard />
    </div> */}
      <div
        className={`${"imi"} flex  transition-all  duration-300 transform   gap-x-[25px] sm:gap-x-[40px]  md:gap-x-[calc(40px)] lg:gap-x-[calc(50px)] xl:gap-x-[calc(45px)] 2xl:gap-x-[calc(60px)]
 md:w-fit  overflow-x-auto `}
      >
        {mentorInfo.map((item) => (
          <MentorCard
            id={item.id}
            mentorName={`${capitalizeFirstLetter(
              item.firstname
            )} ${capitalizeFirstLetter(item.lastname)}`}
            verify
            mentorPostion={capitalizeFirstLetter(item.title)}
            mentorAvatar={mentorCardAvatar}
            cardHero={item.contentImage}
            date={item.date}
            time={item.time}
            title={capitalizeFirstLetter(item.topic)}
            desc={capitalizeFirstLetter(item.content)}
          />
        ))}
      </div>
    </div>
  );
};

export default MentorGrid;
