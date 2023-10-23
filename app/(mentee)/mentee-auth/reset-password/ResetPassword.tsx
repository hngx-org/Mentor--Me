"use client";

import React, { useEffect, useState } from "react";

import { useSearchParams, useRouter } from "next/navigation";

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
  const searchParams = useSearchParams();

  const resetToken = searchParams.get("resetToken");
  const userId = searchParams.get("userId");

  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [imgLoading, setImgLoading] = React.useState(false);

  const router = useRouter();
  useEffect(() => {
    if (!userId && !resetToken) router.replace("/");
  }, []);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  const isSamePassword = (newPassword: string, confirmPassword: string) => {
    if (newPassword !== confirmPassword) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const passwordOK = isSamePassword(newPassword, confirmPassword);
    if (!passwordOK) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const url = "https://mentormee-api.onrender.com/auth/reset-password";

    const requestData = {
      newPassword,
      resetToken,
      userId,
    };

    const response = await fetch(url, {
      method: "PATCH",
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
          <div className="flex w-9/10 xl:w-full mx-auto xl:mx-auto lg:mx-0 lg:max-xl:relative lg:max-xl:left-[8%] flex-col py-[3rem]">
            <a href="/welcome/login" className="flex">
              {" "}
              <BackwardIcon />
            </a>

            <div className="flex justify-center flex-col">
              <h4 className="font-Inter font-medium text-[#121212] text-xl mt-6">
                Reset Password
              </h4>
              <h5 className="text-[#808080] text-base font-Hanken mt-2 mb-5">
                Please enter your new Password
              </h5>
              <div className="flex flex-col gap-5 mb-5">
                <Input
                  id="password"
                  label="New Password"
                  required
                  type="password"
                  name="newPassword"
                  value={newPassword}
                  onChange={(event) => {
                    setNewPassword(event.target.value);
                    setErrorMessage("");
                  }}
                />
                <Input
                  id="password"
                  label="Confirm Password"
                  required
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    setErrorMessage("");
                  }}
                />

                {errorMessage ? (
                  <p className="text-[red]">{errorMessage}</p>
                ) : null}
              </div>

              <Button
                variant="primary"
                paddingLess
                className="w-full py-[1.1rem]"
                onClick={handleSubmit}
              >
                Continue
              </Button>
              <Modal
                isOpen={isOpen}
                closeModal={closeModal}
                content="You have successfully reset your password"
                buttontext="Return to login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
