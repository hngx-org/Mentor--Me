"use client";

import { useRef } from "react";
import Link from "next/link";
import SearchCommunitySearchbar from "@/components/mentor-community/searchcommunity-searchbar";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/public/assets/Icons/mentor-communities/index";
import { discussionCommunities, freeMentorSessions } from "./data";
import CommunityCard from "@/components/mentor-community/community-card";
import { MentorSeshCard } from "@/components/mentor-community";

export default function MenteeCommunitiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // todo abstract these event handler functions to hooks or something
  const nextBtnHandler = () => {
    const containerDimensions = containerRef.current?.getBoundingClientRect();
    const containerWidth = containerDimensions?.width;
    containerRef.current!.scrollLeft! += containerWidth!;
    // console.log(containerDimensions);
  };

  const prevBtnHandler = () => {
    const containerDimensions = containerRef.current?.getBoundingClientRect();
    const containerWidth = containerDimensions?.width;
    containerRef.current!.scrollLeft -= containerWidth!;
    // console.log(containerDimensions);
  };

  return (
    // Communities page main content
    <section className="w-full h-full">
      {/* Search Bar */}
      <section className="p-6 md:p-10">
        <SearchCommunitySearchbar />
      </section>
      {/* Discussions */}
      <section className="flex flex-col gap-4 md:gap-8 p-6 md:p-10">
        {/* Section Header */}
        <div className="md:p-2 border-solid border-[1px] border-transparent md:border-b-Neutra10 flex justify-between">
          <h2 className="md:text-2xl font-medium font-Inter">
            Discussion Forums
          </h2>
          <div className="hidden md:flex gap-8">
            <button
              type="button"
              className="cursor-pointer slide-btn"
              onClick={prevBtnHandler}
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              className="cursor-pointer slide-btn"
              onClick={nextBtnHandler}
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth discussion-comms"
        >
          {discussionCommunities.map((comm) => (
            <CommunityCard
              key={comm.name}
              name={comm.name}
              description={comm.description}
              members={comm.members}
              slug={comm.slug}
            />
          ))}
        </div>
      </section>
      {/* Free mentorship sessions */}
      {/* Section Header */}
      <section className="flex flex-col gap-8 p-6 md:p-10">
        <div className="p-2 border-solid border-[1px] border-transparent border-b-Neutra10 flex justify-between">
          <h2 className="md:text-2xl font-medium font-Inter">
            Free Mentorship Sessions
          </h2>
          <Link
            href="#"
            className="text-[.875rem] md:block md:text-[1rem] font-medium cursor-pointer text-Accent1 hover:underline"
          >
            View More
          </Link>
        </div>
        {/* xl:flex xl:flex-row xl:gap-6 xl:items-start xl:flex-wrap xl:justify-evenly */}
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
          {freeMentorSessions.slice(0, 4).map((sesh) => (
            <MentorSeshCard
              key={sesh.author.name}
              pfp={sesh.author.profilePhotoUrl!}
              name={sesh.author.name}
              about={sesh.author.about!}
              sessionImg={sesh.imageUrl}
              title={sesh.title}
              description={sesh.desc}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
