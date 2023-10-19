/* eslint-disable jsx-a11y/aria-role */

"use client";

import React, { useState } from "react";
import { NextPage } from "next";
// import { usePathname } from "next/navigation";

import NewMentee from "./noBookings";
import AfterBookings from "./afterBookings";
import RegularUser from "./regularUser";
// import ProtectedRoute from "@/context/ProtectedRoute";
import useAuth from "@/context/useAuth";

const MenteeDashboard: NextPage = () => {
  const [activeScreen, setActiveScreen] = useState<
    "beforeBooking" | "hasBooking" | "regular"
  >("beforeBooking");

  const { data } = useAuth();
  const username = data?.userDetails?.fullName;

  const handleActiveScreen = () => {
    switch (activeScreen) {
      case "beforeBooking":
        return <NewMentee username={username} />;
      case "hasBooking":
        return <AfterBookings username={username} />;
      case "regular":
        return (
          // <ProtectedRoute role="mentee">
          <RegularUser />
          // </ProtectedRoute>
        );

      default:
        return <NewMentee username={username} />;
    }
  };

  return handleActiveScreen();
};

export default MenteeDashboard;
