import React from "react";
import Link from "next/link";
import MentorCard from "./MentorCard";
import { mentorCardAvatar } from "@/public";

// type PropsObj = {
//   id: number;
//   mentorName: string;
//   verify: boolean;
//   mentorPostion: string;
//   cardHero: string;
//   mentorAvatar: string;
//   date: string;
//   time: string;
//   title: string;
//   desc: string;
// };

type PropsObj = {
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

type Props = { mentorInfo: PropsObj[] };

const MentorGrid: React.FC<Props> = ({ mentorInfo }) => {
  console.log(mentorInfo);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="mentorGrid lg:mt-[64px] md:mt[40px] mt-[23px]    text-NeutalBase font-Inter overflow-hidden">
      <div className="title  lg:flex justify-between border-b border-Neutra10 pb-[14.5px] pt-[2.5]  mb-10 w-full hidden  ">
        <h2 className="  font-medium text-[24px] leading-[28.8px]  w-fit ">
          Free Mentorship Sessions
        </h2>
        <Link href="/mentee-communities/mentorship">
          <div className="seeMore  text-Accent1 lg:font-medium lg:text-[16px] lg:leading-[25.2px] mr-6 cursor-pointer ">
            View more
          </div>
        </Link>
      </div>

      <h2 className=" title-small  w-fit lg:hidden flex font-semibold   text-[16px] md:text-[20px] leading-[20px] pb-[15px]   ">
        Free Mentorship Sessions
      </h2>

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
