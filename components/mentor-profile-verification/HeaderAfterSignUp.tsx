import React from "react";
import Image from "next/image";
import { DashboardMenteeNavImg } from "@/public";
import { BulletIcon, NotificationBingIcon } from "@/public/SVGs";

interface Steps {
  step: number;
}

export default function HeaderAfterSignUp({ step }: Steps) {
  const isStep1To4 = step >= 1 && step <= 4;
  const h1ClassName = isStep1To4
    ? "font-Hanken font-[700]  md:text-2xl text-xl text-Neutra20"
    : "font-Hanken font-[700] md:text-2xl text-xl text-NeutalBase";

  return (
    <nav className="flex justify-between items-center py-5 md:px-4 px-2 bg-[#FFFF] cursor-pointer border-b">
      <div className="flex items-center">
        <h1 className={h1ClassName}>Mentor Account </h1>

        {isStep1To4 && (
          <div className="md:flex hidden">
            <BulletIcon />
            <p className="font-Hanken font-[700] md:text-2xl text-xl text-NeutalBase">
              {step === 1
                ? "Certifications"
                : step === 2
                ? "Qualifications"
                : step === 3
                ? " Achievements & Awards"
                : "Identification"}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-5">
        <span className="md:block hidden">
          <NotificationBingIcon />
        </span>

        <div className="flex items-center gap-2">
          <Image
            src={DashboardMenteeNavImg}
            alt="mentor"
            width={40}
            height={40}
          />
          <div className="flex flex-col  font-Inter ">
            <span className=" text-[11px]">Funmi Oladapo</span>

            <span className=" text-[10px]">C++ Developer</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
