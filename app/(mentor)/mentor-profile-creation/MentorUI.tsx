"use client";

//  This component accepts 2 components : 1. MentorFormBuilder 2. MentorProgressBar
// The MentorFormBuilder renders the forms for each screen, while accepting data from the formData.js file
// The MentorProgressBar renders the progress bar in each screen based on a state variable called currForm
// The left side of the screen houses an svg element and a Container div which has the 5 forms. Each form is shown based on the state of currForm
// The Container div has 5 divs, in which each div houses the heading, progressbar and the form itself

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";

import Image from "next/image";
import { toast } from "react-hot-toast";
import styles from "./page.module.css";

import MentorMeIcon from "@/svgs/MentorMeIcon";
import { BackwardIcon } from "@/public/SVGs";

import {
  MentorCreationTopEllipse,
  MentorCreationBottomEllipse,
  MentorCreationWoman,
  MentorCreationMan,
  MentorCreationCheckMark,
} from "@/public";

import MentorProgressBar from "@/components/mentorProfileCreation/MentorProgressBar";
import { Button } from "@/components/buttons/button";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import { useMentorContext } from "./MentorContext";

export function MentorProfileCreationForms() {
  const { formInputs, currForm, setFormInputs, setCurrForm, setLoader } =
    useMentorContext();
  const [isModalShown, setIsModalShown] = useState(false);

  const forms = [
    {
      id: 1,
      heading: "Set up your profile in a few steps and Let’s get started!",
    },
    { id: 2, heading: "Good job! let’s us know a little bit more" },
    { id: 3, heading: "Tell us about your educational level" },
    { id: 4, heading: "How would you like to be introduced?" },
    { id: 5, heading: "Your mentorship  details" },
  ];

  // Moved tokenString to a scope where it can be accessed
  let token = ""; // declare token variable

  if (typeof window !== "undefined") {
    const getUser = localStorage.getItem("Mentor");
    if (getUser) {
      try {
        const newUser = JSON.parse(getUser);
        token = newUser.data.token; // assign token value here
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }

  function submitData() {
    const customHeaders = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .post(
        "https://mentormee-api.onrender.com/mentors/create-profile",
        formInputs,
        { headers: customHeaders }
      )
      .then((response) => {
        // Handle the response
        // console.log(response);
        setLoader(false);
        setIsModalShown(true);
      })
      .catch((error) => {
        // Handle any errors
        setLoader(false);
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      });
  }

  useEffect(() => {
    const forms = document.querySelectorAll(".form-container");
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
      setLoader(true);
      submitData();
    }
  }

  return (
    //   {/* // Overall container for the whole page */}
    <div
      className={`lg:flex-row flex max-w-[15000px] w-full mx-auto overflow-hidden max-h-[900px]  ${styles.scroll} relative bg-white`}
    >
      {/* overlay that shows behind the modal */}
      <Link
        className={`duration-[0.5s] fixed top-0 left-0 h-full w-full bg-[#00000080] z-[8]  pointer-events-none ${
          isModalShown ? "opacity-1 pointer-events-auto" : "opacity-0"
        }`}
        href="/mentor-profile?path=profile"
        prefetch
      >
        <button
          aria-label="hide/show overlay"
          type="button"
          onClick={() => {
            setIsModalShown(false);
          }}
        />
      </Link>

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
        <Link href="/" className="w-fit h-fit">
          <MentorMeIcon className="lg:w-[195px] md:w-[152px] min-h-[31px] w-[130px]   sticky top-0 mt-5 sm:mx-10 mx-4" />
        </Link>
        <Link
          href="/mentor-auth/login"
          className="flex mb-[30px] sm:mb-[30px] ml-4 sm:ml-8 mt-8"
        >
          <BackwardIcon /> <span className="ms-2">Go back</span>
        </Link>
        {/* CONTAINER FOR THE FORMS */}
        <div className="flex items-start relative gap-[100px] w-[100%] max-h-[100%] overflow-x-hidden">
          {/* form 1 */}

          <Form1
            handleMoveForward={() => {
              move("forward");
            }}
            handleMoveBack={() => {
              move("back");
            }}
          />

          {/* form 1 */}

          {/* form 2 */}
          <Form2
            handleMoveForward={() => {
              move("forward");
            }}
            handleMoveBack={() => {
              move("back");
            }}
          />
          {/* form 2 */}

          {/* form 3 */}
          <Form3
            handleMoveForward={() => {
              move("forward");
            }}
            handleMoveBack={() => {
              move("back");
            }}
          />
          {/* form 3 */}

          {/* form 4 */}
          <Form4
            handleMoveForward={() => {
              move("forward");
            }}
            handleMoveBack={() => {
              move("back");
            }}
          />
          {/* form 4 */}

          {/* form 5 */}
          <Form5
            handleMoveForward={() => {
              move("forward");
            }}
            handleMoveBack={() => {
              move("back");
            }}
          />
          {/* form 5 */}
        </div>
        {/* CONTAINER FOR THE FORMS */}
      </div>

      {/* ///////////////////// */}
      {/* ///////////////////// */}
      {/* ///////////////////// */}

      {/* CONTAINER FOR THE IMAGE */}

      <div className="bg-black hidden lg:flex lg:w-[50%] lg:min-h-full pt-20  items-start justify-center relative overflow-hidden">
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

export function HeadingBuild({ content, currForm }: myProps) {
  return (
    <div className="sticky top-0 bg-white left-0  py-2  mb-4 flex flex-col z-[2] ">
      <h2 className="font-Hanken font-bold text-3xl mb-4">{content}</h2>
      <MentorProgressBar currForm={currForm} />
    </div>
  );
}

export function SuccessModal() {
  return (
    <div className="text-lg sm:text-2xl flex flex-col gap-6 w-[90%] max-w-[480px] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[20] bg-white rounded-md shadow-xl p-8">
      <div className="flex flex-col items-center">
        <p className="text-Success50 font-Inter text-center font-medium">
          Account creation successful
        </p>
      </div>

      <p className="text-[#121212] font-bold text-center font-Hanken">
        We will review your application and get back to you as soon as possible.
      </p>

      <div className="flex flex-col items-center  gap-4">
        {/* <Button
          variant="primary"
          title="Verify account"
          className="w-full py-2 xl:max-w-[initial] !text-white"
        /> */}
        <Link href="/profile-verification" className="w-full">
          <Button variant="primary" className="w-full py-2 sm:!w-full">
            Verify account
          </Button>
        </Link>
        <Link href="/mentor-profile?path=profile" prefetch>
          <p className="text-base font-Hanken text-center cursor-pointer">
            I&apos;ll do this later
          </p>
        </Link>
      </div>
    </div>
  );
}
