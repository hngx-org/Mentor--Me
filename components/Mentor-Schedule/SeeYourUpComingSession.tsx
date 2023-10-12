"use client";

import React, { useState, useEffect } from "react";
import UpcomingSessionCard from "./UpcomingSessionCard";

interface RecentbookingFromApi {
  name: string;
  category: string;
  id?: number;
  location?: string;
  time: string | number;
  date: number | string;
}
function SeeYourUpComingSession() {
  const [feedFromApi, setFeedFromApi] = useState<RecentbookingFromApi[]>([
    {
      time: "90",
      category: "Design Virtual",
      id: 1,
      location: "Lagos Nigeria",
      date: "21",
      name: "Folalolu Goodluck",
    },
    {
      time: "90",
      category: "Design Virtual",
      id: 2,
      location: "Lagos Nigeria",
      date: "21",
      name: "Folalolu Goodluck",
    },
    {
      time: "90",
      category: "Design Virtual",
      id: 2,
      location: "Lagos Nigeria",
      date: "21",
      name: "Folalolu Goodluck",
    },
    // domie data
  ]);
  const sliceTwo = feedFromApi.slice(0, 2); // to make sure it is only two cards that render
  const sliceThree = feedFromApi.slice(0, 3);

  return (
    <div>
      <div className="flex lg:hidden w-full justify-center md:justify-start space-x-2 flex-wrap gap-4 box-border  items-center ">
        {sliceTwo.map((feed) => (
          <UpcomingSessionCard key={feed.id} {...feed} />
        ))}
      </div>
      <div className="hidden lg:flex flex-wrap gap-7 w-full md:justify-start items-center ">
        {sliceThree.map((feed) => (
          <UpcomingSessionCard key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
}

export default SeeYourUpComingSession;
