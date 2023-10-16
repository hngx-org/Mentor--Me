/* eslint-disable dot-notation */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unsafe-optional-chaining */

"use client";

import React, { useState } from "react";

import Image from "next/image";

import Link from "next/link";

import axios from "axios";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import auth from "../../../../public/assets/images/auth.jpeg";

import google from "../../../../public/assets/images/goggle.svg";

import facebook from "../../../../public/assets/images/facebook.svg";

import Input from "@/components/inputs/input";

import { BackwardIcon } from "@/public/SVGs";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { useAuthCtx } from "@/context/AuthContext";

export default function LoginForm() {
  const [imgLoading, setImgLoading] = React.useState(false);

  const { setUserData } = useAuthCtx();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userD, setUser] = useState<any>();
  const [isValid, setIsValid] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const isDisabled = !formData.email.match(
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      setIsValid(false);
    } else {
      setIsValid(true);

      axios
        .post("https://mentormee-api.onrender.com/auth/login", {
          email: formData.email,
          password: formData.password,
          role: "mentor",
        })
        .then((res) => {
          localStorage.setItem("Mentor", JSON.stringify(res.data));
          localStorage.setItem("MentorToken", res.data?.data?.token);
          setUser(res.data.data);
          if (res?.data?.data?.user?.profileLink) {
            router.replace("/dashboard");
            setIsLoading(false);
          } else {
            router.replace("/mentor-profile-creation");
            setIsLoading(false);
          }
        })
        .catch((error: any) => {
          setIsLoading(false);
          if (error?.response?.status === 406) {
            localStorage.setItem("Mentor", JSON.stringify(error.response.data));
            router.push("/mentor-auth/otp");
          } else {
            toast.error(
              error?.response?.data?.message || "something went wrong"
            );
          }
        });

      if (userD?.data?.user && "profileLink" in userD?.data?.user) {
        router.push("/mentor-profile?path=profile");
      } else {
        router.push("/mentor-profile-creation");
      }
    }
  };

  return (
    <div>
      <div className="w-full h-[100vh] grid grid-cols-1 lg:grid-cols-6  overflow-hidden">
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
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
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

              <Link href="/mentor-auth/forget-password?path=reset-password">
                {" "}
                <p className="font-Hanken text-[#008080] flex justify-end text-sm my-3">
                  Forget Password?
                </p>
              </Link>
              <div className="  flex relative justify-end items-center">
                {isLoading && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-1/2 z-30">
                    <LoadingSpinner />
                  </div>
                )}
                <Button
                  title="Log in"
                  type="submit"
                  variant="primary"
                  className="w-full h-[48px]"
                  fullWidth
                  loading={isLoading}
                  disabled={isDisabled}
                />
              </div>
            </form>

            <div className="flex justify-center w-full">
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
            </div>
            <Link href="mentor-auth/sign-up">
              <h5 className="font-Hanken mt-3 text-sm text-[#2A2A2A]">
                New to MentorMe?
                <Link href="/mentor-auth/sign-up">
                  {" "}
                  <span className="font-semibold text-[#121212]"> Sign Up</span>
                </Link>
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
