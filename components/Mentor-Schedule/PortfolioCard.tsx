"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
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
  createdAt: string | number;
}

function PortfolioCard() {
  const [dataFromServer, setDataFromServer] = useState<PortfolioReviewProps[]>(
    []
  );

  const fetchDataFromApi = async (type: string) => {
    try {
      const res = await axios.get(
        `https://hngmentorme.onrender.com/api/${type}`
      );
      return res.data;
    } catch (error) {
      console.error(error);
      throw error; // Add this line to throw the error
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
      setDataFromServer(sortedData);
    };
    fetchData();
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
