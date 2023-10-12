"use client";

import React, { useState } from "react";
import Link from "next/link";
import DiscussionCards from "./DisscussionCards";
// import Image from "next/image"
import styles from "./mentorpage.module.css";

import { ArrowLeftIcon, ArrowRigthIcon } from "@/public/SVGs";

type PropsObj = {
  title: string;
  members: number | string;
  desc: string;
  id: number;
};

type Props = { slideInfo: PropsObj[] };
const DiscussionSlider: React.FC<Props> = ({ slideInfo }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const isLoggedIn = false;
  // Example: Generate a random integer between 1 and 10

  const handlePrevClick = () => {
    if (currentIndex >= 1) {
      setCurrentIndex(currentIndex - 1);
    }
    // console.log(currentIndex)
  };

  const handleNextClick = () => {
    if (currentIndex * 4 < slideInfo.length - 4) {
      console.log("clicked");
      setCurrentIndex(currentIndex + 1);
    }
    console.log(currentIndex * 4);
  };

  return (
    <div
      className="discussion-section relative lg:mt-[98px] md:mt[40px] mt-[23px]  flex flex-col mx-auto 
text-NeutalBase font-Inter overflow-hidden "
      // style={{marginLeft:`${}`}}
    >
      <div className="title  lg:flex justify-between border-b border-Neutra10 pb-[14.5px] pt-[2.5]  mb-10 w-full hidden  ">
        <h2 className="  font-medium text-[24px] leading-[28.8px]  w-fit ">
          Join discussion on different topics
        </h2>

        {isLoggedIn ? (
          <Link href="/mentee-communities/mentorship">
            <div className="seeMore  text-Accent1 lg:font-medium lg:text-[16px] lg:leading-[25.2px] mr-4 ">
              View more
            </div>
          </Link>
        ) : (
          <div className="nav flex gap-[40px]">
            <ArrowLeftIcon
              className="hover:stroke-[#008080] focus:stroke-[#ff0000] focus-within:stroke-[#ff0000] cursor-pointer"
              onClick={handlePrevClick}
            />
            <ArrowRigthIcon
              className="hover:stroke-[#008080] cursor-pointer"
              onClick={handleNextClick}
            />
          </div>
        )}
      </div>

      <h2 className=" title-small  w-fit lg:hidden flex font-semibold   text-[16px] md:text-[20px] leading-[20px] pb-[15px]    ">
        Discussion topics
      </h2>

      <div
        // md:gap-x-10 gap-x-6  gap-3 w-182px
        // gap-x = (total width - sum of width of slides) /  (number of slides-1)

        className={`${styles.slider} flex  transition-all  duration-300 transform   gap-x-[25px] sm:gap-x-[40px]  md:gap-x-[calc(40px)] lg:gap-x-[calc(50px)] xl:gap-x-[calc(45px)] 2xl:gap-x-[calc(60px)]
 md:w-fit  overflow-x-auto  `}
        style={{
          transform: `translateX(calc(-${
            (currentIndex * 3) / slideInfo.length
          } * 100%))`,
        }}
      >
        {slideInfo.map((item, index) => (
          <div className="flex-shrink-0 w-fit ">
            {/* {item} */}
            <DiscussionCards
              id={Number(Date.now()) + item.id}
              title={item.title}
              members={item.members}
              desc={item.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionSlider;
