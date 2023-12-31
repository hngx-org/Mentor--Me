import React from "react";
import Image from "next/image";
import { EditIcon, WhereLogo } from "@/public";

const UserExperience = () => (
  <div className=" mt-14 lg:mt-10 md:mt-10 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 ml-10 mb-20">
    <div className="">
      <h3 className=" font-Hanken text-base font-medium text-black mb-5 ">
        Skills/Expertise
      </h3>
      <div className=" grid grid-cols-2 gap-4 lg:flex md:flex ">
        <p className="inline-flex h-12 px-8 py-2 items-center border-[0.5px] w-fit rounded-lg border-gray-300">
          Leadership
        </p>
        <p className="inline-flex h-12 px-4 py-2 items-center border-[0.5px] w-fit rounded-lg border-gray-300">
          User Experience
        </p>
        <p className="inline-flex h-12 px-7 py-2 items-center border-[0.5px] w-fit rounded-lg border-gray-300">
          UX Research
        </p>
      </div>
      <div className=" gap-4 mt-4 grid-cols-2 grid lg:flex md:flex">
        <p className="w-fit h-12 px-10 py-2 items-center border-[0.5px] rounded-lg border-gray-300">
          Figma
        </p>
        <p className="w-fit h-12 px-10 py-2 items-center border-[0.5px] rounded-lg border-gray-300">
          Sketch
        </p>
        <p className=" h-12 w-fit px-10 py-2 items-center border-[0.5px] rounded-lg border-gray-300">
          +11
        </p>
      </div>

      <div>
        <h3 className=" mt-8 font-Inter text-base font-medium text-black mb-4 ">
          Experience{" "}
          <span className="rounded-full px-2 py-1 h-4 w-5 bg-Accent1 text-white">
            2
          </span>
        </h3>
        <div className=" flex items-center gap-3 ">
          <Image src={WhereLogo} width={30} height={20} alt="alogo" />
          <div className=" inline-flex gap-32 items-center">
            <div>
              <h4 className="font-Inter text-base font-semibold text-black ">
                CEO
              </h4>
              <p>Webmaster Inc.</p>
            </div>
            <p className="bg-gray-300 border px-3 py-2 rounded-lg font-Hanken">
              Present
            </p>
          </div>
        </div>
        <div className=" flex items-center gap-3 mt-4">
          <Image src={WhereLogo} width={30} height={20} alt="aloho" />
          <div className=" inline-flex gap-20 items-center">
            <div>
              <h4 className="font-Inter text-base font-semibold text-black">
                UI/UX design
              </h4>
              <p>Bachelor of Science in Computer Science</p>
            </div>
            <p className="bg-gray-300 border px-3 py-2 rounded-lg font-Hanken">
              July 2023 - Dec 2023
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className=" lg:w-[480px] lg:h-[250px]  md:w-[380px] md:h-[250px] w-[300px] px-10 py-2 md:ml-3 border-[0.5px] rounded-lg mt-10">
      <div className=" mt-2 flex lg:gap-72 md:gap-48 gap-24">
        <h3>Availability</h3>
        <Image
          className=" h-fit items-center"
          src={EditIcon}
          width={30}
          alt="facebook"
        />
      </div>
      <div className="lg:w-[380px] lg:h-[50px]  flex px-10 py-2 border-gray-300  border-[0.5px] rounded-lg mt-10 items-center gap-8">
        <p className=" font-Hanken lg:text-xs text-[10px] lg:font-medium  text-black">
          Preferred Meeting Times{" "}
        </p>

        <p className=" font-Hanken text-xs font-medium text-black">
          Mondays - Wednesdays,
          <br />
          11:00am - 2:00pm
        </p>
      </div>
      <div className="lg:w-[380px] lg:h-[40px]  flex px-10 py-2 border-gray-300 whitespace-normal border-[0.5px] rounded-lg mt-10 items-center gap-20">
        <p className=" font-Hanken text-xs font-medium text-black">
          Time Zone{" "}
        </p>

        <p className=" font-Hanken text-xs font-medium text-black">
          Greenwich Mean Time &#40;GMT&#41;
        </p>
      </div>
    </div>
  </div>
);

export default UserExperience;
