"use client";

import React, { Dispatch, useState } from "react";
import FilterPopup from "./FilterPopup";
import { FilterIcon } from "@/public/SVGs";

interface Props {
  onSubmit: () => void;
  onReset: () => void;
  setSelectedTimeZone: Dispatch<React.SetStateAction<string>>;
  selectedTimeZone: string;
  value: number;
  setValue: Dispatch<React.SetStateAction<number>>;
  selectedDate: Date;
  setSelectedDate: Dispatch<React.SetStateAction<Date>>;
}

export default function Filter({
  selectedTimeZone,
  setSelectedTimeZone,
  value,
  setValue,
  selectedDate,
  setSelectedDate,
  onSubmit,
  onReset,
}: Props) {
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
          <span className="hidden lg:flex md:text-lg lg:text-xl font-normal font-[Hanken]">
            Filter
          </span>
        </div>
      </button>
      {isOpen && (
        <FilterPopup
          onClose={closePopup}
          selectedTimeZone={selectedTimeZone}
          setSelectedTimeZone={setSelectedTimeZone}
          value={value}
          setValue={setValue}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
          onSubmit={onSubmit}
          onReset={onReset}
        />
      )}
    </div>
  );
}
