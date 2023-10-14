import React from "react";
import { Button } from "../buttons/button";

// Define the props interface for the UpcomingSessionCard component
interface RecentbookingFromApi {
  name: string;
  category: string;
  location?: string; // Optional property
  time: string | number;
  date: number | string;
}

function UpcomingSessionCard({
  category,
  name,
  location,
  time,
  date,
}: RecentbookingFromApi) {
  return (
    <div>
      <div>
        {/* Container for the card */}
        <div className="h-[240px] w-full mb-2 grid grid-rows-4 grid-cols-3 max-w-[295px] lg:h-[328px] border border-neutral-300 rounded-lg p-2">
          {/* Card content */}

          {/* Content section */}
          <div className="w-full h-66.34px lg:h-[86px] flex flex-col justify-between lg:justify-around col-span-full row-span-1">
            {/* Category */}
            <p className="font-inter text-xs text-stone-500">{category}</p>
            {/* Name */}
            <p className="font-lg font-bold text-neutral-950 whitespace-nowrap font-Hanken md:text-lg">
              {name}
            </p>
            {/* Location (optional) */}
            <p className="font-inter text-xs text-stone-500">{location}</p>
          </div>
          {/* Date and Time */}
          <div className=" h-[60px] flex font-Inter justify-between gap-2 font-medium item-center mx-auto mt-2 md:mt-5 col-span-full row-start-2">
            <div className="flex flex-col items-center text-center pr-4 border-r border-neutral-200">
              {/* Date */}
              <p className="text-[36px] md:text-[47px]">{date}</p>
              {/* Month */}
              <p className="text-base md:text-lg mt-[-12px] font-Inter">Aug</p>
            </div>
            <div className="flex flex-col items-center text-center pl-2">
              {/* Time */}
              <p className="text-[36px] font-inter md:text-[47px]">
                {time}
              </p>{" "}
              {/* Minutes */}
              <p className="text-base md:text-lg mt-[-12px] font-Inter">mins</p>
            </div>
          </div>
          {/* View Details Button */}
          <Button
            variant="outline-primary"
            className="bg-[#FFFF] mx-auto hover:bg-black self-start hover:text-white text-[#000] text-[16px] font-[500]  border-[1.5px]  border-[#121212]  rounded-[6px] sm:rounded-[8px]  font-Hanken w-[80%] h-[40px] md:w-[200px] row-start-4 col-span-full"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSessionCard;
