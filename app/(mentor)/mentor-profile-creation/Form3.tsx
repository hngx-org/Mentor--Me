import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import MentorFormBuilder from "@/components/mentorProfileCreation/MentorFormBuilder";
import { MentorCreationPlusIcon, check } from "@/public";
import { HeadingBuild } from "./MentorUI";
import { form3Arr } from "@/lib/mentorProfileCreationData";
import { useMentorContext } from "./MentorContext";

interface myProps {
  handleMoveForward: () => void;
  handleMoveBack: () => void;
}

function Form3({ handleMoveForward, handleMoveBack }: myProps) {
  const { currForm, files, setFiles, setFormInputs, formInputs } =
    useMentorContext();
  const select3 = useRef<HTMLInputElement>(null);
  const image3 = useRef<HTMLImageElement>(null);
  const [file3Arr, setFile3Arr] = useState([]);
  const [inSchool, setInschool] = useState(true);
  const [yearGrad, setYearGrad] = useState(false);
  const checkbox = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const uploadImage = async () => {
    setLoading(true);
    const fileReader = new FileReader();
    //
    fileReader.readAsDataURL(image!);
    fileReader.onloadend = async () => {
      try {
        const response = await fetch("/api/mentor-profile", {
          method: "POST",
          body: JSON.stringify(fileReader.result),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        const data = await response.json();
        // @ts-ignore
        setUrl((prevData) => [...prevData, data.url]);
        if (data.error) {
          toast.error(
            "problem uploading image, please check your internet connection"
          );
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  };

  // This useEffect performs the post request when the value of files.file2 changes
  useEffect(() => {
    if (file3Arr.length > 0) {
      uploadImage();
    }
  }, [file3Arr]);

  // This useefect updates the object of data going to the backend, this particular data is an array of strings of urls of the cloudinary images
  useEffect(() => {
    if (url) {
      setFormInputs((prevData: any) => ({
        ...prevData,
        // @ts-ignore
        education_file: url.join(", "),
      }));
    }
  }, [url]);

  function showFile(e: any) {
    if ([...e.target.files][0].size > 2 * 1024 * 1024) {
      toast.error("Image size exceeds 2MB. Please upload a smaller image.");
      return;
    }

    // @ts-ignore
    setFile3Arr((prevArr) => [...prevArr, select3.current!.files![0]]);

    setImage(e.target.files[0]);

    // console.log(formInputs);
  }

  function selectFile(element: any) {
    element.click();
  }

  useEffect(() => {
    if (currForm === 2) {
      const yearGradInp = document.querySelector(
        'input[name="year_of_graduation"]'
      );

      yearGradInp?.addEventListener("input", () => {
        // @ts-ignore
        if (yearGradInp!.value !== "") {
          setInschool(false);
        } else {
          setInschool(true);
        }
      });

      if (yearGrad) {
        // @ts-ignore
        yearGradInp!.style.display = "none";
      } else {
        // @ts-ignore
        yearGradInp!.style.display = "block";
      }
    }
  }, [formInputs, yearGrad]);

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
          <div
            className={`flex items-center justify-start gap-4 ${
              inSchool ? "" : "hidden"
            }`}
          >
            <input
              ref={checkbox}
              type="checkbox"
              className="mt-[6px]"
              onInput={(e) => {
                setYearGrad(!yearGrad);
              }}
            />
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

          <div className="flex flex-wrap gap-4 items-start mt-6">
            {file3Arr.length > 0
              ? file3Arr.map((file, idx) => (
                  <div
                    className="border-[1px] min-h-[100px] flex flex-col items-center justify-center border-black rounded-md p-2"
                    key={
                      // @ts-ignore
                      file.size + 5
                    }
                  >
                    {
                      // @ts-ignore
                      file.type === "application/pdf" ? (
                        <p className="text-[red] font-bold mb-3">PDF</p>
                      ) : (
                        ""
                      )
                    }
                    <img
                      className=" mr-[20px] max-w-[120px] w-[80%]"
                      src={URL.createObjectURL(file)}
                      alt=""
                    />

                    <p className="uppercase text-sm">
                      {
                        // @ts-ignore
                        file.name
                      }
                    </p>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </MentorFormBuilder>
    </div>
  );
}

export default Form3;
