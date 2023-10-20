"use client";

import React, { useState } from "react";

import { SearchIcon } from "@/public/assets/Icons/mentor-communities/index";
import { SearchState } from "@/app/(mentee)/(dashboard-route)/mentee-community/data";

const SecondSearchCommunitySearchbar = ({
  q,
  setQ,
  filterDiscussions,
}: SearchState) => {
  const onSubmitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    filterDiscussions();
    // setQ("");
  };

  return (
    <form className="p-4 pl-6 border-[1px] border-solid border-Neutra10  rounded-lg max-w-[90vw] w-[90vw] md:w-[370px] lg:w-[610px] flex items-center gap-[2px]">
      <span className="">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="bg-transparent font-Hanken outline-none basis-9/12 "
        placeholder="Search Community"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          console.log(q);

          onSubmitHandler(e);
          console.log("the end");

          if (e.target.value.length < 1) {
            filterDiscussions();
          }
        }}
      />
    </form>
  );
};

export default SecondSearchCommunitySearchbar;
