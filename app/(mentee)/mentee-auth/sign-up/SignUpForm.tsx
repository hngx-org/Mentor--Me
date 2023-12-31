"use client";

import React from "react";

import Image from "next/image";

import Link from "next/link";

import axios from "axios";

import { toast } from "react-toastify";

import { useRouter } from "next/navigation";

import auth from "../../../../public/assets/images/auth.jpeg";

import google from "../../../../public/assets/images/goggle.svg";

import facebook from "../../../../public/assets/images/facebook.svg";

import Input from "@/components/inputs/input";

import { BackwardIcon } from "@/public/SVGs";
import Button from "../../(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import EmailValidator from "@/components/inputs/email-validator";
import PasswordPopover from "@/components/inputs/password-validator";

export default function SignUpForm() {
  const router = useRouter();
  const [imgLoading, setImgLoading] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEmailValid, setisEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [inputChanged, setInputChanged] = React.useState(false);

  const [formData, setFormData] = React.useState({
    // first_name: "",
    // last_name: "",
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
        .post("https://mentormee-api.onrender.com/auth/register", {
          // first_name: formData.first_name,
          // last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
          role: "mentee",
        })
        .then((response) => {
          localStorage.setItem("Mentee", JSON.stringify(response.data));
          router.push("/mentee-auth/otp");
        })

        .catch((error) => {
          // console.error("An error occurred: ", error);
          toast.error(error?.response?.data?.message || "something went wrong");
        })
        .finally(() => {
          setIsLoading(false);
        });
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

        <div className="col-span-3  px-4  lg:px-6 xl:px-16 ">
          <div className="flex justify-between items-center">
            {/* <h2 className="text-[#2A2A2A] font-Gladiora text-3xl mt-5">
              <a href="/"> Mentor Me</a>
            </h2> */}
          </div>

          <div className="flex w-9/10 xl:w-full mx-auto xl:mx-auto lg:mx-0 lg:max-xl:relative lg:max-xl:left-[8%] flex-col py-[3rem] pb-[5rem]">
            <a href="/welcome/signup" className="flex">
              {" "}
              <BackwardIcon />
            </a>
            <h4 className="font-Inter font-medium text-[#121212] text-[1.5rem] my-[1rem]">
              Sign Up As Mentee
            </h4>
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSumbit}
              noValidate
            >
              {/* <Input
                id="first_name"
                label="First Name"
                required
                type="first_name"
                name="first_name"
                onChange={handleInputChange}
              />
              <Input
                id="last_name"
                label="Last Name"
                required
                type="last_name"
                name="last_name"
                onChange={handleInputChange}
              /> */}
              <Input
                id="email"
                label="Email Address"
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
                name="password"
                type="password"
                isValid={
                  inputChanged && !isPasswordValid
                    ? "border-red-500"
                    : "border-[#CCC]"
                }
                onChange={handleInputChange}
              />

              <PasswordPopover
                password={formData.password}
                inputChanged={inputChanged}
                setIsPaswordValid={setIsPasswordValid}
              />

              <p className="font-Hanken text-[#565656] text-sm my-3">
                {" "}
                By clicking Sign Up, you agree to mentor.Me’s
                <span className="text-[#008080]">
                  Terms of Privacy & Policy
                </span>
              </p>

              <div className="  flex relative justify-end">
                {isLoading && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-1/2 z-30">
                    <LoadingSpinner />
                  </div>
                )}

                <Button
                  title="Sign up"
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
                title="Sign up with Google"
                variant="secondary"
                className="w-full h-[48px] gap-4"
                fullWidth
                loading={isLoading}
                icon={google}
              />
              <Button
                title="Sign up with Facebook"
                variant="secondary"
                className="w-full h-[48px] gap-4"
                fullWidth
                loading={isLoading}
                icon={facebook}
              />
            </div> */}
            <h5 className="font-Hanken mt-[1.5rem] text-sm text-[#2A2A2A]">
              Already a user?{" "}
              <span className="font-semibold text-[#121212]">
                {" "}
                <Link href="/mentee-auth/login">Log In</Link>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
