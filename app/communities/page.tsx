"use client";

import React, { useState } from "react";

import HomeNavBar from "@/components/homeNavbar";
import { SearchIcon } from "@/public/assets/Icons/mentor-communities";
import Footer from "@/components/Footer";
import { mentorCardAvatar, mentorCardHero } from "@/public";
import MentorGrid from "@/components/Community/MentorGrid";
import { DiscussionForums } from "@/components/Community";
import { discussionCommunities } from "../(mentee)/(dashboard-route)/mentee-community/data";
import SearchCommunitySearchbar from "@/components/Community/searchcommunity-searchbar";
// import useAuth from "@/context/useAuth";

const CommunityPage = () => {
  // set discussion data to a state
  const [discussionData, setDiscussionData] = useState(discussionCommunities);

  // filter part
  const [q, setQ] = useState("");

  const filterDiscussions = () => {
    if (q) {
      console.log("Search is on. Query: ", q);
      const filteredSliderInfo = discussionCommunities.filter((item) =>
        item.name.toLowerCase().includes(q.toLowerCase())
      );
      console.log("Filtered results: ", filteredSliderInfo);

      // Update the sliderInfo state with the filtered array
      setDiscussionData(filteredSliderInfo);
    } else {
      setDiscussionData(discussionCommunities);
    }
  };
  return (
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

        {/* Search Bar */}
        <section className="py-6 md:py-10 flex justify-center ">
          <SearchCommunitySearchbar
            q={q}
            setQ={setQ}
            filterDiscussions={filterDiscussions}
          />
        </section>
      </section>
      {/* Discussion Forums */}
      <DiscussionForums
        discussionData={discussionData}
        setDiscussionData={setDiscussionData}
      />
      {/* Free mentorship sessions */}
      {/* <MentorshipSessions /> */}
      <div className="p-6 md:p-10 ">
        <MentorGrid />
      </div>
      <div className="footer h-[7rem] w-full bg-transparent" />
      <Footer />
    </section>
  );
};
export default CommunityPage;
