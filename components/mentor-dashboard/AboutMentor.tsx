import React from "react";
import AboutMentorCard from "./AboutMentorCard";
import AboutMentorImg from "@/public/assets/aboutmentorimag.png";
import {
  ShortArrowLeftIcon,
  ShortArrowRightIcon,
} from "@/svgs/Mentor-dashboard-icons";

const aboutMentorDetails = [
  {
    type: "ARTICLE",
    img: AboutMentorImg,
    subject: "UX Principles for Designers",
    info: "Shade Mayowa | UX Researcher",
    rating: 4.5,
    review: 20,
    id: 1,
  },
  {
    type: "ARTICLE",
    img: AboutMentorImg,
    subject: "UX Principles for Designers",
    info: "Shade Mayowa | UX Researcher",
    rating: 4.5,
    review: 20,
    id: 2,
  },
  {
    type: "ARTICLE",
    img: AboutMentorImg,
    subject: "UX Principles for Designers",
    info: "Shade Mayowa | UX Researcher",
    rating: 4.5,
    review: 20,
    id: 3,
  },
];

const AboutMentor = () => (
  <div className="mt-10">
    <div className="flex items-center justify-between mb-5">
      <h5 className="text-2xl font-Inter font-medium text-[#1c0028]">
        More about me!
      </h5>
      <div className="flex items-center gap-5 ">
        <button type="button" className="grid place-content-center">
          <ShortArrowRightIcon />
        </button>
        <button
          type="button"
          className="rounded-full grid place-content-center"
        >
          <ShortArrowLeftIcon />
        </button>
      </div>
    </div>
    <div className="flex gap-10 overflow-x-scroll">
      {aboutMentorDetails.map((detail) => (
        <AboutMentorCard {...detail} key={detail.id} />
      ))}
    </div>
  </div>
);

export default AboutMentor;
