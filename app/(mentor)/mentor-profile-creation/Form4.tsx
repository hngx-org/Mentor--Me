import React from "react";
import MentorFormBuilder from "@/components/mentorProfileCreation/MentorFormBuilder";
import { HeadingBuild } from "./MentorUI";
import { form4Arr } from "@/lib/mentorProfileCreationData";
import { useMentorContext } from "./MentorContext";

interface myProps {
  handleMoveForward: () => void;
  handleMoveBack: () => void;
}

function Form4({ handleMoveForward, handleMoveBack }: myProps) {
  const { currForm } = useMentorContext();

  return (
    <div className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 pt-0 overflow-y-scroll opacity-0  absolute p-4 sm:p-10">
      <HeadingBuild
        currForm={currForm}
        content="How would you like to be introduced?"
      />

      <p className="text-Neutral60 font-Inter font-medium text-lg">
        You are just one last step away from being a mentor and connecting with
        mentees all over the world! In this step, let us know something about
        you.
      </p>
      <MentorFormBuilder
        content={form4Arr}
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

export default Form4;
