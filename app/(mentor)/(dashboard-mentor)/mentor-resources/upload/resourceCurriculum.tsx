"use client";

import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

import { CancelIcon } from "@/public/SVGs";
import { PlusIcon } from "@/svgs/Schedule/ScheduleMentor";
import useDebouncedInput from "./useDebouncedInput";

interface ResourceCurriculumProps {
  curriculumList: {
    id: string;
    title: string;
    duration: number;
  }[];
  setCurriculumList: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        title: string;
        duration: number;
      }[]
    >
  >;
}

const ResourceCurriculum = function ({
  curriculumList,
  setCurriculumList,
}: ResourceCurriculumProps) {
  return (
    <div>
      <p className="capitalize text-Neutral60 font-Inter font-medium mb-2 text-lg">
        Resource curriculum
      </p>
      {curriculumList.map((curriculum) => (
        <Curriculum
          key={curriculum.id}
          id={curriculum.id}
          setCurriculumList={setCurriculumList}
        />
      ))}
      <motion.button
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={() =>
          setCurriculumList((prev) => [
            ...prev,
            { id: nanoid(), title: "", duration: 0 },
          ])
        }
        className="flex items-center gap-2 border-NeutalBase outline-none border-2 px-5 py-3 rounded-md cursor-pointer font-medium font-Inter mb-8 ml-auto"
      >
        <PlusIcon />
        Curriculum Item
      </motion.button>
    </div>
  );
};

const Curriculum = function ({
  id,
  setCurriculumList,
}: {
  id: string;
  setCurriculumList: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        title: string;
        duration: number;
      }[]
    >
  >;
}) {
  const [title, setTitle, debouncedtitle] = useDebouncedInput("");
  const [duration, setDuration, debouncedDuration] = useDebouncedInput("");

  useEffect(() => {
    setCurriculumList((prev) => {
      const sectionIndex = prev.findIndex((section) => section.id === id);
      prev.splice(sectionIndex, 1, {
        id,
        title: debouncedtitle,
        duration: +debouncedDuration,
      });
      return prev;
    });
  }, [debouncedtitle, debouncedDuration]);
  return (
    <div className="grid grid-cols-[1fr,_1fr,_30px] mb-4 gap-4 justify-between items-center bg-[#F9F9F9] p-4 rounded-lg">
      <input
        className="w-full px-4 py-2 border-Neutra10 border-[2px] rounded-md outline-none placeholder:text-Neutra20 text-NeutalBase font-Inter"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        aria-label="section-title"
        placeholder="Section title"
      />
      <input
        className="w-full px-4 py-2 border-Neutra10 border-[2px] rounded-md outline-none placeholder:text-Neutra20 text-NeutalBase font-Inter"
        required
        value={duration}
        onChange={(e) => {
          setDuration(e.target.value);
        }}
        type="number"
        aria-label="section-duration"
        placeholder="Duration in seconds"
      />
      {id !== "FIRSTSECTIONFIELD" && (
        <CancelIcon
          onClick={() => {
            setCurriculumList((prev) =>
              prev.filter((section) => section.id !== id)
            );
          }}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default ResourceCurriculum;
