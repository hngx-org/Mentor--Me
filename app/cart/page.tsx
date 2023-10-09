"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  CartImgPath1,
  CartImgPath2,
  CartImgPath3,
  CardRectangle1,
  CardRectangle2,
  CardRectangle3,
} from "@/public";
import {
  YellowStar,
  GrayStar,
  CartArrowLeftIcon,
  CartArrowRightIcon,
} from "@/public/SVGs";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

export default function cart() {
  const router = useRouter();
  return (
    <div>
      <div>
        <MenteeSideBar />
      </div>

      <div className="ml-[270px]">
        <h1 className="ml-[50px] mt-[10px] mb-[15px] text-[24px] w-[50px] h-[29px] font-[500]">
          Cart
        </h1>
        <hr className="text-[#CCCCCC]" />
        <p className=" font-[400] text-[32px] w-[221px] ml-[50px] pt-2">
          Shoping Cart
        </p>
        <p className="text-[#2A2A2A] w-[150px] ml-[50px] pt-5 text-[15px]">
          2 Courses in Cart
        </p>
        <div className="flex">
          <div className=" ml-[50px] mt-5">
            <hr className="text-[#CCCCCC] w-[770px]" />
            <div className="flex mt-[35px]">
              <div className="flex w-[353px] mb-[10px]">
                {/* <Image className="rounded-[8px]" src={CartImg} alt="Cart1" width={80} height={80} /> */}
                <img className="mt-[-25px]" src={CartImgPath1} alt="cartimg" />
                <div className="ml-3">
                  <p className="text-[16px] mt-[-15px] text-[#2A2A2A]">
                    How to manage business
                  </p>
                  <p className="text-[#808080] text-[12px]">MaryAnn Clive</p>
                  <div className="flex">
                    <div className="flex mt-[3px]">
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <GrayStar />
                      </div>
                    </div>
                    <div className="mr-[5px] text-[12px]">4.5</div>
                    <p className="text-[12px]">|</p>
                    <div className="ml-[5px] text-[12px]">
                      <p>20 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-[120px]">
                <p className="text-[#008080] text-[14px] font-400 ml-[30px]">
                  Remove
                </p>
                <p className="text-[#008080] text-[14px] font-400">
                  Save for later
                </p>
              </div>
              <div className="ml-[150px] mt-[10px]">
                <p className="font-500 text-[18px]">N4,500</p>
              </div>
            </div>

            <div className="flex mt-[35px]">
              <div className="flex w-[353px]">
                <img className="mt-[-25px]" src={CartImgPath2} alt="cartimg" />
                <div className="ml-3">
                  <p className="font-400 text-[16px] mt-[-15px] text-[#2A2A2A]">
                    Collaboration in the workspace
                  </p>
                  <p className="text-[#808080] text-[12px]">MaryAnn Clive</p>
                  <div className="flex">
                    <div className="flex mt-[3px]">
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <GrayStar />
                      </div>
                    </div>
                    <div className="mr-[5px] text-[12px]">4.5</div>
                    <p className="text-[12px]">|</p>
                    <div className="ml-[5px] text-[12px]">
                      <p>20 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-[120px]">
                <p className="text-[#008080] text-[14px] font-400 ml-[30px]">
                  Remove
                </p>
                <p className="text-[#008080] text-[14px] font-400">
                  Save for later
                </p>
              </div>
              <div className="ml-[150px] mt-[10px]">
                <p className="font-500 text-[18px]">N4,500</p>
              </div>
            </div>

            <p className="text-[#2A2A2A] text-[18px] font-[500] leading-[21.6px] mt-[20px]">
              Saved for later
            </p>
            <hr className="text-[#CCCCCC] w-[770px] mt-[10px]" />
            <div className="flex mt-[35px]">
              <div className="flex w-[353px]">
                <img className="mt-[-25px]" src={CartImgPath3} alt="cartimg" />
                <div className="ml-3">
                  <p className="font-400 text-[16px] mt-[-15px] text-[#2A2A2A] leading-[20.3px]">
                    UX Principles for Designers
                  </p>
                  <p className="text-[#808080] text-[12px] leading-[20.3px]">
                    Daryl White
                  </p>
                  <div className="flex">
                    <div className="flex mt-[3px]">
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <GrayStar />
                      </div>
                    </div>
                    <div className="mr-[5px] text-[12px]">4.5</div>
                    <p className="text-[12px]">|</p>
                    <div className="ml-[5px] text-[12px]">
                      <p>20 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-[120px]">
                <p className="text-[#008080] text-[14px] font-400 ml-[30px]">
                  Remove
                </p>
                <p className="text-[#008080] text-[14px] font-400">
                  Save for later
                </p>
              </div>
              <div className="ml-[150px] mt-[10px]">
                <p className="font-500 text-[18px]">N4,500</p>
              </div>
            </div>
          </div>

          <div className="ml-[100px] mt-[-20px]">
            <p className="text-[#565656] text-[18px] font-[500] leading-[38.4px]">
              Total:
            </p>
            <p className="text-[32px] leading-[38.4px] font-[500]">N4,500</p>
            <button
              onClick={() => router.push("/checkout")}
              type="button"
              className="mt-[20px] w-[298px] pl-[50px] pr-[50px] pt-[10px] pb-[10px] bg-[#121212] text-[#FFFFFF] rounded-[8px]"
            >
              checkout
            </button>
            <button
              type="button"
              className="mt-[20px] w-[298px] pl-[50px] pr-[50px] pt-[10px] pb-[10px] bg-[#FFFFFF] text-[16px] text-[#121212] border-[1px] border-[#121212] rounded-[8px]"
            >
              cancel
            </button>
          </div>
        </div>

        <div className="ml-[50px]">
          <div className="flex justify-between mt-[30px]">
            <p className="w-[607.64px] font-[400] mb-[5px] text-[32px]">
              You might also like
            </p>
            <div className="flex">
              <div className="mr-[30px]">
                <CartArrowLeftIcon />
              </div>
              <div className="mr-[50px]">
                <CartArrowRightIcon />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="border rounded-[8px] w-[403px] h-[378px]">
              <div>
                <img
                  className="w-[403px] h-[167px]"
                  src={CardRectangle1}
                  alt="cardRectangle1"
                  width={403}
                  height={167}
                />
                <div className="ml-3 mt-[30px]">
                  <p className="font-400 text-[16px] mt-[-15px] text-[#2A2A2A] leading-[20.3px]">
                    UX Principles for Designers
                  </p>
                  <p className="text-[#808080] text-[12px] leading-[20.3px]">
                    Daryl White
                  </p>
                  <div className="flex">
                    <div className="flex mt-[3px]">
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <GrayStar />
                      </div>
                    </div>

                    <div className="mr-[5px] text-[12px]">4.5</div>
                    <p className="text-[12px]">|</p>
                    <div className="ml-[5px] text-[12px]">
                      <p>20 reviews</p>
                    </div>
                  </div>
                  <p className="text-[24px] mt-[10px] leading-[28.8px] font-[500]">
                    N3,000
                  </p>
                  <div>
                    <button
                      onClick={() => router.push("/checkout")}
                      type="button"
                      className="mt-[20px] w-[112px] h-[40px] p-[5px] bg-[#121212] text-[#FFFFFF] rounded-[8px]"
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="mt-[20px] w-[148px] h-[40px] ml-[20px] p-[5px] bg-[#FFFFFF] text-[16px] text-[#121212] border-[1px] border-[#121212] rounded-[8px]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-[8px] ml-[50px] w-[403px] h-[378px]">
              <div>
                <img
                  className="w-[403px] h-[167px]"
                  src={CardRectangle2}
                  alt="cardRectangle1"
                  width={403}
                  height={167}
                />
                <div className="ml-3 mt-[30px]">
                  <p className="font-400 text-[16px] mt-[-15px] text-[#2A2A2A] leading-[20.3px]">
                    UX Principles for Designers
                  </p>
                  <p className="text-[#808080] text-[12px] leading-[20.3px]">
                    Daryl White
                  </p>
                  <div className="flex">
                    <div className="flex mt-[3px]">
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <GrayStar />
                      </div>
                    </div>
                    <div className="mr-[5px] text-[12px]">4.5</div>
                    <p className="text-[12px]">|</p>
                    <div className="ml-[5px] text-[12px]">
                      <p>20 reviews</p>
                    </div>
                  </div>
                  <p className="text-[24px] mt-[10px] leading-[28.8px] font-[500]">
                    N3,000
                  </p>
                  <div>
                    <button
                      onClick={() => router.push("/checkout")}
                      type="button"
                      className="mt-[20px] w-[112px] h-[40px] p-[5px] bg-[#121212] text-[#FFFFFF] rounded-[8px]"
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="mt-[20px] w-[148px] h-[40px] ml-[20px] p-[5px] bg-[#FFFFFF] text-[16px] text-[#121212] border-[1px] border-[#121212] rounded-[8px]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-[8px] ml-[50px] w-[403px] h-[378px]">
              <div>
                <img
                  className="w-[403px] h-[167px]"
                  src={CardRectangle3}
                  alt="cardRectangle1"
                  width={403}
                  height={167}
                />
                <div className="ml-3 mt-[30px]">
                  <p className="font-400 text-[16px] mt-[-15px] text-[#2A2A2A] leading-[20.3px]">
                    UX Principles for Designers
                  </p>
                  <p className="text-[#808080] text-[12px] leading-[20.3px]">
                    Daryl White
                  </p>
                  <div className="flex">
                    <div className="flex mt-[3px]">
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <YellowStar />
                      </div>
                      <div className="mr-[5px]">
                        <GrayStar />
                      </div>
                    </div>
                    <div className="mr-[5px] text-[12px]">4.5</div>
                    <p className="text-[12px]">|</p>
                    <div className="ml-[5px] text-[12px]">
                      <p>20 reviews</p>
                    </div>
                  </div>
                  <p className="text-[24px] mt-[10px] leading-[28.8px] font-[500]">
                    N3,000
                  </p>
                  <div>
                    <button
                      onClick={() => router.push("/checkout")}
                      type="button"
                      className="mt-[20px] w-[112px] h-[40px] p-[5px] bg-[#121212] text-[#FFFFFF] rounded-[8px]"
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="mt-[20px] w-[148px] h-[40px] ml-[20px] p-[5px] bg-[#FFFFFF] text-[16px] text-[#121212] border-[1px] border-[#121212] rounded-[8px]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
