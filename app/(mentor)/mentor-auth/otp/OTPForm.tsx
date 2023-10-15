"use client";

import React, { useState, useRef, useEffect } from "react";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import auth from "../../../../public/assets/images/auth.jpeg";

import Modal from "@/components/modal/Modal";
import generateKey from "@/lib/generatekey";

const OTPForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [userid, setUserId] = useState("");
  const [user, setUser] = useState<any>();
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const otpInputs: Array<React.RefObject<HTMLInputElement | null>> = Array(6)
    .fill(null)
    .map(() => useRef(null));

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const getUser = localStorage.getItem("Mentor");

      if (getUser) {
        try {
          const newUser = JSON.parse(getUser);
          setUser(newUser);
          setEmail(newUser.data.email);
          setUserId(newUser.data._id);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }
  }, []);
  const router = useRouter();

  const openModal = (): void => {
    setIsOpen(true);
  };

  // function hashEmail(email: string) {
  //   if (!email) {
  //     throw new Error("Email is required");
  //   }

  //   const [username, domain] = email.split("@");

  //   const hashedUsername =
  //     username.substring(0, 2) + "*".repeat(username.length - 4);

  //   const hashedEmail = `${hashedUsername} "@" ${domain}`;

  //   return hashedEmail;
  // }
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
      } else {
        alert("Incorrect Otp. Try Again");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const resendEmail = async () => {
    try {
      const response = await fetch(
        "https://mentormee-api.onrender.com/auth/request-email-verification",
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
    } catch (error) {
      // console.error("Error", error);
    }
  };

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
              Please enter the 6 digit code sent to{" "}
              {/* {user && hashEmail(user?.email)} */}
              {email}
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
          router.push("/mentor-profile-creation", { scroll: true });
        }}
        content="You have successfully verified your account"
        buttontext="Continue"
        title="Great job"
      />
    </div>
  );
};

export default OTPForm;
