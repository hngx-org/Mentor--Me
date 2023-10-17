import React from "react";
import { CloseIcon } from "@/public/SVGs";
import { SuccessModal } from "@/app/(mentor)/mentor-profile-creation/MentorUI";

interface ModalProps {
  relevantTopics?: string;
  sessionName: string;
  sessionType?: string;
  time?: string | number;
  date: number | string;
  description?: string;
  closeModal: () => void;
  status: string;
}

const Modal: React.FC<ModalProps> = ({
  relevantTopics,
  sessionName,
  sessionType,
  time,
  date,
  status,
  description,
  closeModal,
}) => {
  function formatDateString(dateString: string | number): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  }
  const formattedDate = formatDateString(date);
  return (
    <div className="fixed inset-0 w-screen p-4 bg-[#020202c8] flex items-center justify-center overflow-y-auto">
      <div className="w-[98%] lg:w-1/2 rounded bg-white p-5 md:p-10 text-Neutral60 m-auto overflow-y-auto h-[400px] md:h-auto">
        <div className="flex items-center justify-between mb-7">
          <p className="font-Inter text-lg font-medium">Session Details</p>
          <button
            onClick={closeModal}
            type="button"
            className="p-1 rounded-full border border-Neutral60 grid place-content-center"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mb-10 justify-between items-center font-Hanken w-full">
          <div>
            <p className="text-Neutra30">Name of Mentee</p>
            <p>{sessionName}</p>
          </div>
          <div className="self-end">
            <p className="text-Neutra30">Session Name</p>
            <p>{relevantTopics}</p>
          </div>
          <div>
            <p className="text-Neutra30">Date of Session</p>
            <p>{formattedDate}</p>
          </div>
          <div>
            <p className="text-Neutra30">Status</p>
            <p>{`${status}`}</p>
          </div>
          <div>
            <p className="text-Neutra30">Pricing Plan</p>
            <p>{sessionType}</p>
          </div>

          <div>
            <p className="text-Neutra30">Type of session</p>
            <p>{sessionType}</p>
          </div>
        </div>

        {/* <div className="flex justify-center gap-5 mt-10">
          <button
            onClick={closeModal}
            className="bg-white text-neutral-950 border border-neutral-200 rounded-md py-2 px-4 hover:bg-black hover:text-white hover:border-black"
          >
            Decline
          </button>
          <button className="bg-[#121212] text-white rounded-md py-2 px-4 hover:bg-black">
            Accept
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
