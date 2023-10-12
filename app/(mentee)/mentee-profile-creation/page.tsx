"use client";

//  This component accepts 2 components : 1. MenteeFormBuilder 2. MenteeProgressBar
// The MenteeFormBuilder renders the forms for each screen, while accepting data from the formData.js file
// The MenteeProgressBar renders the progress bar in each screen based on a state variable called currForm
// The left side of the screen houses an svg element and a Container div which has the 5 forms. Each form is shown based on the state of currForm
// The Container div has 5 divs, in which each div houses the heading, progressbar and the form itself

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import MentorMeIcon from "@/svgs/MentorMeIcon";

import {
  MentorCreationProfileIcon,
  MentorCreationTopEllipse,
  MentorCreationBottomEllipse,
  MentorCreationWoman,
  MentorCreationMan,
  MentorCreationCheckMark,
} from "@/public";

import MenteeProgressBar from "@/components/menteeProfileCreation/MenteeProgressBar";
import MenteeFormBuilder from "@/components/menteeProfileCreation/MenteeFormBuilder";
import { Button } from "@/components/buttons/button";

import formData from "@/lib/menteeProfileCreationData";

const form1Arr = formData[0];
const form2Arr = formData[1];
const form3Arr = formData[2];
const form4Arr = formData[3];

export default function MentorProfileCreation() {
  const [currForm, setCurrForm] = useState(0);
  const [isModalShown, setIsModalShown] = useState(false);

  const forms = [
    {
      id: 1,
      heading: "Set up your profile in a few steps and Let’s get started!",
    },
    { id: 2, heading: "Welldone! Now tell us your superpower" },
    {
      id: 3,
      heading: "Good work! Now it's time for you to tell us about yourself",
    },
    { id: 4, heading: "Complete your registration and get started" },
  ];

  useEffect(() => {
    const forms = document.querySelectorAll(".form-container");
    // console.log(forms);
    forms.forEach((form: any, i: number, arr: any) => {
      form.style.transform = `translateX(${100 * (i - currForm)}%)`;
      form.style.opacity = "0";
      form.style.transition = "0.5s ease";
      form.style.position = "absolute";
      form.style.pointerEvents = "none";

      if (form.style.transform === "translateX(0%)") {
        form.style.opacity = "1";
        form.style.position = "relative";
        form.style.left = "0";
        form.style.pointerEvents = "all";
      }
    });
  }, [currForm]);

  function move(motion: string) {
    // console.log(forms);
    if (currForm <= 0 && motion === "back") {
      // setCurrForm(forms.length - 1);
    } else if (motion === "back") {
      setCurrForm(currForm - 1);
    }

    if (currForm < forms.length - 1 && motion === "forward") {
      setCurrForm(currForm + 1);
    } else if (currForm === forms.length - 1 && motion === "forward") {
      // setCurrForm(0);
      setIsModalShown(true);
    }
  }
  const select = useRef<HTMLInputElement>(null);

  function selectFile(element: any) {
    element.click();
  }

  return (
    // Overall container for the whole page
    <div className="lg:flex-row flex overflow-y-scroll relative bg-white">
      {/* overlay that shows behind the modal */}
      <button
        aria-label="hide/show overlay"
        type="button"
        onClick={() => {
          setIsModalShown(false);
        }}
        className={`duration-[0.5s] fixed top-0 left-0 h-full w-full bg-[#00000080] z-[8]  pointer-events-none ${
          isModalShown ? "opacity-1 pointer-events-auto" : "opacity-0"
        }`}
      />

      {/* div containing success modal */}
      <div
        className={`duration-[0.5s] pointer-events-none z-[10] ${
          isModalShown ? "opacity-1 pointer-events-auto" : "opacity-0"
        }`}
      >
        <SuccessModal />
      </div>
      {/* left side with forms */}
      <div className="flex flex-col w-[100%] lg:w-[50%] relative max-h-[100vh]">
        {/* mentor me logo */}

        <MentorMeIcon className="lg:w-[195px] md:w-[152px] min-h-[31px] w-[130px] mb-[40px] sm:mb-[80px] sticky top-0 mt-5 sm:mx-10 mx-4" />

        {/* CONTAINER FOR THE FORMS */}

        <div className="flex items-start relative gap-[100px] w-[100%] max-h-[100%] overflow-x-hidden">
          {/* form 1 */}
          <div className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 overflow-y-scroll absolute p-4 sm:p-10 pt-0 ">
            <HeadingBuild
              currForm={currForm}
              content=" Set up your profile in a few steps and Let’s get started!"
            />

            {/* container to upload picture */}
            <div className="mb-8">
              <p className="mb-2 text-xl font-Inter text-Neutral60 font-semibold">
                Upload profile photo
              </p>

              {/* container for selecting a file from pc */}
              <div className="flex items-center">
                <Image
                  src={MentorCreationProfileIcon}
                  alt="profile"
                  className="mr-[20px] max-w-[60px]"
                />
                <div className="flex flex-col">
                  <input ref={select} className="hidden" type="file" />
                  <button
                    type="button"
                    onClick={() => {
                      selectFile(select.current);
                    }}
                    className="text-Accent1 cursor-pointer font-Inter font-[500] w-fit"
                  >
                    Select a file
                  </button>
                  <p className="text-sm font-Hanken text-Neutra30">
                    Make sure the file is below 2mb
                  </p>
                </div>
              </div>
            </div>
            <MenteeFormBuilder
              content={form1Arr}
              handleClick={() => {
                move("forward");
              }}
              handleBack={() => {
                move("back");
              }}
            />
          </div>
          {/* form 1 */}

          {/* form 2 */}
          <div className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 pt-0 overflow-y-scroll opacity-0  absolute p-4 sm:p-10">
            <HeadingBuild
              currForm={currForm}
              content="Welldone! Now tell us your superpower"
            />

            <MenteeFormBuilder
              content={form2Arr}
              handleClick={() => {
                move("forward");
              }}
              handleBack={() => {
                move("back");
              }}
            />
          </div>
          {/* form 2 */}

          {/* form 3 */}
          <div className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 pt-0 overflow-y-scroll opacity-0  absolute p-4 sm:p-10">
            <HeadingBuild
              currForm={currForm}
              content="Good work! Now it's time for you to tell us about yourself"
            />

            <MenteeFormBuilder
              content={form3Arr}
              handleClick={() => {
                move("forward");
              }}
              handleBack={() => {
                move("back");
              }}
            />
          </div>
          {/* form 3 */}

          {/* form 4 */}
          <div className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 pt-0 overflow-y-scroll opacity-0  absolute p-4 sm:p-10">
            <HeadingBuild
              currForm={currForm}
              content="Complete your registration and get started!"
            />
            <MenteeFormBuilder
              content={form4Arr}
              handleClick={() => {
                move("forward");
              }}
              handleBack={() => {
                move("back");
              }}
            />
          </div>
          {/* form 4 */}
        </div>

        {/* CONTAINER FOR THE FORMS */}
      </div>

      {/* ///////////////////// */}
      {/* ///////////////////// */}
      {/* ///////////////////// */}

      {/* CONTAINER FOR THE IMAGE */}

      <div className="bg-black hidden lg:flex lg:w-[50%] lg:min-h-[100vh] pt-20  items-start justify-center relative overflow-hidden">
        {/* top right ellipse image */}
        <Image
          src={MentorCreationTopEllipse}
          alt="ellipse"
          className="absolute z-[2] top-0 right-0"
        />

        {/* bottom left ellipse image */}
        <Image
          src={MentorCreationBottomEllipse}
          alt="ellipse"
          className="absolute z-[2] bottom-[-15%] left-0 "
        />

        {/* container for heading and images */}
        <div className="flex flex-col gap-16 w-[100%]">
          <h2 className="text-4xl font-Gladiora text-white text-left px-6">
            Building bridges of guidance and growth
          </h2>

          <Image
            src={MentorCreationMan}
            alt="man"
            className="max-w-[350px] self-start"
          />
          <Image
            src={MentorCreationWoman}
            alt="woman"
            className="max-w-[350px] self-end"
          />
        </div>
      </div>

      {/* CONTAINER FOR THE IMAGE */}
    </div>
  );
}

interface myProps {
  content: string;
  currForm: any;
}

function HeadingBuild({ content, currForm }: myProps) {
  return (
    <div className="sticky top-0 bg-white left-0  py-2  mb-4 flex flex-col z-[2] ">
      <h2 className="font-Gladiora font-bold text-3xl mb-4">{content}</h2>
      <MenteeProgressBar currForm={currForm} />
    </div>
  );
}
function SuccessModal() {
  return (
    <div className="text-lg sm:text-2xl flex flex-col gap-6 w-[90%] max-w-[480px] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[20] bg-white rounded-md shadow-xl p-8">
      <div className="flex flex-col items-center">
        <Image
          src={MentorCreationCheckMark}
          alt="checkmark"
          className="max-w-[120px] sm:max-w-[initial]"
        />
        <p className="text-Success50 font-Inter text-center font-medium">
          Success!
        </p>
      </div>

      <p className="text-[#121212] font-base text-center font-Hanken">
        You have successfully created your profile, click the button below to
        proceed
      </p>

      <div className="flex flex-col items-center  gap-4">
        {/* <Button
          variant="primary"
          title="Verify account"
          className="w-full py-2 xl:max-w-[initial] !text-white"
        /> */}

        <Button variant="primary" className="w-full py-2 l:max-w-[initial]">
          <a href="/mentee-profile">Continue to Home</a>
        </Button>
      </div>
    </div>
  );
}
