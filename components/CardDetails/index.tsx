import React, { useState, useEffect, Dispatch, SetStateAction  } from "react";
import { useRouter, } from 'next/router';


interface CardReviewProps {
  // onSetStep(arg0: number): void;
  onSetStep: Dispatch<SetStateAction<number>>;
  userDetails: {
    paymentMethod: string;
    name: string;
    accountDetails: string;
    bankName: string;
    amount: string;
  };
  setUserDetails: (userDetails: any) => void;
  onContinue: () => void;
}

export default function CardDetails(props:CardReviewProps) {
  const { userDetails, setUserDetails, onContinue } = props;
  const [formComplete, setFormComplete] = useState(false);

  // Effect to check if the form is complete whenever user details change
  useEffect(() => {
    const isFormComplete =
      userDetails.paymentMethod &&
      userDetails.name &&
      userDetails.accountDetails &&
      userDetails.bankName &&
      userDetails.amount;
    setFormComplete(isFormComplete);
  }, [userDetails]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails: any) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  function onSetStep(arg0: number) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="p-11">
      <div className="mt-7">
        <label htmlFor="paymentMethod" className="text-lg font-light mb-4 mt-2">
          Payment Method
        </label>
        <div className="relative mt-1">
          <div className="relative">
            <div></div>
            <select
              name="paymentMethod"
              value={userDetails.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 pl-10 border rounded-lg bg-white-100"
            >
              <option value="" disabled>
                Select payment method
              </option>
              <option value="Mastercard">Mastercard</option>
              <option value="Apple Pay">Apple Pay</option>
              <option value="Visa">Visa</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <h1 className="text-lg font-bold mb-2">Provide Details</h1>

        <div className="mt-4">
          <label htmlFor="name" className="text-sm font-small mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={userDetails.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-white-100"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="accountDetails" className="text-sm font-small mb-1">
            Account Details
          </label>
          <input
            type="text"
            id="accountDetails"
            name="accountDetails"
            placeholder="Enter your account details"
            value={userDetails.accountDetails}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-white-100"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="bankName" className="text-sm font-small mb-1">
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            placeholder="Enter your bank name"
            value={userDetails.bankName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-white-100"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="amount" className="text-sm font-small mb-1">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter the amount"
            value={userDetails.amount}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-white-100"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="px-4 py-2 bg-gray-100 text-black rounded  border-black hover:bg-red-300 hover:border-red-700 mr-2"
          onClick={() => {
            // Add logic for cancel action here
            onSetStep(1); // Go back to CardDetails step
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (formComplete) {
              props.onSetStep(3);
            }
          }}
          className={`px-4 py-2 ${
            formComplete ? "bg-black text-white-100" : "bg-gray-300 text-gray-500"
          } rounded hover:bg-blue-700`} style={{color:"white"}}
          disabled={!formComplete}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
