/* eslint-disable jsx-a11y/aria-role */

"use client";

import React, { useState } from "react";
import { NextPage } from "next";
// import { usePathname } from "next/navigation";

import NewMentee from "./noBookings";
import AfterBookings from "./afterBookings";
import RegularUser from "./regularUser";
import ProtectedRoute from "@/context/ProtectedRoute";

const MenteeDashboard: NextPage = () => {
  const [activeScreen, setActiveScreen] = useState<
    "beforeBooking" | "hasBooking" | "regular"
  >("beforeBooking");

  const handleActiveScreen = () => {
    switch (activeScreen) {
      case "beforeBooking":
        return (
          // <ProtectedRoute role="mentee">
          <NewMentee />
          // </ProtectedRoute>
        );
      case "hasBooking":
        return (
          // <ProtectedRoute role="mentee">
          <AfterBookings />
          // </ProtectedRoute>
        );
      case "regular":
        return (
          // <ProtectedRoute role="mentee">
          <RegularUser />
          // </ProtectedRoute>
        );

      default:
        return <NewMentee />;
    }
  };

  return handleActiveScreen();
};

export default MenteeDashboard;
