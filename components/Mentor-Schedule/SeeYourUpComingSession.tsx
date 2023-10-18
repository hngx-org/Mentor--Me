"use client";

import React, { useState, useEffect } from "react";
import UpcomingSessionCard from "./UpcomingSessionCard";

interface RecentbookingFromApi {
  sessionName: string;
  sessionType: string;
  _id?: string;
  relevantTopics: string;
  time: string | number;
  date: number | string;
  description: string;
}
function SeeYourUpComingSession() {
  const [feedFromApi, setFeedFromApi] = useState<RecentbookingFromApi[] | null>(
    null
  );

  useEffect(() => {
    // Fetch data from the API
    const fetchDataFromApi = async () => {
      try {
        const res = await fetch(
          "https://hngmentorme.onrender.com/api/free-session"
        );
        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
        }
        const data = await res.json();
        setFeedFromApi(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  if (feedFromApi === null || feedFromApi.length === 0) {
    return (
      <h2 className="text-xl font-semibold leading-10">No Upcoming Session</h2>
    );
  }

  const sliceTwo = feedFromApi.slice(1, 3); // to make sure it is only two cards that render for smaller screens
  const sliceThree = feedFromApi.slice(1, 4); // render three for larger screens

  return (
    <div>
      {/* <div className="lg:hidden w-full grid grid-cols-2 gap-3 box-border">
        {sliceTwo.map((feed) => (
          <UpcomingSessionCard key={feed.id} {...feed} />
        ))}
      </div> */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {feedFromApi.map((feed) => (
          <UpcomingSessionCard key={feed._id} {...feed} />
        ))}
      </div>
    </div>
  );
}

export default SeeYourUpComingSession;
