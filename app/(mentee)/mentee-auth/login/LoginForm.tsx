/* eslint-disable no-unsafe-optional-chaining */

"use client";

import React, { useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { useRouter } from "next/navigation";

import axios from "axios";

import { toast } from "react-toastify";

import auth from "@/public/assets/images/auth.jpeg";

import google from "@/public/assets/images/goggle.svg";

import facebook from "@/public/assets/images/facebook.svg";

import Input from "@/components/inputs/input";

import { Button } from "@/components/buttons/button";
import { BackwardIcon } from "@/public/SVGs";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = React.useState<any>();
  const [isValid, setIsValid] = React.useState(true);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
      setIsValid(false);
    } else {
      setIsValid(true);

      try {
        const response = await axios.post(
          "https://mentormee-api.onrender.com/auth/login",
          {
            email: formData.email,
            password: formData.password,
            role: "mentee",
          }
        );
        localStorage.setItem("Mentee", JSON.stringify(response.data));
        setUser(response.data);

        router.replace("/mentee-profile-creation");
      } catch (error: any) {
        if (error.response && error.response.status === 406) {
          localStorage.setItem("Mentee", JSON.stringify(error.response.data));
          router.push("/mentee-auth/otp");
        } else {
          toast(error?.response?.data?.message || "something went wrong");
        }
      }
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
            <h4 className="font-Inter font-medium text-[#121212] text-xl mt-3">
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
                onChange={handleInputChange}
              />
              <Input
                id="password"
                label="Password"
                required
                type="password"
                name="password"
                onChange={handleInputChange}
              />

              <Link href="/mentee-auth/forget-password">
                {" "}
                <p className="font-Hanken text-[#008080] flex justify-end text-sm my-3">
                  Forget Password?
                </p>
              </Link>
              <div className="flex relative justify-end">
                {isLoading && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-1/2 z-30">
                    <LoadingSpinner />
                  </div>
                )}
                <Button
                  variant="primary"
                  paddingLess
                  className="w-full h-[48px]"
                  type="submit"
                >
                  Log in
                </Button>
              </div>
            </form>

            <div className="flex justify-center w-full">
              <h5 className="font-inter text-[#565656] text-sm font-medium my-5">
                OR
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                variant="outline-primary"
                paddingLess
                className="w-full h-[48px]"
                imgSrc={google}
                imgAlt="google"
              >
                Log in with Google
              </Button>
              <Button
                variant="outline-primary"
                paddingLess
                className="w-full h-[48px]"
                imgSrc={facebook}
                imgAlt="facebook"
              >
                Log in with Google
              </Button>
            </div>
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
