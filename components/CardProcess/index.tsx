import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface CardProcessProps {
  onSetStep: Dispatch<SetStateAction<number>>;
}

export default function CardProcess(props: CardProcessProps) {
  const [rotating, setRotating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotating(false); // Stop the rotation after 5 seconds
      props.onSetStep(6); // Redirect to CardSuccess
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="p-10">
      <div className="mt-2">
        <div className="flex justify-center items-center">
          <div
            className={`w-12 h-12 border-t-4 border-b-4 border-green-500 rounded-full ${
              rotating ? 'animate-spin' : ''
            }`}
          ></div>
        </div>

        <div className="flex justify-center items-center">
          <label htmlFor="Pending" className="text-lg font-bold p-3">
            Pending
          </label>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-sm font-semibold p-3">
            Your details have been received and are currently being{' '}
            <span className="text-green-500">processed</span>.
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-xs font-normal p-3 flex items-center">
            <span className="w-24">Transaction ID</span>
            <span className="flex-1 text-center">:</span>
            <span className="w-24 ml-10">12387560934</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-xs font-normal p-3 flex items-center">
            <span className="w-24">Amount</span>
            <span className="flex-1 text-center">:</span>
            <span className="w-24 ml-10">$ 935</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-xs font-normal p-3 flex items-center">
            <span className="w-24">Status</span>
            <span className="flex-1 text-center">:</span>
            <span className="w-24 ml-10">Pending</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-xs font-normal p-3 flex items-center">
            <span className="w-24">Date</span>
            <span className="flex-1 text-center">:</span>
            <span className="w-24 ml-10">23 September 2023.</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-[0.65rem] font-normal p-3 flex items-center">
            <span className="w-4 h-4 bg-sky-500 rounded-full text-white-100 text-center mr-2">
              !
            </span>
            Note that this could take some minutes
          </div>
        </div>
      </div>
    </div>
  );
}
