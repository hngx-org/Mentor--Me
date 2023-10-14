"use client";

import React, { ChangeEvent, useState } from "react";

import Link from "next/link";

import Image from "next/image";

import auth from "../../../../public/assets/images/auth.jpeg";

import back from "../../../../public/assets/Icons/back.png";

import Input from "@/components/inputs/input";

import { Button } from "@/components/buttons/button";

import Modal from "@/components/modal/Modal";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      <div className="w-full h-[100vh] grid grid-cols-1 lg:grid-cols-6  overflow-hidden">
        <div className="lg:col-span-3 ">
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={auth}
              alt="Authentication Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-3  px-4  lg:px-6 xl:px-16">
          <Link href="/">
            <h2 className="text-[#2A2A2A] font-Gladiora text-3xl mt-5">
              Mentor Me
            </h2>
          </Link>
          <Link href="/mentor-auth/login">
            <div className="flex items-center gap-2 my-5">
              <Image src={back} width={20} height={20} alt="back-icon" />
              <h5 className="font-Hanken text-[18px]">Back</h5>
            </div>
          </Link>
          <div className="flex justify-center flex-col">
            <h4 className="font-Inter font-medium text-[#121212] text-xl mt-3">
              Forgot Password
            </h4>
            <p className="font-Hanken text-[#808080] flex justify-end text-sm my-3">
              No worries, we will send your reset instructions to your
              registered email address
            </p>
            <div className="flex flex-col gap-5 mb-5">
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
              className="w-full h-[48px]"
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
  );
};

export default ResetPassword;
