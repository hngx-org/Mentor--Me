import Image from "next/image";
import { FC } from "react";
import "./regular.css";

const UpcomingCard: FC = () => (
  <div className="card-container">
    <div className="flex items-start p-6 card">
      <div>
        <Image alt="user" src="/assets/image1.png" width={77} height={77} />
      </div>

      <div className="text-base center flex flex-col">
        <div className="flex justify-between items-start">
          <p className="title font-semibold">
            Mentor session with{" "}
            <span className="mentor-name">Patricia Flow</span>
          </p>

          <div className="bg-[#F0F0F0] w-[50px] h-[50px] text-[8px] p-[5px] flex flex-col items-center justify-center rounded-full">
            <p className="text-[13.5px] leading-none">06</p>
            <p className="text-[13.5px]">Sept</p>
          </div>
        </div>

        <p className="text-[#565656] ">Time: 4pm (WAT)</p>
        <p className="text-base meeting-link text-[#565656]">
          Meeting link:{" "}
          <span className="text-[#008080]">
            {" "}
            https://meet.mentorme.com/azv-bspc-fyb{" "}
          </span>
        </p>
        <div className="flex btn-wrapper gap-x-6">
          <button type="button" id="btn1">
            Reschedule Session
          </button>
          <button type="button" id="btn2">
            Set Reminder
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default UpcomingCard;
