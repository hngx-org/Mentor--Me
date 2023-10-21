"use client";

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

import { CaretIcon } from "@/public/SVGs";
import DropDown from "@/components/DropDown";

const courseTypeOptions = ["JavaScript", "TypeScript", "C++", "C#"];

export default function UploadResourcesPage() {
  const courseTitleRef = useRef<HTMLInputElement>(null);
  const courseDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const courseTypeRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [courseDescription, setCourseDescription] = useState("");
  const [isCategoryDropDownExpanded, setIsCategoryDropDownExpanded] =
    useState(false);
  const [isCourseTypeDropDownExpanded, setIsCourseTypeDropDownExpanded] =
    useState(false);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(-1);
  const [selectedCategoryOptionIdx, setSelectedCategoryOptionIdx] =
    useState(-1);

  useEffect(() => {
    function detectOuterClick(this: Document, ev: MouseEvent) {
      if (!categoryRef.current?.parentElement?.contains(ev.target as Node)) {
        setIsCategoryDropDownExpanded(false);
      }
      if (!courseTypeRef.current?.parentElement?.contains(ev.target as Node)) {
        setIsCourseTypeDropDownExpanded(false);
      }
    }
    document.addEventListener("click", detectOuterClick, true);

    return () => {
      document.removeEventListener("click", detectOuterClick);
    };
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!file) {
          toast.error("Please upload a preview video");
          return;
        }
        const user = JSON.parse(
          localStorage.getItem("Mentor") ||
            JSON.stringify({ data: { token: null } })
        );
        let videoBase64;
        const {
          data: { token },
        } = user;

        const toastLoader = toast.loading("Uploading resource");
        try {
          const anotherRes = await fetch(
            "https://mentormee-api.onrender.com/mentors/get-current",
            {
              redirect: "follow",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const anotherData = await anotherRes.json();
          // console.log(anotherData);
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file!);

          fileReader.onloadend = async function () {
            videoBase64 = fileReader.result as string;

            // console.log(videoBase64);
            const resourceData = {
              category: categoryRef.current?.value!,
              description: courseDescriptionRef.current?.value!,
              title: courseTitleRef.current?.value!,
              coursetype: courseTypeRef.current?.value!,
              price: priceRef.current?.value!,
              name: anotherData?.userDetails?.fullName,
              role: anotherData?.userDetails?.fullName,
              company: anotherData?.company,
              file: videoBase64 as string,
              image: "random",
            };
            const res = await fetch("/api/upload-resource", {
              method: "POST",
              body: JSON.stringify(resourceData),
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            });
            const data = await res.json();
            // console.log(data);
            if (data.success === true) {
              toast.success("resource uploaded successfully");
            } else {
              toast.error(`Error: ${data.message}`);
            }
          };
        } catch (e) {
          toast.error("An error occurred while uploading the resource.");
        } finally {
          toast.dismiss(toastLoader);
        }
      }}
      className="row-start-2 row-end-3 col-start-2 col-end-3 w-[min(550px,_100%)] mx-auto sticky p-4 top-0 bg-white pt-10"
    >
      <h1 className="capitalize font-Inter font-medium text-2xl mb-8 text-NeutalBase">
        upload resources
      </h1>
      <Input title="course title" htmlFor="course-title">
        <input
          type="text"
          name="course-title"
          id="course-title"
          ref={courseTitleRef}
          required
          placeholder="input course title"
          className="border-none outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal"
        />
      </Input>
      <Input htmlFor="course-description" title="course description">
        <textarea
          name="course-description"
          id="course-description"
          ref={courseDescriptionRef}
          required
          placeholder="Input course description"
          value={courseDescription}
          onChange={(e) => {
            setCourseDescription(e.target.value);
          }}
          onKeyUp={(e) => {
            (e.target as HTMLTextAreaElement).style.height = "auto";
            const scHeight = (e.target as HTMLTextAreaElement).scrollHeight;
            (e.target as HTMLTextAreaElement).style.height = `${scHeight}px`;
          }}
          maxLength={200}
          className="border-none outline-none w-full placeholder:text-Neutra20 resize-none placeholder:font-normal min-h-[80px] text-NeutalBase"
        />
        <p className="absolute inset-[100%_0_auto_auto] text-Neutra40 w-max font-Hanken">
          {courseDescription.length}/200
        </p>
      </Input>
      <Input
        title="Category"
        htmlFor="category"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsCategoryDropDownExpanded((prev) => !prev);
        }}
        extraElements={
          <AnimatePresence>
            {isCategoryDropDownExpanded && (
              <DropDown
                dropDownOptions={courseTypeOptions}
                setSelectedOptionIdx={setSelectedCategoryOptionIdx}
                selectedOptionIdx={selectedCategoryOptionIdx}
              />
            )}
          </AnimatePresence>
        }
      >
        <input
          type="text"
          id="category"
          name="category"
          ref={categoryRef}
          required
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          value={courseTypeOptions[selectedCategoryOptionIdx]}
          placeholder="select category"
          className="border-none cursor-pointer outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal disabled:bg-transparent"
        />
        <motion.span
          animate={{ rotate: isCategoryDropDownExpanded ? 0 : -180 }}
        >
          <CaretIcon className=" cursor-pointer" />
        </motion.span>
      </Input>
      <Input
        title="Course Type"
        htmlFor="course-type"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsCourseTypeDropDownExpanded((prev) => !prev);
        }}
        extraElements={
          <AnimatePresence>
            {isCourseTypeDropDownExpanded && (
              <DropDown
                dropDownOptions={courseTypeOptions}
                setSelectedOptionIdx={setSelectedOptionIdx}
                selectedOptionIdx={selectedOptionIdx}
              />
            )}
          </AnimatePresence>
        }
      >
        <input
          type="text"
          id="course-type"
          name="course-type"
          ref={courseTypeRef}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          required
          value={courseTypeOptions[selectedOptionIdx]}
          placeholder="select course type"
          className="border-none cursor-pointer outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal disabled:bg-transparent"
        />
        <motion.span
          animate={{ rotate: isCourseTypeDropDownExpanded ? 0 : -180 }}
        >
          <CaretIcon className="cursor-pointer" />
        </motion.span>
      </Input>
      <div className="mb-4">
        <p className="capitalize text-Neutral60 font-Inter font-medium mb-2 text-lg">
          upload file
        </p>
        <DragArea setFile={setFile} />
      </div>
      <Input title="price" htmlFor="price">
        <input
          type="number"
          name="price"
          ref={priceRef}
          id="price"
          onKeyDown={(e) => {
            if (e.key === "e") {
              e.preventDefault();
            }
            // console.log(e.key);
          }}
          required
          placeholder="Input the price"
          className="border-none outline-none w-full placeholder:text-Neutra20 placeholder:font-normal"
        />
      </Input>
      <button
        type="submit"
        className="font-Inter mb-4 font-medium capitalize cursor-pointer bg-NeutalBase py-3 px-5 w-full rounded-[8px] border-none outline-none text-white"
      >
        upload resource
      </button>
    </form>
  );
}

const DragArea = ({
  setFile,
}: {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  return (
    <div
      className={`${
        isDraggingOver
          ? "border-Accent1 border-[3px]"
          : "border-[#9C9CA7] border-[1px]"
      } bg-[#F9F9F9] border-dashed rounded-[6px] px-4 py-7 text-center`}
      onDragEnter={(e) => {
        e.preventDefault();
        setIsDraggingOver(true);
      }}
      onDragLeaveCapture={(e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) return;
        setIsDraggingOver(false);
      }}
      onDropCapture={(e) => {
        e.preventDefault();
        setIsDraggingOver(false);

        const file = e.dataTransfer.files[0];
        // console.log(file);
        setFile(file);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <Image
        width={30}
        height={30}
        className=" w-11 mx-auto"
        src="/assets/images/mentor-upload-resource/folders.png"
        alt="folders-icon"
      />
      <div className="text-[#2F3033] font-semibold max-w-[163px] mx-auto mt-3 mb-2">
        Drop your files here or{" "}
        <label htmlFor="upload-file" className="text-Accent1 cursor-pointer">
          click here
          <input
            type="file"
            id="upload-file"
            name="upload-file"
            onChange={(e) => {
              setFile(e.target.files![0]);
            }}
            className="hidden"
          />
        </label>{" "}
        to upload
      </div>
      <p className="text-[#9C9CA7]">
        Accepted formats (mp4, xls, pdf, csv, ppt). Maximum of 15MB
      </p>
    </div>
  );
};
const Input = ({
  title,
  htmlFor,
  children,
  extraElements = null,
  onClick,
}: {
  title: string;
  htmlFor: string;
  children: ReactNode;
  extraElements?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLLabelElement> | undefined;
}) => (
  <div className="mb-6 last:mb-0 relative">
    <p className="capitalize text-Neutral60 font-Inter font-medium mb-2 text-lg">
      {title}
    </p>
    <label
      className="flex cursor-pointer items-center gap-4 border-Neutra10 border-[1px] rounded-md px-4 py-4"
      htmlFor={htmlFor}
      onClick={onClick}
      onKeyUp={() => {
        // console.log("ally rule");
      }}
    >
      {children}
    </label>
    {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
    {extraElements}
  </div>
);
