import React from "react";

import FormWrap from "@/components/inputs/FormWrap";

import OTPForm from "./OTPForm";
import VerifyOTP from "./VerifyOTP";

function page() {
  return (
    <div>
      <FormWrap>
        {/* <OTPForm /> */}
        <VerifyOTP />
      </FormWrap>
    </div>
  );
}

export default page;
