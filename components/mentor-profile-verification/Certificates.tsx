import React, { ReactElement, useState } from "react";
import { AddIcon, UploadIcon } from "@/public/SVGs";
import { ButtonControlProps } from "./types";
import { Button } from "../buttons/button";

export default function Certificates({
  onNext,
}: ButtonControlProps): ReactElement {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [formSections, setFormSections] = useState([{ id: 1 }]);

  const addFormSection = () => {
    const newId = Math.max(...formSections.map((section) => section.id)) + 1;
    const newFormSections = [...formSections, { id: newId }];
    setFormSections(newFormSections);
  };
  return (
    <div className="pt-6 md:ml-10 ml-3 md:flex md:flex-col">
      <h1 className="font-Hanken font-[600] text-[24px] text-[Neutra40]">
        Certifications & Diplomas
      </h1>
      <p className="font-Hanken text-[14px] font-[400] text-Neutra40 pr-7">
        Please submit your educational and certification details below to verify
        your qualifications as a mentor.
      </p>

      {formSections.map((section, index) => (
        <form className="mt-4" key={section.id}>
          <div className="mb-4 lg:w-3/5 md:w-10/12 w-[97%]">
            <label
              className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
              htmlFor={`certificationName_${index}`}
            >
              Certification/Diploma Name
              <input
                className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
                id={`certificationName_${index}`}
                type="text"
                placeholder="Bachelor of Science in Engineering"
              />
            </label>
          </div>

          <div className="mb-4 lg:w-3/5 md:w-10/12 w-[97%]">
            <label
              className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
              htmlFor={`issuingInstitution_${index}`}
            >
              Issuing Institution
              <input
                className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
                id={`issuingInstitution_${index}`}
                type="text"
                placeholder="University of Lagos"
              />
            </label>
          </div>

          <div className="mb-4 lg:w-3/5 md:w-10/12 w-[97%]">
            <label
              className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
              htmlFor={`graduationYear_${index}`}
            >
              Graduation Year
              <select
                name={`graduationYear_${index}`}
                id={`graduationYear_${index}`}
                className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </label>
          </div>

          <div className="mb-4 lg:w-3/5 md:w-10/12 w-[97%]">
            <p className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2">
              Upload Certificate/Diploma
            </p>

            <div className="mt-1 p-3 rounded-md border border-Neutra10">
              <label
                htmlFor={`graduationFile_${index}`}
                className="w-full flex justify-center items-center py-2 bg-NeutalBase text-white rounded-md cursor-pointer font-Hanken font-[400] text-[12px]"
              >
                <UploadIcon /> <span className="ml-2">Click to Upload</span>
                <input
                  type="file"
                  className="hidden"
                  name={`graduationFile_${index}`}
                  id={`graduationFile_${index}`}
                  accept=".pdf, .png, .jpeg, .jpg"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setSelectedFileName(e.target.files[0].name);
                    } else {
                      setSelectedFileName("");
                    }
                  }}
                />
              </label>

              <p className="mt-2 font-Hanken text-[12px] font-[400] text-Neutra40">
                {selectedFileName && `Selected File: ${selectedFileName}`}
              </p>
              <p className="mt-2 font-Hanken text-[12px] font-[400] text-Neutra40">
                Important: All documents must be official and in English. If a
                document is not in English then please provide a notary
                authorized translation with an apostille.
              </p>
              <div className="flex justify-between mt-2 font-Hanken text-[12px] font-[400] text-Neutra40">
                <p className="">Accepted formats: pdf, png, jpeg</p>
                <p>Max 30MB</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="flex font-Hanken text-[16px] font-[600] text-Accent1 cursor-pointer"
            onClick={addFormSection}
          >
            <AddIcon /> Add More
          </button>
        </form>
      ))}
      <Button
        onClick={onNext}
        variant="primary"
        className="lg:w-3/5 md:w-10/12 w-[98%] mt-5 py-2 font-Inter font-500 text-[16px]"
        paddingLess
      >
        Next
      </Button>
    </div>
  );
}
