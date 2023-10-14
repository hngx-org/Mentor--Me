"use client";

import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import FormWrap from "@/components/inputs/FormWrap";
import LoginForm from "./LoginForm";

// // const DynamicLoginForm = dynamic(() => import("./LoginForm"), {
// //   ssr: false,
// // });
// export const metadata: Metadata = {
// //   title: "Login",
// // };
const page = () => (
  <div>
    <FormWrap>
      <LoginForm />
    </FormWrap>
  </div>
);

export default page;
