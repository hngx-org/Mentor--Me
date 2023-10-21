/* eslint-disable import/no-extraneous-dependencies */

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Discussion,
  Member,
} from "@/app/(mentor)/(dashboard-mentor)/mentor-community/data";
import { membersCardAvatar } from "@/public";
import Modal from "../../app/modal/modal";

interface Props {
  slug: string;
  name: string;
  members: Member[];
  description: string;
  discussLength: number;
  setIsLastCard: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  //   discussions: Discussion[];
}

export type CommunityDiscussions = {
  name: string;
  members: Member[];
  description: string;
  discussions: Discussion[];
};

const Forum = ({
  name,
  members,
  description,
  slug,
  discussLength,
  index,
  setIsLastCard,
}: Props) => {
  const discussionRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const entry = useIntersectionObserver(discussionRef, {
    threshold: 0.9,
  });
  const isVisible = !!entry?.isIntersecting;
  const noOfMembers = members.length.toString();
  const membersPhoto = members.slice(0, 3);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (index === discussLength - 1 && isVisible) {
      setIsLastCard(true);
    } else if (index === 0 && isVisible) {
      setIsLastCard(false);
    }
  }, [isVisible]);

  return (
    <div
      ref={discussionRef}
      className="flex flex-col gap-4 justify-between max-w-[18.4375rem] border-[1px] border-solid border-Neutra10 rounded-lg p-6 shrink-0"
    >
      <h3 className="text-sm font-medium md:text-2xl md:font-semibold font-Inter md:font-Hanken text-NeutalBase">
        {name}
      </h3>
      <div className="flex gap-2">
        {/* Member pictures */}
        {/* <div className="flex items-center">
          
          {membersPhoto.map((member, idx) => (
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
        </div> */}
        <Image src={membersCardAvatar} className="object-cover " alt="Member" />
        {/* Member count */}
        <span className="text-[0.625rem] md:text-base relative font-medium underline text-Accent1 font-Hanken ">
          {noOfMembers} members
        </span>
      </div>
      <p className="text-xs md:text-[1.125rem] font-Hanken text-Neutral60 leading-[1.3]">
        {description}
      </p>
      <Link
        href={
          pathname === "/communities"
            ? "/communities"
            : pathname === "/mentor-community"
            ? `/mentor-community/${slug}`
            : `/mentee-community/${slug}`
        }
        className="text-xs text-center md:text-base border-solid border-[1px] p-4 md:py-5 md:px-10 w-full md:w-fit mx-auto border-NeutalBase rounded-lg font-medium font-Inter"
        onClick={(e) => {
          if (pathname === "/communities") {
            e.preventDefault();
            openModal();
          }
        }}
      >
        Join Discussion
      </Link>

      {isModalOpen && pathname === "/communities" && (
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Forum;
