"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MentorCard from "./MentorCard";
import { mentorCardAvatar } from "@/public";
import { getMentorInfo } from "@/lib/apiHelper";
import Loading from "@/app/(mentor)/loading";
import LoadingSpinner from "../loaders/LoadingSpinner";
import styles from "./mentorpage.module.css";

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

const MentorGrid: React.FC = () => {
  const pathname = usePathname();
  const communitiesPath = pathname === "/communities";

  const [mentorInfo, setMentorInfo] = useState([] as MentorDataType[]);

  useEffect(() => {
    getMentorInfo(setMentorInfo);
  }, []);

  console.log(mentorInfo);

  function capitalizeFirstLetter(string: string) {
    if (string && string.length > 0) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string; // Return the input string if it's undefined or empty
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section className="gap-4 md:gap-8 p-6 md:p-10">
        <div className="mentorGrid lg:mt-[64px] md:mt[40px] mt-[23px]    text-NeutalBase font-Inter overflow-hidden">
          <div className="title  lg:flex justify-between border-b border-Neutra10 pb-[14.5px] pt-[2.5]  mb-10 w-full hidden  ">
            <h2 className="  font-medium text-[24px] leading-[28.8px]  w-fit ">
              Free Mentorship Sessions
            </h2>
            <Link
              href={`${
                pathname === "/mentor-community"
                  ? "/mentor-community/mentorships"
                  : pathname === "/mentee-communities"
                  ? "/mentee-community/mentorships"
                  : "mentee-community/mentorships"
              }`}
            >
              <div className="seeMore  text-Accent1 lg:font-medium lg:text-[16px] lg:leading-[25.2px] mr-6 cursor-pointer ">
                View more
              </div>
            </Link>
          </div>

          <h2 className=" title-small  w-fit lg:hidden flex font-semibold   text-[16px] md:text-[20px] leading-[20px] pb-[15px]   ">
            Free Mentorship Sessions
          </h2>

          <div
            className={`flex gap-6 overflow-x-auto scroll-smooth ${styles.slider} `}
          >
            <Suspense fallback={<LoadingSpinner />}>
              {mentorInfo.map((item) => (
                <MentorCard
                  id={item.id}
                  mentorName={`${capitalizeFirstLetter(
                    item.firstname
                  )} ${capitalizeFirstLetter(item.lastname)}`}
                  verify
                  mentorPostion={capitalizeFirstLetter(item.title)}
                  mentorAvatar={mentorCardAvatar}
                  cardHero={item.contentImage}
                  date={item.date}
                  time={item.time}
                  title={capitalizeFirstLetter(item.topic)}
                  desc={capitalizeFirstLetter(item.content)}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default MentorGrid;
