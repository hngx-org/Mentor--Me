"use client";

import { useState } from "react";
import Image from "next/image";
import { StartDiscussionModal } from "@/components/mentor-community";
import SearchCommunitySearchbar from "@/components/mentor-community/searchcommunity-searchbar";
import { discussionComms, discussionCommunitites } from "../data";
import { MsgEditIcon } from "@/public/assets/Icons/mentor-communities";
import DiscussionCard from "@/components/mentor-community/discussion-card";

type Params = {
  slug: string;
};

interface Props {
  params: Params;
}

const DiscussionsPage = ({ params }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <StartDiscussionModal setIsModalOpen={setIsModalOpen} />}
      <section>
        {/* Search component */}
        <section className="p-6 md:p-10">
          <SearchCommunitySearchbar />
        </section>
        {/* Community info */}
        <section className="p-6 md:p-12 md:flex justify-between items-center">
          {/* Info */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[1.125rem] font-Hanken md:text-[2rem]">
              {
                discussionCommunitites[params.slug as keyof discussionComms]
                  .name
              }
            </h1>
            {/* Member info */}
            <div className="flex">
              {/* Member Pfps */}
              <div className="flex items-center isolate">
                {/* iamge */}
                {discussionCommunitites[
                  params.slug as keyof discussionComms
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
                  discussionCommunitites[params.slug as keyof discussionComms]
                    .members.length
                }`}{" "}
                members
              </span>
            </div>
            {/* Comm description */}
            <p className="text-Neutral60 font-Hanken md:text-[1.125rem]">
              {
                discussionCommunitites[params.slug as keyof discussionComms]
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
        <section className="p-8 flex flex-col gap-4 md:p-14">
          {discussionCommunitites[
            params.slug as keyof discussionComms
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
