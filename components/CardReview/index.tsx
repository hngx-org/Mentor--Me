import React from "react";
import { useRouter } from 'next/router';

interface CardReviewProps {
  userDetails: {
    paymentMethod: string;
    name: string;
    accountDetails: string;
    bankName: string;
    amount: string;
  };
  onSetStep: (step: number) => void;
}

export default function CardReview(props: CardReviewProps) {
  const { userDetails, onSetStep } = props;

  const handleContinueClick = () => {
    const confirmed = window.confirm("Are you sure you want to continue?");
    if (confirmed) {
      // If the user confirms, proceed to the next step
      onSetStep(5); // Go to CardProcess step (change to the appropriate step number)
    }
  };

  return (
    <div className="p-12 mt-5">
      <h1 className="text-xl font-bold mb-2">Review Your Details</h1>

      <div className="mt-2">
        <label className="text-lg font-light mb-1">Payment Method:</label>
        <input
          type="text"
          value={userDetails.paymentMethod}
          readOnly
          className="w-full p-2 border rounded-lg bg-white-100"
        />
      </div>

      <div className="mt-2">
        <label className="text-lg font-light mb-1">Name:</label>
        <input
          type="text"
          value={userDetails.name}
          readOnly
          className="w-full p-2 border rounded-lg bg-white-100"
        />
      </div>

      <div className="mt-2">
        <label className="text-lg font-light mb-1">Account Details:</label>
        <input
          type="text"
          value={userDetails.accountDetails}
          readOnly
          className="w-full p-2 border rounded-lg bg-white-100"
        />
      </div>

      <div className="mt-2">
        <label className="text-lg font-light mb-1">Bank Name:</label>
        <input
          type="text"
          value={userDetails.bankName}
          readOnly
          className="w-full p-2 border rounded-lg bg-white-100"
        />
      </div>

      <div className="mt-2">
        <label className="text-lg font-light mb-1">Amount:</label>
        <input
          type="text"
          value={userDetails.amount}
          readOnly
          className="w-full p-2 border rounded-lg bg-white-100"
        />
      </div>

      <div className="flex justify-end mt-8">
        <button
          className="px-4 py-2 bg-gray-100 text-black rounded border-black hover:bg-red-300 hover:border-red-700 ml-2"
          onClick={() => {
            // Add logic for cancel action here
            onSetStep(3); // Go back to CardDetails step
          }}
        >
          Cancel
        </button>
        <button
          className="px-3 py-2 text-lg bg-black text-white-100 rounded hover:bg-blue-700 ml-2" style={{color:"white"}}
          onClick={handleContinueClick}
        >
          Finish
        </button>
      </div>
    </div>
  );
}