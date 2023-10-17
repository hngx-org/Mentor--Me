"use client";

import React from "react";
import Image from "next/image";
import LeftArrow from "@/public/assets/Icons/landing-page/arrow-circle-left.png";
import RightArrow from "@/public/assets/Icons/landing-page/arrow-circle-right.png";

export default function Carousel({ imgCarousel, title, text }: any) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex < 1 ? 0 : currentIndex - 1);
  };

  return (
    <section>
      <div className="md:flex mb-[8rem] md:mb-0 justify-between items-center gap-[40px]">
        <div className="w-full md:w-1/3 mx-auto max-w-[426px] mb-[5rem] md:mb-[8rem]">
          <h3 className="text-[1.2rem] text-center md:text-left md:text-[1.6rem] font-semibold">
            {title}
          </h3>
          <p className="text-[0.85rem] text-center md:text-left md:text-[0.9rem] py-[1rem]">
            {text}
          </p>

          <div className="w-[144px] mx-auto md:mx-0 xl:mx-0 flex justify-between mt-[1rem] md:mt-[2rem]">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 1}
            >
              <Image
                src={LeftArrow}
                alt=""
                width={48}
                height={48}
                className="cursor-pointer w-[40px] md:w-[48px]"
              />
            </button>

            <button
              type="button"
              className="outline-none"
              onClick={handleNext}
              disabled={currentIndex === 5}
            >
              <Image
                src={RightArrow}
                alt=""
                width={48}
                height={48}
                className="cursor-pointer w-[40px] md:w-[48px]"
              />
            </button>
          </div>
        </div>

        <div className="flex relative  items-center overflow-x-hidden w-[100%] ease-in-out ">
          {imgCarousel.map((item: any, index: number) => (
            <div
              style={{
                transform: `translateX(${-currentIndex}00%`,
              }}
              key={item.id}
              className={`flex justify-center gap-3 ease-in-out translate-x-0${
                index === currentIndex ? "scale-50" : ""
              }`}
            >
              <Image
                src={item.img}
                alt=""
                width={500}
                height={200}
                className="block mb-[2rem] mx-auto ease-in-out duration-300 xl:max-w-[250px] max-w-[200px] p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
