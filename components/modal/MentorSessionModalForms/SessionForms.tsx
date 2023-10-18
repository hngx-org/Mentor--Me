"use client";

import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import Link from "next/link";
import SuccessModal from "@/components/modal/SuccessModal";
import { SelectInputType, TimeInputType } from "./SelectInputType";
import MentorCalendar from "./MentorCalendar";
import { Button } from "@/components/buttons/button";

interface FreeFormData {
  sessionName?: string;
  description?: string;
  attendeesLimit?: number;
  duration?: number;
  time?: string;
  date?: string;
  relevantTopics?: string;
}

interface OneOffFormData {
  sessionName?: string;
  description?: string;
  sessionType?: string;
  duration?: number;
  time?: string;
  date?: string;
  relevantTopics?: string;
}
interface RecurringFormData {
  sessionName?: string;
  description?: string;
  sessionType?: string;
  numberOfSession?: number;
  occurence?: string;

  // time?: string;
  relevantTopics?: string;
}

export function FreeSessionForm() {
  const [currentStep, setcurrentStep] = useState<boolean>(false);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [CalendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<FreeFormData>({
    sessionName: "",
    description: "",
    attendeesLimit: 0,
    date: "",
    time: "",
    relevantTopics: "",
  });
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const openSuccessModal = (): void => {
    setCalendarVisible(false);
    setSuccessful(true);
  };
  const openCalendar = async (e: MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (isFormValid) {
      setError("");
      setCalendarVisible(true);
    } else {
      setError("All fields are required");
      // console.log("All fields are required");
    }

    const data = formData;
    console.log(JSON.stringify(data));

    // POSTING DATA
    const response = await fetch(
      "https://hngmentorme.onrender.com/api/free-session",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      console.log("form submitted,", responseData);
    } else {
      setCalendarVisible(false);
      setError("An error occurred while creating a session");
      console.error("submissiom failed");
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
          <span className="text-Error50 font-bold">{error}</span>
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
            <option value="Design principles" className="text-black">
              Design principles
            </option>
            <option value="Technical Writing 101">Technical Writing 101</option>
          </SelectInputType>
          <TimeInputType
            labelText="Description"
            isRequired
            type="text"
            InputId="description"
            InputName="description"
            placeholder="Tell us a little about this session"
            value={formData.description}
            onChange={handleInputChange}
          />
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
          <TimeInputType
            labelText="Time"
            type="time"
            onChange={handleInputChange}
            value={formData.time}
            isRequired
            InputId="time"
            InputName="time"
            placeholder="Select the time of the day"
          />
          <TimeInputType
            labelText="Date"
            type="date"
            onChange={handleInputChange}
            value={formData.date}
            isRequired
            InputId="date"
            InputName="date"
            placeholder="Select the date"
          />

          <SelectInputType
            labelText="Select relevant topics"
            isRequired
            selectId="relevantTopics"
            selectName="relevantTopics"
            placeholder="Select some relevant topics this session"
            value={formData.relevantTopics}
            onChange={handleSelectChange}
          >
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Technical Writing">Technical Writing</option>
          </SelectInputType>

          <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center w-full md:pt-8 py-2">
            <Link className="w-full" href="/mentor-schedule">
              <Button
                className="p-4 w-full md:w-[20%]"
                variant="outline-primary"
                type="button"
              >
                Cancel
              </Button>
            </Link>
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

export function OneOffSessionForm() {
  const [currentStep, setcurrentStep] = useState<boolean>(false);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [CalendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<OneOffFormData>({
    sessionName: "",
    description: "",
    sessionType: "",
    date: "",
    time: "",
    relevantTopics: "",
  });
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
  const openCalendar = async (e: MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (isFormValid) {
      setError("");
      setCalendarVisible(true);
    } else {
      setError("All fields are required");
      // console.log("All fields are required");
    }

    const data = formData;
    console.log(JSON.stringify(data));

    // POSTING DATA
    const response = await fetch(
      "https://hngmentorme.onrender.com/api/one-off-session",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      console.log("form submitted,", responseData);
    } else {
      setCalendarVisible(false);
      setError("An error occurred while creating a session");
      console.error("submissiom failed");
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
          <span className="text-Error50 font-bold">{error}</span>
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
            <option value="Design principles">Design principles</option>
          </SelectInputType>
          <TimeInputType
            labelText="Description"
            isRequired
            type="text"
            InputId="description"
            InputName="description"
            placeholder="Tell us a little about this session"
            value={formData.description}
            onChange={handleInputChange}
          />
          <SelectInputType
            labelText="Session Type"
            isRequired
            selectId="sessionType"
            selectName="sessionType"
            placeholder="Select from the options"
            value={formData.sessionType}
            onChange={handleSelectChange}
          >
            <option value="private">Private</option>
            <option value="general">General</option>
          </SelectInputType>
          <TimeInputType
            labelText="Time"
            type="time"
            onChange={handleInputChange}
            value={formData.time}
            isRequired
            InputId="time"
            InputName="time"
            placeholder="Select the time of the day"
          />

          <TimeInputType
            labelText="Date"
            type="date"
            onChange={handleInputChange}
            value={formData.date}
            isRequired
            InputId="date"
            InputName="date"
            placeholder="Select the date"
          />
          <SelectInputType
            labelText="Select relevant topics"
            isRequired
            selectId="relevantTopics"
            selectName="relevantTopics"
            placeholder="Select some relevant topics this session"
            value={formData.relevantTopics}
            onChange={handleSelectChange}
          >
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Technical Writing">Technical Writing</option>
          </SelectInputType>
          <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center w-full md:pt-8 py-2">
            <Link className="w-full" href="/mentor-schedule">
              <Button
                className="p-4 w-full md:w-[20%]"
                variant="outline-primary"
                type="button"
              >
                Cancel
              </Button>
            </Link>
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

export function RecurringSessionForm() {
  const [currentStep, setcurrentStep] = useState<boolean>(false);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [CalendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<RecurringFormData>({
    sessionName: "",
    description: "",
    occurence: "",
    sessionType: "",
    numberOfSession: 0,
    relevantTopics: "",
  });
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const openSuccessModal = (): void => {
    setCalendarVisible(false);
    setSuccessful(true);
  };
  const openCalendar = async (e: MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (isFormValid) {
      setError("");
      setCalendarVisible(true);
    } else {
      setError("All fields are required");
      // console.log("All fields are required");
    }

    const data = formData;
    console.log(JSON.stringify(data));

    // POSTING DATA
    const response = await fetch(
      "https://hngmentorme.onrender.com/api/recurring-session",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      console.log("form submitted,", responseData);
    } else {
      setCalendarVisible(false);
      setError("An error occurred while creating a session");
      console.error("submissiom failed");
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
          <span className="text-Error50 font-bold">{error}</span>
          <SelectInputType
            labelText="Session name"
            isRequired
            selectId="sessionName"
            selectName="sessionName"
            placeholder="Give this session a name"
            value={formData.sessionName}
            onChange={handleSelectChange}
          >
            <option value="Design principles">Design principles</option>
          </SelectInputType>
          <TimeInputType
            labelText="Description"
            isRequired
            type="text"
            InputId="description"
            InputName="description"
            placeholder="Tell us a little about this session"
            value={formData.description}
            onChange={handleInputChange}
          />
          <SelectInputType
            labelText="Session Type"
            isRequired
            selectId="sessionType"
            selectName="sessionType"
            placeholder="Select from the options"
            value={formData.sessionType}
            onChange={handleSelectChange}
          >
            <option value="private">Private</option>
            <option value="general">General</option>
          </SelectInputType>
          <SelectInputType
            labelText="Number of session"
            isRequired
            selectId="numberOfSession"
            selectName="numberOfSession"
            placeholder="Select..."
            value={formData.numberOfSession}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </SelectInputType>
          <SelectInputType
            labelText="Occurence"
            isRequired
            selectId="occurence"
            selectName="occurence"
            placeholder="How often will you like to have this session"
            value={formData.occurence}
            onChange={handleSelectChange}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </SelectInputType>

          {/* <TimeInputType
            labelText="Time"
            type="time"
            onChange={handleInputChange}
            value={formData.time}
            isRequired
            InputId="time"
            InputName="time"
            placeholder="Select the time of the day"
          /> */}

          {/* <TimeInputType
            labelText="Date"
            type="date"
            onChange={handleInputChange}
            value={formData.date}
            isRequired
            InputId="date"
            InputName="date"
            placeholder="Select the date"
          /> */}
          <SelectInputType
            labelText="Select relevant topics"
            isRequired
            selectId="relevantTopics"
            selectName="relevantTopics"
            placeholder="Select some relevant topics this session"
            value={formData.relevantTopics}
            onChange={handleSelectChange}
          >
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Technical Writing">Technical Writing</option>
          </SelectInputType>
          <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center w-full md:pt-8 py-2">
            <Link className="w-full" href="/mentor-schedule">
              <Button
                className="p-4 w-full md:w-[20%]"
                variant="outline-primary"
                type="button"
              >
                Cancel
              </Button>
            </Link>
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
