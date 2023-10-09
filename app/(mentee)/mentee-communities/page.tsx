import React from "react";
import Slider from "@/components/mentee-communities/Slider";
import MentorGrid from "@/components/mentee-communities/MentorGrid";
import HomeNavBar from "@/components/homeNavbar";
import Footer from "@/components/Footer";

const MenteeCommunities: React.FC = () => (
  <div className="menteecommunities flex flex-col justify-center ">
    <HomeNavBar />
    <div className="join-discussion lg:mt-[54px] md:mt-[30px]  hidden md:flex flex-col justify-center items-center">
      <p className=" text-NeutalBase  xl:text-[60px] xl:leading-[72px] lg:text-[45px] lg:leading-[55px] md:text-[30px] md:leading-[40px] font-bold text-center font-Gladiora lg:px-[2vw] md:px-[40px] lg:mb-[50px] md:mb-[26px] ">
        Join group discussions and connect with mentors in free classrooms with
        Mentor me
      </p>
    </div>
    <div className="search border border-[#CCCCCC]  md:w-[40vw] pl-[16px]  rounded-[6px] mx-auto flex  ">
      <input
        type="text"
        className=" text-[14px] font-normal leading-[20.3px] text-Neutra20 w-full font-Inter outline-0 "
        placeholder="Search for community"
      />{" "}
      <button
        type="button"
        className="text-[10px]  whitespace-nowrap px-[40px]   py-[16px]  text-white border  bg-NeutalBase flex items-center gap-x-1 rounded-[8px] h-full"
      >
        Search
      </button>
    </div>
    <Slider
      slideInfo={[
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
        "Item 8",
        "Item 9",
        "Item 10",
        "Item 11",
        "Item 12",
        "item 13",
      ]}
    />

    <MentorGrid />

    <div className="footer h-40 w-full bg-transparent" />
    <Footer />
  </div>
);

export default MenteeCommunities;
