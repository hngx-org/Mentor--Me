"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import HeaderAfterSignUp from "@/components/mentor-profile-verification/HeaderAfterSignUp";
import {
  Amico,
  verificationApproved,
  verificationPending,
  verificationRejected,
  SucessIcon,
} from "@/public";
import Certificates from "@/components/mentor-profile-verification/Certificates";
import Qualifications from "@/components/mentor-profile-verification/Qualifications";
import Achievements from "@/components/mentor-profile-verification/Achievements";
import Identification from "@/components/mentor-profile-verification/Identification";
import StepList from "@/components/mentor-profile-verification/StepList";
import SucessModal from "@/components/mentor-profile-verification/SucessModal";
import {
  PendingStatusIcon,
  ApprovedStatusIcon,
  RejectedStatusIcon,
  CancelIcon,
} from "@/public/SVGs";
import { Button } from "@/components/buttons/button";
import MobileSideBar from "@/components/MobileSideBar";
import { FormData } from "@/components/mentor-profile-verification/types";
import SidebarMentor from "@/components/mentor/SidebarMentor";

export default function MentorProfileVerification() {
  const [step, setStep] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    certificates: {
      certificationName: "",
      issuingInstitution: "",
      graduationYear: "",
      graduationFile: "",
    },
    qualifications: {
      qualification: "",
      yearsExperience: "",
      qualificationDesc: "",
    },
    achievements: {
      achievementName: "",
      issuingOrganization: "",
      yearReceived: "",
      achievementDesc: "",
    },
    identification: {
      fullname: "",
      dateofBirth: "",
      idType: "",
      idNumber: "",
      uploadID: "",
    },
  });

  let token = ""; // declare token variable

  if (typeof window !== "undefined") {
    const getUser = localStorage.getItem("Mentor");
    if (getUser) {
      try {
        const newUser = JSON.parse(getUser);
        token = newUser.data.token; // assign token value here
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const url =
        "https://mentormee-api.onrender.com/mentors/account-verification";
      const requestData = {
        certificates: {
          certificationName: formData.certificates.certificationName,
          issuingInstitution: formData.certificates.issuingInstitution,
          graduationYear: formData.certificates.graduationYear,
          graduationFile: "file.png",
        },
        qualifications: {
          qualification: formData.qualifications.qualification,
          yearsExperience: formData.qualifications.yearsExperience,
          qualificationDesc: formData.qualifications.qualificationDesc,
        },
        achievements: {
          achievementName: formData.achievements.achievementName,
          issuingOrganization: formData.achievements.issuingOrganization,
          yearReceived: formData.achievements.yearReceived,
          achievementDesc: formData.achievements.achievementDesc,
        },
        identification: {
          fullName: formData.identification.fullname,
          dateOfBirth: formData.identification.dateofBirth,
          idType: formData.identification.idType,
          idNumber: formData.identification.idNumber,
          uploadID: "file.png",
        },
      };

      console.log(requestData);

      const response = await axios.post(url, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setShowModal(true);
        setVerificationStatus("pending");
        setStep(0);
        setFormSubmitted(true);
      } else {
        console.error("Unexpected status:", response.status);
        toast.error("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="w-full flex bg-white text-black h-full lg:pb-0 pb-14 ">
        <div className="lg:w-1/4 hidden lg:block ">
          <SidebarMentor />
        </div>
        <div className="lg:w-[90%] w-full h-full">
          <HeaderAfterSignUp step={step} />

          <div className="content my-5 flex flex-col items-center">
            <h1 className="font-Hanken font-[600] md:text-3xl text-2xl">
              Welcome to Mentor Me
            </h1>
            <p className="font-Hanken font-[400] md:text-base text-sm px-3 md:px-0">
              First things first, complete your verification. This will allow us
              to know more about you
            </p>

            <div className="container mt-5 lg:grid grid-cols-6">
              <div className="left-panel col-span-2 lg:ml-10 md:mx-5">
                <StepList
                  step={step}
                  setStep={setStep}
                  formSubmitted={formSubmitted}
                />
              </div>
              <div className="right-panel col-span-4">
                {step === 0 && (
                  <>
                    {verificationStatus === "" && (
                      <div className="flex flex-col justify-center items-center py-20">
                        <Image src={Amico} alt="amico" />

                        <div className="md:px-8 px-3 mt-8">
                          <h5 className="font-Hanken text-[24px] font-[700] lg:text-left text-center">
                            Verify your profile in a few steps and let’s get
                            started!
                          </h5>
                          <p className="font-Hanken text-[16px] font-[400] text-Neutra40 lg:text-left text-center">
                            This application should take no more than 5 - 10
                            minutes. Please complete the following information
                            to verify your qualifications and expertise as a
                            mentor.
                            <br />
                          </p>
                          <p className="mt-2 font-Hanken text-[16px] font-[400] text-Neutra40 lg:text-left text-center">
                            Your credentials will be reviewed to ensure the
                            highest level of professionalism and quality
                            guidance. Your profile will be verified between 24 -
                            48 hours.
                          </p>
                          <Button
                            variant="primary"
                            className="mt-5 w-full py-3 text-center font-Inter font-500 text-[16px]"
                            paddingLess
                            onClick={handleNextStep}
                          >
                            Proceed
                          </Button>
                        </div>
                      </div>
                    )}

                    {verificationStatus === "pending" && (
                      <div className="flex flex-col justify-center items-center lg:ml-5 ml-0 lg:mt-0 mt-6">
                        <div className="w-full bg-[#fffbde] py-3 px-4 border-t-4 border-[#e5b800]">
                          <div className="flex justify-between">
                            <p className="flex font-Inter font-[600] text-[16px] text-[#e5b800]">
                              <PendingStatusIcon />
                              Status
                            </p>
                            <span>
                              <CancelIcon />
                            </span>
                          </div>
                          <p className=" font-Inter font-[500] text-[14px] text-Neutra50">
                            Your application is pending
                          </p>
                        </div>
                        <Image
                          src={verificationPending}
                          alt="amico"
                          className="mt-10"
                        />
                        <div className="md:px-8 px-3 mt-8">
                          <h5 className="font-Hanken text-[24px] font-[700]">
                            Your application has been submitted!
                          </h5>
                          <p className="font-Hanken text-[16px] font-[400] text-Neutra40">
                            Your profile will be verified between 24 - 48 hours.
                          </p>
                        </div>
                      </div>
                    )}

                    {verificationStatus === "approved" && (
                      <div className="flex flex-col justify-center items-center lg:ml-5 ml-0 lg:mt-0 mt-6">
                        <div className="w-full bg-[#e0fff0] py-3 px-4 border-t-4 border-[#386a20]">
                          <div className="flex justify-between">
                            <p className="flex font-Inter font-[600] text-[16px] text-Success60">
                              <ApprovedStatusIcon />
                              Status
                            </p>
                            <span>
                              <CancelIcon />
                            </span>
                          </div>
                          <p className="font-Inter font-[500] text-[14px] text-Neutra50">
                            Your application was approved
                          </p>
                        </div>
                        <Image
                          src={verificationApproved}
                          alt="amico"
                          className="mt-10"
                        />
                        <div className="md:px-8 px-3 mt-8">
                          <h5 className=" font-Hanken text-[24px] font-[700]  text-center">
                            Your application has been approved!
                          </h5>
                          <p className="font-Hanken text-[16px] font-[400] text-Neutra40">
                            Head to approved dashboard
                          </p>

                          <Button
                            variant="primary"
                            className="mt-5 w-full py-3 text-center font-Inter font-500 text-[16px]"
                            paddingLess
                          >
                            <a href="/mentor-profile"> Go to dashboard</a>
                          </Button>
                        </div>
                      </div>
                    )}

                    {verificationStatus === "rejected" && (
                      <div className="flex flex-col justify-center items-center lg:ml-5 ml-0 lg:mt-0 mt-6">
                        <div className="w-full bg-[#ffdcdc] py-3 px-4 border-t-4 border-[#e53535]">
                          <div className="flex justify-between">
                            <p className="flex font-Inter font-[600] text-[16px] text-Error60">
                              <RejectedStatusIcon />
                              Status
                            </p>
                            <span>
                              <CancelIcon />
                            </span>
                          </div>
                          <p className="font-Inter font-[500] text-[14px] text-Neutra50">
                            Your application was rejected
                          </p>
                        </div>
                        <Image
                          src={verificationRejected}
                          alt="amico"
                          className="mt-10"
                        />
                        <div className="md:px-8 px-3 mt-8">
                          <h5 className=" font-Hanken text-[24px] font-[700]">
                            Your application has been rejected
                          </h5>
                          <p className="font-Hanken text-[16px] font-[400] text-Neutra40">
                            Check your email to see the reason your application
                            was rejected
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {step === 1 && (
                  <Certificates
                    onNext={handleNextStep}
                    setFormData={setFormData}
                    formData={formData}
                  />
                )}
                {step === 2 && (
                  <Qualifications
                    onNext={handleNextStep}
                    onPrev={handlePrevStep}
                    setFormData={setFormData}
                    formData={formData}
                  />
                )}
                {step === 3 && (
                  <Achievements
                    onNext={handleNextStep}
                    onPrev={handlePrevStep}
                    setFormData={setFormData}
                    formData={formData}
                  />
                )}
                {step === 4 && (
                  <Identification
                    onPrev={handlePrevStep}
                    handleSubmit={handleSubmit}
                    setFormData={setFormData}
                    formData={formData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <MobileSideBar />
      </div>
      {showModal && (
        <SucessModal
          handleClose={() => setShowModal(false)}
          iconSrc={SucessIcon}
          iconAlt="Sucess Icon"
          title="Submission successful"
          message={`Your application has been submitted. \n
              Your profile will be verified between 24 - 48 hours.`}
          buttonText="Go to dashboard"
        />
      )}
      <ToastContainer />
    </>
  );
}
