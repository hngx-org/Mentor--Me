import React from "react";
import SearchBox from "./SearchBox";
import ShowAvailMentor from "./ShowAvailMentor";
import Filter from "./Filter";

export default function FilterContainer() {
  return (
    <div className="container mx-auto mt-24 px-4 py-8">
      <div className="bg bg-Neutral60 rounded-[5px] px-6 py-4 space-y-5 lg:py-8">
        {/* All */}
        <div className="w[350px] flex items-center space-x-10 gap10 text-white overflow-x-auto lg:justify-center lg:space-x-16">
          <span className=" font-Inter font-medium text-base lg:text-lg">
            All
          </span>
          <span className="border-b[2px] border-white pb-[1px] font-Inter font-medium text-base lg:text-lg">
            Academic
          </span>
          <span className=" font-Inter font-medium text-base lg:text-lg">
            Finance
          </span>
          <span className=" font-Inter font-medium text-base lg:text-lg">
            Coaches
          </span>
          <div className=" font-Inter font-medium text-base lg:text-lg">
            Health Professionals
          </div>
          <span className=" font-Inter font-medium text-base lg:text-lg">
            Tech
          </span>
          <span className=" font-Inter font-medium text-base lg:text-lg">
            Other
          </span>
          <span className=" font-Inter font-medium text-base lg:text-lg">
            Marketing
          </span>
        </div>

        {/* Search for mobile */}
        {/* <Filter /> */}
        <div className=" space-y-5 lg:space-y-0 lg:space-x-5 lg:flex md:justify-center md:items-center">
          <SearchBox />
          <div>
            <ShowAvailMentor />
          </div>
          <div className="hidden lg:flex">
            <Filter />
          </div>
        </div>
      </div>
    </div>
    // <div className="no-scrollbar container mx-auto wfit mt-24 mt5 mb-10 px-12 lg:px-14 xl:px-24 py-8 space-y-5 min[1280px] md:flex flex-col items-center bg-Neutral60 rounded-lg ">
    //   <div className="flex items-center gap-5 lg:gap-10 text-white w-[300px] overflow-x-auto  lg:w-[90%]">
    //     <span className=" font-Inter font-medium text-base lg:text-lg">
    //       All
    //     </span>
    //     <span className="border-b-[2px] border-white pb-[1px] font-Inter font-medium text-sm lg:text-lg">
    //       Academic
    //     </span>
    //     <span className=" font-Inter font-medium text-base lg:text-lg">
    //       Finance
    //     </span>
    //     <span className=" font-Inter font-medium text-base lg:text-lg">
    //       Coaches
    //     </span>
    //     <span className=" font-Inter font-medium text-base lg:text-lg">
    //       Health Professionals
    //     </span>
    //     <span className=" font-Inter font-medium text-base lg:text-lg">
    //       Tech
    //     </span>
    //     <span className=" font-Inter font-medium text-base lg:text-lg">
    //       Other
    //     </span>
    //     <span className=" font-Inter font-medium text-base lg:text-lg">
    //       Marketing
    //     </span>
    //   </div>
    //   <div className="flex flex-col md:flex-row space-y-5 justifycenter md:space-y-0 md:justify-between md:items-center space-x-5 py-4">
    //     <SearchBox />
    //     <ShowAvailMentor />
    //     <Filter />
    //   </div>
    // </div>
  );
}
