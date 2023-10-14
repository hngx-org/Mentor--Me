import React from "react";
import { Metadata } from "next";
import SignUpForm from "./SignUpForm";
import FormWrap from "@/components/inputs/FormWrap";

export const metadata: Metadata = {
  title: "Sign Up",
};
function page() {
  return (
    <div>
      <FormWrap>
        <SignUpForm />
      </FormWrap>
    </div>
  );
}

export default page;
