"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioReview from "./PortfolioReview";
import AddNewSession from "./AddNewSession";
import LoadingSpinner from "../loaders/LoadingSpinner";
import { RecentbookingFromApi } from "./SeeYourUpComingSession";

function PortfolioCard({
  dataFromServer,
  loading,
}: {
  dataFromServer: RecentbookingFromApi[];
  loading: boolean;
}) {
  return (
    <div>
      {/* for wider screens, two data is displayed */}
      <div className="hidden lg:flex  gap-6">
        {loading ? (
          <div className="w-[295px] flex flex-col justify-around h-[235px] items-center">
            <LoadingSpinner />
          </div>
        ) : (
          dataFromServer &&
          dataFromServer
            .slice(0, 2)
            .map((data) => <PortfolioReview key={data._id} {...data} />)
        )}
      </div>
      {/* for smaller screens, only one is displayed */}
      <div className=" lg:hidden">
        {loading ? (
          <div className="w-[295px] flex flex-col justify-around h-[235px] items-center">
            <LoadingSpinner />
          </div>
        ) : (
          dataFromServer &&
          dataFromServer
            .slice(0, 1)
            .map((data) => <PortfolioReview key={data._id} {...data} />)
        )}
      </div>
    </div>
  );
}

export default PortfolioCard;
