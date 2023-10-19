"use client";

import React, { useEffect, useState } from "react";

import { mentorCardAvatar, mentorCardHero } from "@/public";
import BigMentorShipCard from "@/components/Community/BigMentorShipCard";
import MentorCard from "@/components/Community/MentorCard";
import HomeNavBar from "@/components/homeNavbar";
import Footer from "@/components/Footer";
import { getMentorInfo } from "@/lib/apiHelper";
import SecondSearchCommunitySearchbar from "@/components/Community/searchcommunity-searchbar2";

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
  const [initialMentorInfo, setInitialMentorInfo] = useState(
    [] as MentorDataType[]
  );
  useEffect(() => {
    getMentorInfo(setInitialMentorInfo);
    getMentorInfo(setMentorInfo);
  }, []);
  console.log(mentorInfo);

  const [q, setQ] = useState("");

  const filterDiscussions = () => {
    if (q) {
      console.log("Search is on. Query: ", q);
      const filteredSliderInfo = initialMentorInfo.filter(
        (item) =>
          item.firstname.toLowerCase().includes(q.toLowerCase()) ||
          item.topic.toLowerCase().includes(q.toLowerCase())
      );
      console.log("Filtered results: ", filteredSliderInfo);

      // Update the sliderInfo state with the filtered array
      setMentorInfo(filteredSliderInfo);
    } else {
      setMentorInfo(initialMentorInfo);
    }
  };

  function capitalizeFirstLetter(string: string) {
    if (string && string.length > 0) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string; // Return the input string if it's undefined or empty
  }

  return (
    <div className="freeMentorship">
      {/* text */}
      {/* <div className="join-discussion lg:mt-[84px] md:mt-[40px]  hidden md:flex flex-col justify-center items-center">
        <p className=" text-NeutalBase   xl:text-[60px] xl:leading-[72px] lg:text-[45px] lg:leading-[55px] md:text-[30px] md:leading-[40px] font-bold text-center font-Hanken lg:px-[2vw] md:px-[40px] lg:mb-[50px] md:mb-[26px] ">
          Connect with mentors in free classrooms and share their experiences
          and insights with Mentor me
        </p>
      </div> */}
      <section className="py-6 md:py-10 px-[100px]">
        <SecondSearchCommunitySearchbar
          q={q}
          setQ={setQ}
          filterDiscussions={filterDiscussions}
        />
      </section>
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
            mentorCardHero={mentorCardHero}
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
  );
}
