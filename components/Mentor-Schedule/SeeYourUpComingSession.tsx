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
      date: "25",
      name: "Folalolu Goodluck",
    },
    {
      time: "90",
      category: "Design Virtual",
      id: 2,
      location: "Lagos Nigeria",
      date: "22",
      name: "Folalolu Goodluck",
    },
    {
      time: "90",
      category: "Design Virtual",
      id: 2,
      location: "Lagos Nigeria",
      date: "30",
      name: "Folalolu Goodluck",
    },
    // domie data
  ]);
  const sliceTwo = feedFromApi.slice(0, 2); // to make sure it is only two cards that render for smaller screens
  const sliceThree = feedFromApi.slice(0, 3); // render three for larger screens

  return (
    <div>
      <div className="lg:hidden w-full grid grid-cols-2 gap-3 box-border">
        {sliceTwo.map((feed) => (
          <UpcomingSessionCard key={feed.id} {...feed} />
        ))}
      </div>
      <div className="hidden lg:grid lg:grid-cols-3 gap-4">
        {sliceThree.map((feed) => (
          <UpcomingSessionCard key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
}

export default SeeYourUpComingSession;
