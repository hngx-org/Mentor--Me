import React, { ReactElement, useState } from "react";
import { ButtonControlProps } from "./types";
import { UploadIcon } from "@/public/SVGs";
import { Button } from "../buttons/button";

export default function Identification({
  onPrev,
  handleSubmit,
}: ButtonControlProps): ReactElement {
  const [selectedFileName, setSelectedFileName] = useState("");
  return (
    <div className="pt-6 md:ml-10 ml-3  md:flex md:flex-col">
      <h1 className="font-Hanken font-[600] text-[24px] text-[Neutra40]">
        Identification
      </h1>
      <p className="font-Hanken text-[14px] font-[400] text-Neutra40 ">
        Please provide the required details below for identity verification.
      </p>

      <form className="mt-4">
        <div className="mb-4 lg:w-3/5 md:w-10/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="fullname"
          >
            Full Legal Name
            <input
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Jane Doe"
            />
          </label>
        </div>

        <div className="mb-4 lg:w-3/5 md:w-10/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="dateofBirth"
          >
            Date of Birth
            <input
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              id="dateofBirth"
              type="date"
              placeholder="Jane Doe"
            />
          </label>
        </div>

        <div className="mb-4 lg:w-3/5 md:w-10/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="idType"
          >
            Government Issued Type ID
            <select
              name="idType"
              id="idType"
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Internationl Passport</option>
              <option>Drivers Liscense</option>
              <option>National ID(NIN)</option>
            </select>
          </label>
        </div>
        <div className="mb-4 lg:w-3/5 md:w-10/12 w-[97%]">
          <label
            className="font-Inter font-[500] text-NeutalBase text-[14px] mb-2"
            htmlFor="idNumber"
          >
            ID Number
            <input
              className="mt-1 border border-Neutra10 rounded-md w-full py-2 px-3 text-Neutra20 font-[400] text-[12px] leading-tight focus:outline-none focus:shadow-outline"
              id="idNumber"
              type="text"
              placeholder="XY127Uy8"
            />
          </label>
        </div>

        <div className="mb-4 lg:w-3/5 md:w-10/12 w-[97%]">
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
              document is not in English then please provide a notary authorized
              translation with an apostille.
            </p>
            <div className="flex justify-between mt-2 font-Hanken text-[12px] font-[400] text-Neutra40">
              <p className="">Accepted formats: pdf, png, jpeg</p>
              <p>Max 30MB</p>
            </div>
          </div>
        </div>
      </form>

      <div className="lg:w-3/5 md:w-10/12 w-[97%] flex justify-between gap-4">
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
          onClick={handleSubmit}
          data-te-toggle="modal"
          data-te-target="#successModal"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
