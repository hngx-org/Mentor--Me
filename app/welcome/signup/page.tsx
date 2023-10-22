"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import mentee from "@/public/assets/images/mentee.jpeg";
import { BackwardIcon } from "@/public/SVGs";
import LoadingSpinner from "../../../components/loaders/LoadingSpinner";

// export const metadata: Metadata = {
//   title: "Login",
// };

const Page = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // const handleGoBack = () => {
  //   if (isBrowser) {
  //     window.history.back();
  //   }
  // };

  return (
    <div className="sm:px-16 px-6">
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <h2 className="text-[#2A2A2A] font-Gladiora text-3xl mt-5">
            <a href="/">Mentor Me</a>
          </h2>
          <Link href="/">
            <button
              type="button"
              className="flex mt-5 text-[#2A2A2A] cursor-pointer"
            >
              {" "}
              <BackwardIcon /> <span className="ms-2">Go back</span>
            </button>
          </Link>
          <div className="flex flex-col gap-8 font-Hanken justify-center items-center md:h-[80vh] h-[100vh] md:my-[0px] my-[160px]">
            <h4 className="font-semibold md:text-[28px] text-base text-[#000]">
              How do you want to get involved?
            </h4>

            <div className="flex sm:flex-row flex-col gap-8 ">
              <Link href="/mentee-auth/sign-up">
                <div className="flex items-center flex-col  bg-[#121212] p-5 rounded-[6px]">
                  <Image
                    src={mentee}
                    alt="Authentication Image"
                    width={350}
                    height={400}
                    className="rounded-[6px]"
                  />
                  <h5 className="text-[#FFF] font-Hanken mt-3 mb-2 text-[22px]">
                    Mentee
                  </h5>
                  <p className="text-[#FFF] font-Hanken">
                    You’ll be able to book mentors, find <br />
                    resources and join communities.
                  </p>
                </div>
              </Link>
              <Link href="/mentor-auth/sign-up">
                <div className="flex items-center flex-col  bg-[#121212] p-5 rounded-[6px]">
                  <Image
                    src={mentee}
                    alt="Authentication Image"
                    width={350}
                    height={400}
                    className="rounded-[6px]"
                  />
                  <h5 className="text-[#FFF] font-Hanken mt-3 mb-2 text-[22px]">
                    Mentor
                  </h5>
                  <p className="text-[#FFF] font-Hanken">
                    You’ll be able to book mentors, find <br />
                    resources and join communities.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
