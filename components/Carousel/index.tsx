"use client";

import React from "react";

import Image from "next/image";

import dynamic from "next/dynamic";
import AliceCarousel from "react-alice-carousel";
import imgCarousel from "@/lib/constants/carouselData";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const images = imgCarousel.map((image: any) => (
  <Image
    key={image.id}
    src={image.img}
    alt="slide"
    draggable="false"
    className="w-[420px] h-[320px] lg:mr-2"
    role="presentation"
    placeholder="blur"
  />
));

export default function CarouselSlider({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col xl:flex-row w-full  xl:mb-0 xl:justify-between justify-center xl:items-start items-center gap-[40px] h-full  overflow-hidden">
      <div className="w-full flex flex-col ">
        <h3 className="text-[1.2rem] text-center md:text-left md:text-[1.6rem] font-semibold">
          {title}
        </h3>
        <p className="text-[0.85rem] sm:text-lg text-center md:text-left font-Inter py-[1rem] max-w-[500px] text-Neutra50 grid-cols-3">
          {text}
        </p>
      </div>
    </div>
  );
}
