import React from "react";

import { Metadata } from "next";
import FormWrap from "@/components/inputs/FormWrap";
import ResetPassword from "./ResetPassword";

export const metadata: Metadata = {
  title: "Reset Password",
};
function page() {
  return (
    <div>
      <FormWrap>
        <ResetPassword />
      </FormWrap>
    </div>
  );
}

export default page;
