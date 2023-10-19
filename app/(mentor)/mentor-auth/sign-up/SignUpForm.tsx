"use client";

import React from "react";

import Image from "next/image";

import Link from "next/link";

import axios from "axios";

import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";

import auth from "../../../../public/assets/images/auth.jpeg";

import google from "../../../../public/assets/images/goggle.svg";

import facebook from "../../../../public/assets/images/facebook.svg";

import Input from "@/components/inputs/input";

import { BackwardIcon } from "@/public/SVGs";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";

export default function SignUpForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [imgLoading, setImgLoading] = React.useState(false);
  const router = useRouter();
  const [isValid, setIsValid] = React.useState(true);

  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    if (form.checkValidity() === false) {
      setIsValid(false);
    } else {
      setIsValid(true);
      axios
        .post("https://mentorme-be.vercel.app/api/auth/register", {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("Mentor", JSON.stringify(response.data));
          router.push("/mentor-auth/otp");
        })
        .catch((error) => {
          console.log(error);
          toast.error(error?.response?.data?.message || "something went wrong");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
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
      <div className="col-span-3  px-4  lg:px-6 xl:px-16 mb-4">
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
            Sign Up
          </h4>
          <h5 className="text-[#808080] text-base font-Hanken mt-2 mb-5">
            Create an account
          </h5>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <Input
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
            />
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
              name="password"
              required
              type="password"
              onChange={handleInputChange}
            />
            <p className="font-Hanken text-[#565656] text-sm my-3">
              {" "}
              By clicking Sign Up, you agree to mentor.Me’s
              <span className="text-[#008080]">Terms of Privacy & Policy</span>
            </p>{" "}
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
          </div>
          <h5 className="font-Hanken mt-3 text-sm text-[#2A2A2A]">
            Already a user?{" "}
            <span className="font-semibold text-[#121212]">
              {" "}
              <Link href="/mentor-auth/login">Log In</Link>
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}
