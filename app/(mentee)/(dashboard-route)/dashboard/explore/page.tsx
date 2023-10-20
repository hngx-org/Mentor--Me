"use client";

import { useState } from "react";
import { NextPage } from "next";

import { menteeDashboardData } from "@/lib/menteeDashboard/data";
import MenteeCard from "../cards";
import ProtectedRoute from "@/context/ProtectedRoute";

const ExploreMentee: NextPage = () => {
  const [activeTab, setActiveTab] = useState<
    "All" | "Design" | "Marketing" | "Business" | "Career"
  >("All");

  return (
    <ProtectedRoute>
      <div className="w-full min-h-screen">
        <ul className="p-4 flex items-center">
          <li
            className={
              activeTab === "All"
                ? "border-[#008080] border-b-[3px] mr-8 cursor-pointer hover:opacity-30"
                : "mr-8 cursor-pointer hover:opacity-30 border-b-[3px] border-transparent"
            }
            aria-hidden
            onClick={() => setActiveTab("All")}
          >
            All
          </li>
          <li
            className={
              activeTab === "Design"
                ? "border-[#008080] border-b-[3px] mr-8 cursor-pointer hover:opacity-30"
                : "mr-8 cursor-pointer hover:opacity-30 border-b-[3px] border-transparent"
            }
            aria-hidden
            onClick={() => setActiveTab("Design")}
          >
            Design
          </li>
          <li
            className={
              activeTab === "Marketing"
                ? "border-[#008080] mr-8 border-b-[3px] cursor-pointer hover:opacity-30"
                : "mr-8 cursor-pointer hover:opacity-30 border-b-[3px] border-transparent"
            }
            aria-hidden
            onClick={() => setActiveTab("Marketing")}
          >
            Marketing
          </li>
          <li
            className={
              activeTab === "Business"
                ? "border-[#008080] mr-8 border-b-[3px] cursor-pointer hover:opacity-30"
                : "mr-8 cursor-pointer hover:opacity-30 border-b-[3px] border-transparent"
            }
            aria-hidden
            onClick={() => setActiveTab("Business")}
          >
            Business
          </li>
          <li
            className={
              activeTab === "Career"
                ? "border-[#008080] mr-8 border-b-[3px] cursor-pointer hover:opacity-30"
                : "mr-8 cursor-pointer hover:opacity-30 border-b-[3px] border-transparent"
            }
            aria-hidden
            onClick={() => setActiveTab("Career")}
          >
            Career
          </li>
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 pb-24 md:pb-6">
          {menteeDashboardData.map((data) => (
            <MenteeCard {...data} />
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ExploreMentee;
