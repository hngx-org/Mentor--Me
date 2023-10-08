"use client";

import React, { useState } from "react";

export default function RangeSlider() {
  const [value, setValue] = useState<number>(10);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
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
      </div>
    </div>
  );
}
