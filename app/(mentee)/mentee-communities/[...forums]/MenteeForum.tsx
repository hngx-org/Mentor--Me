"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useParams } from "next/navigation";

import BigDiscussionCard from "@/components/mentee-communities/BigDiscussionCard";
import big from "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg";

import {
  bigDiscussionCardHero,
  membersCardAvatar,
  mentorCardAvatar,
  messageedit,
} from "@/public";
import HomeNavBar from "@/components/homeNavbar";
import Footer from "@/components/Footer";

import CreateDiscussionModal from "@/components/mentee-communities/CreateDiscussionModal";
import { useMenteeCommunity } from "@/context/MenteeContext/MenteeCommunityContext";

// import { Button } from "@/components/buttons/button";

type Props = {
  join: boolean;
  params: {};
};

export default function MenteeForums(): React.ReactElement<Props> {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const parmas = useParams();
  const disscussionId = useParams().forums[1];

  // eslint-disable-next-line prefer-const
  let isLoggedIn = true;

  console.log(disscussionId);
  const data = useMenteeCommunity();
  let retrievedSliderInfo;
  let sliderInfo = data.sliderInfo;

  const sliderInfoJSON = localStorage.getItem("sliderInfo");
  if (sliderInfoJSON) {
    retrievedSliderInfo = JSON?.parse(sliderInfoJSON);
    if (retrievedSliderInfo.length > data.sliderInfo) {
      sliderInfo = retrievedSliderInfo;
    }
  }

  // eslint-disable-next-line prefer-destructuring

  function getObjectById(idToFind: string) {
    const foundObject = sliderInfo.find((item) => item.id === Number(idToFind));
    return foundObject || null; // Return null if no matching object is found
  }
  const currentDiscussion = getObjectById(disscussionId);

  return (
    <div className="">
      {isLoggedIn && isModalOpen && (
        <CreateDiscussionModal
          onClose={() => setIsModalOpen(false)}
          isLoggedIn={isLoggedIn}
        />
      )}
      <HomeNavBar />{" "}
      <div className="forums startDiscussion joinDiscussion lg:px-[85px] max-w-[100vw] md:px-12 px-6 flex flex-col  gap-y-8 ">
        <div className="search border border-[#CCCCCC] mt-1 md:mt-[0] md:w-[60vw]  lg:w-[40vw] w-[60%] pl-[16px] py-[16px] rounded-[6px] ml-6 md:ml-0 flex lg:mb-[64px] mb-6 ">
          <input
            type="text"
            className=" text-[14px] font-normal leading-[20.3px] text-Neutra20 w-full font-Inter outline-0 "
            placeholder="Search for community"
          />{" "}
          {/* <button
          type="button"
          className="text-[10px]  whitespace-nowrap px-[40px]   py-[16px]  text-white border  bg-NeutalBase flex items-center gap-x-1 rounded-[8px] h-full"
        >
          Search
        </button> */}
        </div>

        <div className="heading flex  md:flex-row flex-col gap-y-6 md:items-center">
          {" "}
          <div className="title flex flex-col xl:gap-[14px] gap-2 font-Hanken xl:mb-[45px] text-left lg:w-[70%]">
            <p className=" text-NeutalBase font-semibold lg:text-[32px] text-[18px] lg:leading-[38px] leading-5  ">
              {currentDiscussion?.title}
            </p>

            <div className=" text-Accent1 font-medium lg:text-[18px] text-[10px] leading-[22px]  flex  lg:gap-2 gap-[8px] items-center relative">
              <Image
                alt="members"
                src={membersCardAvatar}
                width={56}
                height={24}
                className="block lg:w-[56px] lg:h-[24px] w-[26px] h-[12px]"
              />{" "}
              <span className="">
                {" "}
                {`${currentDiscussion?.members} Members`}
              </span>
            </div>

            <p className=" text-Neutra50 font-normal lg:text-[18px] lg:leading-[21.6px] text-[14px] leading-[14.4px] w-[90%]">
              {currentDiscussion?.desc}
            </p>
          </div>
          {isLoggedIn && (
            <div className="largeButton ">
              {/* <Button
              variant="primary"
              className="text-[10px]  whitespace-nowrap px-[40px]   py-[16px] xl:max-w-fit  l"
              type="button"
              title="Start a disscussion"
              iconPresent={messageedit}
            /> */}

              <button
                type="button"
                className="text-[10px]  whitespace-nowrap px-[40px]   py-[16px]  text-white border  bg-NeutalBase flex items-center gap-x-1 rounded-[8px]"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  alt="icon"
                  width={20}
                  height={20}
                  src={messageedit}
                  className="lg:flex hidden"
                />
                Start a disscussion
              </button>
            </div>
          )}
        </div>

        {currentDiscussion?.slideComments.map((item, i) => (
          <BigDiscussionCard
            // eslint-disable-next-line react/no-array-index-key
            key={item.commentid + i}
            mentor={item.mentor}
            // heroCard={item.heroCard}
            // image={item.image}
            name={item.name}
            title={item.title}
            desc={item.desc}
            heroCard=""
            image={undefined}
          />
        ))}

        <Footer />
      </div>
    </div>
  );
}
