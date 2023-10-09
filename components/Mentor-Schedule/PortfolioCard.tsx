"use client";

import React, { useState, useEffect } from "react";
import PortfolioReview from "./PortfolioReview";

interface PortfolioContent {
  time: number;
  mode: boolean;
  id: number;
  mentee?: string;
}

function PortfolioCard() {
  const [dataFromServer, setDataFromServer] = useState<PortfolioContent[]>([]);

  useEffect(() => {
    // Fetch data from the server or set the initial data here
    const initialData: PortfolioContent[] = [
      {
        time: 18,
        mode: true,
        id: 1,
      },
      {
        time: 13,
        mode: false,
        id: 2,
      },
      // Add more data objects here
    ];

    setDataFromServer(initialData);
  }, []); // The empty dependency array ensures this runs only once on component mount

  // Use slice to get the first two elements from dataFromServer
  const slicedTwoData = dataFromServer.slice(0, 2);
  const sliceOneData = dataFromServer.slice(0, 1);

  return (
    <div>
      {/* for wider screens, two data is displayed */}
      <div className="hidden lg:flex flex-colspace-around">
        {slicedTwoData.map((data) => (
          <PortfolioReview key={data.id} {...data} />
        ))}
      </div>
      {/* for smaller screens, only one is displayed */}
      <div className=" lg:hidden">
        {sliceOneData.map((data) => (
          <PortfolioReview key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioCard;
