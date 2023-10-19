"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import OTPInput from "@/components/Otp";
import auth from "../../../../public/assets/images/auth.jpeg";
import Modal from "@/components/modal/Modal";

function VerifyOTP() {
  const [otpValue, setOTPValue] = useState("");
  const router = useRouter();
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
        .post("https://mentorme-be.vercel.app/api/auth/verify-email", {
          email: useremail,
          verification_token: otp,
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
      .post("https://mentorme-be.vercel.app/api/auth/request-otp", {
        email: useremail,
      })
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
            <a href="/" className="text-[#2A2A2A] font-Gladiora text-3xl">
              Mentor Me
            </a>
            <h4 className="font-Inter font-medium text-[#121212] text-xl mt-10">
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
