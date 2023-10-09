"use client";

import React, { useState, useEffect } from "react";
import RecentBookingCard from "./RecentBookingCard";

interface RecentbookingFromApi {
  name: string;
  category: string;
  id?: number;
  location?: string;
  time: string | number;
  date: number | string;
}

function RecentBooking() {
  const [feedFromApi, setFeedFromApi] = useState<RecentbookingFromApi[]>([]);

  useEffect(() => {
    // Fetch data from the server or set the initial data here
    const initialData: RecentbookingFromApi[] = [
      {
        time: "90",
        category: "Design Virtual",
        id: 1,
        location: "Lagos Nigeria",
        date: "21",
        name: "Folalolu Goodluck",
      },
      // //domie data
    ];

    setFeedFromApi(initialData);
  }, []);

  return (
    <div>
      {feedFromApi.map((booking) => (
        <RecentBookingCard key={booking.id} {...booking} />
      ))}
    </div>
  );
}

export default RecentBooking;
