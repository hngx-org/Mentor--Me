"use client";

import React from "react";
import Image from "next/image";
import LeftArrow from "@/public/assets/Icons/landing-page/arrow-circle-left.png";
import RightArrow from "@/public/assets/Icons/landing-page/arrow-circle-right.png";
import MentorImageOne from "@/public/assets/images/landing-page/mentorTypes-1.png";
import MentorImageTwo from "@/public/assets/images/landing-page/mentorTypes-2.png";
import MentorImageThree from "@/public/assets/images/landing-page/mentorTypes-3.png";
import MentorImageFour from "@/public/assets/images/landing-page/mentorTypes-4.png";

export default function Carousel({ imgCarousel }: any) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex(
      imgCarousel.length > 1 ? currentIndex + 1 : imgCarousel.length - 3
    );
    console.log(currentIndex, imgCarousel.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + imgCarousel.length) % imgCarousel.length
    );
    // console.log(currentIndex);
  };
  //   const translateX = -currentIndex * 100;
  return (
    <section>
      <div className="md:flex mb-[8rem] md:mb-0 justify-between items-center">
        <div className="w-full md:w-1/3 mx-auto max-w-[426px] mb-[5rem] md:mb-[8rem]">
          <h3 className="text-[1.2rem] text-center md:text-left md:text-[1.6rem] font-semibold">
            Tech Experienced Mentors
          </h3>
          <p className="text-[0.85rem] text-center md:text-left md:text-[0.9rem] py-[1rem]">
            Welcome to Mentor.Me, your gateway to a world of tech excellence and
            innovation. We believe that mentorship is the cornerstone of
            personal and professional growth in the fast-paced and ever-evolving
            world of technology.
          </p>

          <div className="w-[144px] mx-auto md:mx-0 xl:mx-0 flex justify-between mt-[1rem] md:mt-[2rem]">
            <Image
              src={LeftArrow}
              alt=""
              width={48}
              height={48}
              className="cursor-pointer w-[40px] md:w-[48px]"
              onClick={handlePrev}
            />

            <Image
              src={RightArrow}
              alt=""
              width={48}
              height={48}
              className="cursor-pointer w-[40px] md:w-[48px]"
              onClick={handleNext}
            />
          </div>
        </div>

        <div className="flex relative justify-center items-center overflow-hidden w-[80%] ease-in-out translate-x-0">
          {imgCarousel.map((item: any, index: number) => (
            <div
              style={{ transform: `translateX(${-currentIndex}00%` }}
              className={`block w-3/4 mx-auto xl:mx-0 max-w-[800px] mb-[2rem] xl:mb-0 xl:ml-[4rem]  xl:flex items-center xl:justify-between transition-transform gap-20  
              
              }`}
            >
              <Image
                src={item}
                alt=""
                width={500}
                height={200}
                className="block mb-[2rem] mx-auto ease-in-out duration-300 xl:max-w-[300px] max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
