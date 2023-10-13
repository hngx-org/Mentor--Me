"use client";

import { useEffect, useState } from "react";

type ProgressBarProps = {
  styles?: string;
  stepCompleted?: number;
  totalSteps?: number;
  rounded?: boolean;
  progress?: number;
  progressBgColor: string;
};
// this takes progress or steps(completed and total step)
// it give more precedence to progress , i.e if you pass it progress it would use that and not derive the
// percentage
export default function ProgressBar({
  totalSteps,
  stepCompleted,
  styles,
  rounded,
  progress,
  progressBgColor,
}: ProgressBarProps) {
  const [progressBar, setProgress] = useState("w-[2%]");
  const getProgress = () => {
    if (progress) setProgress(`w-[${progress}%]`);
    if (totalSteps && stepCompleted) setProgress(`w-[${progress}%]`);
    console.log(progress);
  };
  useEffect(() => {
    getProgress();
  }, [progress, stepCompleted, totalSteps]);
  return (
    <div
      className={`w-[100%] h-[7px]   overflow-clip  bg-Neutra10 ${
        rounded && "rounded-full"
      } ${styles}`}
    >
      <div
        className={`${progressBgColor || "bg-Accent1"}   h-[100%] ${
          rounded && "rounded-full"
        }  ${progressBar} w-[10%]`}
      />
    </div>
  );
}
