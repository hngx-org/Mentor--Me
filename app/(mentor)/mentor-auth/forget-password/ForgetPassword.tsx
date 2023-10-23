"use client";

import React, { ChangeEvent, useState } from "react";

import Link from "next/link";

import Image from "next/image";

import auth from "../../../../public/assets/images/auth.jpeg";

import back from "../../../../public/assets/Icons/back.png";

import Input from "@/components/inputs/input";

import { Button } from "@/components/buttons/button";

import Modal from "@/components/modal/Modal";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { BackwardIcon } from "@/public/SVGs";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imgLoading, setImgLoading] = React.useState(false);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    const url =
      "https://mentormee-api.onrender.com/auth/request-password-reset";

    const requestData = {
      email,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      const responseData = await response.json();
      // console.log('Success:', responseData);
      openModal();
    } else {
      // console.error("Error", response.status, response.statusText)
    }
  };

  return (
    <div>
      <div className="w-9/10 max-w-[700px] lg:w-4/5 lg:max-xl:w-4/5 xl:w-4/5 lg:max-w-[1350px] mx-auto mt-[4rem] grid grid-cols-1 lg:grid-cols-6 overflow-hidden shadow-xl shadow-gray-100 rounded-[20px]">
        <div className="lg:col-span-3 ">
          {imgLoading && (
            <div className="flex w-full min-h-screen justify-center items-center relative scale-150">
              <LoadingSpinner />
            </div>
          )}
          <div className="w-full h-full relative">
            <Image
              src={auth}
              alt="Authentication Image"
              layout="fill"
              objectFit="cover"
              loading="lazy"
              onLoadingComplete={() => setImgLoading(false)}
              className="hidden lg:block"
            />
          </div>
        </div>
        <div className="col-span-3  px-4  lg:px-6 xl:px-16">
          <div className="flex w-9/10 xl:w-full mx-auto xl:mx-auto lg:mx-0 lg:max-xl:relative lg:max-xl:left-[8%] flex-col py-[3rem] xl:pb-[12rem]">
            <a href="/welcome/login" className="flex">
              {" "}
              <BackwardIcon />
            </a>
            <div className="flex justify-center flex-col">
              <h4 className="font-Inter font-medium text-[#121212] text-xl mt-6">
                Forgot Password
              </h4>
              <p className="font-Hanken text-[#808080] flex justify-end text-sm my-5">
                No worries, we will send your reset instructions to your
                registered email address
              </p>
              <div className="flex flex-col gap-5 my-[1rem]">
                <Input
                  id="password"
                  label="Email Address"
                  required
                  type="email"
                  name="mentor-email"
                  value={email}
                  onChange={handleChange}
                />
              </div>

              <Button
                variant="primary"
                paddingLess
                className="w-full py-[1.1rem]"
                onClick={handleSubmit}
              >
                Reset Password
              </Button>
              <Modal
                isOpen={isOpen}
                closeModal={closeModal}
                content="A resent link has been sent to your email address. Please follow the instructions to reset your password"
                buttontext="Check Inbox"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
