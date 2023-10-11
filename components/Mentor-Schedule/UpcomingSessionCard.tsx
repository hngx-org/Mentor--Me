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
        <div className="h-[240px] basis-1/2 md:basis-1/4 w-full mb-2 grow flex flex-col jutify-center align-center md:h-[328px] p-4 border border-neutral-300 rounded-lg">
          {/* Card content */}
          <div className=" p-3 pt-4 md:pt-2">
            {/* Content section */}
            <div className="w-full h-66.34px md:h-[86px] flex flex-col justify-between">
              {/* Category */}
              <p className="font-inter text-sm text-stone-500">{category}</p>
              {/* Name */}
              <p className="font-lg font-bold text-neutral-950 font-Hanken md:text-lg">
                {name}
              </p>
              {/* Location (optional) */}
              <p className="font-inter text-sm text-stone-500">{location}</p>
            </div>
            {/* Date and Time */}
            <div className=" h-[60px] flex justify-center gap-2 item-center mx-auto mt-2 md:mt-5">
              <div className="flex flex-col items-center">
                {/* Date */}
                <p className="text-[36px] md:text-[47px] border-r-2 border-nuetral-500px pr-1">
                  {date}
                </p>
                {/* Month */}
                <p className="text-base md:text-lg mt-[-12px] font-Inter">
                  Aug
                </p>
              </div>
              <div className="flex flex-col items-center">
                {/* Time */}
                <p className="text-[36px] font-inter md:text-[47px]">
                  {time}
                </p>{" "}
                {/* Minutes */}
                <p className="text-base md:text-lg mt-[-12px] font-Inter">
                  mins
                </p>
              </div>
            </div>
            {/* View Details Button */}
            <Button
              variant="outline-primary"
              className="bg-[#FFFF] hover:bg-black hover:text-white mt-5 md:mt-16 text-[#000] text-[16px] font-[500]  border-[1.5px]  border-[#121212]  rounded-[6px] sm:rounded-[8px]  font-Hanken w-[152px] h-[40px] md:w-[200px]"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSessionCard;
