"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import useAuth from "@/context/useAuth";

export default function Instructor() {
  // Vxrcel
  const { data } = useAuth();

  // Vxrcel End
  const profileImg = `https://api.dicebear.com/7.x/initials/png?seed=${
    data?.userDetails?.fullName || ""
  }`;
  return (
    <div className="font-Hanken mt-4 md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2">
      <h2 className="font-Inter text-NeutalBase font-medium text-2xl capitalize">
        instructor
      </h2>
      <div className="grid grid-rows-[repeat(2,_1fr)] grid-cols-[repeat(2,_max-content)] gap-x-2 mt-4 mb-3">
        <Link
          href="/mentor-profile?path=profile"
          className="w-12 h-12  row-span-full col-start-1 col-end-2"
          prefetch
        >
          <Image
            width={50}
            height={50}
            src={profileImg}
            alt="Instructor"
            className="rounded-full"
          />
        </Link>
        <Link
          prefetch
          href="/mentor-profile?path=profile"
          className="text-Accent1 row-start-1 row-end-2 col-start-2 col-end-3 w-max capitalize text-xl font-medium"
        >
          {data?.userDetails?.fullName}
        </Link>
        <p className="text-Neutra40 row-start-2 row-end-3 col-start-2 col-end-3 w-max">
          {data?.mentorship_type} at {data?.institution}
        </p>
      </div>
      <p className=" text-Neutra40">
        Dylan is a renowned researcher with over 20 years experience in
        designing customer centric products that align with business objectives.
        She is an award-winning visual designer with extensive experience in
        brand, digital and UX design. She enjoys breaking down complex ideas
        through visual storytelling. As a senior designer at Microsoft, Deb
        collaborates with product leaders to create engaging narratives that
        communicate value and business impact.{" "}
      </p>
    </div>
  );
}
