import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../buttons/button";
import { imageFromServer } from "@/public";
import Modal from "./ScheduleModal";

interface CardApiReturn {
  sessionName: string;
  sessionType?: string;
  id?: number;
  relevantTopics?: string;
  time?: string | number;
  date?: number | string;
  description?: string;
  createdAt: string;
}

function PreviousSessionsCard({
  sessionName,
  createdAt,
  description,
  time,
  relevantTopics,
}: CardApiReturn) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const dateObject = new Date(createdAt);
  const formattedTime = dateObject.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div>
      <div className=" h-[270px] rounded-xl lg:h-[328px] border-2 max-w-[295px] border-neutral-300 mb-5 grid grid-rows-6 grid-cols-3">
        <div className="max-h-[170px] min-h-[125px] lg:h-[150px] overflow-hidden col-span-full row-start-1">
          <Image
            alt="Previous Sessions Photo"
            src={imageFromServer}
            width={800}
            height={300}
            className="object-contain"
          />
        </div>
        <div className=" text-neutral-600 text-xs md:h-[66px] text-left p-2 md:p-4 col-span-full self-center row-start-4">
          <h5 className="font-Hanken font-bold text-base md:text-lg text-black mt-[4px]">
            {sessionName}
          </h5>
          <p className="mb-1">
            <span className="font-bold">Mentee name: </span>
            {sessionName}
          </p>
          <div className="flex justify-center flex-col md:items-center md:flex-row md:justify-start md:gap-4">
            <p>Started: {formattedTime}</p>
            <p>Ended:{formattedTime}</p>
          </div>
        </div>
        <div className="col-span-full self-start row-start-6 w-full">
          <Button
            onClick={openModal}
            variant="outline-primary"
            className="bg-[#FFFF] mx-auto whitespace-nowrap hover:bg-black mt-[-10px] hover:text-white  text-[16px] font-[500] border-[1.5px] rounded-[6px] sm:rounded-[8px] lg:hidden  font-Hanken w-[80%] h-[40px] md:w-[200px] "
          >
            View Details
          </Button>

          <Button
            onClick={openModal}
            variant="outline-primary"
            className="bg-[#FFFF] hidden lg:block mx-auto py-2 whitespace-nowrap hover:bg-black hover:text-white text-[16px] font-[500] font-Hanken w-[80%] h-[40px]"
          >
            View Details
          </Button>
        </div>
        {isModalOpen && (
          <Modal
            relevantTopics={relevantTopics}
            sessionName={sessionName}
            sessionType={description}
            time={time}
            status={`Done`}
            date={createdAt}
            description={description}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default PreviousSessionsCard;
