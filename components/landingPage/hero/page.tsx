"use client";

import Image from "next/image";
import { IoSearch } from "react-icons/io5";

import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import HeroImage from "../../../public/assets/images/landing-page/hero-section-images.png";

const TypewriterComponent = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});
export default function Hero() {
  return (
    <section className="sm:py-[5rem] lg:mt-[3rem] ">
      <div className="md:w-5/6 md:max-lg:w-9/10 md:m-auto md:flex justify-between items-center">
        <div className="mb-[3.5rem] md:mb-0 sm:max-w-[600px] mx-auto md:mx-0   w-full">
          <div className="w-full md:max-xl:w-9/10 mx-auto md:max-xl:mx-0 md:w-ful  xl:w-full px-3 sm:px-0 mt-6 sm:mt-0">
            <h2 className="text-[1.5rem]   xl:leading-[1.3] 2xl:text-[55px] sm:text-5xl  font-semibold xl:font-bold font-Inter pb-[1rem] md:pb-[1.5rem]">
              Unleash Your Potential with Expert{" "}
              <span className="bg-gradient-to-r from-[#00ffd5] via-[#0075fa] to-[#db0794] bg-clip-text text-transparent select-none pr-3">
                <TypewriterComponent
                  component="span"
                  options={{
                    autoStart: true,
                    loop: true,
                    strings: ["Guidance", "Insights", "Support", "Mentoring"],
                    delay: 150,
                    // skipAddStyles: true,
                    cursor: "_",
                    deleteSpeed: 100,
                    cursorClassName: "cursor ",
                  }}
                />
              </span>
            </h2>
            <p className="text-[0.85rem] md:text-base md:max-xl:text-[0.9rem]">
              Learn a new skill, launch a project, land your dream career.
              Elevate your potential with MentorMe
            </p>

            <div className="py-[3rem] relative">
              <IoSearch className="h-[20px] w-[20px] absolute top-1/2 -translate-y-1/2 left-2 text-Neutra30" />
              <input
                className="bg-[white] py-[1.1rem] md:py-[1.2rem] pl-[2.4rem] md:pl-[3.5rem] border w-full text-[0.7rem] md:text-[0.8rem] rounded-[6px] outline-none z-[-10]"
                type="text"
                placeholder="Search by skills or role"
              />
              <button
                type="button"
                className="border bg-[black] text-[white] text-[0.7rem] md:text-[0.8rem] w-1/4 md:w-1/5 max-w-[134px] rounded-[8px] absolute py-[0.7rem] md:py-[0.75rem] bottom-[3.4rem] right-[0.5rem] active:scale-95 transition-all duration-300"
                onClick={() => {
                  toast.loading("Searching...", {
                    duration: 3000,
                    iconTheme: { primary: "white", secondary: "black" },
                    style: {
                      background: "black",
                      color: "white",
                    },
                  });
                }}
              >
                Search
              </button>
            </div>

            <div className="leading-6">
              <p className="text-[0.85rem]">
                Tech Experts | Marketing & Finance | Mental Health Experts
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-3/5 max-w-[520px] mx-auto md:mx-0 md:max-w-[680px] md:pl-[1rem] md:max-xl:pl-0 ">
          <Image
            src={HeroImage}
            alt="hero image"
            width={576}
            height={495}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
