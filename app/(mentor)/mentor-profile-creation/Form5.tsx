import React from "react";
import MentorFormBuilder from "@/components/mentorProfileCreation/MentorFormBuilder";
import { HeadingBuild } from "./MentorUI";
import { form5Arr } from "@/lib/mentorProfileCreationData";
import { useMentorContext } from "./MentorContext";

interface myProps {
  handleMoveForward: () => void;
  handleMoveBack: () => void;
}

function Form5({ handleMoveForward, handleMoveBack }: myProps) {
  const { currForm } = useMentorContext();

  return (
    <div className="form-container w-[100%] h-[100%] sm:pt-0 pt-0 overflow-y-scroll opacity-0  absolute p-4 sm:p-10">
      <HeadingBuild currForm={currForm} content="Your mentorship details" />

      <MentorFormBuilder
        content={form5Arr}
        handleClick={() => {
          handleMoveForward();
        }}
        handleBack={() => {
          handleMoveBack();
        }}
      >
        <div className="flex items-center justify-start gap-2">
          <input type="checkbox" className="mt-[6px]" required />
          <p className="font-medium font-Inter ">
            By filling this form, you agree to MentorMe’s{" "}
            <span className="text-Accent1">Privacy policy</span> and{" "}
            <span className="text-Accent1">Terms of use</span>.
          </p>
        </div>
      </MentorFormBuilder>
    </div>
  );
}

export default Form5;
