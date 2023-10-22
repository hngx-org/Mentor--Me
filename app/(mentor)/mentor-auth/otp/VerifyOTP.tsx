"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import OTPInput from "@/components/Otp";
import auth from "../../../../public/assets/images/auth.jpeg";
import Modal from "@/components/modal/Modal";

import { BackwardIcon } from "@/public/SVGs";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";

function VerifyOTP() {
  const [otpValue, setOTPValue] = useState("");
  const router = useRouter();

  const [imgLoading, setImgLoading] = React.useState<boolean>(false);
  const [useremail, setUserEmail] = useState("");
  const [userid, setUserId] = useState("");
  const [user, setUser] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const getUser = localStorage.getItem("Mentor");

      if (getUser) {
        try {
          const newUser = JSON.parse(getUser);
          setUser(newUser);
          setUserEmail(newUser.data.email);
          setUserId(newUser.data._id);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }
  }, []);

  const openModal = (): void => {
    setIsOpen(true);
  };
  const handleOtpChange = async (otp: string) => {
    console.log("Number OTP: ", otp);
    console.log(userid);
    setOTPValue(otp); // Assuming you need the OTP as a string

    if (otp.length === 6) {
      axios
        .post("https://mentormee-api.onrender.com/auth/verify-email", {
          userId: userid,
          verificationCode: otp,
        })
        .then((response) => {
          console.log(response.data);
          openModal();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message || "something went wrong");
          console.log(error?.response?.data?.message || "something went wrong");
        });
    }
  };

  const resendEmail = async () => {
    axios
      .post(
        "https://mentormee-api.onrender.com/auth/request-email-verification",
        {
          userId: userid,
          isNewUser: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "something went wrong");
        console.error("Error", error);
      });
  };
  return (
    <div>
      <div className="w-9/10 max-w-[700px] lg:w-4/5 lg:max-xl:w-4/5 xl:w-4/5 lg:max-w-[1350px] mx-auto mt-[4rem] grid grid-cols-1 lg:grid-cols-6 overflow-hidden shadow-xl shadow-gray-100 rounded-[20px]">
        <div className="lg:col-span-3 ">
          {imgLoading && (
            <div className="flex w-full min-h-screen justify-center items-center relative scale-150">
              <LoadingSpinner />
            </div>
          )}
          <div className="w-full h-full relative">
            <Image
              src={auth}
              alt="Authentication Image"
              layout="fill"
              objectFit="cover"
              loading="lazy"
              onLoadingComplete={() => setImgLoading(false)}
            />
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex w-9/10 xl:w-full mx-auto xl:mx-auto lg:mx-0 lg:max-xl:relative lg:max-xl:left-[8%] flex-col py-[3rem] xl:pb-[12rem]">
            <a href="/welcome/login" className="flex">
              {" "}
              <BackwardIcon />
            </a>
            <a
              href="/"
              className="text-[#2A2A2A] block font-Gladiora text-3xl my-[1rem]"
            >
              Mentor Me
            </a>
            <h4 className="font-Inter font-medium text-[#121212] text-xl">
              OTP Verification
            </h4>
            <h5 className="text-[#808080] text-sm font-Hanken mt-2 mb-10">
              Please enter the 6 digit code sent to {useremail}
            </h5>

            <div className="flex  space-x-5">
              <OTPInput
                autoFocus
                length={6}
                className="w-[70%] flex justify-between"
                inputClassName="otpInput"
                onChangeOTP={handleOtpChange}
              />
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
}

export default VerifyOTP;
