"use client";

import React, { useState } from "react";
import FilterPopup from "./FilterPopup";
import { FilterIcon } from "@/public/SVGs";

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
        className=" bg-black text-white rounded-lg py-3 px-6 cursor-pointer"
      >
        <div className="flex items-center justify-center">
          <span className="mr-2">
            <FilterIcon />
          </span>
          <span className="text-base font-normal font-[Hanken]">Filter</span>
        </div>
      </button>
      {isOpen && <FilterPopup onClose={closePopup} />}
    </div>
  );
}
