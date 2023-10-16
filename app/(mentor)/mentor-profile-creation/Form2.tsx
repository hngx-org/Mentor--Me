import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import MentorFormBuilder from "@/components/mentorProfileCreation/MentorFormBuilder";
import { HeadingBuild } from "./MentorUI";
import { form2Arr } from "@/lib/mentorProfileCreationData";
import { useMentorContext } from "./MentorContext";

interface myProps {
  handleMoveForward: () => void;
  handleMoveBack: () => void;
}
function Form2({ handleMoveForward, handleMoveBack }: myProps) {
  const { currForm, files, setFiles, setFormInputs } = useMentorContext();

  const select2 = useRef<HTMLInputElement>(null);
  const image2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (files.file2) {
      // @ts-ignore
      image2.current!.src = URL.createObjectURL(files.file2);
    }
  }, [files]);

  function showFile(e: any) {
    if ([...e.target.files][0].size > 2 * 1024 * 1024) {
      toast("Image size exceeds 2MB. Please upload a smaller image.");
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
        content="Good job! let’s us know a little bit more"
      />

      <MentorFormBuilder
        content={form2Arr}
        handleClick={() => {
          if (files.file2 === "") {
            toast("please upload a certificate");
            return;
          }
          handleMoveForward();
        }}
        handleBack={() => {
          handleMoveBack();
        }}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 w-[70%]">
              <p className="font-Inter text-Neutral60 font-[500]">
                Certification file
              </p>

              <input
                className="w-full border-[#d0d5dd] border-[1px] rounded-md p-4 placeholder:text-[#98A2B3]"
                type="text"
                placeholder="Link"
                id="certification"
                name="certification_link"
                required
                onInput={(e: any) => {
                  setFormInputs((prevData: any) => ({
                    ...prevData,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </div>

            <input
              ref={select2}
              className="hidden"
              type="file"
              onChange={showFile}
              id="file2"
              name="certification_file"
            />

            <button
              type="button"
              onClick={() => {
                selectFile(select2.current);
              }}
              className="text-Accent1 font-semibold mt-6 cursor-pointer text-center"
            >
              choose file to upload
            </button>
          </div>

          <div>
            <img
              ref={image2}
              src="/"
              alt=""
              className=" mr-[20px] max-w-[200px] w-[80%]"
            />
            <p>
              {
                // @ts-ignore
                files.file2 && files.file2.name
              }
            </p>
          </div>
        </div>
      </MentorFormBuilder>
    </div>
  );
}

export default Form2;
