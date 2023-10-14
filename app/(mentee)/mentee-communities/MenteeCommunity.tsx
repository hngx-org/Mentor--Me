"use client";

import React, { useEffect, useState } from "react";
import DiscussionSlider from "@/components/mentee-communities/DiscussionSlider";
import MentorGrid from "@/components/mentee-communities/MentorGrid";
import HomeNavBar from "@/components/homeNavbar";
import Footer from "@/components/Footer";
import { SearchIcon } from "@/public/assets/Icons/mentor-communities";
import SidebarMentor from "@/components/mentor/SidebarMentor";
import { mentorCardAvatar, mentorCardHero } from "@/public";
import { authenticateUser, fetchMentorData, get, post } from "@/lib/apiHelper";
import { useMenteeCommunity } from "@/context/MenteeContext/MenteeCommunityContext";
import { MenteeCommunityProvider } from "@/context/MenteeContext/MenteeContextProvider";

interface Community {
  title: string;
  members: number;
  desc: string;
  id: number;
  slideComments: {
    mentor: boolean;
    name: string;
    heroCard: string;
    image: {
      mentorCardAvatar: any;
    };
    title: string;
    desc: string;
    commentid: number;
  }[];
}

type MentorPropsObj = {
  id: number;
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

const MenteeCommunities: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    // Attempt to authenticate the user
    const isAuthenticated = await authenticateUser(credentials);
    if (isAuthenticated) {
      // Set the isLoggedIn state to true if authentication succeeds
      setIsLoggedIn(true);
    } else {
      // Handle authentication failure (display an error message, etc.)
    }
  };
  const [sliderInfo, setsliderInfo] = useState([]);

  const data = useMenteeCommunity();
  // console.log(data);
  let retrievedSliderInfo;
  useEffect(() => {
    const sliderInfoJSON = localStorage.getItem("sliderInfo");

    // Convert the JSON string back to an array
    retrievedSliderInfo = JSON?.parse(sliderInfoJSON);

    if (sliderInfoJSON) {
      console.log(retrievedSliderInfo);
      if (data.sliderInfo.length < retrievedSliderInfo.length) {
        console.log("lower");
        setsliderInfo(retrievedSliderInfo);
      } else {
        setsliderInfo(data.sliderInfo);
      }
    }
  }, [data.sliderInfo, retrievedSliderInfo]);

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

  const [mentorInfoo, setMentorInfoo] = useState([]); // Initialize mentorInfo state

  // useEffect(() => {
  //   // Fetch mentor data when the component mounts
  //   setMentorInfoo(fetchMentorData());
  //   // Rest of your useEffect logic
  //   console.log(mentorInfoo);
  // }, []);

  return (
    <MenteeCommunityProvider>
      <div className="w-full">
        {/* {albums.map((album) => (
        <span className="text-red-700">{album.title}</span>
      ))} */}

        <HomeNavBar />
        <div className="flex w-full md:w-fit">
          {" "}
          <div className="menteecommunities flex flex-col justify-center pt-[80px] lg:pt-[85px] w-full">
            <div className="join-discussion lg:mt-[calc(54px)] md:mt-[calc(30px)]  hidden md:flex flex-col justify-center items-center">
              <p className=" text-NeutalBase  xl:text-[60px] xl:leading-[72px] lg:text-[45px] lg:leading-[55px] md:text-[30px] md:leading-[40px] font-bold text-center font-Hanken lg:px-[5vw] md:px-[6vw] lg:mb-[50px] md:mb-[26px] ">
                Join group discussions and connect with mentors in free
                classrooms with Mentor me
              </p>
            </div>
            {/* <div className="search border border-[#CCCCCC]  w-[80vw] md:w-[50vw] lg:w-[57vw] pl-[16px]  rounded-[6px] md:mx-auto mx-[5vw] flex  items-center">
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
      </div> */}
            <span className="">
              {sliderInfo?.map((item) => (
                <span className="">{item.title}</span>
              ))}
            </span>
            {isLoggedIn ? (
              <div className="isloggedInSLider">
                {" "}
                <div className=" w-[396px] sm:w-[406px]  md:w-[628px] lg:w-[calc(777px)] xl:w-[calc(977px)] 2xl:w-[calc(1362px)]   border border-transparent  mx-auto overflow-hidden">
                  {" "}
                  <DiscussionSlider slideInfo={sliderInfo} />
                </div>
                <div className=" w-[396px] sm:w-[406px]  md:w-[628px] lg:w-[calc(777px)] xl:w-[calc(977px)] 2xl:w-[calc(1362px)]  border border-transparent  mx-auto overflow-hidden">
                  <MentorGrid mentorInfo={mentorInfo} />
                </div>
              </div>
            ) : (
              <div className="">
                {" "}
                <div className=" w-[396px] sm:w-[628px]  md:w-[860px] lg:w-[calc(1052px)] xl:w-[calc(1352px)] 2xl:w-[calc(1362px)]   border border-transparent  mx-auto overflow-hidden">
                  {" "}
                  <DiscussionSlider slideInfo={sliderInfo} />
                </div>
                <div className=" w-[396px] sm:w-[628px]  md:w-[860px] lg:w-[calc(1052px)] xl:w-[calc(1352px)] 2xl:w-[calc(1362px)]   border border-transparent  mx-auto overflow-hidden">
                  <MentorGrid mentorInfo={mentorInfo} />
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </MenteeCommunityProvider>
  );
};

export default MenteeCommunities;
