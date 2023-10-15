"use client";

import React, { useState } from "react";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";
import {
  ToggleIcon,
  CheckoutArrow,
  Globe,
  DropdownArrow,
  PayPal,
} from "@/public/SVGs";
import CheckoutModal from "../CheckoutModal/page";

export default function Page() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClose, setIsModalClose] = useState(false);

  const handleCheckoutClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div>
        <MenteeSideBar />
        <div className="flex ml-[310px] pt-[10px] pb-[10px]">
          <div>
            <p className="text-[#ABABAB] text-[22px]">Resources</p>
          </div>
          <div className="bg-[#ABABAB] w-[8px] h-[8px] rounded-[50%] mt-[15px] ml-[5px] mr-[5px]">
            {" "}
          </div>
          <div>
            <p className="text-[#121212] font-[500] text-[22px]">Checkout</p>
          </div>
        </div>
        <hr className="w-[825px] mb-[-1px]" />

        <div className="flex ml-[320px]">
          <div>
            <p className="text-[#121212] text-[30px] mt-[20px] font-[500px]">
              Checkout
            </p>
            <p className="mt-[20px] text-[18px] text-[#121212] ">
              Billing Address
            </p>
            <p className="text-[#121212] text-[12px] mb-[5px] mt-[20px]">
              Country <span className="text-[#808080]">(Required)</span>
            </p>
            <input
              className=" text-[#121212] w-[400px] pl-[35px] h-[56px] rounded-[6px] border-[1px] text-[12px]"
              type="text"
              placeholder="Nigeria"
            />
            <div className="mt-[-37px] ml-[10px]">
              <Globe />
            </div>
            <div className="mt-[-20px] ml-[360px] ">
              <DropdownArrow />
            </div>
            <p className="w-[400px] text-[#808080] text-[10px] mt-[25px] h-[28px]">
              Mentor.me is required by law to collect applicable transaction
              taxes for purchases made in certain tax jurisdictions
            </p>
            <p className="text-[#121212] mt-[20px] mb-[20px] font-[500] text-[15px]">
              Payment Method
            </p>
            <div className="flex">
              <label
                htmlFor="creditDebitCard"
                className="flex items-center text-[#121212] text-[14px]"
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="creditDebitCard"
                  className="mr-2"
                />
                Credit/Debit Card
              </label>

              <label
                htmlFor="PayPal"
                className="flex ml-[50px] text-[14px] text-[#565656] items-center"
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  id="PayPal"
                  value="PayPal"
                  className="mr-2 checked:bg-teal-600 checked:border-transparent checked:ring-2 checked:ring-teal-600"
                />
                <span>
                  <PayPal />
                </span>
                PayPal
              </label>
            </div>
            <p className="text-[12px] text-[#121212] mb-[5px] mt-[20px]">
              Name on Card <span className="text-[#808080]">(Required)</span>
            </p>
            <input
              className="text-[#CCCCCC] w-[400px] h-[56px] pl-[20px] border rounded-[8px] text-[10px]"
              placeholder="Enter name on card"
            />
            <p className="text-[12px] text-[#121212] mb-[5px] mt-[20px]">
              Card Number <span className="text-[#808080]">(Required)</span>
            </p>
            <input
              className="text-[#CCCCCC] w-[400px] h-[56px] pl-[20px] border rounded-[8px] text-[10px]"
              placeholder="1234 5678 9876"
            />
            <div className="flex">
              <div>
                <p className="text-[12px] text-[#121212] mb-[5px] mt-[20px]">
                  Expiry Date <span className="text-[#808080]">(Required)</span>
                </p>
                <input
                  className="text-[#CCCCCC] w-[192px] h-[56px] pl-[20px] border rounded-[8px] text-[10px]"
                  placeholder="DD/MM/YYYY"
                />
              </div>
              <div className="ml-[20px] ">
                <p className="text-[12px] text-[#121212] mb-[5px] mt-[20px]">
                  CVV/CVC <span className="text-[#808080]"> (Required)</span>
                </p>
                <input
                  className="text-[#CCCCCC] w-[192px] h-[56px] pl-[20px] border rounded-[8px] text-[10px]"
                  placeholder="Enter CVV/CVC"
                />
              </div>
            </div>
            <div className="flex mt-[10px]">
              <ToggleIcon />
              <p className="text-[#2A2A2A] ml-[10px] mt-[3px] text-[12px]">
                Save this card for future purchase
              </p>
            </div>

            <p className="text-[#565656] mt-[10px] text-[12px]">
              Note: You will be charged{" "}
              <span className="font-[700] text-[#2A2A2A]">N50</span> for
              transaction fee
            </p>
          </div>
          {/* <div className='w-[0.5px] border h-[200px] bg-gray-50'></div> */}

          <div className=" ml-[100px] pl-[80px] pr-[80px] pb-[150px] pt-[80px] border">
            <p className="text-[#121212] font[500] text-[18px] mb-[30px]">
              Payment summary
            </p>
            <p className="text-[#000000] text-[14px] mb-[10px]">
              Order Details
            </p>
            <div className="flex mb-[20px] justify-between">
              <p className="text-[#2A2A2A] text-[12px]">
                How to navigate business
              </p>
              <p className="text-[#121212] text-[14px]">N4,500/month</p>
            </div>
            <div className="flex">
              <p className="mr-[20px] text-[14px] text-[#2A2A2A] font[600] mt-[-2px] mb-[20px]">
                Change plan
              </p>
              <CheckoutArrow />
            </div>
            <p className="text-[12px] text-[#121212] mb-[5px] mt-[20px]">
              Promo code <span className="text-[#808080]">(if available)</span>
            </p>
            <div className="flex justify-between mb-[30px]">
              <input
                className="text-[#CCCCCC] w-[410px] h-[56px] pl-[20px] border rounded-[8px] text-[10px]"
                type="text"
                placeholder="enter promo code"
              />
              <button
                type="button"
                className=" w-[133px] h-[56px] p-[5px] bg-[#FFFFFF] text-[14px] text-[#121212] border-[1px] border-[#121212] rounded-[8px]"
              >
                Add code
              </button>
            </div>
            <p className="text-[#000000] text-[14px] mb-[10px]">
              Pricing Details
            </p>
            <div className="flex mb-[20px] justify-between">
              <p className="text-[#808080] text-[12px]">Original Price: </p>
              <p className="text-[#121212] text-[14px]">N4,500</p>
            </div>
            <div className="flex mb-[20px] justify-between">
              <p className="mr-[20px] text-[12px] text-[#808080] font[600] mt-[-2px] mb-[20px]">
                Discount:{" "}
              </p>
              <p className="text-[#121212] text-[14px]">-</p>
            </div>
            <hr className="w-[570px] mb-[10px]" />
            <div className="flex justify-between mb-[30px]">
              <p className="font-[700] text-[#121212] text-[14px]">Total:</p>
              <p className="font-[700] text-[#121212] text-[14px]">N4,500</p>
            </div>
            <p className="text-[#565656] mt-[10px] text-[12px]">
              By clicking on Checkout, you agree to the{" "}
              <span className="text-[#008080]">Terms of Service</span>
            </p>
            <button
              type="button"
              className="mt-[60px] w-[570px] pl-[50px] pr-[50px] pt-[10px] pb-[10px] bg-[#121212] text-[#FFFFFF] rounded-[8px]"
              onClick={handleCheckoutClick}
            >
              Complete Checkout
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" rounded-lg shadow-lg p-8">
            <CheckoutModal />
          </div>
        </div>
      )}

      {/* {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" rounded-lg shadow-lg p-8">
            <SuccessModal />
          </div>
        </div>
      )} */}
    </div>
  );
}
