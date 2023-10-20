"use client";

import React, { Dispatch, useState } from "react";

interface Props {
  value: number;
  setValue: Dispatch<React.SetStateAction<number>>;
}

export default function RangeSlider({ value, setValue }: Props) {
  // const [value, setValue] = useState<number>(10);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(Number(event.target.value));
    setValue(Number(event.target.value));
  };
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="font-Inter font-medium text-lg">Pricing</h1>
        <div className=" py-3 px-5 border border-[#808080] rounded-lg">
          ${value}
        </div>
      </div>
      <div>
        {/* <label>${value}</label> */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleInputChange}
          className="w-full"
        />
        {/* <input
          type="range"
          className="appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[50px] [&::-webkit-slider-thumb]:w-[50px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
        /> */}
      </div>
    </div>
  );
}
