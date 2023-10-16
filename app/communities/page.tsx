"use client";

import React from "react";
import { DiscussionForums } from "@/components/mentor-community";
import HomeNavBar from "@/components/homeNavbar";
import { SearchIcon } from "@/public/assets/Icons/mentor-communities";
import Footer from "@/components/Footer";
import { mentorCardAvatar, mentorCardHero } from "@/public";
import MentorGrid from "@/components/mentee-communities/MentorGrid";
// import useAuth from "@/context/useAuth";

const CommunityPage = () => (
  // const { data, message, success } = useAuth();
  // console.log(data);

  <section className="w-full h-full">
    {/* Search Bar */}
    <div>
      <HomeNavBar />
    </div>
    <section className="pt-[7rem]">
      <div className="join-discussion lg:mt-[54px] md:mt-[30px]  hidden md:flex flex-col justify-center items-center">
        <p className=" text-NeutalBase  xl:text-[60px] xl:leading-[72px] lg:text-[45px] lg:leading-[55px] md:text-[30px] md:leading-[40px] font-bold text-center font-Hanken lg:px-[5vw] md:px-[6vw] lg:mb-[50px] md:mb-[26px] ">
          Join group discussions and connect with mentors in free classrooms
          with Mentor me
        </p>
      </div>
      <div className="search border border-[#CCCCCC]  w-[80vw] md:w-[50vw] lg:w-[57vw] pl-[16px]  rounded-[6px] md:mx-auto mx-[5vw] flex  items-center">
        <span className="flex md:hidden pr-2 aspect-square h-[20px]">
          {" "}
          <SearchIcon />
        </span>{" "}
        <input
          type="text"
          className=" text-[14px] font-normal leading-[20.3px] text-Neutra20 w-full font-Inter outline-0 md:py-0 py-3 "
          placeholder="Search for communi8ty"
        />{" "}
        <button
          type="button"
          className="text-[10px]  whitespace-nowrap px-[40px]   py-[16px]  text-white border  bg-NeutalBase items-center gap-x-1 rounded-[8px] h-full hidden md:flex"
        >
          Search
        </button>
      </div>
    </section>
    {/* Discussion Forums */}
    <DiscussionForums />
    {/* Free mentorship sessions */}
    {/* <MentorshipSessions /> */}
    <div className=" w-[396px] sm:w-[628px]  md:w-[860px] lg:w-[calc(1052px)] xl:w-[calc(1352px)] 2xl:w-[calc(1362px)]   border border-transparent  mx-auto overflow-hidden">
      <MentorGrid />
    </div>
    <div className="footer h-[7rem] w-full bg-transparent" />
    <Footer />
  </section>
);
export default CommunityPage;
