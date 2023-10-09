/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import CancelledCard from "@/components/cards/mentee-session-cards/CancelledCard";
import HistoryCard from "@/components/cards/mentee-session-cards/HistoryCard";
import UpcomingCard from "@/components/cards/mentee-session-cards/UpcomingCard";

import { upcomingSessions } from "@/lib/constants/constants";

import { faceMoji1, faceMoji2, faceMoji3, sessionCalender } from "@/public";

import Calendarcomponent from "../mentee-booking/components/booking-session/Calender";
import Button from "./(ui)/VxrcelBtn";

type SessionsTabsProps = {
  id: number;
  title: string;
  tab: string;
};

const sessionsTabs: SessionsTabsProps[] = [
  {
    id: 1,
    title: "upcoming",
    tab: "upcoming",
  },
  {
    id: 2,
    title: "cancelled",
    tab: "cancelled",
  },
  {
    id: 3,
    title: "history",
    tab: "history",
  },
];
export default function AllSession() {
  const [activeTab, setActiveTab] = useState<string | null | undefined>("");
  const handleUpdateDate = (dates: Date[] | Date | undefined) => {
    // console.log(dates);
  };
  const router = useRouter();
  const params = useSearchParams().get("tab");

  useEffect(() => {
    setActiveTab(params || "upcoming");
  }, [params]);

  return (
    <section className="bg-[#f9fafc] h-full w-full flex-col flex  pt-10 lg:pt-12 lg:min-h-screen pb-16 lg:pb-0">
      <div className="flex items-center gap-10 !max-lg:w-full border-b-[1px] border-Neutra10 px-4 sm:px-6 lg:px-8 2xl:px-24 select-none">
        {sessionsTabs.map((session) => (
          <p
            className={` cursor-pointer capitalize text-[14px] sm:text-[18px] font-Hanken pb-2 border-b-[2px] border-[#f9fafc]  text-Neutra40 ${
              activeTab === session.tab
                ? "!border-Accent1 text-black font-medium"
                : ""
            }`}
            key={session.id}
            onClick={() => {
              router.push(`?path=sessions&tab=${session.tab}`, {
                scroll: false,
              });
              setActiveTab(session.tab);
            }}
          >
            {session.title}
          </p>
        ))}
      </div>
      <div className="flex flex-col xl:flex-row w-full justify-between mt-8 px-4 sm:px-6 lg:px-8 2xl:px-20 gap-8 xl:gap-2">
        <div className="flex flex-col w-full">
          <div className="mb-6">
            <p className="capitalize font-medium">{activeTab} sessions</p>
          </div>
          {activeTab === "upcoming" && (
            <div
              className={`flex w-full flex-col gap-6 overflow-y-auto  ${
                upcomingSessions.length > 3 ? "max-h-[760px] pb-4" : ""
              }`}
            >
              {upcomingSessions.map((session) => (
                <UpcomingCard key={session.id} {...session} />
              ))}
            </div>
          )}
          {activeTab === "history" && <HistoryCard />}
          {activeTab === "cancelled" && <CancelledCard />}
        </div>
        <div className="flex  2xl:w-full xl:flex-col xl:justify-center items-start lg:items-center justify-between max-lg:w-full gap-10 lg:gap-6 lg:mt-10 max-sm:flex-col ">
          <div className="w-full  lg:max-w-[330px] xl:max-w-[500px] lg:justify-start flex max-sm:justify-center cursor-pointer">
            <Calendarcomponent
              updateDate={handleUpdateDate}
              unAvailableDates={[new Date()]}
            />
          </div>
          <div className="flex flex-col w-full lg:max-w-[330px] xl:max-w-[500px] ">
            <p className="text-NeutalBase font-Inter font-medium text-[18px]">
              Ongoing Group Sessions
            </p>
            <div className="flex flex-col mt-4 gap-6 border border-Neutra10 rounded-xl w-full p-6 lg:p-8">
              <p className="font-Inter text-[16px] text-Neutra50 font-medium">
                Group session with Shola Mayowa
              </p>
              <div className="flex items-center gap-2 ">
                <div className="flex relative">
                  <Image src={faceMoji1} alt="face" height={40} width={40} />
                  <div className="flex relative -ml-5">
                    <Image src={faceMoji2} alt="face" height={40} width={40} />
                    <Image
                      src={faceMoji3}
                      alt="face"
                      height={40}
                      width={40}
                      className="ml-[-18px] "
                    />
                  </div>
                </div>
                <p className="font-Inter text-[13px] text-Neutra40 font-medium">
                  10 attendees
                </p>
              </div>
              <p className="font-Inter text-[14px] text-Neutra50 font-medium">
                Date: <span className="text-Accent1">Sept 2,2023</span>
              </p>
              <div>
                <Button
                  fullWidth
                  title="Join Session"
                  variant="secondary"
                  className="py-4 !bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
