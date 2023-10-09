import Image from "next/image";
import { FC } from "react";
import UpcomingCard from "./upcomingCard";

const RegularMentee: FC = () => (
  // <div className="w-full min-h-screen">
  <div className="p-[21px] sm:p-8 bg-white border space-y-16">
    <div className="space-y-4">
      <div className="flex items-center gap-x-2">
        <h1 className="text-3xl font-semibold text-[#2A2A2A]">
          Welcome Henrietta!
        </h1>
        <Image alt="user" src="/assets/wave.png" width={30} height={30} />
      </div>

      <p className="text-lg font-semibold text-[#808080]">
        You have 2 upcoming sessions
      </p>
    </div>

    <div className=" space-y-4">
      <h3 className="text-2xl font-semibold">Upcoming sessions</h3>
      <div className="flex">
        <UpcomingCard />
        <Image
          alt="user"
          className="calender"
          src="/assets/Calendar.png"
          width={349}
          height={357}
        />
      </div>
    </div>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm sm:text-2xl font-semibold">
          Top mentors suggestion for you
        </h3>
        <p className="text-xs sm:text-lg font-medium">View All</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-[48px] justify-between">
        <Image
          alt="user"
          className="w-full"
          src="/assets/mentor1.png"
          width={298}
          height={371}
        />
        <Image
          alt="user"
          className="w-full"
          src="/assets/mentor2.png"
          width={298}
          height={371}
        />
        <Image
          alt="user"
          className="w-full"
          src="/assets/mentor3.png"
          width={298}
          height={371}
        />
      </div>
    </div>
  </div>
  // </div>
);

export default RegularMentee;
