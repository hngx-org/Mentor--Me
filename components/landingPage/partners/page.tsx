"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import AdobeIcon from "../../../public/assets/Icons/landing-page/adobe-icon.png";
import NetflixIcon from "../../../public/assets/Icons/landing-page/netflix-icon.png";
import CourseraIcon from "../../../public/assets/Icons/landing-page/coursera-icon.png";
import GoogleIcon from "../../../public/assets/Icons/landing-page/google-icon.png";
import AirbnbIcon from "../../../public/assets/Icons/landing-page/airbnb-icon.png";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Partners() {
  return (
    <section className="lg:py-[3rem] px-4 ">
      <div className="">
        <h3 className="text-[1.7rem] text-center md:text-[1.2rem] font-semibold mb-[1.5rem] md:mb-[1.2rem]">
          Trusted By top Companies
        </h3>
        <MotionDiv
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full flex justify-center items-center gap-8 max-sm:flex-wrap"
        >
          <Image
            src={AdobeIcon}
            alt="brand logo"
            className="w-fit max-w-[100px] lg:max-w-[200px] sm:grayscale hover:grayscale-0 transition-all duration-300"
          />

          <Image
            src={NetflixIcon}
            alt="brand logo"
            className="w-fit max-w-[100px] lg:max-w-[200px] sm:grayscale hover:grayscale-0 transition-all duration-300"
          />

          <Image
            src={CourseraIcon}
            alt="brand logo"
            className="w-fit max-w-[100px] lg:max-w-[200px] sm:grayscale hover:grayscale-0 transition-all duration-300"
          />

          <Image
            src={GoogleIcon}
            alt="brand logo"
            className="w-fit max-w-[100px] lg:max-w-[200px] sm:grayscale hover:grayscale-0 transition-all duration-300"
          />

          <Image
            src={AirbnbIcon}
            alt="brand logo"
            className="w-fit max-w-[100px] lg:max-w-[200px] sm:grayscale hover:grayscale-0 transition-all duration-300"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
