import React, { ReactElement, ChangeEvent } from "react";
import { ButtonControlProps } from "../../../lib/types";
import { Button } from "@/components";

export default function Achievements({
  onNext,
  onPrev,
  setFormData,
}: ButtonControlProps): ReactElement {
  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData?.((prevData) => ({
      ...prevData,
      achievements: {
        ...prevData.achievements,
        [name]: value,
      },
    }));
  };
  return (
    <div className="pt-6 md:ml-10 ml-3 md:flex md:flex-col">
      <h1 className="font-Hanken font-[600] text-[24px] text-[Neutra40]">
        Achievements & Awards
      </h1>
      <p className="font-Hanken text-[14px] font-[400] text-Neutra40 pr-7">
        Please provide details about your professional achievements, awards, and
        milestones below.
      </p>

      <form className="mt-4">
        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="achievementName"
          >
            Achievement/Award Name
            <input
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              id="achievementName"
              name="achievementName"
              type="text"
              onChange={handleInputChange}
              placeholder="Achievement/Award Name"
            />
          </label>
        </div>

        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="issuingOrganization"
          >
            Issuing Organization
            <input
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              id="issuingOrganization"
              type="text"
              placeholder="Goggle"
              name="issuingOrganization"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="yearReceived"
          >
            Year Received
            <select
              name="yearReceived"
              id="yearReceived"
              onChange={handleInputChange}
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </label>
        </div>
        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="achievementDesc"
          >
            Brief Description
            <textarea
              name="achievementDesc"
              id="achievementDesc"
              onChange={handleInputChange}
              cols={30}
              rows={6}
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Provide a brief description of the achievement or award, including its significance and impact on your career."
            />
          </label>
        </div>
      </form>
      <div className="lg:w-3/5 md:w-11/12 w-[97%] flex justify-between gap-4">
        <Button
          variant="outline-primary"
          className="py-2 px-12 font-Inter font-500 text-[16px]"
          onClick={onPrev}
        >
          Back
        </Button>
        <Button
          variant="primary"
          className="py-2 px-12 font-Inter font-500 text-[16px]"
          onClick={onNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
