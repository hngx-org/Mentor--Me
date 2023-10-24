/* eslint-disable dot-notation */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unsafe-optional-chaining */

"use client";

import React, { useState } from "react";

import Image from "next/image";

import Link from "next/link";

import axios from "axios";

import { useRouter } from "next/navigation";

// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from "react-toastify";

import auth from "../../../../public/assets/images/auth.jpeg";

import google from "../../../../public/assets/images/goggle.svg";

import facebook from "../../../../public/assets/images/facebook.svg";

import Input from "@/components/inputs/input";

import { BackwardIcon } from "@/public/SVGs";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { useAuthCtx } from "@/context/AuthContext";
import EmailValidator from "@/components/inputs/email-validator";
import NonEmptyValidator from "@/components/inputs/non-empty-validator";

export default function LoginForm() {
  const { userData, setUserData } = useAuthCtx();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imgLoading, setImgLoading] = React.useState(false);
  const [isEmailValid, setisEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [inputChanged, setInputChanged] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const isDisabled = !formData.email.match(
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputChanged(true);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    if (form.checkValidity() === false) {
      setisEmailValid(false);
      setIsPasswordValid(false);
    } else {
      setisEmailValid(true);
      setIsPasswordValid(true);
      axios
        .post("https://mentormee-api.onrender.com/auth/login", {
          email: formData.email,
          password: formData.password,
          role: "mentor",
        })
        .then((response) => {
          localStorage.setItem("Mentor", JSON.stringify(response.data));
          setUserData(response.data);

          if (response?.data?.data && response?.data?.data?.user?.profileLink) {
            router.replace("/mentor-profile?path=profile");
            setIsLoading(false);
          } else {
            router.replace("/mentor-profile-creation");
            setIsLoading(false);
          }
        })

        .catch((error) => {
          if (error.response && error.response.status === 406) {
            localStorage.setItem("Mentor", JSON.stringify(error.response.data));
            router.push("/mentor-auth/otp");
          } else {
            toast.error(
              error?.response?.data?.message || "something went wrong"
            );
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      <div className="w-9/10 max-w-[700px] lg:w-4/5 lg:max-xl:w-4/5 xl:w-4/5 lg:max-w-[1350px] mt-[4rem] mx-auto grid grid-cols-1 lg:grid-cols-6 overflow-hidden shadow-xl shadow-gray-100 rounded-[20px]">
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
          <div className="flex justify-between items-center">
            {/* <h2 className="text-[#2A2A2A] font-Gladiora text-3xl mt-5">
              <a href="/"> Mentor Me</a>
            </h2> */}
          </div>

          <div className="flex w-9/10 xl:w-full mx-auto xl:mx-auto lg:mx-0 lg:max-xl:relative lg:max-xl:left-[8%] flex-col py-[3rem]">
            <a href="/welcome/login" className="flex">
              {" "}
              <BackwardIcon />
            </a>
            <h4 className="font-Inter font-medium text-[#121212] text-[1.5rem] my-[1rem]">
              Log in As Mentor
            </h4>
            <form className="flex flex-col gap-5" onSubmit={handleSumbit}>
              <Input
                id="email"
                label="Email Address"
                required
                type="email"
                name="email"
                isValid={
                  inputChanged && !isEmailValid
                    ? "border-red-500"
                    : "border-[#CCC]"
                }
                onChange={handleInputChange}
              />
              <EmailValidator
                email={formData.email}
                setIsValid={setisEmailValid}
                onValidEmail={() => setisEmailValid(true)}
                inputChanged={inputChanged}
              />
              <Input
                id="password"
                label="Password"
                required
                type="password"
                name="password"
                isValid={
                  inputChanged && !isPasswordValid
                    ? "border-red-500"
                    : "border-[#CCC]"
                }
                onChange={handleInputChange}
              />
              <NonEmptyValidator
                text={formData.password}
                setIsValid={setIsPasswordValid}
                onValidText={() => setIsPasswordValid(true)}
                inputChanged={inputChanged}
              />

              <Link href="/mentor-auth/forget-password?path=reset-password">
                {" "}
                <p className="font-Hanken text-[#008080] flex justify-end text-sm ">
                  Forget Password?
                </p>
              </Link>
              <div className="flex relative justify-end ">
                {isLoading && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-1/2 z-30">
                    <LoadingSpinner />
                  </div>
                )}
                <Button
                  title="Log in"
                  type="submit"
                  variant="primary"
                  disabled={!isEmailValid || !isPasswordValid}
                  className={`w-full py-[1.1rem] ${
                    !isEmailValid || !isPasswordValid
                      ? "opacity-60 hover:bg-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                  fullWidth
                  loading={isLoading}
                />
              </div>
            </form>

            {/* <div className="flex justify-center w-full">
              <h5 className="font-inter text-[#565656] text-sm font-medium my-5">
                OR
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                title="Log in with Google"
                variant="primary"
                className="w-full h-[48px] gap-4"
                fullWidth
                loading={isLoading}
                icon={google}
              />
              <Button
                title="Log in with Facebook"
                variant="primary"
                className="w-full h-[48px] gap-4"
                fullWidth
                loading={isLoading}
                icon={facebook}
              />
            </div> */}
            <Link href="mentor-auth/sign-up">
              <h5 className="font-Hanken mt-[1.5rem] text-sm text-[#2A2A2A]">
                New to MentorMe?{" "}
                <span className="font-semibold text-[#121212]">
                  {" "}
                  <Link href="/mentor-auth/sign-up"> Sign Up </Link>
                </span>
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
