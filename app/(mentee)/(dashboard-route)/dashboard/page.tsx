"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import { usePathname } from "next/navigation";

import NewMentee from "./noBookings";
import AfterBookings from "./afterBookings";
import RegularUser from "./regularUser";

const MenteeDashboard: NextPage = () => {
  const [activeScreen, setActiveScreen] = useState<
    "beforeBooking" | "hasBooking" | "regular"
  >("beforeBooking");

  const handleActiveScreen = () => {
    switch (activeScreen) {
      case "beforeBooking":
        return <NewMentee />;
      case "hasBooking":
        return <AfterBookings />;
      case "regular":
        return <RegularUser />;

      default:
        return <NewMentee />;
    }
  };

  return handleActiveScreen();
};

export default MenteeDashboard;
