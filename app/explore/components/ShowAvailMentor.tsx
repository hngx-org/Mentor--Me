import React from "react";

export default function ShowAvailMentor() {
  return (
    <div className="hidden lg:block bg-white rounded-lg py-3 px-4">
      <div className="flex justify-between items-center gap-5">
        <span className=" text-base font-normal font-Hanken text-[#121212]">
          Show Available Mentors for the day
        </span>
        <label
          htmlFor="toogle"
          className="switch relative inline-block w-[55px] h-[34px] ml-3"
        >
          <input id="toogle" type="checkbox" className=" w-0 h-0 opacity-0" />
          <span className="slider absolute top-0 left-0 right-0 bottom-0 bg-Accent1 rounded-3xl transition before:content-[''] before:absolute before:h-[27px] before:w-[27px] before:left-[25px] before:bottom-[3.5px] before:bg-white before:transition before:rounded-full cursor-pointer round" />
        </label>
      </div>
    </div>
  );
}
