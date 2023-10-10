"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";
import MenteeNavBar from "@/components/menteeTopNav";
import {
  DashboardMenteeProfileImg,
  DashboardMenteeProfileVerifiedmark,
  DashboardCoverBg,
} from "@/public";
import {
  Facebook,
  Instagram,
  LoveIcon,
  ExportIcon,
  StarIcon1,
  StarIcon2,
  LeftIcon,
  RightIcon,
  RightArrowIcon,
} from "@/public/SVGs";
import ItemComponent from "@/components/reviews/review";
import {
  QualityProps,
  qualityArr,
  IReview,
  reviewsArr,
} from "@/lib/constants/constants";

export default function MentorReviews() {
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index for the items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = reviewsArr.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(reviewsArr.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="w-full flex bg-white text-black h-full lg:pb-0 pb-14">
      <div className="bg-white flex flex-col overflow-hidden ">
        <Image className="w-full" src={DashboardCoverBg} alt="cover-img" />
        <div className=" flex-col items-start gap-y-[35px]">
          <div className="inline-flex justify-center  w-full gap-x-4 relative px-[69px] sm:px-12 md:px-8 lg:px-10 xl:pl-12">
            <Image
              src={DashboardMenteeProfileImg}
              className="mt-[-30px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] w-[100px] h-[120px]"
              content="cover"
              alt="mentee-avatar"
            />
            <div className="absolute bottom-[2px] left-[80px] xl:left-[200px] sm:bottom-[15px] md:bottom-[20px] md:left-[200px] xl:bottom-[10px] sm:left-[200px]">
              <Image
                src={DashboardMenteeProfileVerifiedmark}
                width={40}
                height={40}
                alt="verified-icon"
              />
            </div>
            <div className="inline-flex w-full items-center gap-x-[1px] xl:gap-x-[10px] my-[0px]">
              <div className="text-#121212 inline-flex w-[200px] xl:w-full gap-x-[1px] xl:gap-x-[18px]">
                <div className="flex flex-col items-start gap-y-[2px] xl:gap-y-[8px]">
                  <p className="text-Neutral60 font-Hanken text-[20px] xl:text-[27px] font-semibold leading-[120%]">
                    Shade Mayowa
                  </p>
                  <p className="text-Neutra40 font-Hanken text-[12px] font-normal leading-[120%]">
                    CEO, Webmasters Inc
                  </p>
                  <div className="flex text-start w-[216px] h-[19px] gap-x-[5px]">
                    <div className="inline-flex justify-center gap-x-[2px] xl:gap-x-[5px]">
                      <span>
                        {" "}
                        <StarIcon1 />
                      </span>
                      <span>
                        {" "}
                        <StarIcon1 />
                      </span>
                      <span>
                        {" "}
                        <StarIcon1 />
                      </span>
                      <span>
                        {" "}
                        <StarIcon1 />
                      </span>
                      <span>
                        {" "}
                        <StarIcon2 />
                      </span>
                    </div>
                    <div className="inline-flex justify-center gap-x-[2px] xl:gap-x-[5px]">
                      <span className="text-black font-Hanken text-[15px] xl:text-[16px] font-normal leading-[120%]">
                        4.5
                      </span>
                      <span className="text-black font-Hanken text-[15px] xl:text-[16px] font-normal leading-[120%]">
                        |
                      </span>
                      <span className="text-black font-Hanken text-[15px] xl:text-[16p font-normal leading-[120%]">
                        20 reviews
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-x-[5px] xl:gap-x-[19px]">
                    <Facebook />
                    <Instagram />
                  </div>
                </div>
              </div>
              <div className="inline-flex items-end gap-x-[5px] xl:gap-x-[31px]">
                <LoveIcon />
                <ExportIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center p-[15px] xl:p-[50px] gap-y-[35px]">
            <div className="inline-flex w-[188px] items-center gap-x-[29px]">
              <Link href="/mentee-booking?path=bookings">
                <p className="text-Neutra30 font-Inter text-18 font-normal leading-[120%]">
                  Overview
                </p>
              </Link>

              <div className="flex  justify-center w-[96px] h-[25px] items-start border-b-[3px] border-Accent1 rounded-8 gap-x-[4px] b">
                <Link href="/mentor-reviews?path=reviews">
                  <p className="text-black font-Inter text-18 font-semibold leading-[120%]">
                    Reviews
                  </p>
                </Link>
                <span className="flex w-[20px] text-white h-[21px] p-[6px] flex-col justify-center items-center gap-[8px] rounded-full bg-Accent1">
                  6
                </span>
              </div>
            </div>
            <div className="inline-flex flex-col w-full items-start">
              <div className="flex flex-row flex-wrap max-w-[720px] gap-x-[2px] sm:gap-x-[12px] xl:gap-x-[52px] gap-y-[15px] xl:gap-y-[40px] ">
                {qualityArr.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-start gap-y-[20px]"
                  >
                    <div className="flex flex-row xl:w-[250px] w-[350px] items-center gap-y-[100px] gap-x-[120px]  sm:gap-x-[110px] md:gap-x-[200px] xl:gap-x-[110px]">
                      <p className="text-#121212 xl:w-[550px] font-Hanken text-[12px] font-normal  leading-[120%]">
                        {item.title}
                      </p>
                      <p className="w-[67px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%]">
                        {item.rating}
                      </p>
                    </div>
                    <div className=" w-[275px] xl:w-[331px] sm:w-[260px] md:w-[131px] h-[5px] rounded-[8px] bg-Accent1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-y-[20px] my-[10px] xl:my-[50px] w-full">
              <div className="flex flex-col items-start gap-y-4">
                <p className="w-[190px] text-#121212 font-Hanken text-[24px] font-semibold ">
                  People often say
                </p>
                <div className="flex  items-center gap-2 sm:gap-4 text-sm sm:text-[18px] max-sm:flex-wrap ">
                  <p className="flex bg-black px-2 p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-white">
                    All
                  </p>
                  <p className="flex  bg-white p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    Analytical
                  </p>
                  <p className="flex  bg-white p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    Positive Attitude
                  </p>
                  <p className="flex  bg-white p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    Constructive
                  </p>
                  <p className="flex p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    <RightArrowIcon />
                  </p>
                </div>
              </div>
              <p className="text-#121212 font-Hanken text-[24px] font-semibold leading-[120%]">
                Real experience with mentor
              </p>
              <div className="flex flex-col mx-[5px] items-center sm:items-start gap-[30px] w-full">
                {reviewsArr.map((item) => (
                  <ItemComponent key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full items-center my-[50px] xl:my-4 ">
          <div className="w-full max-w-[673px] flex justify-center sm:justify-between items-center  rounded-[50px] border border-Neutra20 sm:px-4 gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              type="button"
              className={`flex flex-row justify-center items-center  py-2 px-4  ${
                currentPage === 1 ? "opacity-50" : ""
              }`}
            >
              <LeftIcon /> <div className="hidden sm:block">Prev</div>
            </button>

            <div className="flex flex-row   xl:max-w-[250px] items-center sm:gap-2 ">
              {numbers.map((number, index) => (
                <button
                  type="button"
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`${
                    currentPage === number
                      ? "bg-Accent1 text-white text-[30px]"
                      : "bg-white"
                  }
                    
                        flex sm:w-[64px] sm:h-[64px] h-[40px] w-[40px]  p-[2.5px] text-[20px] items-center justify-center font-normal font-Inter text-black 
                  rounded-full`}
                >
                  <span>{number}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === numbers.length}
              type="button"
              className={`flex flex-row justify-center items-center gap-x-[5px] py-2 px-4 rounded-md  ${
                currentPage === numbers.length ? "opacity-50" : ""
              }`}
            >
              <div className="hidden sm:block">Next</div>

              <RightIcon
                className={`rounded-[50%] ${
                  currentPage === 1
                    ? "bg-white text-black"
                    : "bg-black text-black"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
