"use client";

import React, { useState, ChangeEvent } from "react";
import SuccessModal from "@/components/modal/SuccessModal";
// import SuccessModal fro../SuccessModaldal";
import SelectInputType from "./SelectInputType";
import MentorCalendar from "./MentorCalendar";
import { Button } from "@/components/buttons/button";

type SessionFormProps = {
  labelName?: string;
  isRequired?: true;
  sessionType?: string;
  placeholder?: string;
};

interface FormData {
  sessionName?: string;
  description?: string;
  attendeesLimit?: number;
  time?: number;
  date?: number;
  topics?: string;
}
interface CalendarFunctions {
  onClose: () => void;
  onShowSuccessModal: () => void;
}

export function FreeSessionForm({
  labelName,
  isRequired,
  sessionType,
  placeholder,
}: SessionFormProps) {
  const [currentStep, setcurrentStep] = useState<boolean>(false);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [CalendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    sessionName: "",
    description: "",
    attendeesLimit: 0,
    date: 0,
    time: 0,
    topics: "",
  });
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const closeSuccessModal = (): void => {
    setSuccessful(false);
  };
  const closeCalendar = (): void => {
    setCalendarVisible(false);
    // setSuccessful(true);
  };

  const openSuccessModal = (): void => {
    setCalendarVisible(false);
    setSuccessful(true);
  };
  const openCalendar = (): void => {
    // e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (isFormValid) {
      setError("");
      setCalendarVisible(true);
    } else {
      setError("All fields are required");
      // console.log("All fields are required");
    }
  };
  return (
    <div className="p-0 bg-[#1d1c1c57]  bg-opacity-10 sm:py-8 sm:px-10 mx-auto flex flex-col justify-center items-center my-auto ">
      <div className="bg-[#fafafa] min-w-[100%] px-3 sm:min-w-[70%] md:min-w-[60%] py-4 rounded">
        <div className=" w-[100%] sm:px-8 md:px-12 flex flex-col gap-3 py-3">
          <h1 className="text-left font-bold text-[1.5rem] sm:text-[2rem] text-[#08051e]">
            Create a Free Session
          </h1>
          <p className="text-gray-500">Create a session that best suits you!</p>
        </div>
        <form className="flex flex-col gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full justify-between">
          <span className="text-Error30 font-bold">{error}</span>
          <SelectInputType
            labelText="Session name"
            isRequired
            selectId="sessionName"
            selectName="sessionName"
            placeholder="Give this session a name"
            value={formData.sessionName}
            // onChange={(value) => handleSelectChange(value)}
            onChange={handleSelectChange}
          >
            <option value="session with bola">Session with bola</option>
          </SelectInputType>
          <SelectInputType
            labelText="Description"
            isRequired
            selectId="description"
            selectName="description"
            placeholder="Tell us a little about this session"
            value={formData.description}
            onChange={handleSelectChange}
          >
            <option value="session with bola">Session with bola</option>
          </SelectInputType>
          <SelectInputType
            labelText="Attendees limit"
            isRequired
            selectId="attendeesLimit"
            selectName="attendeesLimit"
            placeholder="Select from the options"
            value={formData.attendeesLimit}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </SelectInputType>
          <SelectInputType
            labelText="Time"
            isRequired
            selectId="time"
            selectName="time"
            placeholder="Select the time of the day"
            value={formData.time}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </SelectInputType>
          <SelectInputType
            labelText="Date"
            isRequired
            selectId="date"
            selectName="date"
            placeholder="Choose a date"
            value={formData.date}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </SelectInputType>
          <SelectInputType
            labelText="Select relevant topics"
            isRequired
            selectId="topics"
            selectName="topics"
            placeholder="Select some relevant topics this session"
            value={formData.topics}
            onChange={handleSelectChange}
          >
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Technical Writing">Technical Writing</option>
          </SelectInputType>
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
              onClick={openCalendar}
              className="p-4 w-full md:w-[20%]"
              variant="primary"
              type="button"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
      {CalendarVisible && (
        <MentorCalendar
          onClose={closeCalendar}
          onShowSuccessModal={openSuccessModal}
        />
      )}
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
  const [currentStep, setcurrentStep] = useState<boolean>(false);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [CalendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    sessionName: "",
    description: "",
    attendeesLimit: 0,
    date: 0,
    time: 0,
    topics: "",
  });
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const closeSuccessModal = (): void => {
    setSuccessful(false);
  };
  const closeCalendar = (): void => {
    setCalendarVisible(false);
    // setSuccessful(true);
  };

  const openSuccessModal = (): void => {
    setCalendarVisible(false);
    setSuccessful(true);
  };
  const openCalendar = (): void => {
    // e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (isFormValid) {
      setError("");
      setCalendarVisible(true);
    } else {
      setError("All fields are required");
      // console.log("All fields are required");
    }
  };
  return (
    <div className="p-0 bg-[#1d1c1c57]  bg-opacity-10 sm:py-8 sm:px-10 mx-auto flex flex-col justify-center items-center my-auto ">
      <div className="bg-[#fafafa] min-w-[100%] px-3 sm:min-w-[70%] md:min-w-[60%] py-4 rounded">
        <div className=" w-[100%] sm:px-8 md:px-12 flex flex-col gap-3 py-3">
          <h1 className="text-left font-bold text-[1.5rem] sm:text-[2rem] text-[#08051e]">
            Create a OneOff Session
          </h1>
          <p className="text-gray-500">Create a session that best suits you!</p>
        </div>
        <form className="flex flex-col gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full justify-between">
          <span className="text-Error30 font-bold">{error}</span>
          <SelectInputType
            labelText="Session name"
            isRequired
            selectId="sessionName"
            selectName="sessionName"
            placeholder="Give this session a name"
            value={formData.sessionName}
            // onChange={(value) => handleSelectChange(value)}
            onChange={handleSelectChange}
          >
            <option value="session with bola">Session with bola</option>
          </SelectInputType>
          <SelectInputType
            labelText="Description"
            isRequired
            selectId="description"
            selectName="description"
            placeholder="Tell us a little about this session"
            value={formData.description}
            onChange={handleSelectChange}
          >
            <option value="session with bola">Session with bola</option>
          </SelectInputType>
          <SelectInputType
            labelText="Attendees limit"
            isRequired
            selectId="attendeesLimit"
            selectName="attendeesLimit"
            placeholder="Select from the options"
            value={formData.attendeesLimit}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </SelectInputType>
          <SelectInputType
            labelText="Time"
            isRequired
            selectId="time"
            selectName="time"
            placeholder="Select the time of the day"
            value={formData.time}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </SelectInputType>
          <SelectInputType
            labelText="Date"
            isRequired
            selectId="date"
            selectName="date"
            placeholder="Choose a date"
            value={formData.date}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </SelectInputType>
          <SelectInputType
            labelText="Select relevant topics"
            isRequired
            selectId="topics"
            selectName="topics"
            placeholder="Select some relevant topics this session"
            value={formData.topics}
            onChange={handleSelectChange}
          >
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Technical Writing">Technical Writing</option>
          </SelectInputType>
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
              onClick={openCalendar}
              className="p-4 w-full md:w-[20%]"
              variant="primary"
              type="button"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
      {CalendarVisible && (
        <MentorCalendar
          onClose={closeCalendar}
          onShowSuccessModal={openSuccessModal}
        />
      )}
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
  const [currentStep, setcurrentStep] = useState<boolean>(false);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [CalendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    sessionName: "",
    description: "",
    attendeesLimit: 0,
    date: 0,
    time: 0,
    topics: "",
  });
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const closeSuccessModal = (): void => {
    setSuccessful(false);
  };
  const closeCalendar = (): void => {
    setCalendarVisible(false);
    // setSuccessful(true);
  };

  const openSuccessModal = (): void => {
    setCalendarVisible(false);
    setSuccessful(true);
  };
  const openCalendar = (): void => {
    // e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (isFormValid) {
      setError("");
      setCalendarVisible(true);
    } else {
      setError("All fields are required");
      // console.log("All fields are required");
    }
  };
  return (
    <div className="p-0 bg-[#1d1c1c57]  bg-opacity-10 sm:py-8 sm:px-10 mx-auto flex flex-col justify-center items-center my-auto ">
      <div className="bg-[#fafafa] min-w-[100%] px-3 sm:min-w-[70%] md:min-w-[60%] py-4 rounded">
        <div className=" w-[100%] sm:px-8 md:px-12 flex flex-col gap-3 py-3">
          <h1 className="text-left font-bold text-[1.5rem] sm:text-[2rem] text-[#08051e]">
            Create a Recurring Session
          </h1>
          <p className="text-gray-500">Create a session that best suits you!</p>
        </div>
        <form className="flex flex-col gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full justify-between">
          <span className="text-Error30 font-bold">{error}</span>
          <SelectInputType
            labelText="Session name"
            isRequired
            selectId="sessionName"
            selectName="sessionName"
            placeholder="Give this session a name"
            value={formData.sessionName}
            // onChange={(value) => handleSelectChange(value)}
            onChange={handleSelectChange}
          >
            <option value="session with bola">Session with bola</option>
          </SelectInputType>
          <SelectInputType
            labelText="Description"
            isRequired
            selectId="description"
            selectName="description"
            placeholder="Tell us a little about this session"
            value={formData.description}
            onChange={handleSelectChange}
          >
            <option value="session with bola">Session with bola</option>
          </SelectInputType>
          <SelectInputType
            labelText="Attendees limit"
            isRequired
            selectId="attendeesLimit"
            selectName="attendeesLimit"
            placeholder="Select from the options"
            value={formData.attendeesLimit}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </SelectInputType>
          <SelectInputType
            labelText="Time"
            isRequired
            selectId="time"
            selectName="time"
            placeholder="Select the time of the day"
            value={formData.time}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </SelectInputType>
          <SelectInputType
            labelText="Date"
            isRequired
            selectId="date"
            selectName="date"
            placeholder="Choose a date"
            value={formData.date}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </SelectInputType>
          <SelectInputType
            labelText="Select relevant topics"
            isRequired
            selectId="topics"
            selectName="topics"
            placeholder="Select some relevant topics this session"
            value={formData.topics}
            onChange={handleSelectChange}
          >
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Technical Writing">Technical Writing</option>
          </SelectInputType>
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
              onClick={openCalendar}
              className="p-4 w-full md:w-[20%]"
              variant="primary"
              type="button"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
      {CalendarVisible && (
        <MentorCalendar
          onClose={closeCalendar}
          onShowSuccessModal={openSuccessModal}
        />
      )}
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
