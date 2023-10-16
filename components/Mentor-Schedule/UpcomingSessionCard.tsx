import React, { useState } from "react";
import { Button } from "../buttons/button";
import Modal from "./ScheduleModal";

// Define the props interface for the UpcomingSessionCard component
interface RecentbookingFromApi {
  sessionName: string;
  relevantTopics: string;
  sessionType?: string; // Optional property
  time: string | number;
  date: number | string;
  description: string;
}

function UpcomingSessionCard({
  relevantTopics,
  sessionName,
  sessionType,
  time,
  date,
  description,
}: RecentbookingFromApi) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = dateObject.toLocaleString("default", { month: "short" });
  return (
    <div>
      <div>
        {/* Container for the card */}
        <div className="h-[240px] w-full mb-2 grid grid-rows-4 grid-cols-3 max-w-[295px] lg:h-[328px] border border-neutral-300 rounded-lg p-2">
          {/* Card content */}

          {/* Content section */}
          <div className="w-full h-66.34px lg:h-[86px] flex flex-col justify-between lg:justify-around col-span-full row-span-1">
            {/* Category */}
            <div className="flex gap-2">
              {" "}
              <p className="font-inter text-xs text-stone-500">
                {relevantTopics}
              </p>
              <p className="font-inter text-xs text-stone-500">{sessionType}</p>
            </div>
            {/* Name */}
            <p className="font-lg font-bold text-neutral-950 whitespace-nowrap font-Hanken md:text-lg">
              {sessionName}
            </p>
            {/* sessionType (optional) */}
            <p className="font-inter text-xs text-stone-500">{description}</p>
          </div>
          {/* Date and Time */}
          <div className=" h-[60px] flex font-Inter justify-between gap-2 font-medium item-center mx-auto mt-2 md:mt-5 col-span-full row-start-2">
            <div className="flex flex-col items-center text-center pr-4 border-r border-neutral-200">
              {/* Date */}
              <p className="text-[36px] md:text-[47px]">{day}</p>
              {/* Month */}
              <p className="text-base md:text-lg mt-[-12px] font-Inter">
                {month}
              </p>
            </div>
            <div className="flex flex-col items-center text-center pl-2">
              {/* Time */}
              <p className="text-[36px] font-inter md:text-[47px]">
                {time}
              </p>{" "}
              {/* Minutes */}
              <p className="text-base md:text-lg mt-[-12px] font-Inter">mins</p>
            </div>
          </div>
          {/* View Details Button */}
          <Button
            onClick={openModal}
            variant="outline-primary"
            className="bg-[#FFFF] mx-auto hover:bg-black self-start hover:text-white text-[#000] text-[16px] font-[500]  border-[1.5px]  border-[#121212]  rounded-[6px] sm:rounded-[8px]  font-Hanken w-[80%] h-[40px] xl:w-[80%] lg:w-[80%] row-start-4 col-span-full"
          >
            View Details
          </Button>
        </div>
        {isModalOpen && (
          <Modal
            relevantTopics={relevantTopics}
            sessionName={sessionName}
            sessionType={sessionType}
            time={time}
            date={date}
            status={`Pending`}
            description={description}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default UpcomingSessionCard;
