"use client";

import React, { useState, useRef, useEffect } from "react";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import auth from "../../../../public/assets/images/auth.jpeg";

import { Button } from "@/components/buttons/button";

import Modal from "@/components/modal/Modal";
import generateKey from "@/lib/generatekey";

const OTPForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [userid, setUserId] = useState("");
  const [user, setUser] = useState<any>();
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getUser = localStorage.getItem("Mentee");

      if (getUser) {
        const newUser = JSON.parse(getUser);
        setUser(newUser);
        setEmail(newUser.email);
        setUserId(newUser._id);
      } else {
        router.replace("/mentee-auth/login");
        // console.error("Error parsing JSON:", error);
      }
    }
  }, []);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const verifyEmail = async () => {
    const enteredOTP = otpInputs.map(
      (inputRef) => inputRef.current?.value || ""
    );
    const otpCode = enteredOTP.join("");

    try {
      const response = await fetch(
        "https://mentormee-api.onrender.com/auth/verify-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // @ts-ignore
            userId: userid,
            verificationCode: otpCode,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        openModal();
      }
    } catch (error: any) {
      // console.error("Error", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const resendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://mentormee-api.onrender.com/auth/request-email-verification",
        // "http://localhost:4000/auth/request-email-verification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // @ts-ignore
            userId: userid,
            isNewUser: true,
          }),
        }
      );
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      // console.error("Error", error);
    }
  };
  const otpInputs: Array<React.RefObject<HTMLInputElement | null>> = Array(6)
    .fill(null)
    .map(() => useRef(null));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const newOTP = [...otp];

    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < 5) {
      otpInputs[index + 1]?.current?.focus();
    } else if (!value && index > 0) {
      otpInputs[index - 1]?.current?.focus();
    }

    if (index === 5) {
      verifyEmail();
    }
  };

  return (
    <div>
      <div className="w-full h-[100vh] grid sm:grid-cols-6 overflow-hidden">
        <div className="sm:col-span-3 ">
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={auth}
              alt="Authentication Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-3  px-6  sm:px-16">
          <div className="mt-6">
            <h2 className="text-[#2A2A2A] font-Gladiora text-3xl">Mentor Me</h2>
            <h4 className="font-Inter font-medium text-[#121212] text-xl mt-10">
              OTP Verification
            </h4>
            <h5 className="text-[#808080] text-sm font-Hanken mt-2 mb-10">
              Please enter the 6 digit code sent to {email}
            </h5>

            <div className="flex  space-x-5">
              {otpInputs.map((inputRef, index) => (
                <input
                  key={generateKey(index)}
                  ref={inputRef as React.RefObject<HTMLInputElement> | null}
                  type="text"
                  maxLength={1}
                  value={otp[index]}
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleInputChange(e, index);
                  }}
                  onKeyDown={(e) => {
                    if (e.key.length === 1 && otp[index].length === 1) {
                      e.preventDefault();
                    }
                  }}
                  className="w-10 h-10 border border-gray-300 rounded-md text-center text-2xl"
                />
              ))}
            </div>

            <p className="font-Hanken text-[#565656] text-sm my-5 flex">
              Didn’t receive OTP?{" "}
              <button
                type="button"
                onClick={resendEmail}
                className="text-[#008080]"
              >
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
          router.push("/mentee-profile?path=profile", { scroll: true });
        }}
        content="You have successfully verified your account"
        buttontext="Continue"
        title="Great job"
      />
    </div>
  );
};

export default OTPForm;
