/* eslint-disable func-names */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

import { CaretIcon, PlayIcon } from "@/public/SVGs";

interface CourseContentProps {
  contentShown: {
    titlee: string;
    duration: number;
    id: string;
  }[];
  contentHidden: {
    titlee: string;
    duration: number;
    id: string;
  }[];
}

const CourseContents = function ({
  contentShown,
  contentHidden,
}: CourseContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, { height }] = useMeasure();
  return (
    <div className="p-4 rounded-[8px] border-Neutra10 border-[1px] row-start-2 row-end-3 col-span-full">
      {contentShown.map((content) => (
        <CourseContent key={content.id} title={content.titlee} />
      ))}
      <motion.div animate={{ height }} className="overflow-hidden origin-top">
        <div ref={ref}>
          {isExpanded &&
            contentHidden.map((content) => (
              <CourseContent key={content.id} title={content.titlee} />
            ))}
        </div>
      </motion.div>
      <div
        className="flex items-center gap-2 mt-4 cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyUp={() => {
          console.log("ally");
        }}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <p className="capitalize text-Accent1 font-medium">
          show {isExpanded ? "less" : "all"} lessons
        </p>
        <motion.div
          className="w-max"
          animate={{ rotate: isExpanded ? 180 : 0 }}
        >
          <CaretIcon className="w-10" />
        </motion.div>
      </div>
    </div>
  );
};

const CourseContent = ({ title }: { title: string }) => (
  <p className="text-[#333333] flex gap-5 items-center text-lg leading-[2.5] font-medium cursor-pointer">
    <PlayIcon className=" w-6" />
    {title}
  </p>
);

export default CourseContents;
