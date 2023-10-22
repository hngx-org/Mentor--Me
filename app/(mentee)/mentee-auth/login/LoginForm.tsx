/* eslint-disable no-unsafe-optional-chaining */

"use client";

import React, { useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { useRouter } from "next/navigation";

import axios from "axios";

import { toast } from "react-toastify";

import auth from "@/public/assets/images/auth.jpeg";

import Input from "@/components/inputs/input";

import { BackwardIcon } from "@/public/SVGs";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import Button from "../../(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";
import EmailValidator from "@/components/inputs/email-validator";
import NonEmptyValidator from "@/components/inputs/non-empty-validator";
import { useAuthCtx } from "@/context/AuthContext";

export default function LoginForm() {
  const router = useRouter();
  const { setUserData } = useAuthCtx();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = React.useState<any>();
  const [isEmailValid, setisEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [inputChanged, setInputChanged] = useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputChanged(true);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
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
          role: "mentee",
        })
        .then((response) => {
          localStorage.setItem("Mentee", JSON.stringify(response.data));
          setUser(response.data);
          setUserData(response.data);

          if (response?.data?.data && response?.data?.data?.user?.profileLink) {
            router.replace("/mentee-profile?path=profile");
          } else {
            router.replace("/mentee-profile-creation");
          }
        })

        .catch((error) => {
          if (error.response && error.response.status === 406) {
            localStorage.setItem("Mentee", JSON.stringify(error.response.data));
            router.push("/mentee-auth/otp");
          } else {
            toast(error?.response?.data?.message || "something went wrong");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
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
        <div className="col-span-3  px-4  lg:px-6 xl:px-16 md:mt-7">
          <div className="flex justify-between items-center">
            <h2 className="text-[#2A2A2A] font-Gladiora text-3xl mt-5">
              <a href="/"> Mentor Me</a>
            </h2>

            <a href="/welcome/login" className="flex">
              {" "}
              <BackwardIcon /> <span className="ms-2">Go back</span>
            </a>
          </div>
          <div className="flex justify-center flex-col">
            <h4 className="font-Inter font-medium text-[#121212] text-xl mt-6">
              Welcome Back
            </h4>
            <h5 className="text-[#808080] text-base font-Hanken mt-2 mb-5">
              Login into your account
            </h5>
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

              <Link href="/mentee-auth/forget-password">
                {" "}
                <p className="font-Hanken text-[#008080] flex justify-end text-sm my-3">
                  Forget Password?
                </p>
              </Link>
              <div className="  flex relative justify-end">
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
                  className={`w-full h-[48px] ${
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
                variant="secondary"
                className="w-full h-[48px] gap-4"
                fullWidth
                loading={isLoading}
                icon={google}
              />
              <Button
                title="Log in with Facebook"
                variant="secondary"
                className="w-full h-[48px] gap-4"
                fullWidth
                loading={isLoading}
                icon={facebook}
              />
            </div> */}
            <Link href="/mentee-auth/sign-up">
              <h5 className="font-Hanken mt-3 text-sm text-[#2A2A2A]">
                New to MentorMe?
                <span className="font-semibold text-[#121212]"> Sign Up</span>
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
