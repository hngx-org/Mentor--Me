import React from "react";
import SearchBox from "./SearchBox";
import ShowAvailMentor from "./ShowAvailMentor";
import Filter from "./Filter";

export default function FilterContainer() {
  return (
    <div className="hidden container mx-auto wfit mt-5 mb-10 px-12 lg:px-14 xl:px-24 py-8 space-y-5 min[1280px] md:flex flex-col items-center bg-Neutral60 rounded-lg ">
      <div className="hidden md:flex items-center gap-5 lg:gap-14 text-white w-full">
        <span className=" font-Inter font-medium text-base lg:text-lg">
          All
        </span>
        <span className="border-b-[2px] border-white pb-[1px] font-Inter font-medium text-sm lg:text-lg">
          Academic
        </span>
        <span className=" font-Inter font-medium text-base lg:text-lg">
          Finance
        </span>
        <span className=" font-Inter font-medium text-base lg:text-lg">
          Coaches
        </span>
        <span className=" font-Inter font-medium text-base lg:text-lg">
          Health Professionals
        </span>
        <span className=" font-Inter font-medium text-base lg:text-lg">
          Tech
        </span>
        <span className=" font-Inter font-medium text-base lg:text-lg">
          Other{" "}
        </span>
        <span className=" font-Inter font-medium text-base lg:text-lg">
          Marketing
        </span>
      </div>
      <div className="flex flex-col md:flex-row space-y-5 justify-center md:space-y-0 md:justify-between items-center space-x-5 py-4">
        <SearchBox />
        <ShowAvailMentor />
        <Filter />
      </div>
    </div>
  );
}
