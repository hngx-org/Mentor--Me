"use client";

import React, { useState } from "react";
import SuccessModal from "@/components/modal/SuccessModal";
// import SuccessModal fro../SuccessModaldal";
import SelectInputType from "./SelectInputType";
import { Button } from "@/components/buttons/button";

type SessionFormProps = {
  labelName?: string;
  isRequired?: true;
  sessionType?: string;
  placeholder?: string;
};

export function FreeSessionForm({
  labelName,
  isRequired,
  sessionType,
  placeholder,
}: SessionFormProps) {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [successful, setSuccessful] = useState<boolean>(false);
  const closeSuccessModal = (): void => {
    setSuccessful(false);
  };

  const openSuccessModal = (): void => {
    setSuccessful(true);
  };
  return (
    <div className="p-0 bg-[#1d1c1c57] bg-opacity-10 sm:py-8 sm:px-10 mx-auto flex flex-col justify-center items-center my-auto ">
      <div className="bg-[#fafafa] min-w-[100%] px-3 sm:min-w-[70%] md:min-w-[60%] py-4 rounded">
        <div className=" w-[100%] sm:px-8 md:px-12 flex flex-col gap-3 py-3">
          <h1 className="text-left font-bold text-[1.5rem] sm:text-[2rem] text-[#08051e]">
            Create a Free Session
          </h1>
          <p className="text-gray-500">Create a session that best suits you!</p>
        </div>
        <form className="flex flex-col gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full justify-between">
          <SelectInputType
            labelText="Session name"
            isRequired
            selectId="session-name"
            selectName="session-name"
            placeholder="Give this session a name"
          />
          <SelectInputType
            labelText="Description"
            isRequired
            selectId="Description"
            selectName="Description"
            placeholder="Tell us a little about this session"
          />
          <SelectInputType
            labelText="Attendees limit"
            isRequired
            selectId="attendees-limit"
            selectName="attendees-limit"
            placeholder="Select from the options"
          />
          <SelectInputType
            labelText="Time"
            isRequired
            selectId="time"
            selectName="time"
            placeholder="Select the time of the day"
          />
          <SelectInputType
            labelText="Date"
            isRequired
            selectId="date"
            selectName="date"
            placeholder="Choose a date"
          />
          <SelectInputType
            labelText="Select relevant topics"
            isRequired
            selectId="topics"
            selectName="topics"
            placeholder="Select some relevant topics this session"
          />
          <div>
            <input type="checkbox" />
            <span className="px-2 text-gray-400">
              Allow mentees to select this instead
            </span>
          </div>
          <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center w-full md:pt-8 py-2">
            <Button
              className="p-4 w-full md:w-[20%]"
              variant="outline-primary"
              type="button"
            >
              Cancel
            </Button>
            <Button
              onClick={openSuccessModal}
              className="p-4 w-full md:w-[20%]"
              variant="primary"
              type="button"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>

      {successful && (
        <SuccessModal
          isOpen={successful}
          closeModal={closeSuccessModal}
          title="Session Creation Successful!"
          content="You have successfully created a session"
          buttontext="Return to dashboard"
        />
      )}
    </div>
  );
}

export function OneOffSessionForm({
  labelName,
  isRequired,
  sessionType,
  placeholder,
}: SessionFormProps) {
  const [successful, setSuccessful] = useState<boolean>(false);
  const closeSuccessModal = (): void => {
    setSuccessful(false);
  };

  const openSuccessModal = (): void => {
    setSuccessful(true);
  };
  return (
    <div className="p-0 sm:py-8 sm:px-10 mx-auto flex flex-col justify-center items-center my-auto ">
      <div className="bg-[#fafafa] min-w-[100%] px-3 sm:min-w-[70%] md:min-w-[60%] py-4 rounded">
        <div className=" w-[100%] sm:px-8 md:px-12 flex flex-col gap-3 py-3">
          <h1 className="text-left font-bold text-[1.5rem] sm:text-[2rem] text-[#08051e]">
            Create a OneOff Session
          </h1>
          <p className="text-gray-500">Create a session that best suits you!</p>
        </div>
        <form className="flex flex-col gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full justify-between">
          <SelectInputType
            labelText="Session name"
            isRequired
            selectId="session-name"
            selectName="session-name"
            placeholder="Give this session a name"
          />
          <SelectInputType
            labelText="Description"
            isRequired
            selectId="Description"
            selectName="Description"
            placeholder="Tell us a little about this session"
          />
          <SelectInputType
            labelText="Session type"
            isRequired
            selectId="session-type"
            selectName="session-type"
            placeholder="Select from the options"
          />
          <SelectInputType
            labelText="Time"
            isRequired
            selectId="time"
            selectName="time"
            placeholder="Select the time of the day"
          />
          <SelectInputType
            labelText="Date"
            isRequired
            selectId="date"
            selectName="date"
            placeholder="Choose a date"
          />
          <SelectInputType
            labelText="Select relevant topics"
            isRequired
            selectId="topics"
            selectName="topics"
            placeholder="Select some relevant topics this session"
          />
          <div>
            <input type="checkbox" />
            <span className="px-2 text-gray-400">
              Allow mentees to select this instead
            </span>
          </div>
          <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center w-full md:pt-8 py-2">
            <Button
              className="p-4 w-full md:w-[20%]"
              variant="outline-primary"
              type="button"
            >
              Cancel
            </Button>
            <Button
              onClick={openSuccessModal}
              className="p-4 w-full md:w-[20%]"
              variant="primary"
              type="button"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
      {successful && (
        <SuccessModal
          isOpen={successful}
          closeModal={closeSuccessModal}
          title="Session Creation Successful!"
          content="You have successfully created a session"
          buttontext="Return to dashboard"
        />
      )}
    </div>
  );
}

export function RecurringSessionForm({
  labelName,
  isRequired,
  sessionType,
  placeholder,
}: SessionFormProps) {
  return (
    <div className="p-0 sm:py-8 sm:px-10 mx-auto flex flex-col justify-center items-center my-auto ">
      <div className="bg-[#fafafa] min-w-[100%] px-3 sm:min-w-[70%] md:min-w-[60%] py-4 rounded">
        <div className=" w-[100%] sm:px-8 md:px-12 flex flex-col gap-3 py-3">
          <h1 className="text-left font-bold text-[1.5rem] sm:text-[2rem] text-[#08051e]">
            Create a Free Session
          </h1>
          <p className="text-gray-500">Create a session that best suits you!</p>
        </div>
        <form className="flex flex-col gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full justify-between">
          <SelectInputType
            labelText="Session name"
            isRequired
            selectId="session-name"
            selectName="session-name"
            placeholder="Give this session a name"
          />
          <SelectInputType
            labelText="Description"
            isRequired
            selectId="Description"
            selectName="Description"
            placeholder="Tell us a little about this session"
          />
          <SelectInputType
            labelText="Session type"
            isRequired
            selectId="session-type"
            selectName="session-type"
            placeholder="Select from the options"
          />
          <SelectInputType
            labelText="Number of session"
            isRequired
            selectId="number-of-session"
            selectName="number-of-session"
            placeholder="Select..."
          />
          <SelectInputType
            labelText="Occurrence"
            isRequired
            selectId="occurrence"
            selectName="occurrence"
            placeholder="How often will you like to have this session"
          />
          <SelectInputType
            labelText="Select relevant topics"
            isRequired
            selectId="topics"
            selectName="topics"
            placeholder="Select some relevant topics this session"
          />
          <div>
            <input type="checkbox" />
            <span className="px-2 text-gray-400">
              Allow mentees to select this instead
            </span>
          </div>
          <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center w-full md:pt-8 py-2">
            <Button
              className="p-4 w-full md:w-[20%]"
              variant="outline-primary"
              type="button"
            >
              Cancel
            </Button>
            <Button
              className="p-4 w-full md:w-[20%]"
              variant="primary"
              type="button"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
