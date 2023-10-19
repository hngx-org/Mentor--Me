"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import UpcomingSessionCard from "./UpcomingSessionCard";

interface RecentbookingFromApi {
  sessionName: string;
  sessionType: string;
  _id?: string;
  relevantTopics: string;
  time: string | number;
  date: number | string;
  createdAt: number | string;
  updatedAt: Date;
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

  const fetchDataFromApi = async (type: string) => {
    try {
      const res = await axios.get(
        `https://hngmentorme.onrender.com/api/${type}`
      );
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      const freeSessionData = await fetchDataFromApi("free-session");
      const oneOffSessionData = await fetchDataFromApi("one-off-session");
      const recurringSessionData = await fetchDataFromApi("recurring-session");

      // Merge the data from different endpoints into one array
      const mergedData = [
        ...freeSessionData,
        ...oneOffSessionData,
        ...recurringSessionData,
      ];
      // Add creationDate field to each form data when fetching
      console.log(mergedData, "merged");
      // Sort the merged data by updatedAt in descending order
      const sortedData = mergedData.sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
      console.log(sortedData, "all");
      setFeedFromApi(sortedData);
    };
    fetchData();
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
        {feedFromApi.map((feed) => (
          <UpcomingSessionCard key={feed._id} {...feed} />
        ))}
      </div>
    </div>
  );
}

export default SeeYourUpComingSession;
