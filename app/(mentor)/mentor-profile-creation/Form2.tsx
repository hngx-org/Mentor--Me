import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import MentorFormBuilder from "@/components/mentorProfileCreation/MentorFormBuilder";
import { HeadingBuild } from "./MentorUI";
import { form2Arr } from "@/lib/mentorProfileCreationData";
import { useMentorContext } from "./MentorContext";

interface myProps {
  handleMoveForward: () => void;
  handleMoveBack: () => void;
}
function Form2({ handleMoveForward, handleMoveBack }: myProps) {
  const { currForm, files, setFiles, setFormInputs, formInputs } =
    useMentorContext();

  const [file2Arr, setFile2Arr] = useState([]);
  const select2 = useRef<HTMLInputElement>(null);
  const image2 = useRef<HTMLImageElement>(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
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
        if (data.error) {
          toast.error(
            "problem uploading image, please check your internet connection"
          );
        }
        setUrl(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  };
  // This useEffect performs the post request when the value of files.file2 changes
  useEffect(() => {
    if (files.file2) {
      uploadImage();
    }
  }, [files.file2]);

  useEffect(() => {
    if (url) {
      setFormInputs((prevData: any) => ({
        ...prevData,
        // @ts-ignore
        certification_file: url.url,
      }));
    }
  }, [url]);

  function showFile(e: any) {
    if ([...e.target.files][0].size > 2 * 1024 * 1024) {
      toast.error("Image size exceeds 2MB. Please upload a smaller image.");
      return;
    }

    // @ts-ignore
    setFile2Arr((prevArr) => [...prevArr, select2.current!.files![0]]);

    setFiles((prevFile: any) => ({
      ...prevFile,
      [e.target.id]: file2Arr,
    }));

    setImage(e.target.files[0]);

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
            toast.error("please upload a certificate");
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
              name="certificate_name"
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

          <div className="flex flex-wrap gap-4 items-start">
            {file2Arr.length > 0
              ? file2Arr.map((file, idx) => (
                  <div
                    className="border-[1px] min-h-[100px] flex flex-col items-center justify-center border-black rounded-md p-2"
                    key={
                      // @ts-ignore
                      file.name
                    }
                  >
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

export default Form2;
