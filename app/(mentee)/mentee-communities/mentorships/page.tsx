"use client";

import React, { Suspense, useEffect, useState } from "react";

import { mentorCardAvatar, mentorCardHero } from "@/public";
import BigMentorShipCard from "@/components/mentee-communities/BigMentorShipCard";
import MentorCard from "@/components/mentee-communities/MentorCard";
import HomeNavBar from "@/components/homeNavbar";
import Footer from "@/components/Footer";
import { getMentorInfo } from "@/lib/apiHelper";
import Loading from "../../(dashboard-route)/mentee-sessions/loading";

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

export default function FreeMentorship() {
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

  return (
    <Suspense fallback={<Loading />}>
      <div className="freeMentorship">
        <HomeNavBar />
        {/* text */}
        <div className="join-discussion lg:mt-[84px] md:mt-[40px]  hidden md:flex flex-col justify-center items-center">
          <p className=" text-NeutalBase   xl:text-[60px] xl:leading-[72px] lg:text-[45px] lg:leading-[55px] md:text-[30px] md:leading-[40px] font-bold text-center font-Hanken lg:px-[2vw] md:px-[40px] lg:mb-[50px] md:mb-[26px] ">
            Connect with mentors in free classrooms and share their experiences
            and insights with Mentor me
          </p>
        </div>
        <div className="search border border-[#CCCCCC] mt-1 md:mt-[0] md:w-[60vw]  lg:w-[40vw] w-[60%] pl-[16px] py-[16px] rounded-[6px] md:mx-auto ml-6 md:ml-auto flex lg:mb-[64px] mb-6 ">
          <input
            type="text"
            className=" text-[14px] font-normal leading-[20.3px] text-Neutra20 w-full font-Inter outline-0 "
            placeholder="Search for community"
          />{" "}
        </div>

        {/* text */}
        <div className=" hidden lg:flex flex-col gap-y-8 px-[100px]">
          {mentorInfo.map((item) => (
            <BigMentorShipCard
              id={item.id}
              mentorName={`${capitalizeFirstLetter(
                item.firstname
              )} ${capitalizeFirstLetter(item.lastname)}`}
              verify
              mentorPostion={capitalizeFirstLetter(item.title)}
              mentorImage={mentorCardAvatar}
              mentorCardHero={item.contentImage}
              date={item.date}
              time={item.time}
              title={capitalizeFirstLetter(item.topic)}
              desc={capitalizeFirstLetter(item.content)}
            />
          ))}
        </div>
        <h1 className="lg:hidden  mx-auto min-w-[400px] w-[80vw] font-Inter font-medium text-[16px] leading-[22.4px] pb-[15px]">
          Free Mentorship Sessions
        </h1>
        <div className="grid lg:hidden  md:grid-cols-3 grid-cols-2  gap-y-5 md:gap-y-8 mx-auto min-w-[400px] w-[80vw]">
          {mentorInfo.map((item) => (
            <div className="w-full flex justify-center ">
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
            </div>
          ))}
        </div>
        <div className="footer h-[7rem] w-full bg-transparent" />
        <Footer />
      </div>
    </Suspense>
  );
}
