"use client";

import { useRef, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/public/assets/Icons/mentor-communities";
import ForumCard from "./ForumCard";
import { discussionCommunities } from "@/app/(mentor)/(dashboard-mentor)/mentor-community/data";
import { discussionState } from "@/app/(mentee)/(dashboard-route)/mentee-community/data";
import { MentorCard } from ".";
import DiscussionCard from "./discussion-card";
import DiscussionCards from "./DisscussionCards";

const DiscussionForums = ({
  discussionData,
  setDiscussionData,
}: discussionState) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLastCard, setIsLastCard] = useState(false);

  // console.log("dataa getting to discussion forum", discussionData);
  const discussionsLength = discussionData?.length;

  const sliderBtnHandler = (type: "fwd" | "bwd") => {
    const containerDimensions = containerRef.current?.getBoundingClientRect();
    const containerWidth = containerDimensions?.width;
    if (type === "fwd") {
      containerRef.current!.scrollLeft! += containerWidth!;
    } else if (type === "bwd") {
      containerRef.current!.scrollLeft -= containerWidth!;
    }
  };

  return (
    <section className="flex flex-col gap-4 md:gap-8 p-6 md:p-10">
      {/* Section Header */}
      <div className="md:p-2 border-solid border-[1px] border-transparent md:border-b-Neutra10 flex justify-between">
        <h2 className="md:text-2xl font-medium font-Inter">
          Discussion Forums
        </h2>
        <div className="hidden md:flex gap-8">
          <button
            disabled={!isLastCard}
            type="button"
            className="cursor-pointer slide-btn mentor-slider-btns disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => sliderBtnHandler("bwd")}
          >
            <ArrowLeftIcon />
          </button>
          <button
            disabled={isLastCard}
            type="button"
            className="cursor-pointer slide-btn mentor-slider-btns disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => sliderBtnHandler("fwd")}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth discussion-comms"
      >
        {discussionData?.map((comm, idx) => (
          <ForumCard
            index={idx}
            setIsLastCard={setIsLastCard}
            discussLength={discussionsLength}
            key={comm.name}
            name={comm.name}
            description={comm.description}
            members={comm.members}
            slug={comm.slug}
          />
          // <DiscussionCards
          //   title={comm.name}
          //   members={comm.members.length}
          //   desc={comm.description}
          //   id={idx}
          // />
        ))}
      </div>
    </section>
  );
};

export default DiscussionForums;
