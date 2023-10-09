import React, { useState } from "react";

const UnverifiedMentorCard = () => {
  const [close, setClose] = useState(false);

  return (
    <>
      <div className="mb-10">
        <h2 className="font-bold font-Hanken lg:leading-[54px] text-Neutral60 lg:text-5xl">
          Welcome Shade! 👋
        </h2>
        <p className="text-base lg:text-lg font-Inter font-normal text-Neutra30">
          You have no upcoming sessions!!!
        </p>
      </div>

      {!close && (
        <div className="border border-Neutra20 rounded-lg md:py-5 py-3 lg:px-10  px-3">
          <div className="flex justify-end mb-3">
            <button
              type="button"
              onClick={() => setClose(true)}
              className="border border-[#7b7f84] md:h-7 md:w-7 grid place-content-center w-5 h-5 rounded-md text-[#7b7f84]"
            >
              &times;
            </button>
          </div>
          <div>
            <h3 className="font-semibold font-Inter text-base lg:text-lg text-Neutral60">
              Let’s start with the basics
            </h3>
            <div className="flex items-center justify-between font-Hanken mb-3">
              <p className="text-[10px]  lg:text-base font-normal">
                Complete your profile set up by verifying your account
              </p>
              <span className="text-Neutra20 text-[10px] lg:text-base">
                70% completed
              </span>
            </div>
            <div>
              <div className="mb-5">
                <div className="w-full h-2  rounded-2xl overflow-hidden bg-Neutra10">
                  <div className="w-[70%] h-full bg-[#008080]" />
                </div>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="verify_account"
                  className="text-Neutra40 text-[10px] md:text-base flex gap-3 items-center"
                >
                  <input
                    style={{ scale: 1.2 }}
                    type="radio"
                    name=""
                    id="verify_account"
                  />
                  Verify your account
                </label>
              </div>
              <div>
                <label
                  htmlFor="session"
                  className="text-[#008080] text-[10px] md:text-base flex gap-3 items-center"
                >
                  <input
                    style={{ scale: 1.2 }}
                    type="radio"
                    name=""
                    id="session"
                  />
                  Start your first session -
                  <span className="text-Neutra40">Connect with mentee</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UnverifiedMentorCard;
