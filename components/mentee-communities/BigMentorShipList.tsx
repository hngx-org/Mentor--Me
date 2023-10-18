"use client";

import React, { Suspense, useEffect, useState } from "react";

import { mentorCardAvatar, mentorCardHero } from "@/public";
import BigMentorShipCard from "@/components/mentee-communities/BigMentorShipCard";
import MentorCard from "@/components/mentee-communities/MentorCard";
import HomeNavBar from "@/components/homeNavbar";
import Footer from "@/components/Footer";
import { getMentorInfo } from "@/lib/apiHelper";
import LoadingSpinner from "../loaders/LoadingSpinner";

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

export default function BigMentorShipList() {
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
    <section className="overflow-hidden ">
      {" "}
      <Suspense fallback={<LoadingSpinner />}>
        <div className="freeMentorship">
          {/* text */}
          <div className=" hidden lg:flex flex-col gap-y-8 ">
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
        </div>
      </Suspense>
    </section>
  );
}
