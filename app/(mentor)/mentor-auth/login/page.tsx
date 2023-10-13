import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import FormWrap from "@/components/inputs/FormWrap";

const DynamicLoginForm = dynamic(() => import("./LoginForm"), {
  ssr: false,
});
export const metadata: Metadata = {
  title: "Login",
};
const page = () => (
  <div>
    <FormWrap>
      <DynamicLoginForm />
    </FormWrap>
  </div>
);

export default page;
