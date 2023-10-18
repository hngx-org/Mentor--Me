import { Metadata } from "next";
import React from "react";
import DiscussionSlider from "@/components/mentee-communities/DiscussionSlider";
import MentorGrid from "@/components/mentee-communities/MentorGrid";
import HomeNavBar from "@/components/homeNavbar";
import Footer from "@/components/Footer";
import { SearchIcon } from "@/public/assets/Icons/mentor-communities";
import SidebarMentor from "@/components/mentor/SidebarMentor";
import { mentorCardAvatar, mentorCardHero } from "@/public";
import { get, getMentorInfo, post } from "@/lib/apiHelper";

export const metadata: Metadata = {
  title: "Communities",
};

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

const MenteeCommunities: React.FC = () => {
  const isLoggedIn = false;
  const sliderInfo = [
    {
      title: "Member Math",
      members: 13,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab",
      id: 12,
    },
    {
      title: "Member Math",
      members: 13,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab",
      id: 13,
    },
    {
      title: "Member Math",
      members: 13,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab",
      id: 15,
    },
    {
      title: "Member Math",
      members: 13,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab",
      id: 15,
    },
    {
      title: "Member Math",
      members: 13,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab",
      id: 17,
    },
  ];
  // eslint-disable-next-line prefer-const

  return (
    <div className="w-full overflow-scroll">
      <div className="flex w-full md:w-fit">
        {" "}
        <div className="menteecommunities flex flex-col justify-center pt-[80px] lg:pt-[85px] w-full">
          <div className="join-discussion lg:mt-[calc(54px)] md:mt-[calc(30px)]  hidden md:flex flex-col justify-center items-center">
            <p className=" text-NeutalBase  xl:text-[60px] xl:leading-[72px] lg:text-[45px] lg:leading-[55px] md:text-[30px] md:leading-[40px] font-bold text-center font-Hanken lg:px-[5vw] md:px-[6vw] lg:mb-[50px] md:mb-[26px] ">
              Join group discussions and connect with mentors in free classrooms
              with Mentor me
            </p>
          </div>

          {isLoggedIn ? (
            <div className="isloggedInSLider">
              {" "}
              <div className=" w-[396px] sm:w-[406px]  md:w-[628px] lg:w-[calc(777px)] xl:w-[calc(977px)] 2xl:w-[calc(1362px)]   border border-transparent  mx-auto overflow-hidden">
                {" "}
                <DiscussionSlider slideInfo={sliderInfo} />
              </div>
              <div className=" w-[396px] sm:w-[406px]  md:w-[628px] lg:w-[calc(777px)] xl:w-[calc(977px)] 2xl:w-[calc(1362px)]  border border-transparent  mx-auto overflow-hidden">
                <MentorGrid />
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
                <MentorGrid />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MenteeCommunities;
