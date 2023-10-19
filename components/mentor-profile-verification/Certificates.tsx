import React, { ReactElement, useState, ChangeEvent } from "react";
import { AddIcon, UploadIcon } from "@/public/SVGs";
import { ButtonControlProps, FormData } from "./types";
import { Button } from "../buttons/button";

export default function Certificates({
  onNext,
  setFormData,
  formData,
}: ButtonControlProps): ReactElement {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [validated, setValidated] = useState(false);
  const [formSections, setFormSections] = useState([{ id: 1 }]);

  const addFormSection = () => {
    const newId = Math.max(...formSections.map((section) => section.id)) + 1;
    const newFormSections = [...formSections, { id: newId }];
    setFormSections(newFormSections);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = event.target;

    if (type === "file" && files) {
      // Handle file input change
      const selectedFile = files[0];
      const fileUrl = URL.createObjectURL(selectedFile);
      setFormData?.((prevData) => ({
        ...prevData,
        certificates: {
          ...prevData.certificates,
          graduationFile: fileUrl, // Update the graduationFile property with the selected file
        },
      }));
      setSelectedFileName(files[0].name);
    } else {
      // Handle other input changes
      setFormData?.((prevData) => ({
        ...prevData,
        certificates: {
          ...prevData.certificates,
          [name]: value,
        },
      }));
    }
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData?.((prevData) => ({
      ...prevData,
      certificates: {
        ...prevData.certificates,
        [name]: value,
      },
    }));
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
        <form
          className="mt-4"
          key={section.id}
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
              htmlFor={`certificationName_${index}`}
            >
              Certification/Diploma Name
              <input
                className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
                id={`certificationName_${index}`}
                type="text"
                name="certificationName"
                placeholder="Bachelor of Science in Engineering"
                onChange={handleInputChange} // Handle the change event
                required
              />
              {validated && !formData?.certificates?.certificationName && (
                <p className="font-Inter font-[500] text-Error40 text-[10px]">
                  Please enter the Certification/Diploma Name
                </p>
              )}
            </label>
          </div>

          <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
            <label
              className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
              htmlFor={`issuingInstitution_${index}`}
            >
              Issuing Institution
              <input
                className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
                id={`issuingInstitution_${index}`}
                type="text"
                name="issuingInstitution"
                placeholder="University of Lagos"
                onChange={handleInputChange}
                required
              />
              {validated && !formData?.certificates?.issuingInstitution && (
                <p className="font-Inter font-[500] text-Error40 text-[10px]">
                  Please enter the Issuing Institution
                </p>
              )}
            </label>
          </div>

          <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
            <label
              className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
              htmlFor={`graduationYear_${index}`}
            >
              Graduation Year
              <select
                id={`graduationYear_${index}`}
                onChange={handleSelectChange}
                name="graduationYear"
                required
                className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
              {validated && !formData?.certificates?.graduationYear && (
                <p className="font-Inter font-[500] text-Error40 text-[10px]">
                  Please enter Graduation Year
                </p>
              )}
            </label>
          </div>

          <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
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
                  name="graduationFile"
                  id={`graduationFile_${index}`}
                  accept=".pdf, .png, .jpeg, .jpg"
                  onChange={handleInputChange}
                />
              </label>
              {validated && !formData?.certificates?.graduationFile && (
                <p className="font-Inter font-[500] text-Error40 text-[10px]">
                  Upload Graduation Certificate
                </p>
              )}

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

          <Button
            type="submit"
            variant="primary"
            className="lg:w-3/5 md:w-11/12 w-[98%] mt-5 py-2 font-Inter font-500 text-[16px]"
            paddingLess
          >
            Next
          </Button>
        </form>
      ))}
    </div>
  );
}
