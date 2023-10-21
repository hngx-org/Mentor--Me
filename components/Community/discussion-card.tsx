"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  CommentsIcon,
  ShareIcon,
} from "@/public/assets/Icons/mentor-communities";
import { Member } from "@/app/(mentor)/(dashboard-mentor)/mentor-community/data";

interface Props {
  image?: StaticImageData;
  author: Member;
  title: string;
  description: string;
  // comments?: number;
}

export default function DiscussionCard({
  image,
  author,
  title,
  description,
}: Props): React.ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle between expanded and clamped text
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-2 rounded-lg border-solid border-[1px] border-Neutra10 flex flex-col gap-3 md:flex-row md:gap-6 md:p-4">
      {/* Discussion image */}
      {image ? (
        <div className="image overflow-hidden !aspect-square lg:w-[295px]  w-[320px] lg:h-[295px] h-[320px] max-w-[90vw] rounded-[10px] flex flex-shrink-0 ">
          <Image
            src={image!}
            alt={title}
            className="block w-[100%] aspect-[298/382] object-cover  "
            placeholder="blur"
          />
        </div>
      ) : (
        ""
      )}
      {/* discussion details */}
      <div className="flex flex-col gap-2 md:justify-between">
        {/* author info */}
        <div className="flex gap-2">
          {/* Image */}
          <div className="self-start border-[3px] border-solid border-NeutalBase rounded-full overflow-hidden max-w-[2.3125rem]">
            {author.profilePhotoUrl ? (
              <Image
                src={author.profilePhotoUrl!}
                alt={author.name}
                className="w-full h-full object-cover aspect-square"
              />
            ) : (
              ""
            )}
          </div>
          {/* name */}
          <div className="flex flex-col gap-1">
            <span className="text-NeutalBase font-semibold font-Hanken">
              {author.name}
            </span>
            <span className="font-Hanken text-Neutra40 text-[.75rem]">
              {author.isMentor ? "Mentor" : "Student"}
            </span>
          </div>
        </div>
        {/* Discusion info */}
        <div className="flex flex-col gap-2">
          <h2 className="font-Hanken font-semibold md:text-[1.5rem]">
            {title}
          </h2>

          <div>
            {" "}
            <p
              className={`font-Hanken text-Neutra40 text-[.875rem] md:text[1.125rem] ${
                isExpanded ? "" : "line-clamp-3 lg:line-clamp-5"
              }   `}
            >
              {description}
            </p>
            {/* Render "Read More" button if text is clamped */}
            {!isExpanded && (
              <button
                type="button"
                onClick={toggleReadMore}
                className="text-Accent1 cursor-pointer text-[.875rem] md:text[1.125rem] font-Hanken "
              >
                Read More
              </button>
            )}
            {/* Render "Read Less" button if text is expanded */}
            {isExpanded && (
              <button
                type="button"
                onClick={toggleReadMore}
                className="text-Accent1 cursor-pointer text-[.875rem] md:text[1.125rem] font-Hanken "
              >
                Read Less
              </button>
            )}
          </div>
        </div>
        {/* Discussion actions */}
        <div className="flex gap-2 text-Accent1 font-Hanken text-[.875rem]">
          <button
            type="button"
            className="rounded-lg flex items-center gap-1  p-2"
          >
            <span>
              <CommentsIcon />
            </span>
            <span className="">14 Comments</span>
          </button>
          <button
            type="button"
            className="rounded-lg flex items-center gap-1  p-2"
          >
            <span>
              <ShareIcon />
            </span>
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
