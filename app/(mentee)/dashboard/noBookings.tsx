import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import CheckedIcon from "@/svgs/CheckedIcon";
import Calendarcomponent from "../mentee-booking/components/booking-session/Calender";
import { menteeDashboardData } from "@/lib/menteeDashboard/data";
import MenteeCard from "./cards";

const NewMentee: FC = () => {
  const handleUpdateDate = (dates: Date[] | Date | undefined) => {
    // console.log(dates);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="p-4">
        <div className="my-4">
          <h1 className="text-2xl font-semibold leading-10">
            Welcome Henrietta! <span className="ml-4"> 👋</span>
          </h1>
          <p className="font-inter text-base font-medium text-gray-500">
            You have no upcoming sessions
          </p>
        </div>
        <div className=" md:flex w-full items-start justify-between mt-12">
          <div className="md:w-full  rounded-md border border-gray-200 p-7">
            <h3 className="text-base font-medium">
              Let’s start with the basics
            </h3>
            <div className="flex items-center justify-between mb-4">
              <p className="text-[12px]">
                Complete your profile set up by booking your first session
              </p>
              <p className="text-gray-400 text-[12px] ml-2">50% completed</p>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-sm mb-5 mt-2">
              <div className="w-1/2 h-full bg-[#008080]" />
            </div>
            <div className="flex items-center">
              <CheckedIcon width="16px" />
              <p className="ml-2 text-[16px]">Verify email</p>
            </div>
            <div className="flex items-center mt-2">
              <div className="w-[16px] h-[16px] rounded-full border" />
              <p className="ml-2 text-[16px] text-[#008080]">
                Book your first session -{" "}
                <span className="text-gray-400"> Connect with mentors </span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-[45%] md:ml-8 mt-6 md:mt-0">
            {/* <DummyCalender width="100%" height="auto" /> */}
            <Calendarcomponent
              updateDate={handleUpdateDate}
              unAvailableDates={[new Date()]}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-10">
            Top mentors suggestions for you
          </h2>
          <Link href="/dashboard/explore">
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
  );
};

export default NewMentee;
