import React, { Dispatch, SetStateAction } from "react";
import { CloseIcon } from "@/public/SVGs";

type SuccessReminderProps = {
  // closeModal?: Dispatch<SetStateAction<boolean>>;
  sessionUrl?: string;
  collapseModal: () => void;
};

const JoinModal: React.FC<SuccessReminderProps> = ({
  collapseModal,
  sessionUrl,
}) => (
  <div
    className=" w-full h-[300px] text-black relative sm:h-[300px] sm:w-[500px]  items-start flex border rounded-lg border-black bg-white px-8 mx-8 shadow-lg spread-4 offset-x-3 offset-y-3 blur-3>
  <!-- Your content here -->
</div>
"
  >
    <button
      type="button"
      className="w-[24px] h-[24px] absolute top-4 right-4 border border-[#7B7F84] flex justify-center items-center  cursor-pointer"
      onClick={collapseModal}
    >
      <CloseIcon fillColor="#7B7F84" props={{ className: "scale-90" }} />
    </button>
    <div className="mt-[70px] space-x-5 text-center">
      <a target="_blank" rel="noopener noreferrer" href={sessionUrl}>
        <h3 className="text-[30px]">
          Join the meeting now.{" "}
          <span className="cursor-pointer hover:text-black text-Accent1">
            Click Here
          </span>
        </h3>
      </a>
      <span className="inline">
        <hr />
      </span>{" "}
      <h4 className="text-center mb-[-20px]">or</h4>{" "}
      <span>
        <hr />
      </span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://calendar.google.com/calendar/u/0/r?pli=1"
      >
        <h4 className="text-[20px] text-black mt-[20px] hover:text-Accent1 cursor-pointer">
          Set reminder
        </h4>
      </a>
    </div>
  </div>
);

export default JoinModal;
