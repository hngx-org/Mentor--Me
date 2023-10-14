import React from "react";

import { verify } from "crypto";
import { mentorCardAvatar, mentorCardHero } from "@/public";
import BigMentorShipCard from "@/components/mentee-communities/BigMentorShipCard";
import MentorCard from "@/components/mentee-communities/MentorCard";
import HomeNavBar from "@/components/homeNavbar";
import Footer from "@/components/Footer";

export default function FreeMentorship() {
  const mentorInfo = [
    {
      id: 9408,
      mentorName: "Shade Mayowa",
      verify: true,
      mentorPostion: "CEO, Webmasters Inc",
      mentorAvatar: mentorCardAvatar,
      cardHero: mentorCardHero,
      date: "28th, Sept",
      time: "12:30pm",
      title: "Intorduction to AI",
      desc: "Explore the fascinating world of AI with hands-on demos and discussions. Learn the basics from industry experts.",
    },
    {
      id: 9408,
      mentorName: "Shade Mayowa",
      verify: true,
      mentorPostion: "CEO, Webmasters Inc",
      mentorAvatar: mentorCardAvatar,
      cardHero: mentorCardHero,
      date: "28th, Sept",
      time: "12:30pm",
      title: "Intorduction to AI",
      desc: "Explore the fascinating world of AI with hands-on demos and discussions. Learn the basics from industry experts.",
    },
    {
      id: 9408,
      mentorName: "Shade Mayowa",
      verify: true,
      mentorPostion: "CEO, Webmasters Inc",
      mentorAvatar: mentorCardAvatar,
      cardHero: mentorCardHero,
      date: "28th, Sept",
      time: "12:30pm",
      title: "Intorduction to AI",
      desc: "Explore the fascinating world of AI with hands-on demos and discussions. Learn the basics from industry experts.",
    },
    {
      id: 94408,
      mentorName: "Shade Mayowa",
      verify: true,
      mentorPostion: "CEO, Webmasters Inc",
      mentorAvatar: mentorCardAvatar,
      cardHero: mentorCardHero,
      date: "28th, Sept",
      time: "12:30pm",
      title: "Intorduction to AI",
      desc: "Explore the fascinating world of AI with hands-on demos and discussions. Learn the basics from industry experts.",
    },
    {
      id: 94068,
      mentorName: "Shade Mayowa",
      verify: true,
      mentorPostion: "CEO, Webmasters Inc",
      mentorAvatar: mentorCardAvatar,
      cardHero: mentorCardHero,
      date: "28th, Sept",
      time: "12:30pm",
      title: "Intorduction to AI",
      desc: "Explore the fascinating world of AI with hands-on demos and discussions. Learn the basics from industry experts.",
    },
    {
      id: 94078,
      mentorName: "Shade Mayowa",
      verify: true,
      mentorPostion: "CEO, Webmasters Inc",
      mentorAvatar: mentorCardAvatar,
      cardHero: mentorCardHero,
      date: "28th, Sept",
      time: "12:30pm",
      title: "Intorduction to AI",
      desc: "Explore the fascinating world of AI with hands-on demos and discussions. Learn the basics from industry experts.",
    },
  ];

  return (
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
            mentorName={item.mentorName}
            mentorPostion={item.mentorPostion}
            verify={item.verify}
            mentorImage={item.mentorAvatar}
            mentorCardHero={item.cardHero}
            date={item.date}
            time={item.time}
            title={item.title}
            desc={item.desc}
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
              mentorName={item.mentorName}
              verify={item.verify}
              mentorPostion={item.mentorPostion}
              mentorAvatar={item.mentorAvatar}
              cardHero={item.cardHero}
              date={item.date}
              time={item.time}
              title={item.title}
              desc={item.desc}
            />
          </div>
        ))}
      </div>
      <div className="footer h-[7rem] w-full bg-transparent" />
      <Footer />
    </div>
  );
}
