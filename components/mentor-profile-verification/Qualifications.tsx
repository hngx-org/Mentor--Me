import React, { ReactElement, ChangeEvent, useState } from "react";
import { ButtonControlProps } from "./types";
import { Button } from "../buttons/button";

export default function Qualifications({
  onNext,
  onPrev,
  setFormData,
  formData,
}: ButtonControlProps): ReactElement {
  const [validated, setValidated] = useState(false);
  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData?.((prevData) => ({
      ...prevData,
      qualifications: {
        ...prevData.qualifications,
        [name]: value,
      },
    }));
  };

  return (
    <div className="pt-6 md:ml-10 ml-3 md:flex md:flex-col">
      <h1 className="font-Hanken font-[600] text-[24px] text-[Neutra40]">
        Qualifications
      </h1>
      <p className="font-Hanken text-[14px] font-[400] text-Neutra40 pr-7">
        Please provide details about your qualifications and expertise below.
        This information helps us verify your qualifications as a mentor on our
        platform.
      </p>

      <form
        className="mt-4"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          if (form.checkValidity() === false) {
            setValidated(true);
            return;
          }

          if (onNext) {
            onNext(); // Check if onNext is defined before calling it
          }
        }}
      >
        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="qualification"
          >
            Qualification/Expertise
            <select
              name="qualification"
              id="qualification"
              onChange={handleInputChange}
              required
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Product Designer</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Fullstack Developer</option>
              <option>Mobile Developer</option>
              <option>Data Analyst</option>
            </select>
            {validated && !formData?.qualifications?.qualification && (
              <p className="font-Inter font-[500] text-Error40 text-[10px]">
                Please select your qualification
              </p>
            )}
          </label>
        </div>

        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="yearsExperience"
          >
            Years of Experience
            <select
              name="yearsExperience"
              id="yearsExperience"
              onChange={handleInputChange}
              required
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Less than a year</option>
              <option>1+ year</option>
              <option>3 - 5 years</option>
            </select>
            {validated && !formData?.qualifications?.yearsExperience && (
              <p className="font-Inter font-[500] text-Error40 text-[10px]">
                Please select years of experience
              </p>
            )}
          </label>
        </div>
        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="qualificationDesc"
          >
            Brief Description
            <textarea
              name="qualificationDesc"
              id="qualificationDesc"
              cols={30}
              rows={6}
              required
              onChange={handleInputChange}
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              placeholder=" Please provide details about your qualifications and expertise below. This information helps us verify your qualifications as a mentor on our platform."
            />
            {validated && !formData?.qualifications?.qualificationDesc && (
              <p className="font-Inter font-[500] text-Error40 text-[10px]">
                Please give qualification description
              </p>
            )}
          </label>
        </div>

        <div className="lg:w-3/5 md:w-11/12 w-[97%] flex justify-between gap-4">
          <Button
            variant="outline-primary"
            className="py-2 px-12 font-Inter font-500 text-[16px]"
            onClick={onPrev}
            type="button"
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="py-2 px-12 font-Inter font-500 text-[16px]"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
