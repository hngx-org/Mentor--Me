import React from "react";
import Image from "next/image";
import { WhereLogo } from "@/public";

const UserExperience2 = () => (
  <div className=" -mt-14 lg:mt-10 md:mt-10 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 ml-10 mb-20">
    <div>
      <h3 className=" mt-8 font-Inter text-base font-medium text-black mb-4 ">
        Certifications{" "}
        <span className="rounded-full px-2 py-1 h-4 w-5 bg-Accent1 text-white">
          2
        </span>
      </h3>
      <div className=" flex items-center gap-3 ">
        <Image src={WhereLogo} width={30} height={20} alt="alogo" />
        <div>
          <h4 className="font-Inter text-base font-semibold text-black ">
            Cousera
          </h4>
          <p>Google UX Certificate</p>
        </div>
      </div>
      <div className=" flex items-center gap-3 mt-4">
        <Image src={WhereLogo} width={30} height={20} alt="aloho" />
        <div>
          <h4 className="font-Inter text-base font-semibold text-black">
            ABXYZ University
          </h4>
          <p>Bachelor of Science in Computer Science</p>
        </div>
      </div>
    </div>
  </div>
);

export default UserExperience2;
