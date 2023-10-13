import React from "react";
import { MobileSearchIcon } from "@/svgs/Schedule/ScheduleMentor";

function MobileAppear() {
  return (
    <div>
      <div className="container w-full bg-NeutalBase pb-4 lg:hidden">
        <div className="flex justify-between flex-col items-center gap-4 min-h-[96px]">
          <p className="text-[#fff] text-base text-center px-4 pt-2 font-Inter">
            Get started with MentorMe Long term mentorship program
          </p>
          <form className="w-[80%] max-w-[600px] mx-auto relative">
            <div>
              <input
                placeholder="Placeholder"
                className="w-full py-1.5 px-3 pl-10 placeholder-gray-500 rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                name="search"
                type="text"
              />{" "}
              <div className="absolute top-[25%] left-3">
                <MobileSearchIcon />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MobileAppear;
