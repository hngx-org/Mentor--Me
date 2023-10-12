import React from "react";

import Image from "next/image";
import Link from "next/link";
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
// import { Button } from "@/components/buttons/button";

type Props = {
  join: boolean;
};

const slideInfo = [
  {
    mentor: true,
    name: "Shant Baddie",
    heroCard:
      "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
    image: { mentorCardAvatar },
    title: "My take on Augmented Reality (AR)",
    desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
    id: 17,
  },
  {
    mentor: false,
    name: "Shant Baddie",
    heroCard:
      "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
    image: { mentorCardAvatar },
    title: "My take on Augmented Reality (AR)",
    desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
    id: 17,
  },
];

export default function Forums(): React.ReactElement {
  return (
    <div className="">
      {" "}
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
              Tech Titans
            </p>

            <div className=" text-Accent1 font-medium lg:text-[18px] text-[10px] leading-[22px]  flex  lg:gap-2 gap-[8px] items-center relative">
              <Image
                alt="members"
                src={membersCardAvatar}
                width={56}
                height={24}
                className="block lg:w-[56px] lg:h-[24px] w-[26px] h-[12px]"
              />{" "}
              <span className=""> {`${13} Members`}</span>
            </div>

            <p className=" text-Neutra50 font-normal lg:text-[18px] lg:leading-[21.6px] text-[14px] leading-[14.4px] w-[90%]">
              Connect with mentors in free classrooms and share their
              experiences and insights with Mentor me
            </p>
          </div>
          <div className="largeButton lg:flex hidden">
            <Link href="/mentee-communities/forums/new-discussion">
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
              >
                {" "}
                <Image alt="icon" width={20} height={20} src={messageedit} />
                Start a disscussion
              </button>
            </Link>
          </div>
          <div className="smallButton lg:hidden flex">
            {" "}
            <Link href="/mentee-communities/forums/new-discussion">
              <button
                type="button"
                className="whitespace-nowrap px-[40px]   py-[16px]    h-fit  w-fit flex lg:hidden text-white border  bg-NeutalBase items-center rounded-[8px]"
              >
                Start a disscussion
              </button>
            </Link>
          </div>
        </div>

        {slideInfo.map((item) => (
          <BigDiscussionCard
            key={item.id}
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
