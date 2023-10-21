import Link from "next/link";
import React from "react";
import MentorSessionCard from "./MentorSessionCard";

const mentorSessionsDetail = [
  {
    name: "Folabube Goodluck",
    types: "Design Virtual",
    day: 25,
    min: 90,
    month: "AUG",
    location: "Lagos, Nigeria",
    id: 1,
  },
  {
    name: "Folabube Goodluck",
    types: "Design Virtual",
    day: 25,
    min: 90,
    month: "AUG",
    location: "Lagos, Nigeria",
    id: 2,
  },
  {
    name: "Folabube Goodluck",
    types: "Design Virtual",
    day: 25,
    min: 90,
    month: "AUG",
    location: "Lagos, Nigeria",
    id: 3,
  },
];

interface mentorProps {
  isVerified: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const MentorSession = ({ isVerified, setIsOpen, isOpen }: mentorProps) => (
  <div className="mt-7 md:mt-10">
    <div>
      <div className="flex justify-between">
        <h3 className="font-Inter text-sm lg:text-xl font-semibold leading-7">
          View Pending Scheduled Sessions with Mentees
        </h3>
      </div>
      <div className="font-Hanken flex justify-between items-center mt-5">
        <span className="text-sm md:text-base lg:text-lg font-semibold leading-7">
          Recent Booking
        </span>
        <button
          type="button"
          className="font-normal text-sm lg:text-base text-[#528b8b]"
        >
          See More
        </button>
      </div>
    </div>
    <div className="overflow-x-hidden w-[100%]">
      <div className="grid  md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-10 mt-7">
        {mentorSessionsDetail.map((session) => (
          <MentorSessionCard
            setIsOpen={setIsOpen}
            {...session}
            key={session.id}
          />
        ))}
      </div>
    </div>
  </div>
);

export default MentorSession;
