"use client";

import React, { ReactNode, useRef, useState } from "react";
import Image from "next/image";
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
  const [courseDescription, setCourseDescription] = useState("");
  const [isCategoryDropDownExpanded, setIsCategoryDropDownExpanded] =
    useState(false);
  const [isCourseTypeDropDownExpanded, setIsCourseTypeDropDownExpanded] =
    useState(false);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(-1);
  const [selectedCategoryOptionIdx, setSelectedCategoryOptionIdx] =
    useState(-1);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const resourceData: { [prop: string]: string } = {
          category: categoryRef.current?.value!,
          courseDescription: courseDescriptionRef.current?.value!,
          title: courseTitleRef.current?.value!,
          courseType: courseTypeRef.current?.value!,
          price: priceRef.current?.value!,
        };
        const formData = new FormData();
        Object.keys(resourceData).forEach((prop) => {
          formData.append(prop, resourceData[prop]);
        });
        fetch("/api/upload-resource", {
          method: "POST",
          body: formData,
        });
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
          className="border-none outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal disabled:bg-transparent"
        />
        <motion.span
          onClick={() => setIsCategoryDropDownExpanded((prev) => !prev)}
          animate={{ rotate: isCategoryDropDownExpanded ? 0 : -180 }}
        >
          <CaretIcon className=" cursor-pointer" />
        </motion.span>
      </Input>
      <Input
        title="Course Type"
        htmlFor="course-type"
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
          className="border-none outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal disabled:bg-transparent"
        />
        <motion.span
          onClick={() => setIsCourseTypeDropDownExpanded((prev) => !prev)}
          animate={{ rotate: isCourseTypeDropDownExpanded ? 0 : -180 }}
        >
          <CaretIcon className="cursor-pointer" />
        </motion.span>
      </Input>
      <div className="mb-4">
        <p className="capitalize text-Neutral60 font-Inter font-medium mb-2 text-lg">
          upload file
        </p>
        <DragArea />
      </div>
      <Input title="price" htmlFor="price">
        <input
          type="number"
          name="price"
          ref={priceRef}
          id="price"
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

const DragArea = () => {
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
}: {
  title: string;
  htmlFor: string;
  children: ReactNode;
  extraElements?: ReactNode;
}) => (
  <div className="mb-6 last:mb-0 relative">
    <p className="capitalize text-Neutral60 font-Inter font-medium mb-2 text-lg">
      {title}
    </p>
    <label
      className="flex items-center gap-4 border-Neutra10 border-[1px] rounded-md px-4 py-4"
      htmlFor={htmlFor}
    >
      {children}
    </label>
    {extraElements}
  </div>
);
