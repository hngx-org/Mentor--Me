import React, { useEffect, useRef } from "react";
import Image from "next/image";
import MentorFormBuilder from "@/components/mentorProfileCreation/MentorFormBuilder";
import { MentorCreationPlusIcon } from "@/public";
import { HeadingBuild } from "./MentorUI";
import { form3Arr } from "@/lib/mentorProfileCreationData";
import { useMentorContext } from "./MentorContext";

interface myProps {
  handleMoveForward: () => void;
  handleMoveBack: () => void;
}

function Form3({ handleMoveForward, handleMoveBack }: myProps) {
  const { currForm, files, setFiles, setFormInputs } = useMentorContext();
  const select3 = useRef<HTMLInputElement>(null);
  const image3 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (files.file3) {
      // @ts-ignore
      image3.current!.src = URL.createObjectURL(files.file3);
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
    <div className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 pt-0 overflow-y-scroll opacity-0  absolute p-4 sm:p-10">
      <HeadingBuild
        currForm={currForm}
        content="Tell us about your educational level"
      />

      <MentorFormBuilder
        content={form3Arr}
        handleClick={() => {
          handleMoveForward();
        }}
        handleBack={() => {
          handleMoveBack();
        }}
      >
        <div className="flex flex-col w-full gap-8">
          <div className="flex items-center justify-start gap-4">
            <input type="checkbox" className="mt-[6px]" />
            <p className="text-[#121212] font-medium">currently in school</p>
          </div>

          <input
            ref={select3}
            className="hidden"
            type="file"
            onChange={showFile}
            id="file3"
            name="education_file"
          />

          <button
            type="button"
            onClick={() => {
              selectFile(select3.current);
            }}
            className="flex items-center ml-[-7px] gap-2 text-Accent1 font-medium cursor-pointer"
          >
            <Image
              src={MentorCreationPlusIcon}
              alt="+"
              className="max-w-[30px]"
            />
            <p>Add other educational qualifications</p>
          </button>

          <div>
            <img
              ref={image3}
              src=""
              alt=""
              className=" mr-[20px] max-w-[200px] w-[80%]"
            />

            <p>
              {
                // @ts-ignore
                files.file3 && files.file3.name
              }
            </p>
          </div>
        </div>
      </MentorFormBuilder>
    </div>
  );
}

export default Form3;
