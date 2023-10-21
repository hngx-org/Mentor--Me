/* eslint-disable jsx-a11y/aria-role */

"use client";

import React, { useState } from "react";
import { NextPage } from "next";
// import { usePathname } from "next/navigation";

import NewMentee from "./noBookings";
import AfterBookings from "./afterBookings";
import RegularUser from "./regularUser";
import useAuth from "@/context/useAuth";
import ProtectedRoute from "@/context/ProtectedRoute";

const MenteeDashboard: NextPage = () => {
  const [activeScreen, setActiveScreen] = useState<
    "beforeBooking" | "hasBooking" | "regular"
  >("beforeBooking");

  const { data } = useAuth("Mentee");
  const username = data?.userDetails?.fullName;

  const handleActiveScreen = () => {
    switch (activeScreen) {
      case "beforeBooking":
        return (
          <ProtectedRoute>
            {" "}
            <NewMentee username={username} />
          </ProtectedRoute>
        );
      case "hasBooking":
        return (
          <ProtectedRoute>
            <AfterBookings username={username} />
          </ProtectedRoute>
        );
      case "regular":
        return (
          <ProtectedRoute>
            <RegularUser />
          </ProtectedRoute>
        );

      default:
        return <NewMentee username={username} />;
    }
  };

  return handleActiveScreen();
};

export default MenteeDashboard;
