"use client";

import { useState } from "react";
import { NextPage } from "next";

import { menteeDashboardData } from "@/lib/menteeDashboard/data";
import MenteeCard from "./cards";

const RegularUser: NextPage = () => (
  <div className="w-full min-h-screen">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 pb-6">
      {menteeDashboardData.map((data) => (
        <MenteeCard {...data} />
      ))}
    </div>
  </div>
);

export default RegularUser;
