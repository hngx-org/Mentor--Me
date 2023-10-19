"use client";

import React, { useState, useEffect } from "react";
import PortfolioReview from "./PortfolioReview";
import AddNewSession from "./AddNewSession";

interface PortfolioReviewProps {
  _id?: string;
  sessionName: string;
  description: string;
  attendeesLimit: number;
  time: string;
  date: string;
  relevantTopics: string;
  sessionUrl: string;
  tag: string;
  duration: number;
  occurence: string;
}

function PortfolioCard() {
  const [dataFromServer, setDataFromServer] = useState<PortfolioReviewProps[]>(
    []
  );

  useEffect(() => {
    // Fetch data from the server or set the initial data here
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
        setDataFromServer(mergedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  // Use slice to get the first two elements from dataFromServer
  const slicedTwoData = dataFromServer.slice(0, 2);
  const sliceOneData = dataFromServer.slice(0, 1);

  return (
    <div>
      {/* for wider screens, two data is displayed */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-4">
        {slicedTwoData.map((data) => (
          <PortfolioReview key={data._id} {...data} />
        ))}{" "}
        <AddNewSession />
      </div>
      {/* for smaller screens, only one is displayed */}
      <div className=" lg:hidden">
        {sliceOneData.map((data) => (
          <PortfolioReview key={data._id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioCard;
