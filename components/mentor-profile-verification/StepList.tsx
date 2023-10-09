import React from "react";
import { StepListProps } from "./types";
import { SmallBulletIcon } from "@/public/SVGs";

export default function StepList({
  step,
  setStep,
  formSubmitted,
}: StepListProps) {
  return (
    <ul className="flex flex-col">
      <button
        type="button"
        className={`cursor-pointer mt-8 p-2 mx-3 md:mx-0 ${
          step === 1 ? "border border-Accent1 rounded-md" : ""
        }`}
        onClick={() => {
          if (!formSubmitted) {
            // Check if the form has not been submitted
            setStep(1);
          }
        }}
        disabled={formSubmitted} // Disable the button when the form is submitted
      >
        <div className="flex items-center">
          <div
            className={`border border-gray-300 rounded-md h-8 w-8 flex items-center justify-center ${
              step === 1 ? "bg-Accent1 border-0 text-white" : ""
            }`}
          >
            1
          </div>
          <span className="ml-2 font-Hanken font-[400] text-left">
            {" "}
            Certifications & Diplomas
          </span>
        </div>
        {step === 1 ? (
          <div className="ml-6 mt-4 text-left">
            <div className="flex">
              <span>
                <SmallBulletIcon />
              </span>
              <p className="w-50 font-[400] font-Hanken text-[12px] text-Neutra40">
                We require this information to verify your qualifications as a
                mentor, ensuring expertise in your chosen field and building
                trust among mentees.
              </p>
            </div>
            <div className="flex">
              <span>
                <SmallBulletIcon />
              </span>
              <p className="font-[400] font-Hanken text-[12px] text-Neutra40">
                Accurate qualifications are crucial for matching you with
                mentees seeking expertise in your field.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </button>

      <button
        type="button"
        className={`cursor-pointer mt-8 p-2 mx-3 md:mx-0 ${
          step === 2 ? "border border-Accent1 rounded-md" : ""
        }`}
        onClick={() => {
          if (!formSubmitted) {
            // Check if the form has not been submitted
            setStep(2);
          }
        }}
        disabled={formSubmitted} // Disable the button when the form is submitted
      >
        <div className="flex items-center">
          <div
            className={`border border-gray-300 rounded-md h-8 w-8 flex items-center justify-center ${
              step === 2 ? "bg-Accent1 border-0 text-white" : ""
            }`}
          >
            2
          </div>
          <span className="ml-2 font-Hanken font-[400] text-left">
            {" "}
            Qualifications
          </span>
        </div>
        {step === 2 ? (
          <div className="ml-6 mt-4 text-left">
            <div className="flex">
              <span>
                <SmallBulletIcon />
              </span>
              <p className="w-50 font-[400] font-Hanken text-[12px] text-Neutra40">
                We require information about your qualifications and expertise
                to ensure that you meet the requirements for providing
                mentorship in your chosen field.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </button>

      <button
        type="button"
        className={`cursor-pointer mt-8 p-2 mx-3 md:mx-0 ${
          step === 3 ? "border border-Accent1 rounded-md" : ""
        }`}
        onClick={() => {
          if (!formSubmitted) {
            // Check if the form has not been submitted
            setStep(3);
          }
        }}
        disabled={formSubmitted} // Disable the button when the form is submitted
      >
        <div className="flex items-center">
          <div
            className={`border border-gray-300 rounded-md h-8 w-8 flex items-center justify-center ${
              step === 3 ? "bg-Accent1 border-0 text-white" : ""
            }`}
          >
            3
          </div>
          <span className="ml-2 font-Hanken font-[400] text-left">
            {" "}
            Achievements & Awards
          </span>
        </div>
        {step === 3 ? (
          <div className="ml-6 mt-4 text-left">
            <div className="flex">
              <span>
                <SmallBulletIcon />
              </span>
              <p className="w-50 font-[400] font-Hanken text-[12px] text-Neutra40">
                We collect information about your achievements and awards to
                acknowledge and highlight your exceptional expertise and
                accomplishments as a mentor on our platform.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </button>

      <button
        type="button"
        className={`cursor-pointer mt-8 p-2 mx-3 md:mx-0 ${
          step === 4 ? "border border-Accent1 rounded-md" : ""
        }`}
        onClick={() => {
          if (!formSubmitted) {
            // Check if the form has not been submitted
            setStep(4);
          }
        }}
        disabled={formSubmitted} // Disable the button when the form is submitted
      >
        <div className="flex items-center">
          <div
            className={`border border-gray-300 rounded-md h-8 w-8 flex items-center justify-center ${
              step === 4 ? "bg-Accent1 border-0 text-white" : ""
            }`}
          >
            4
          </div>
          <span className="ml-2 font-Hanken font-[400] text-left">
            {" "}
            Identification
          </span>
        </div>
        {step === 4 ? (
          <div className="ml-6 mt-4 text-left">
            <div className="flex">
              <span>
                <SmallBulletIcon />
              </span>
              <p className="w-50 font-[400] font-Hanken text-[12px] text-Neutra40">
                We collect information about your achievements and awards to
                acknowledge and highlight your exceptional expertise and
                accomplishments as a mentor on our platform.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </button>
    </ul>
  );
}
