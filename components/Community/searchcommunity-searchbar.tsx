"use client";

import React, { useState } from "react";

import { SearchIcon } from "@/public/assets/Icons/mentor-communities/index";
import { SearchState } from "@/app/(mentee)/(dashboard-route)/mentee-community/data";

const SearchCommunitySearchbar = ({
  q,
  setQ,
  filterDiscussions,
}: SearchState) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterDiscussions();
    // setQ("");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="p-4 md:p-0 md:pl-6 border-[1px] border-solid border-Neutra20 md:border-NeutalBase rounded-lg max-w-[38.125rem] flex items-center md:justify-between gap-3"
    >
      <span className="md:hidden">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="bg-transparent font-Hanken outline-none basis-9/12"
        placeholder="Search Community"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          console.log(q);

          if (e.target.value.length < 1) {
            filterDiscussions();
          }
        }}
      />
      <button
        type="submit"
        className="hidden md:block px-12 py-[1.125rem] text-white bg-NeutalBase rounded-lg font-Inter hover:bg-Neutral60 cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default SearchCommunitySearchbar;
