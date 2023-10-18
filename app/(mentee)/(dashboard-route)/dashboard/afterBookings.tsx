import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { menteeDashboardData } from "@/lib/menteeDashboard/data";
import UpcomingCard from "./upcomingCard";
import MenteeCard from "./cards";
import Calendarcomponent from "../mentee-booking/components/booking-session/Calender";
import useAuth from "@/context/useAuth";

const AfterBookings: FC = () => (
  <div className="w-full min-h-screen">
    <div className="p-[21px] sm:p-8 bg-white border space-y-16">
      <div className="my-4">
        <h1 className="text-2xl font-semibold leading-10">
          Welcome Henrietta! <span className="ml-4"> 👋</span>
        </h1>
        <p className="font-inter text-base font-medium text-gray-500">
          You have 2 upcoming sessions
        </p>
      </div>

      <div className=" space-y-4">
        <h3 className="text-2xl font-semibold">Upcoming sessions</h3>
        <div className=" md:flex w-full items-start justify-between mt-12">
          <UpcomingCard />

          <div className="w-full md:w-[45%] md:ml-8 mt-6 md:mt-0">
            {/* <DummyCalender width="100%" height="auto" /> */}
            <Calendarcomponent />
          </div>
        </div>
      </div>

      <div className="mt-10 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-10">
            Top mentors suggestions for you
          </h2>
          <Link href="/dashboard/explore?path=Explore">
            <p className="cursor-pointer text-[#008080] pl-6">View All</p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 pb-6">
        {menteeDashboardData.map((data) => (
          <MenteeCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  </div>
);

export default AfterBookings;
