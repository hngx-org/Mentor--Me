import { useState } from "react";
import Image from "next/image";

import { UpcomingSessionProp } from "@/lib/constants/constants";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";

type SuccessReminderProps = {
  getView: string | null;
};
export default function CancelledCard({
  name,
  time,
  date,
  meetingLink,
  rescheduleBtn,
  reminderBtn,
  imgSrc,
  underline,
  getView,
}: UpcomingSessionProp & SuccessReminderProps) {
  const isGrid = getView === "Grid";
  const [visibility, setVisibility] = useState(false);
  const handleClick = () => {
    setVisibility(true);
  };

  return (
    <div
      className={`${
        visibility ? "hidden" : ""
      } flex max-w-[700px] w-full px-4 sm:px-6 xl:px-8 pb-6 pt-8 border border-Neutra10 rounded-xl gap-6 flex-col sm:flex-row hover:shadow-2xl shadow-black/20 transition-all duration-300`}
    >
      <div className={`max-w-[120px] ${isGrid ? "hidden" : ""}`}>
        <Image src={imgSrc} alt="cover" width={77} height={77} />
      </div>
      <div className="flex flex-col w-full gap-[6px]">
        <div
          className={`${!isGrid ? "hidden" : ""} w-full flex justify-between`}
        >
          <div className={`max-w-[120px] ${!isGrid ? "hidden" : ""}`}>
            <Image src={imgSrc} alt="cover" width={77} height={77} />
          </div>
          <span className="w-[35px] h-[35px] font-Hanken font-medium text-[12px] text-Neutra40 text-center bg-Neutra40/10 rounded-full leading-none flex justify-center items-center">
            {date}
          </span>
        </div>
        <p className="flex w-full justify-between">
          <span className="text-Neutra50 font-Inter text-[16px] font-medium">
            Mentor session with
            <span
              className={`${
                underline ? "border-b border-Neutra50 pb-[1px]" : "text-Accent1"
              }`}
            >
              {" "}
              {name}
            </span>
          </span>
          <span
            className={`w-[35px] h-[35px] font-Hanken font-medium text-[12px] text-Neutra40 text-center bg-Neutra40/10 rounded-full leading-none flex justify-center items-center ${
              isGrid ? "hidden" : ""
            }`}
          >
            {date}
          </span>
        </p>
        <p className="font-Hanken text-[16px] text-Neutra40">
          Time: <span>{time}</span>
        </p>
        <p className="text-Neutra40 font-Hanken font-medium text-[16px] ">
          Meeting Link:{" "}
          <span className="text-Accent1 font-normal">{meetingLink}</span>
        </p>
        <div
          className={`${
            isGrid
              ? " max-[1364px]:gap-2 max-[1250px]:flex-col xl:flex-row max-md:flex-row max-[410px]:flex-col"
              : "sm:flex-row"
          } flex items-center w-full justify-center gap-4 sm:gap-6 flex-col  `}
        >
          <Button
            onclick={handleClick}
            className={`py-1 px-6 bg-red-500 text-white border-red-500 ${
              isGrid ? "max-[1364px]:px-1" : ""
            }`}
            title={rescheduleBtn?.toString() || ""}
            variant="secondary"
          />
          <div className="w-full" role="dialog" />
        </div>
      </div>
    </div>
  );
}
