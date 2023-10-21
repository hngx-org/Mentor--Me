"use client";

import React from "react";

import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import dynamic from "next/dynamic";
import imgCarousel from "@/lib/constants/carouselData";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const AnimatePresenceDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);
export default function CarouselSlider({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col xl:flex-row w-full  xl:mb-0 xl:justify-between justify-center xl:items-start items-center gap-[40px]  "
    >
      <div className="w-full ">
        <h3 className="text-[1.2rem] text-center md:text-left md:text-[1.6rem] font-semibold">
          {title}
        </h3>
        <p className="text-[0.85rem] sm:text-lg text-center md:text-left font-Inter py-[1rem] max-w-[500px] text-Neutra50">
          {text}
        </p>
      </div>

      <div className="flex w-full  2xl:max-w-[700px] lg:max-w-[600px]  sm:max-w-[500px] justify-center  ">
        <Carousel useKeyboardArrows showStatus={false} showThumbs={false}>
          {imgCarousel.map((item) => (
            <div key={item.id} className="w-full">
              <Image
                src={item.img}
                alt="slide"
                className="h-[400px] 2xl:h-[500px]"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </MotionDiv>
  );
}
