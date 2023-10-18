"use client";

import { useState } from "react";
import Image from "next/image";

import SearchCommunitySearchbar from "@/components/Community/searchcommunity-searchbar";
import { discussionComms, discussionCommunitites } from "../data";
import { MsgEditIcon } from "@/public/assets/Icons/mentor-communities";
import DiscussionCard from "@/components/Community/discussion-card";
import { StartDiscussionModal } from "@/components/Community";

const DiscussionsPage = ({ params }: { params: { forum: string } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <StartDiscussionModal setIsModalOpen={setIsModalOpen} />}
      <section>
        {/* Search component */}
        <section className="p-6 md:p-10">
          {/* create another swarch component or use this one */}
          {/* <SearchCommunitySearchbar /> */}git
        </section>
        {/* Community info */}
        <section className="p-6 md:p-12 md:flex gap-4 justify-between items-center">
          {/* Info */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[1.125rem] font-Hanken md:text-[2rem]">
              {
                discussionCommunitites[params.forum as keyof discussionComms]
                  .name
              }
            </h1>
            {/* Member info */}
            <div className="flex">
              {/* Member Pfps */}
              <div className="flex items-center">
                {/* image */}
                {discussionCommunitites[
                  params.forum as keyof discussionComms
                ].members
                  .slice(0, 3)
                  .map((member, idx) => (
                    <div
                      className={`w-[1.5rem] border-solid rounded-full overflow-hidden border-2 border-NeutalBase relative ${
                        idx === 1 ? "right-3" : idx === 2 ? "right-6" : ""
                      } ${idx === 1 ? "-z-10" : idx === 2 ? "-z-20" : ""}`}
                      key={member.name}
                    >
                      <Image
                        src={
                          member.profilePhotoUrl !== undefined // could simply use non-null assertion operator but this is safer
                            ? member.profilePhotoUrl
                            : ""
                        }
                        className="object-cover aspect-square"
                        alt="Member"
                      />
                    </div>
                  ))}
              </div>
              {/* Member count */}
              <span className=" md:text-base relative font-medium text-Accent1 font-Hanken right-5">
                {`${
                  discussionCommunitites[params.forum as keyof discussionComms]
                    .members.length
                }`}{" "}
                members
              </span>
            </div>
            {/* Comm description */}
            <p className="text-Neutral60 font-Hanken md:text-[1.125rem]">
              {
                discussionCommunitites[params.forum as keyof discussionComms]
                  .description
              }
            </p>
          </div>

          {/* Start a discussion */}
          <button
            type="button"
            onClick={() => setIsModalOpen((p) => !p)}
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
          {discussionCommunitites[
            params.forum as keyof discussionComms
          ].discussions.map((item) => (
            <DiscussionCard
              author={item.author}
              description={item.note}
              title={item.topic}
              key={item.author.name}
              image={item.imageUrl}
            />
          ))}
        </section>
      </section>
    </>
  );
};

export default DiscussionsPage;
