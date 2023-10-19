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
  sessionUrl?: string;
  tag?: string;
}

function FreeSessionForm() {
  const [currentStep, setcurrentStep] = useState<boolean>(false);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [formVisible, setFormVisible] = useState<boolean>(true);
  const [CalendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<FreeFormData>({
    sessionName: "",
    description: "",
    attendeesLimit: 0,
    date: "",
    time: "",
    relevantTopics: "",
    sessionUrl: "",
    duration: 0,
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
  const closeForm = (): void => {
    setFormVisible(false);
  };
  const closeCalendar = (): void => {
    setCalendarVisible(false);
    setFormVisible(true);
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
      setFormVisible(false);
    } else {
      setError("All fields are required");
      // console.log("All fields are required");
    }

    const data = { ...formData, tag: "Free session" };

    console.log(JSON.stringify(data));

    // POSTING DATA
    const response = await fetch(
      "https://hngmentorme.onrender.com/api/free-session",
      {
        method: "POST",
        body: JSON.stringify(data),
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
      setFormVisible(true);
      setError("An error occurred while creating a session");
      console.error("submissiom failed");
    }
  };
  return (
    <>
      {formVisible && (
        // <div className="p-0 bg-[#1d1c1c57]  bg-opacity-10 sm:py-8 sm:px-10 mx-auto flex flex-col justify-center items-center my-auto ">
        <div className="bg-[#fafafa] min-w-[100%] px-3 sm:min-w-[70%] md:min-w-[60%] py-4 rounded">
          <div className=" w-[100%] sm:px-8 md:px-12 flex flex-col gap-3 py-3">
            <h1 className="text-left font-bold text-[1.5rem] sm:text-[2rem] text-[#08051e]">
              Create a Free Session
            </h1>
            <p className="text-gray-500">
              Create a session that best suits you!
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full justify-between">
            <span className="text-Error50 font-bold">{error}</span>
            <TimeInputType
              labelText="Session name"
              type="text"
              isRequired
              InputId="sessionName"
              InputName="sessionName"
              placeholder="Give this session a name"
              value={formData.sessionName}
              onChange={handleInputChange}
            />

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
            <TimeInputType
              labelText="Link to session"
              type="url"
              onChange={handleInputChange}
              value={formData.sessionUrl}
              isRequired
              InputId="sessionUrl"
              InputName="sessionUrl"
              placeholder="Add a link to the session"
            />
            {/* <TimeInputType
                                labelText="Tag"
                                type="text"
                                onChange={handleInputChange}
                                value={formData.tag}
                                isRequired
                                InputId="tag"
                                InputName="tag"
                                placeholder="tag"
                            /> */}
            <TimeInputType
              labelText="Duration"
              type="number"
              onChange={handleInputChange}
              value={formData.duration}
              isRequired
              InputId="duration"
              InputName="duration"
              placeholder="duration"
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
              <Button
                onClick={closeForm}
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
        // </div>
      )}
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
    </>
  );
}

export default FreeSessionForm;
