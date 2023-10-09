"use client";

import React, { useState } from "react";
import Link from "next/link";
import DiscussionCards from "./DisscussionCards";
// import Image from "next/image"
import styles from "./mentorpage.module.css";

// import { ArrowLeftIcon, ArrowRigthIcon } from "@/public/SVGs"

type Props = { slideInfo: string[] };
const Slider: React.FC<Props> = ({ slideInfo }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Example: Generate a random integer between 1 and 10

  // const handlePrevClick = () => {
  //   if (currentIndex >= 1) {
  //     setCurrentIndex(currentIndex - 1)
  //   }
  //   // console.log(currentIndex)
  // }

  // const handleNextClick = () => {
  //   if (currentIndex * 4 < slideInfo.length - 4) {
  //     console.log("clicked")
  //     setCurrentIndex(currentIndex + 1)
  //   }
  //   console.log(currentIndex * 4)
  // }

  return (
    <div
      className="discussion-section relative lg:mt-[98px] md:mt[40px] mt-[23px]  flex flex-col lg:mx-[8vw] md:mx-[9vw] mx-[7vw]
text-NeutalBase font-Inter overflow-hidden "
      // style={{marginLeft:`${}`}}
    >
      <div className="title  lg:flex justify-between border-b border-Neutra10 pb-[14.5px] pt-[2.5]  mb-10 w-full hidden  ">
        <h2 className="  font-medium text-[24px] leading-[28.8px]  w-fit ">
          Join discussion on different topics
        </h2>
        {/* <div className="nav flex gap-[40px]">
          {" "}
          <ArrowLeftIcon
            className="hover:stroke-[#008080] focus:stroke-[#ff0000] focus-within:stroke-[#ff0000] cursor-pointer"
            onClick={handlePrevClick}
          />
          <ArrowRigthIcon
            className="hover:stroke-[#008080] cursor-pointer"
            onClick={handleNextClick}
          />
        </div> */}
        <Link href="/mentee-communities/mentorship">
          <div className="seeMore  text-Accent1 lg:font-medium lg:text-[16px] lg:leading-[25.2px] mr-4 ">
            View more
          </div>
        </Link>
      </div>

      <h2 className=" title-small  w-fit lg:hidden flex font-semibold   text-[16px] md:text-[20px] leading-[20px] pb-[15px]    ">
        Discussion topics
      </h2>

      <div
        className={`${styles.slider} flex gap-3  transition-all  duration-300 transform  lg:w-fit md:w-fit ml-[vw] overflow-x-auto lg:gap-16 md:gap-x-10 gap-x-6`}
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
              id={Number(Date.now()) + index}
              title="Memeber Math"
              members={13 + index}
              desc="Connect with industry-leading mentors in science and technology. Explore the cutting edge together."
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
