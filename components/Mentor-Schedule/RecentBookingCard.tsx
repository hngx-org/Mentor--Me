"use client";

import React from "react";
import { Button } from "../buttons/button";

interface RecentbookingFromApi {
  name: string;
  category: string;
  location?: string;
  time: string | number;
  date: number | string;
}

function RecentBookingCard({
  category,
  name,
  location,
  time,
  date,
}: RecentbookingFromApi) {
  return (
    <div>
      <div className="hidden">
        <h4 className="text-lg font-bold font-Hanken mb-8 mt-3">
          Recent Bookings
        </h4>

        {/* card begins here */}
        <div className="w-[182px] h-[240px] flex flex-col jutify-center align-center md:w-[280px] md:h-[328px] border border-neutral-300 rounded-lg">
          <div className="w-[160px] md:w-[280px] p-3 pt-4 mx-auto md:pt-8">
            <div className="w-full h-66.34px md:h-[86px] flex flex-col justify-between">
              <p className="font-inter text-sm text-stone-500">{category}</p>
              <p className="font-lg font-bold text-neutral-950 font-Hanken md:text-lg">
                {name}
              </p>
              <p className="font-inter text-sm text-stone-500">{location}</p>
            </div>
            <div className="w-[100px] h-[60px] flex justify-center gap-2 item-center mx-auto mt-2 md:mt-5">
              <div className="flex flex-col items-center">
                <p className="text-[36px] md:text-[47px] font-inter border-r-2 border-nuetral-500px pr-1">
                  {date}
                </p>
                <p className="text-base md:text-lg mt-[-12px] font-Inter">
                  Aug
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[36px] md:text-[47px]">{time}</p>{" "}
                <p className="text-base md:text-lg mt-[-12px] font-Inter">
                  mins
                </p>
              </div>
            </div>
            <Button
              variant="outline-primary"
              className="bg-[#FFFF] ml-[-6px] min-w-[152px] md:min-w-[200px] md:ml-[25px] hover:bg-black hover:text-white mt-5 md:mt-16 text-[#000] text-[16px] font-[500]  border-[1.5px]  border-[#121212]  rounded-[6px] sm:rounded-[8px]  font-Hanken w-[152px] h-[40px] md:w-[200px]"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentBookingCard;
