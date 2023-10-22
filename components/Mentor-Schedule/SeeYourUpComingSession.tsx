"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import UpcomingSessionCard from "./UpcomingSessionCard";
import LoadingSpinner from "../loaders/LoadingSpinner";

export interface RecentbookingFromApi {
  sessionName: string;
  sessionState: string;
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
function SeeYourUpComingSession({
  feedFromApi,
  loading,
}: {
  feedFromApi: RecentbookingFromApi[];
  loading: boolean;
}) {
  return (
    <div>
      {loading ? (
        <div className="w-fit mx-auto mt-16">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-evenly">
          {feedFromApi &&
            feedFromApi.map((feed) => (
              <UpcomingSessionCard key={feed._id} {...feed} />
            ))}
        </div>
      )}
    </div>
  );
}

export default SeeYourUpComingSession;
