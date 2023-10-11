import React from 'react';
import { useRouter } from 'next/router';

export default function CardSuccess({ onSetStep }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-10 relative">
        <div className="absolute top-0 left-0 flex relative items-center justify-center"> {/* Wrapper div for the image */}
          {/* Success Icon */}
          <img
            src="/assets/success/WhatsApp Image 2023-10-10 at 2.56.42 AM.jpeg"
            alt="Success"
            className="w-60 h-60"
          />
        </div>
        <div className="mt-8">
          <div className="flex justify-center items-center">
            <div className="text-[1.7rem] text-green-500 font-semibold whitespace-normal">
              Success
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="text-[0.75rem] font-semibold p-4 whitespace-normal">
              Your details have been processed, and payment has been delivered into your account.
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="p-3">
              <button
                className="px-20 py-2 bg-black text-[0.80rem] text-white-100 rounded hover:bg-blue-700" style={{color:"white"}}
                onClick={() => {
                  // Add logic for continue action here
                  onSetStep(1);
                }}
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}