import React from "react";
import Image from "next/image";
import { SearchIcon } from "@/public/SVGs";
import { mentorCardHero } from "@/public";

const SearchMenteecommunity = () => {
  const onSearch = () => {};
  return (
    <div className="search border border-[#CCCCCC] mt-1 md:mt-[0]  lg:w-[380px] w-[380px] pl-[16px] lg:py-[16px] py-[20px] rounded-[6px]  flex  gap-1 text-black placeholder:text-Neutra10">
      <SearchIcon />
      <input
        type="text"
        className=" text-[14px] font-normal leading-[20.3px] text-Neutra20 w-full font-Inter outline-0 "
        placeholder="Search for community"
      />{" "}
    </div>
  );
};

export default SearchMenteecommunity;
