import Image from "next/image";
import { FC } from "react";

const UpcomingCard: FC = () => (
  <div className="card-container">
    <div className="flex p-6 card">
      <div>
        <Image alt="user" src="/assets/image1.png" width={77} height={77} />
      </div>

      <div className="text-base center flex flex-col gap-y-3">
        <div className="flex justify-between">
          <p className="title font-semibold">
            Mentor session with{" "}
            <span className="mentor-name">Patricia Flow</span>
          </p>

          <div className="bg-[#F0F0F0] text-[8px] flex flex-col items-center">
            <p>06</p>
            <p>Sept</p>
          </div>
        </div>

        <p className="text-[#565656] ">Time: 4pm (WAT)</p>
        <p className="text-[12px] meeting-link text-[#565656]">
          Meeting link: https://meet.mentorme.com/azv-bspc-fyb
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

    <div className="flex card">
      <div>
        <Image alt="user" src="/assets/image2.png" width={77} height={77} />
      </div>

      <div className="text-base center flex flex-col gap-y-3">
        <div className="flex justify-between">
          <p className="title font-semibold">
            Mentor session with <span className="mentor-name">Shao Lin</span>
          </p>

          <div className="bg-[#F0F0F0] flex flex-col items-center">
            <p>06</p>
            <p>Sept</p>
          </div>
        </div>

        <p className="text-[#565656] ">Time: 4pm (WAT)</p>
        <p className="text-[12px] meeting-link text-[#565656]">
          Meeting link: https://meet.mentorme.com/azv-bspc-fyb
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
