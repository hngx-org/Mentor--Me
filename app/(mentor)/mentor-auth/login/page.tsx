"use client";

import React from "react";
import { Metadata } from "next";
import LoginForm from "./LoginForm";
import FormWrap from "@/components/inputs/FormWrap";

// export const metadata: Metadata = {
//   title: "Login",
// };
const page = () => (
  <div>
    <FormWrap>
      <LoginForm />
    </FormWrap>
  </div>
);

export default page;
