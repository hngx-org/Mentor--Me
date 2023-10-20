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
      />
    </div>
  );
}

export default Form5;
