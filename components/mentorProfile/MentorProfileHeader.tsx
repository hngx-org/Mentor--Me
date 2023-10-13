import Image from "next/image";
import { ProfileImage } from "@/public";
import { Button } from "../buttons/button";

export default function MentorProfileHeader() {
  return (
    <div className="w-[100%] h-[294px]   relative flex flex-col  ">
      <div className="h-[50%] w-[100%]  bg-blue-500 bg-[url('/assets/mentor-profileBanner.png')] bg-cover bg-no-repeat" />
      <div className="h-[50%] w-[100%] bg-white " />
      <div className=" w-[80%]   h-fit flex  flex-col items-center space-y-2 sm:space-x-2  sm:flex-row self-center absolute  top-[100px] sm:top-[80px] ">
        <div className=" w-[90px] h-[90px] sm:w-[180px] sm:h-[180px]  rounded-full">
          <Image
            className=" object-cover object-center "
            src={ProfileImage}
            width={200}
            height={200}
            alt="ths profileImage"
          />
        </div>
        <div className=" w-[100%] flex flex-col items-center sm:flex-row sm:justify-between   ">
          <div className="flex  flex-col items-center sm:items-start w-[100%]">
            <p className="text-Neutra60 font-[700] text-lg">Shade Mayowa</p>
            <p className="text-Neutra40 text-sm"> product designer</p>
          </div>
          <div className="flex justify-center space-x-4 min-w-fit py-2 items-center">
            <p>icon </p>
            <Button
              variant="outline-primary"
              paddingLess
              className="px-1  sm:px-2 sm:py-2 "
            >
              Edit profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
