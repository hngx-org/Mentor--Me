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
import styles from "./page.module.css";

import MentorMeIcon from "@/svgs/MentorMeIcon";

import {
  MentorCreationProfileIcon,
  MentorCreationPlusIcon,
  MentorCreationTopEllipse,
  MentorCreationBottomEllipse,
  MentorCreationWoman,
  MentorCreationMan,
  MentorCreationCheckMark,
} from "@/public";

import MentorProgressBar from "@/components/mentorProfileCreation/MentorProgressBar";
import MentorFormBuilder from "@/components/mentorProfileCreation/MentorFormBuilder";
import { Button } from "@/components/buttons/button";

import formData from "@/lib/mentorProfileCreationData";
import { MentorProvider, useMentorContext } from "./MentorContext";

const form1Arr = formData[0];
const form2Arr = formData[1];
const form3Arr = formData[2];
const form4Arr = formData[3];
const form5Arr = formData[4];

export function MentorProfileCreationForms() {
  const { formInputs, setFormInputs } = useMentorContext();
  const [currForm, setCurrForm] = useState(0);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const select1 = useRef<HTMLInputElement>(null);
  const select2 = useRef<HTMLInputElement>(null);
  const select3 = useRef<HTMLInputElement>(null);
  const image1 = useRef<HTMLImageElement>(null);
  const image2 = useRef<HTMLImageElement>(null);
  const image3 = useRef<HTMLImageElement>(null);

  const [files, setFiles] = useState({
    file1: "",
    file2: "",
    file3: "",
  });

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

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5NTFhNDI2OTQzZGIyZjliNjA1MzQiLCJyb2xlIjoibWVudG9yIiwiZW1haWwiOiJheW9ib2x1Zm9yZXZlckBnbWFpbC5jb20iLCJpYXQiOjE2OTcyMDcyODAsImV4cCI6MTY5OTcyNzI4MH0.mCu-QOvo_K8ykakiVv8hwOqrZohh9H02khquIdXRycI";

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
        // console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        // console.error(error);
      });
  }

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

  useEffect(() => {
    if (files.file1) {
      // @ts-ignore
      image1.current!.src = URL.createObjectURL(files.file1);
    }

    if (files.file2) {
      // @ts-ignore
      image2.current!.src = URL.createObjectURL(files.file2);
    }

    if (files.file3) {
      // @ts-ignore
      image3.current!.src = URL.createObjectURL(files.file3);
    }
  }, [files]);

  function move(motion: string) {
    // console.log(forms);
    if (currForm <= 0 && motion === "back") {
      // setCurrForm(forms.length - 1);
    } else if (motion === "back") {
      setCurrForm(currForm - 1);
    }

    if (currForm === 1 && files.file2 === "") {
      alert("please upload a certificate");
      return;
    }

    if (currForm < forms.length - 1 && motion === "forward") {
      setCurrForm(currForm + 1);
    } else if (currForm === forms.length - 1 && motion === "forward") {
      // setCurrForm(0);
      submitData();
      setIsModalShown(true);
    }
  }

  function selectFile(element: any) {
    element.click();
  }
  function showFile(e: any) {
    setIsLoaded(true);

    if ([...e.target.files][0].size > 2 * 1024 * 1024) {
      alert("Image size exceeds 2MB. Please upload a smaller image.");
      return;
    }
    setFiles((prevFile) => ({
      ...prevFile,
      [e.target.id]: [...e.target.files][0],
    }));

    setFormInputs((prevData: any) => ({
      ...prevData,
      [e.target.name]: e.target.files[0].name,
    }));

    // console.log(formInputs);
  }

  return (
    //   {/* // Overall container for the whole page */}
    <div className={`lg:flex-row flex  ${styles.scroll} relative bg-white`}>
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
          <form className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 overflow-y-scroll absolute p-4 sm:p-10 pt-0 ">
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
                  className={`${
                    files.file1 ? "hidden" : "block"
                  } mr-[20px] max-w-[60px] `}
                />
                <img
                  ref={image1}
                  src=""
                  alt=""
                  className=" mr-[20px] max-w-[100px]"
                />

                {/* {files.file1 && } */}
                <div className="flex flex-col">
                  <input
                    ref={select1}
                    className="hidden"
                    type="file"
                    onChange={showFile}
                    id="file1"
                    name="profile_img"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => {
                      selectFile(select1.current);
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
            <MentorFormBuilder
              content={form1Arr}
              handleClick={() => {
                move("forward");
              }}
              handleBack={() => {
                move("back");
              }}
            />
          </form>
          {/* form 1 */}

          {/* form 2 */}
          <div className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 pt-0 overflow-y-scroll opacity-0  absolute p-4 sm:p-10">
            <HeadingBuild
              currForm={currForm}
              content="Good job! let’s us know a little bit more"
            />

            <MentorFormBuilder
              content={form2Arr}
              handleClick={() => {
                move("forward");
              }}
              handleBack={() => {
                move("back");
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
                    name="certification_file"
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

                <div>
                  <img
                    ref={image2}
                    src=""
                    alt=""
                    className=" mr-[20px] max-w-[200px] w-[80%]"
                  />
                  <p>
                    {
                      // @ts-ignore
                      files.file2 && files.file2.name
                    }
                  </p>
                </div>
              </div>
            </MentorFormBuilder>
          </div>
          {/* form 2 */}

          {/* form 3 */}
          <div className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 pt-0 overflow-y-scroll opacity-0  absolute p-4 sm:p-10">
            <HeadingBuild
              currForm={currForm}
              content="Tell us about your educational level"
            />

            <MentorFormBuilder
              content={form3Arr}
              handleClick={() => {
                move("forward");
              }}
              handleBack={() => {
                move("back");
              }}
            >
              <div className="flex flex-col w-full gap-8">
                <div className="flex items-center justify-start gap-4">
                  <input type="checkbox" className="mt-[6px]" />
                  <p className="text-[#121212] font-medium">
                    currently in school
                  </p>
                </div>

                <input
                  ref={select3}
                  className="hidden"
                  type="file"
                  onChange={showFile}
                  id="file3"
                  name="education_file"
                />

                <button
                  type="button"
                  onClick={() => {
                    selectFile(select3.current);
                  }}
                  className="flex items-center ml-[-7px] gap-2 text-Accent1 font-medium cursor-pointer"
                >
                  <Image
                    src={MentorCreationPlusIcon}
                    alt="+"
                    className="max-w-[30px]"
                  />
                  <p>Add other educational qualifications</p>
                </button>

                <div>
                  <img
                    ref={image3}
                    src=""
                    alt=""
                    className=" mr-[20px] max-w-[200px] w-[80%]"
                  />
                  {/* 
                  <p>
                    {
                      // @ts-ignore

                      files.files3 && files.file3.name
                    }
                  </p> */}
                </div>
              </div>
            </MentorFormBuilder>
          </div>
          {/* form 3 */}

          {/* form 4 */}
          <div className="form-container mt-[-10px] sm:mt-0 w-[100%] h-[100%] sm:pt-0 pt-0 overflow-y-scroll opacity-0  absolute p-4 sm:p-10">
            <HeadingBuild
              currForm={currForm}
              content="How would you like to be introduced?"
            />

            <p className="text-Neutral60 font-Inter font-medium text-lg">
              You are just one last step away from being a mentor and connecting
              with mentees all over the world! In this step, let us know
              something about you.
            </p>
            <MentorFormBuilder
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

          {/* form 5 */}
          <div className="form-container w-[100%] h-[100%] sm:pt-0 pt-0 overflow-y-scroll opacity-0  absolute p-4 sm:p-10">
            <HeadingBuild
              currForm={currForm}
              content="Your mentorship details"
            />

            <MentorFormBuilder
              content={form5Arr}
              handleClick={() => {
                move("forward");
              }}
              handleBack={() => {
                move("back");
              }}
            >
              <div className="flex items-center justify-start gap-2">
                <input type="checkbox" className="mt-[6px]" />
                <p className="font-medium font-Inter ">
                  By filling this form, you agree to MentorMe’s{" "}
                  <span className="text-Accent1">Privacy policy</span> and{" "}
                  <span className="text-Accent1">Terms of use</span>.
                </p>
              </div>
            </MentorFormBuilder>
          </div>
          {/* form 5 */}
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
        <Image
          src={MentorCreationCheckMark}
          alt="checkmark"
          className="max-w-[120px] sm:max-w-[initial]"
        />
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

        <Link href="/profile-verification">
          <Button variant="primary" className="w-full py-2 xl:max-w-[initial]">
            Verify account
          </Button>
        </Link>
        <Link href="mentor-profile?path=profile" prefetch>
          <p className="text-base font-Hanken text-center cursor-pointer">
            I&apos;ll do this later
          </p>
        </Link>
      </div>
    </div>
  );
}
