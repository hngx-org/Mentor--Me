"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { freeMentorSessions } from "@/app/(mentor)/mentor-community/data";
import { MentorSeshCard } from ".";

const MentorshipSessions = () => {
  const pathname = usePathname();
  const communitiesPath = pathname === "/communities";
  return (
    <section className="flex flex-col gap-8 p-6">
      {/* Section Header */}
      <div className="p-2 border-solid border-[1px] border-transparent border-b-Neutra10 flex justify-between">
        <h2 className="md:text-2xl font-medium font-Inter">
          Free Mentorship Sessions
        </h2>
        <Link
          href={`${
            pathname === "/mentor-community"
              ? "/mentor-community/mentorships"
              : pathname === "/mentee-communities"
              ? "/mentee-communities/mentorships"
              : "communities/mentorships"
          }`}
          className="text-[.875rem] md:block md:text-[1rem] font-medium cursor-pointer text-Accent1 hover:underline"
        >
          View More
        </Link>
      </div>
      {/* xl:flex xl:flex-row xl:gap-6 xl:items-start xl:flex-wrap xl:justify-evenly */}
      <div
        className={`flex flex-col md:grid grid-cols-2 ${
          communitiesPath
            ? "lg:flex lg:flex-row lg:justify-center lg:gap-8 lg:items-stretch lg:flex-wrap"
            : "lg:grid-cols-3 2xl:grid-cols-4"
        } gap-3 justify-items-center items-center pb-8`}
      >
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
  );
};

export default MentorshipSessions;
