"use client";

import React, { useState } from "react";
import FilterPopup from "./FilterPopup";
import { FilterIcon } from "@/public/assets/icons/svgs";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const filterPop = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative ">
      <button
        type="button"
        onClick={filterPop}
        className=" text-black md:bg-white md:rounded-lg md:py-2 md:px-5 cursor-pointer hover:bg-opacity-90 transition-opacity"
      >
        <div className="flex items-center justify-center">
          <span className="mr-2">
            <FilterIcon />
          </span>
          <span className="hidden lg:flex md:text-lg font-normal font-[Hanken]">
            Filter
          </span>
        </div>
      </button>
      {isOpen && <FilterPopup onClose={closePopup} />}
    </div>
  );
}
