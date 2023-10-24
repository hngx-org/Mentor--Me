"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";

import SearchCommunitySearchbar from "@/components/Community/searchcommunity-searchbar";
import { Community, discussionComms, discussionCommunitites } from "../data";
import { MsgEditIcon } from "@/public/assets/Icons/mentor-communities";
import DiscussionCard from "@/components/Community/discussion-card";
import { StartDiscussionModal } from "@/components/Community";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { getSingleForums } from "@/lib/apiHelper";
import { membersCardAvatar } from "@/public";
import { images } from "@/lib/constants/index";
import CreateDiscussionModal from "@/components/Community/CreateDiscussionModal";

const DiscussionsPage = ({ params }: { params: { forum: string } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        {/* {isModalOpen && (
          <StartDiscussionModal setIsModalOpen={setIsModalOpen} />
        )} */}
        {isModalOpen && (
          <CreateDiscussionModal onClose={() => setIsModalOpen(false)} />
        )}

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

            {/* Start a discussion */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-3 px-12 py-4 md:py-[1.125rem] text-white bg-NeutalBase rounded-lg font-Inter hover:bg-Neutral60 cursor-pointer md:flex gap-3 items-center"
            >
              <span className="hidden md:block">
                <MsgEditIcon />
              </span>
              <span className="text-[.875rem] font-Hanken font-semibold">
                Start a discussion
              </span>
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
      </section>
    </Suspense>
  );
};

export default DiscussionsPage;
