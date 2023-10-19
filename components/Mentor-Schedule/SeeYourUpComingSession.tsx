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
  duration: number;
  attendeesLimit: number;
  tag: string;
  sessionUrl: string;
  occurence: string;
  numberOfSession?: number;
}
function SeeYourUpComingSession() {
  const [feedFromApi, setFeedFromApi] = useState<RecentbookingFromApi[] | null>(
    null
  );

  useEffect(() => {
    // Fetch data from the API
    const fetchDataFromApi = async () => {
      try {
        const [
          freeSessionResponse,
          oneOffSessionResponse,
          recurringSessionResponse,
        ] = await Promise.all([
          fetch("https://hngmentorme.onrender.com/api/free-session"),
          fetch("https://hngmentorme.onrender.com/api/one-off-session"),
          fetch("https://hngmentorme.onrender.com/api/recurring-session"),
        ]);

        if (!freeSessionResponse.ok) {
          throw new Error(
            `API request failed with status ${freeSessionResponse.status}`
          );
        }
        if (!oneOffSessionResponse.ok) {
          throw new Error(
            `API request failed with status ${oneOffSessionResponse.status}`
          );
        }
        if (!recurringSessionResponse.ok) {
          throw new Error(
            `API request failed with status ${recurringSessionResponse.status}`
          );
        }

        const [freeSessionData, oneOffSessionData, recurringSessionData] =
          await Promise.all([
            freeSessionResponse.json(),
            oneOffSessionResponse.json(),
            recurringSessionResponse.json(),
          ]);

        // Merge the data from different endpoints into one array
        const mergedData = [
          ...freeSessionData,
          ...oneOffSessionData,
          ...recurringSessionData,
        ];
        setFeedFromApi(mergedData);
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
  const sliceThree = feedFromApi.slice(1, 12);

  return (
    <div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {sliceThree.map((feed) => (
          <UpcomingSessionCard key={feed._id} {...feed} />
        ))}
      </div>
    </div>
  );
}

export default SeeYourUpComingSession;
