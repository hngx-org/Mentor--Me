"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookIcon } from "@/public/SVGs";
import Add from "@/public/assets/add-circle.svg";

import ResourceOne from "@/public/assets/resource_one.png";
import ResourceTwo from "@/public/assets/resource_two.png";
import ResourceCard from "./explore/ResourceCard";
import Container from "./Container";

// export async function generateStaticMetadata({
//   searchParams: { path },
// }: {
//   searchParams: { path?: string | null };
// }) {
//   return {
//     title: path || "Resources",
//   };
// }

const Resources = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("save");
    if (savedItems?.length !== undefined && savedItems.length > 3) {
      const stored: any[] = JSON.parse(savedItems);
      setData(stored);
    }
  }, []);

  console.log(data);

  return data.length ? (
    <Container>
      <div className="relative p-4 min-h-screen">
        <div className="flex gap-3 md:gap-[60px] mb-10">
          <p className="font-Hanken text-[1rem] lg:text-lg text-NeutalBase border-b-[4px] border-Accent1">
            My Resources
          </p>
        </div>
        <div className="flex gap-6 w-full flex-wrap pb-20">
          {[...data].reverse()?.map((res: any, i: number) => (
            <Link
              key={res._id}
              href={`/mentee-resources/explore/${res._id}?path=Resources`}
            >
              <ResourceCard
                src={i % 2 ? ResourceTwo : ResourceOne}
                title={res.title}
                author={`${res.name} | ${res.role}, ${res.company}`}
                reviews={res.reviews}
                ratings={res.ratings}
              />
            </Link>
          ))}
        </div>
        <Link
          href="/mentee-resources/explore?path=Explores"
          className="fixed bottom-20 right-10"
        >
          <Image
            src={Add}
            width={60}
            height={60}
            alt="add"
            className="hover:scale-105"
          />
        </Link>
      </div>
    </Container>
  ) : (
    <div className="relative w-full max-w-[447px] h-[calc(100vh-100px)] flex flex-col justify-center items-center mx-auto px-2 ">
      <BookIcon />
      <p className="mt-6 mb-7 font-Hanken text-Neutra40 text-lg">
        You have no resources yet
      </p>
      <p className="hidden md:block mb-[66px] font-Hanken text-[#121212] text-lg text-center">
        Click on “Get new resources” to start exploring
      </p>
      <p className="mb-[66px] font-Hanken text-[#121212] text-lg text-center md:hidden">
        Click on the add icon to start exploring
      </p>
      <Link
        href="/mentee-resources/explore?path=Explores"
        className="hidden md:block w-full"
      >
        <button
          type="button"
          className="font-Hanken text-white rounded-lg bg-NeutalBase h-12 mb-4 w-full"
        >
          Get New Resources
        </button>
      </Link>
      <Link
        href="/mentee-resources/explore?path=Explores"
        className="fixed bottom-[200px] right-10 md:hidden"
      >
        <Image
          src={Add}
          width={60}
          height={60}
          alt="add"
          className="hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default Resources;
