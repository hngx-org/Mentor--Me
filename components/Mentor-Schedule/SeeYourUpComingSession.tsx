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
  const [feedFromApi, setFeedFromApi] = useState<RecentbookingFromApi[]>([]);

  useEffect(() => {
    // Fetch data from the server or set the initial data here
    const initialData: RecentbookingFromApi[] = [
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
      // domie data
    ];
    const sliceTwo = initialData.slice(0, 2); // to make sure it is only two cards that render
    setFeedFromApi(sliceTwo);
  }, []);

  return (
    <div>
      <div className="flex justify-start gap-8 items-center">
        {feedFromApi.map((feed) => (
          <UpcomingSessionCard key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
}

export default SeeYourUpComingSession;
