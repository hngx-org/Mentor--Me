import React, { ReactElement, useState, ChangeEvent } from "react";
import { ButtonControlProps } from "./types";
import { UploadIcon } from "@/public/SVGs";
import { Button } from "../buttons/button";

export default function Identification({
  onPrev,
  handleSubmit,
  setFormData,
  formData,
}: ButtonControlProps): ReactElement {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [validated, setValidated] = useState(false);
  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData?.((prevData) => ({
      ...prevData,
      identification: {
        ...prevData.identification,
        [name]: value,
      },
    }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { type, files } = event.target;

    if (type === "file" && files) {
      const selectedFile = files[0];
      const fileUrl = URL.createObjectURL(selectedFile);
      setFormData?.((prevData) => ({
        ...prevData,
        identification: {
          ...prevData.identification,
          uploadID: fileUrl, // Update the graduationFile property with the selected file
        },
      }));
      setSelectedFileName(files[0].name);
    }
  };
  return (
    <div className="pt-6 md:ml-10 ml-3  md:flex md:flex-col">
      <h1 className="font-Hanken font-[600] text-[24px] text-[Neutra40]">
        Identification
      </h1>
      <p className="font-Hanken text-[14px] font-[400] text-Neutra40 ">
        Please provide the required details below for identity verification.
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

          if (handleSubmit) {
            handleSubmit();
          }
        }}
      >
        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="fullname"
          >
            Full Legal Name
            <input
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Jane Doe"
              name="fullName"
              onChange={handleInputChange}
              required
            />
          </label>
          {validated && !formData?.identification?.fullName && (
            <p className="font-Inter font-[500] text-Error40 text-[10px]">
              Please enter your Legal Name
            </p>
          )}
        </div>

        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="dateofBirth"
          >
            Date of Birth
            <input
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              id="dateOfBirth"
              type="date"
              placeholder="Jane Doe"
              name="dateOfBirth"
              onChange={handleInputChange}
              required
            />
            {validated && !formData?.identification?.dateOfBirth && (
              <p className="font-Inter font-[500] text-Error40 text-[10px]">
                Please enter your date of birth
              </p>
            )}
          </label>
        </div>

        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="idType"
          >
            Government Issued Type ID
            <select
              name="idType"
              id="idType"
              required
              onChange={handleInputChange}
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Internationl Passport</option>
              <option>Drivers Liscense</option>
              <option>National ID(NIN)</option>
            </select>
            {validated && !formData?.identification?.idType && (
              <p className="font-Inter font-[500] text-Error40 text-[10px]">
                Please select government issued ID
              </p>
            )}
          </label>
        </div>
        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="idNumber"
          >
            ID Number
            <input
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3  font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              id="idNumber"
              type="text"
              placeholder="XY127Uy8"
              name="idNumber"
              required
              onChange={handleInputChange}
            />
          </label>
          {validated && !formData?.identification?.idNumber && (
            <p className="font-Inter font-[500] text-Error40 text-[10px]">
              Please enter the ID Number
            </p>
          )}
        </div>

        <div className="mb-4 lg:w-3/5 md:w-11/12 w-[97%]">
          <p className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2">
            Upload Government Issued ID
          </p>

          <div className="mt-1 p-3 rounded-md border border-Neutra10">
            <label
              htmlFor="uploadID"
              className="w-full flex justify-center items-center py-2 bg-NeutalBase text-white rounded-md cursor-pointer font-Hanken font-[400] text-[12px]"
            >
              <UploadIcon /> <span className="ml-2">Click to Upload</span>
              <input
                type="file"
                className="hidden"
                name="uploadID"
                id="uploadID"
                accept=".pdf, .png, .jpeg, .jpg"
                onChange={handleFileChange}
              />
            </label>
            {validated && !formData?.identification?.uploadID && (
              <p className="font-Inter font-[500] text-Error40 text-[10px]">
                Please upload ID file
              </p>
            )}

            <p className="mt-2 font-Hanken text-[12px] font-[400] text-Neutra40">
              {selectedFileName && `Selected File: ${selectedFileName}`}
            </p>
            <p className="mt-2 font-Hanken text-[12px] font-[400] text-Neutra40">
              Important: All documents must be official and in English. If a
              document is not in English then please provide a notary authorized
              translation with an apostille.
            </p>
            <div className="flex justify-between mt-2 font-Hanken text-[12px] font-[400] text-Neutra40">
              <p className="">Accepted formats: pdf, png, jpeg</p>
              <p>Max 30MB</p>
            </div>
          </div>
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
            variant="primary"
            type="submit"
            className="py-2 px-12 font-Inter font-500 text-[16px]"
            data-te-toggle="modal"
            data-te-target="#successModal"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
