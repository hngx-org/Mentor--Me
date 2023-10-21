"use client";

import React, { useState } from "react";
import { MySettingsIcon, SharePlaneIcon } from "@/svgs/Schedule/ScheduleMentor";
import Modal from "./ModalSchedules";
import SessionModalContent from "./SessionsModalContent";

interface PortfolioReviewProps {
  sessionName: string;
  relevantTopics: string;
  sessionType?: string; // Optional property
  time: string | number;
  date: number | string;
  description: string;
  sessionUrl: string;
  attendeesLimit: number;
  tag: string;
  occurence: string;
  duration: number;
}

function PortfolioReview({
  relevantTopics,
  sessionName,
  sessionUrl,
  sessionType,
  time,
  date,
  attendeesLimit,
  description,
  occurence,
  tag,
  duration,
}: PortfolioReviewProps) {
  const [copySuccess, setCopySuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const copyToClipboard = () => {
    // Create a temporary input element to hold the URL
    const input = document.createElement("input");
    input.value = sessionUrl;
    document.body.appendChild(input);

    // Select the URL text and copy it to the clipboard
    input.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(input);

    // Set copySuccess to true to display the success message
    setCopySuccess(true);

    // Reset copySuccess after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };
  return (
    <div>
      <div className="h-[235px] max-w-[295px] border-t-4 border-Accent1 hover:transform hover:scale-95 ease-in-out duration-300 shadow-lg rounded-lg px-2 py-4 flex flex-col justify-between gap-5">
        <div>
          {" "}
          <div className="flex justify-between item-center ">
            <h3 className="font-Hanken font-bold text-lg ">{sessionName}</h3>
            <div className="hidden md:block cursor-pointer">
              <MySettingsIcon />
            </div>
          </div>
          <div className="font-Hanken text-Neutra50 font-medium text-base flex flex-col h-[58px] gap-4 justify-between col-span-full row-span-3 ">
            <p>{duration} mins</p>
            <button
              type="button"
              onClick={openModal}
              className="text-neutral-500 font-base cursor-pointer underline leading-5 underline-offset-4   text-left w-fit"
            >
              View Details
            </button>
          </div>
        </div>

        <div className=" ">
          <div className="hidden lg:text-Accent1 lg:text-sm gap-4 lg:flex cursor-pointer lg:justify-between lg:items-center">
            <button
              type="button"
              onClick={copyToClipboard}
              className={`underline underline-offset-4 ${
                copySuccess ? "text-success" : ""
              }`}
            >
              {copySuccess ? "Link Copied" : "Copy Link"}
            </button>
            <p className="underline underline-offset-4">Share Session</p>
          </div>
          <div className="cursour-pointer flex justify-start items-center gap-1 pb-1 lg:hidden">
            <SharePlaneIcon />{" "}
            <p className="font-Hanken font-normal text-Accent1 underline underline-offset-2">
              Share Session
            </p>
          </div>
        </div>
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
          />
        </Modal>
      )}
    </div>
  );
}

export default PortfolioReview;
