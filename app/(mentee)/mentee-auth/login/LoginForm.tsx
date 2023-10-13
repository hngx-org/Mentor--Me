import React from "react";

import Image from "next/image";

import Link from "next/link";

import auth from "@/public/assets/images/auth.jpeg";

import google from "@/public/assets/images/goggle.svg";

import facebook from "@/public/assets/images/facebook.svg";

import Input from "@/components/inputs/input";

import { Button } from "@/components/buttons/button";

const LoginForm = () => (
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
            Welcome Back
          </h4>
          <h5 className="text-[#808080] text-base font-Hanken mt-2 mb-5">
            Login into your account
          </h5>
          <div className="flex flex-col gap-5">
            <Input id="email" label="Email Address" required type="email" />
            <Input id="password" label="Password" required type="password" />
          </div>
          <Link href="/mentee-auth/forget-password">
            {" "}
            <p className="font-Hanken text-[#008080] flex justify-end text-sm my-3">
              Forget Password?
            </p>
          </Link>

          <Button variant="primary" paddingLess className="w-full h-[48px]">
            Log in
          </Button>
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
export default LoginForm;
