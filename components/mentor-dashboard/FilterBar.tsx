import React from "react";
import { FilterIcon, SearchIcon } from "@/svgs/Mentor-dashboard-icons";

const FilterBar = () => (
  <div className="mb-5 flex gap-2 md:hidden">
    <div className="w-full relative font-Hanken">
      <input
        placeholder="Search for mentees, or resources"
        type="text"
        className="w-full pl-10 py-2 border-2 border-Neutra10 rounded-md placeholder:text-xs bg-transparent text-sm"
      />
      <button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 "
      >
        <SearchIcon />
      </button>
    </div>
    <div>
      <div className="flex gap-1 border-2 border-Neutra10 rounded-md h-full px-3 items-center text-Neutra10">
        <FilterIcon />
        <span>Filter</span>
      </div>
    </div>
  </div>
);

export default FilterBar;
