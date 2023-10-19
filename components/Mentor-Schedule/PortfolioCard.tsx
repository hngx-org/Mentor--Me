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
}

function PortfolioCard() {
  const [dataFromServer, setDataFromServer] = useState<PortfolioReviewProps[]>(
    []
  );

  useEffect(() => {
    // Fetch data from the server or set the initial data here
    const fetchDataFromApi = async () => {
      try {
        const res = await fetch(
          "https://hngmentorme.onrender.com/api/free-session"
        );
        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
        }
        const data = await res.json();
        setDataFromServer(data);
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
