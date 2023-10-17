"use client";

import React, { useEffect, useState } from "react";
import PreviousSessionsCard from "./PreviousSessionsCard";

interface CardApiReturn {
  sessionName: string;
  sessionType?: string;
  id?: number;
  relevantTopics?: string;
  time?: string | number;
  date: number | string;
  description?: string;
  createdAt: string;
}

function PreviousSessionsCall() {
  const [data, setData] = useState<CardApiReturn[] | null>(null);

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
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  if (data === null || data.length === 0) {
    return (
      <h2 className="text-xl font-semibold leading-10">No Upcoming Session</h2>
    );
  }
  const SliceThreeFromData = data.slice(0, 3); // to make sure it is only three cards that render
  const SliceTwoFromData = data.slice(0, 2); // the cards for mobile, its slice only two

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 lg:hidden mt-5">
        {SliceTwoFromData.map((info) => (
          <PreviousSessionsCard key={info.id} {...info} />
        ))}
      </div>

      <div className="hidden lg:grid grid-cols-3 gap-4 mt-7 ">
        {SliceThreeFromData.map((info) => (
          <PreviousSessionsCard key={info.id} {...info} />
        ))}
      </div>
    </div>
  );
}
export default PreviousSessionsCall;
