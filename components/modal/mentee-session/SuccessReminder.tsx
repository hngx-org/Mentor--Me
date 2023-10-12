/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { bellCheckedIcon } from "@/public";
import { CloseIcon } from "@/public/SVGs";

type SuccessReminderProps = {
  closeModal: Dispatch<SetStateAction<boolean>>;
};

const SuccessReminder: React.FC<SuccessReminderProps> = ({ closeModal }) => (
  <div className=" w-full h-full  relative sm:h-[400px] sm:w-[500px] items-start flex bg-white px-8 mx-8">
    <div
      className="w-[24px] h-[24px] absolute top-4 right-4 border border-[#7B7F84] flex justify-center items-center  cursor-pointer"
      onClick={() => closeModal(false)}
    >
      <CloseIcon fillColor="#7B7F84" props={{ className: "scale-90" }} />
    </div>
    <div className="w-full flex flex-col justify-center items-center gap-6 mt-10 sm:mt-16 lg:mt-20">
      <div className="flex items-center justify-center sm:h-[100px] sm:w-[100px] h-[80px] w-[80px] bg-Success10 rounded-full p-2">
        <Image src={bellCheckedIcon} width={76} height={63} alt="bell icon" />
      </div>
      <div>
        <p className="text-center text-Neutra50 font-Hanken text-2xl font-semibold">
          Your Reminder has been set
        </p>
        <p className="text-center text-Neutra40 font-Hanken text-[16px]">
          Your Upcoming Session has been added to your google calendar.
        </p>
      </div>
    </div>
  </div>
);

export default SuccessReminder;
