import React from "react";
import Link from "next/link";
import MentorCard from "./MentorCard";

const MentorGrid = () => (
  <div className="mentorGrid lg:mt-[64px] md:mt[40px] mt-[23px]    text-NeutalBase font-Inter overflow-hidden">
    <div className="title  lg:flex justify-between border-b border-Neutra10 pb-[14.5px] pt-[2.5]  mb-10 w-full hidden  ">
      <h2 className="  font-medium text-[24px] leading-[28.8px]  w-fit ">
        Free Mentorship Sessions
      </h2>
      <Link href="/mentee-communities/mentorship">
        <div className="seeMore  text-Accent1 lg:font-medium lg:text-[16px] lg:leading-[25.2px] mr-6 cursor-pointer ">
          View more
        </div>
      </Link>
    </div>

    <h2 className=" title-small  w-fit lg:hidden flex font-semibold   text-[16px] md:text-[20px] leading-[20px] pb-[15px]   ">
      Free Mentorship Sessions
    </h2>

    {/* <div className="lg:grid lg:grid-cols-4 hidden ">
      <MentorCard />
      <MentorCard />
      <MentorCard />
      <MentorCard />
    </div>
    <div className="md:grid grid-cols-3 lg:hidden hidden ml-6">
      <MentorCard />
      <MentorCard />
      <MentorCard />
    </div>
    <div className="grid grid-cols-2 md:hidden ">
      <MentorCard />
      <MentorCard />
    </div> */}
    <div
      className={`${"imi"} flex  transition-all  duration-300 transform   gap-x-[30px] sm:gap-x-[15px]  md:gap-x-[calc(42.5vw-274px)] lg:gap-x-[calc(33.33vw-351px)] xl:gap-x-[calc(31.33vw-394px)] 2xl:gap-x-[calc(30vw-394px)]
 md:w-fit  overflow-x-auto `}
    >
      {" "}
      <MentorCard
        id={9408}
        mentorName="Shade Mayowa"
        verify
        mentorPostion="CEO, Webmasters Inc"
        date="28th, Sept"
        time="12:30pm"
        title="Intorduction to AI"
        desc=""
      />
      <MentorCard
        id={9458}
        mentorName="Shade Mayowa"
        verify={false}
        mentorPostion="CEO, Webmasters Inc"
        date="28th, Sept"
        time="12:30pm"
        title="Intorduction to AI"
        desc="Explore the fascinating world of AI with hands-on demos and discussions. Learn the basics from industry experts."
      />
      <MentorCard
        id={9418}
        mentorName="Shade Mayowa"
        verify
        mentorPostion="CEO, Webmasters Inc"
        date="28th, Sept"
        time="12:30pm"
        title="Intorduction to AI"
        desc=""
      />
      <MentorCard
        id={9486}
        mentorName="Shade Mayowa"
        verify={false}
        mentorPostion="CEO, Webmasters Inc"
        date="28th, Sept"
        time="12:30pm"
        title="Intorduction to AI"
        desc="Explore the fascinating world of AI with hands-on demos and discussions. Learn the basics from industry experts."
      />
      <MentorCard
        id={9448}
        mentorName="Shade Mayowa"
        verify
        mentorPostion="CEO, Webmasters Inc"
        date="28th, Sept"
        time="12:30pm"
        title="Intorduction to AI"
        desc=""
      />
      <MentorCard
        id={85}
        mentorName="Shade Mayowa"
        verify={false}
        mentorPostion="CEO, Webmasters Inc"
        date="28th, Sept"
        time="12:30pm"
        title="Intorduction to AI"
        desc="Explore the fascinating world of AI with hands-on demos and discussions. Learn the basics from industry experts."
      />
    </div>
  </div>
);

export default MentorGrid;
