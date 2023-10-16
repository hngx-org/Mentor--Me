import React, { useEffect, useRef } from "react";
import Image from "next/image";
import MentorFormBuilder from "@/components/mentorProfileCreation/MentorFormBuilder";
import { MentorCreationProfileIcon } from "@/public";
import { HeadingBuild } from "./MentorUI";
import { form1Arr } from "@/lib/mentorProfileCreationData";
import { useMentorContext } from "./MentorContext";

interface myProps {
  handleMoveForward: () => void;
  handleMoveBack: () => void;
}
function Form1({ handleMoveForward, handleMoveBack }: myProps) {
  const { currForm, files, setFiles, setFormInputs } = useMentorContext();

  const select1 = useRef<HTMLInputElement>(null);
  const image1 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (files.file1) {
      // @ts-ignore
      image1.current!.src = URL.createObjectURL(files.file1);
    }
  }, [files]);

  function showFile(e: any) {
    if ([...e.target.files][0].size > 2 * 1024 * 1024) {
      alert("Image size exceeds 2MB. Please upload a smaller image.");
      return;
    }
    setFiles((prevFile: any) => ({
      ...prevFile,
      [e.target.id]: [...e.target.files][0],
    }));

    setFormInputs((prevData: any) => ({
      ...prevData,
      [e.target.name]: e.target.files[0].name,
    }));

    // console.log(formInputs);
  }

  function selectFile(element: any) {
    element.click();
  }

  return (
    <div className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 overflow-y-scroll absolute p-4 sm:p-10 pt-0 ">
      <HeadingBuild
        currForm={currForm}
        content=" Set up your profile in a few steps and Let’s get started!"
      />

      {/* container to upload picture */}
      <div className="mb-8">
        <p className="mb-2 text-xl font-Inter text-Neutral60 font-semibold">
          Upload profile photo
        </p>

        {/* container for selecting a file from pc */}
        <div className="flex items-center">
          <Image
            src={MentorCreationProfileIcon}
            alt="profile"
            className={`${
              files.file1 ? "hidden" : "block"
            } mr-[20px] max-w-[60px] `}
          />
          <img
            ref={image1}
            src="/"
            alt=""
            className=" mr-[20px] max-w-[100px]"
          />

          {/* {files.file1 && } */}
          <div className="flex flex-col">
            <input
              ref={select1}
              className="hidden"
              type="file"
              onChange={showFile}
              id="file1"
              name="profile_img"
              accept=".pdf, .png, .jpeg, .jpg"
              required
            />
            <button
              type="button"
              onClick={() => {
                selectFile(select1.current);
              }}
              className="text-Accent1 cursor-pointer font-Inter font-[500] w-fit"
            >
              Select a file
            </button>
            <p className="text-sm font-Hanken text-Neutra30">
              Make sure the file is below 2mb
            </p>
          </div>
        </div>
      </div>
      <MentorFormBuilder
        content={form1Arr}
        handleClick={() => {
          handleMoveForward();
        }}
        handleBack={() => {
          handleMoveBack();
        }}
      />
    </div>
  );
}

export default Form1;
