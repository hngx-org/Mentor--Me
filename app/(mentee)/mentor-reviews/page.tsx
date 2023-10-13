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
  Lefticon,
  Righticon,
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
import page from "@/app/CheckoutModal/page";

export default function MentorReviews() {
  interface ItemListProps {
    reviewsArr: IReview[];
    currentPage: number;
    itemsPerPage: number;
  }

  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const [svgColor, setSvgColor] = useState("text-yellow-500"); // Initial SVG color class

  const handleImageClick = () => {
    setSvgColor("text-black"); // Change the SVG color class to black
  };

  // Calculate the start and end index for the items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = reviewsArr.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(reviewsArr.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full bg-white text-black h-full lg:pb-0 pb-14">
      <div className="hidden lg:block fixed top-0">
        <MenteeSideBar />
      </div>
      <div className="bg-white flex flex-col overflow-hidden lg:ml-[270px]">
        <MenteeNavBar />

        <Image className="w-full" src={DashboardCoverBg} alt="cover-img" />
        <div className=" w-full">
          <div className="block xl:inline-flex justify-center text-center mb-[10px] w-full xl:w-full gap-y-[30px] xl:gap-x-[10px]  relative px-[100px] sm:px-12 md:px-8 lg:px-10 xl:pl-12">
            <Image
              src={DashboardMenteeProfileImg}
              className="mt-[-30px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] w-[200px] h-[200px]"
              content="cover"
              alt="mentee-avatar"
            />
            <div className="absolute bottom-[150px] left-[250px] xl:left-[200px] sm:bottom-[15px] md:bottom-[150px] md:left-[180px] xl:bottom-[10px] sm:left-[200px]">
              <Image
                src={DashboardMenteeProfileVerifiedmark}
                width={40}
                height={40}
                alt="verified-icon"
              />
            </div>
            <div className="inline-flex w-full h-[150px] items-center gap-x-[1px] xl:gap-x-[10px] my-[0px]">
              <div className="text-#121212 inline-flex w-[200px] sm:w-full md:w-full xl:w-full gap-x-[1px] xl:gap-x-[18px]">
                <div className="flex flex-col items-start gap-y-[5px] xl:gap-y-[8px]">
                  <p className="text-Neutral60 font-Hanken text-[30px] xl:text-[27px] font-semibold leading-[120%]">
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
                  <div className="flex items-start gap-x-[5px] mt-[10px] xl:gap-x-[19px]">
                    <Facebook />
                    <Instagram />
                  </div>
                </div>
              </div>
              <div className="inline-flex absolute bottom-[15px] left-[300px] md:left-[500px] xl:left-[0px] xl:relative items-start xl:items-end gap-x-[31px] xl:gap-x-[31px]">
                <LoveIcon />
                <ExportIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center p-[15px] xl:p-[50px] gap-y-[35px]">
            <div className="inline-flex w-[188px] items-center gap-x-[29px]">
              <Link href="https://mentor-me-lake.vercel.app/mentee-booking">
                <p className="text-Neutra30 font-Inter text-18 font-normal leading-[120%]">
                  Overview
                </p>
              </Link>

              <div className="flex  justify-center w-[96px] h-[25px] items-start border-b-[3px] border-Accent1 rounded-8 gap-x-[4px] b">
                <Link href="https://mentor-me-lake.vercel.app/mentor-reviews?path=reviews">
                  <p className="text-black font-Inter text-18 font-semibold leading-[120%]">
                    Reviews
                  </p>
                </Link>
                <div className="w-5 h-5 rounded-full bg-Accent1 flex items-center justify-center">
                  <span className="text-white text-md font-Hanken font-semibold">
                    {reviewsArr.length}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex flex-row flex-wrap max-w-[720px] gap-x-[2px] sm:gap-x-[12px] xl:gap-x-[52px] gap-y-[15px] xl:gap-y-[40px] ">
                {qualityArr.map((item) => (
                  <div key={item.id} className="flex flex-col gap-y-[20px]">
                    <div className="flex flex-row xl:w-[332px] text-start w-[380px]  gap-y-[100px] gap-x-[230px]  sm:gap-x-[110px] md:gap-x-[200px] xl:gap-x-[110px]">
                      <p className="text-#121212 xl:w-[550px] w-[150px] font-Hanken text-[12px] font-normal  leading-[120%]">
                        {item.title}
                      </p>
                      <p className="w-[67px] h-[14px] text-#121212 font-Hanken text-[12px] font-normal  leading-[120%]">
                        {item.rating}
                      </p>
                    </div>
                    <div className=" w-[350px] xl:w-[331px] sm:w-[260px] md:w-[350px] h-[5px] rounded-[8px] bg-Accent1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full items-start gap-y-[20px] my-[10px] xl:my-[50px]">
              <div className="flex flex-col items-start gap-y-4">
                <p className="text-#121212 font-Hanken text-[24px] font-semibold  leading-[120%]">
                  People often say
                </p>
                <div className="flex flex-wrap max-w-[711px] items-start gap-y-[10px] gap-x-[16px]">
                  <div className="flex w-[98px] bg-black p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-white">
                    All
                  </div>
                  <div className="flex w-[164px] bg-white p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    Analytical
                  </div>
                  <div className="flex w-[164px] bg-white p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    Positive Attitude
                  </div>
                  <div className="flex w-[164px] bg-white p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    Constructive
                  </div>
                  <div className="flex w-[57px] p-[6.5px] justify-center items-center rounded-[8px] border border-Neutra20 text-black">
                    <RightArrowIcon />
                  </div>
                </div>
              </div>
              <p className="text-#121212 font-Hanken text-[24px] font-semibold leading-[120%]">
                Real experience with mentor
              </p>
              <div className="flex flex-wrap xl:items-start items-center justify-center xl:justify-start  gap-[30px] w-full">
                {itemsToDisplay.map((item) => (
                  <ItemComponent key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full items-center my-[50px] xl:my-4 ">
          <div className="w-[353px] xl:w-[673px] md:w-[473px] p-[10px] flex justify-center items-center rounded-[50px] border border-Neutra20 gap-x-[1px] xl:gap-x-[50px]">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              type="button"
              className={`flex flex-row justify-center items-center gap-x-[5px] py-2 px-4 rounded-md ${
                currentPage === 1
                  ? "bg-white text-gray-500"
                  : "bg-white text-black"
              }`}
            >
              <div>
                <Image
                  src={currentPage !== 1 ? Righticon : Lefticon}
                  className={
                    currentPage !== 1
                      ? "left-arrow-icon transform rotate-180"
                      : "left-arrow-icon"
                  }
                  width={50}
                  height={50}
                  alt="arrow left"
                />
              </div>{" "}
              <div>Prev</div>
            </button>
            <div className="flex items-center gap-x-[30px] xl:gap-x-[50px]">
              {pageNumbers.map((page) => (
                <div
                  className={`flex items-center justify-center 
                    ${
                      currentPage === page &&
                      "w-[36px] h-[36px] rounded-full bg-Accent1"
                    }
                  `}
                >
                  <span
                    key={page}
                    className={`page-item ${
                      currentPage === page
                        ? "text-white text-[20px] text-md font-Hanken font-semibold"
                        : " text-[20px] items-center font-normal font-Inter text-black leading-[120%]"
                    }`}
                  >
                    <button className="page-link" type="button">
                      {page}
                    </button>
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              type="button"
              className={`flex flex-row justify-center items-center gap-x-[5px] py-2 px-4 rounded-md  ${
                currentPage === totalPages
                  ? "bg-white text-gray-500"
                  : "bg-white text-black"
              }`}
            >
              <div>Next</div>

              <div>
                <Image
                  src={currentPage === totalPages ? Lefticon : Righticon}
                  className={
                    currentPage === totalPages
                      ? "right-arrow-icon transform rotate-180"
                      : "right-arrow-icon"
                  }
                  width={50}
                  height={50}
                  alt="arrow left"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
