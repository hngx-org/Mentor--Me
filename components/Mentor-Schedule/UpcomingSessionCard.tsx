import React, { useState } from "react";
import { Button } from "../buttons/button";
import Modal from "./ModalSchedules";
import SessionModalContent from "./SessionsModalContent";

// Define the props interface for the UpcomingSessionCard component
interface RecentbookingFromApi {
  sessionName: string;
  relevantTopics: string;
  sessionType?: string;
  time: string | number;
  date: number | string;
  description: string;
  occurence: string;
  tag: string;
  duration: number;
  attendeesLimit: number;
  sessionUrl: string;
  sessionState: string;
}

function UpcomingSessionCard({
  relevantTopics,
  sessionName,
  sessionType,
  duration,
  time,
  date,
  description,
  attendeesLimit,
  occurence,
  tag,
  sessionUrl,
  sessionState,
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
        <div className="w-[300px]   h-[400px] mb-2  border border-neutral-300 rounded-lg px-3 py-6 flex flex-col justify-between space-y-6 shadow-sm ">
          <div className="space-y-3">
            <div className="px-4 border border-Neutra40 text-center rounded-md w-fit flex justify-center">
              {" "}
              <p className="text-medium font-medium">{tag}</p>
            </div>

            {/* Category */}
            <div className="flex gap-2">
              <p className="font-inter text-sm text-stone-500">
                {relevantTopics}
              </p>
              <p className="font-inter text-sm text-stone-500">{sessionType}</p>
            </div>

            {/* Name */}
            <p className="font-lg font-bold text-neutral-950 whitespace-nowrap font-Hanken md:text-lg">
              {sessionName}
            </p>

            {/* Session Type (optional) */}
            <p className="font-inter text-sm text-stone-500">{sessionType}</p>
          </div>

          {/* Date and Time */}
          <div className=" flex font-Inter justify-center   font-medium items-center">
            <div className="flex flex-col items-center text-center pr-4  border-r border-neutral-200">
              {/* Date */}
              <p className="text-[36px] md:text-[47px]">{day}</p>
              {/* Month */}
              <p className="text-base md:text-lg font-Inter">{month}</p>
            </div>
            <div className="flex flex-col pl-4 items-center text-center">
              {/* Time */}
              <p className="text-[36px] font-inter md:text-[47px]">
                {duration || occurence}
              </p>
              {/* Minutes */}
              {duration && (
                <p className="text-base md:text-lg font-Inter">mins</p>
              )}
            </div>
          </div>

          {/* View Details Button */}
          <Button
            onClick={openModal}
            variant="outline-primary"
            className="bg-[#FFFF] mx-auto hover:bg-black self-start hover:text-white text-[#000] text-[16px] hover:transform hover:scale-x-125 ease-in-out duration-300 font-[500] border-[1.5px] border-[#121212] rounded-[6px] sm:rounded-[8px] font-Hanken !w-2/3"
          >
            View Details
          </Button>
        </div>

        {isModalOpen && (
          <Modal closeModal={closeModal}>
            {" "}
            <SessionModalContent
              sessionName={sessionName}
              relevantTopics={relevantTopics}
              sessionType={sessionType}
              date={date}
              attendeesLimit={attendeesLimit}
              description={description}
              tag={tag}
              occurence={occurence}
              sessionUrl={sessionUrl}
              sessionState={sessionState}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default UpcomingSessionCard;
