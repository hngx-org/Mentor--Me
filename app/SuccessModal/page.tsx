import React from "react";
import { SuccessImg } from "@/public";

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[700px] h-[600px] bg-white rounded-[8px]">
        <div className="flex flex-col items-center justify-center mt-[15%]">
          <img
            className="w-[164px] h-[164px]"
            src={SuccessImg}
            alt="cardRectangle1"
            width={164}
            height={164}
          />
          <p className="text-[20px] text-[#37A85D] mt-[5px]">Success!</p>
          <p className="mt-[20px] text-[#121212] text-[16px]">
            Your payment is being processed.
          </p>
          <button
            type="button"
            className="mt-[60px] w-[375px] h-[50px] pl-[50px] pr-[50px] pt-[10px] pb-[10px] bg-[#121212] text-[#FFFFFF] rounded-[8px]"
          >
            Complete Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
