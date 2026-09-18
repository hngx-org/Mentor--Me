"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";

import SearchCommunitySearchbar from "@/components/Community/searchcommunity-searchbar";
import {
  Community,
  Community2,
  discussionComms,
  discussionCommunitites,
} from "../data";
import { images } from "@/lib/constants/index";
import { MsgEditIcon } from "@/public/assets/Icons/mentor-communities";
import DiscussionCard from "@/components/Community/discussion-card";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { getSingleForums, post, postSingleForum } from "@/lib/apiHelper";
import { membersCardAvatar } from "@/public";

const DiscussionsPage = ({ params }: { params: { forum: string } }) => {
  console.log(discussionCommunitites);

  const [forum, setForum] = useState({
    slug: "",
    name: "",
    members: [],
    description: "",
    discussions: [],
  } as Community);
  useEffect(() => {
    getSingleForums(setForum, params.forum);
    // postSingleForum(roadsidedata);
  }, [params.forum]);

  // const { members } = forum;

  // const memeberLenght = members?.length;
  console.log("current forum", forum);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section>
        {/* Search component */}
        <section className="p-6 md:p-10">
          {/* create another swarch component or use this one */}
          {/* <SearchCommunitySearchbar /> */}
        </section>
        {/* Community info */}
        <section className="p-6 md:p-12 md:flex gap-4 justify-between items-center">
          {/* Info */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[1.125rem] font-Hanken md:text-[2rem]">
              {forum.name}
            </h1>
            {/* Member info */}
            <div className="flex gap-1 ">
              {/* Member Pfps */}
              <div className="flex items-center">
                {/* image */}
                <Image
                  alt="members"
                  src={membersCardAvatar}
                  width={36}
                  height={20}
                  className="flex  xl:h-6 xl:w-[56] h-4 w-9 lg:h-[22px]  lg:w-[51px] "
                />{" "}
              </div>
              {/* Member count */}
              <span className=" md:text-base relative font-medium text-Accent1 font-Hanken ">
                {forum.members.length} members
              </span>
            </div>
            {/* Comm description */}
            <p className="text-Neutral60 font-Hanken md:text-[1.125rem] max-w-[680px]">
              {
                // discussionCommunitites[params.forum as keyof discussionComms]
                //   .description

                forum?.description
              }
            </p>
          </div>

          {/* Join a discussion */}

          <button
            type="button"
            className="text-[10px]  whitespace-nowrap px-[40px]   py-[16px]  text-white border  bg-NeutalBase flex items-center gap-x-1 rounded-[8px]"
          >
            Join disscussion
          </button>
        </section>
        {/* Discussion list */}
        <section className="p-8 pb-[3rem] flex flex-col gap-4 md:p-14">
          {forum?.discussions.map((item) => (
            <DiscussionCard
              author={item.author}
              description={item.note}
              title={item.topic}
              image={images.DiscussionPhoto}
            />
          ))}
        </section>
      </section>
    </Suspense>

    // <div>
    //   {forum.description}
    //   {forum?.members?.length}
    //   members
    // </div>
  );
};

export default DiscussionsPage;
