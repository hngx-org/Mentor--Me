"use client"

import React, { useState } from "react";
import WalletDetails from "@/components/WalletDetails";
import CardSelect from "@/components/CardSelect";
import CardDetails from "@/components/CardDetails";
import CardReview from "@/components/CardReview";
import CardProcess from "@/components/CardProcess";
import CardSuccess from "@/components/CardSuccess";
import { useRouter } from "next/router";

export default function Earnings() {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    paymentMethod: "",
    name: "",
    accountDetails: "",
    bankName: "",
    amount: "",
  });


  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleUserDetailsChange = (updatedUserDetails) => {
    setUserDetails(updatedUserDetails);
  };

  return (
    <>
      {step === 1 && <WalletDetails onSetStep={handleNext} />}
      {step === 2 && (
        <CardSelect
          onSetStep={handleNext}
          userDetails={userDetails}
          setUserDetails={handleUserDetailsChange}
        />
      )}
      {step === 3 && (
        <CardDetails
          onSetStep={handleNext}
          userDetails={userDetails}
          setUserDetails={handleUserDetailsChange}
          onContinue={() => {
            // Handle continue action
          }}
        />
      )}
      {step === 4 && (
        <CardReview
          onSetStep={handleNext}
          userDetails={userDetails}
          setUserDetails={handleUserDetailsChange}
        />
      )}
      {step === 5 && <CardProcess onSetStep={handleNext} />}
      {step === 6 && <CardSuccess onSetStep={handleNext} />}
    </>
  );
}