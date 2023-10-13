"use client";

import React, { useState } from "react";

import Image from "next/image";

import Link from "next/link";

import auth from "../../../../public/assets/images/auth.jpeg";

import google from "../../../../public/assets/images/goggle.svg";

import facebook from "../../../../public/assets/images/facebook.svg";

import Input from "@/components/inputs/input";

import { Button } from "@/components/buttons/button";
import { useRouter } from "next/navigation";
import formData from "@/lib/mentorProfileCreationData";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import Label from "@/components/label/Label";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    labelErr: "",
  });

  const router = useRouter();

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Validate email
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Validate password
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    setErrors({ ...errors, ...newErrors });
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://mentormee-api.onrender.com/auth/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, role: "mentor" }),
          }
        );
        if (response.ok) {
          const data = await response.json();

          localStorage.setItem("user", JSON.stringify(data?.data));
          router.push("/mentor-auth/otp");
          setErrors({ ...errors, labelErr: "" });
        } else {
          const error = await response.json();
          setErrors({ ...errors, labelErr: error?.message });
        }

        console.log(response);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Form has validation errors. Please correct them.");
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
          <h2 className="text-[#2A2A2A] font-Gladiora text-3xl mt-5">
            Mentor Me
          </h2>
          <div className="flex justify-center flex-col">
            <h4 className="font-Inter font-medium text-[#121212] text-xl mt-3">
              Sign Up
            </h4>
            <h5 className="text-[#808080] text-base font-Hanken mt-2 mb-5">
              Create an account
            </h5>
            <div className="flex flex-col gap-5">
              <Input
                id="email"
                label="Email Address"
                required
                type="email"
                value={email}
                error={errors.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                label="Password"
                required
                type="password"
                value={password}
                error={errors.password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.labelErr && <Label message={errors.labelErr} accent="" />}
            </div>
            <p className="font-Hanken text-[#565656] text-sm my-3">
              {" "}
              By clicking Sign Up, you agree to mentor.Me’s
              <span className="text-[#008080]">Terms of Privacy & Policy</span>
            </p>
            <Link href="/mentor-profile-creation">
              {" "}
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="primary"
                paddingLess
                className="w-full h-[48px]"
              >
                {isLoading ? <LoadingSpinner /> : "Sign Up"}
              </Button>
            </Link>

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
                Sign Up with Google
              </Button>
              <Button
                variant="outline-primary"
                paddingLess
                className="w-full h-[48px]"
                imgSrc={facebook}
                imgAlt="facebook"
              >
                Sign Up with Google
              </Button>
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
    </div>
  );
};
export default SignUpForm;
