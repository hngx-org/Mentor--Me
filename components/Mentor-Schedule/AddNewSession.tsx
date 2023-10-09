"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  PlusIcon,
  MymodalComponent,
  CalendarIcon,
} from "@/svgs/Schedule/ScheduleMentor";
import { CancelIcon } from "@/public/SVGs";
import {
  OneOffSessionForm,
  RecurringSessionForm,
  FreeSessionForm,
} from "../modal/MentorSessionModalForms/SessionForms";

function AddNewSession() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const closeModalOnOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", closeModalOnOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", closeModalOnOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOption(null);
  };

  const renderOptionModal = (option: string) => {
    setSelectedOption(option);
    openModal();
  };

  const renderSelectedModal = () => {
    if (selectedOption === "OneOffSession") {
      return <OneOffSessionForm />;
    }
    if (selectedOption === "RecurringSession") {
      return <RecurringSessionForm />;
    }
    if (selectedOption === "FreeSession") {
      return <FreeSessionForm />;
    }
    return null;
  };

  return (
    <div>
      <div
        onClick={openModal}
        onKeyPress={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            openModal();
          }
        }}
        role="button"
        tabIndex={0}
        className="w-[182px] h-[223px] rounded-lg border-neutral-400 border flex justify-center items-center md:w-[295px] lg:w-[295px] lg:h-[235px]"
      >
        <div className="h-[98px] w-[138px] text-center flex flex-col items-center justify-between">
          <h4 className="font-Hanken text-base text-neutral-950 font-bold leading-4">
            Add a new session
          </h4>
          <p className="font-Hanken font-normal text-neutral-950 text-sm">
            Create a personalized session
          </p>
          <div>
            <PlusIcon />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div
            onClick={closeModal}
            aria-hidden
            className="fixed inset-0 bg-black z-0 opacity-50"
          />

          <div
            className="modal bg-white z-50 rounded-lg shadow-md"
            ref={modalRef}
          >
            <div className="w-[380px] h-[436px] lg:w-[584px] lg:h-[474px] mx-auto flex justify-center items-center">
              <div className="w-[348px] h-[401px] lg:w-[504px] lg:h-[394px]">
                <div className="flex justify-between items-center">
                  <h2 className="font-Hanken text-2xl lg:text-[32px] font-bold">
                    Create a session
                  </h2>
                  <div
                    onClick={closeModal}
                    onKeyPress={(e: React.KeyboardEvent) => {
                      if (e.key === "Enter") {
                        closeModal();
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className="lg:hidden"
                    aria-label="Close Modal"
                  >
                    <MymodalComponent />
                  </div>
                  <div
                    onClick={closeModal}
                    onKeyPress={(e: React.KeyboardEvent) => {
                      if (e.key === "Enter") {
                        closeModal();
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className="hidden lg:block"
                    aria-label="Close Modal"
                  >
                    <CancelIcon />
                  </div>
                </div>
                <p className="text-base lg:text-xl text-neutral-500 mb-4">
                  Create a session that best suits you!
                </p>
                <div className="flex flex-col justify-between items-center gap-7">
                  <div
                    onClick={() => renderOptionModal("OneOffSession")}
                    onKeyPress={(e: React.KeyboardEvent) => {
                      if (e.key === "Enter") {
                        renderOptionModal("OneOffSession");
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className={`flex justify-start border hover:bg-gray-400 items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] lg:h-[80px] lg:w-[504px] rounded-lg ${
                      selectedOption === "OneOffSession" ? "bg-gray-400" : ""
                    }`}
                  >
                    <div className="bg-Accent6 h-[60px] w-[60px] flex justify-center items-center">
                      <CalendarIcon />
                    </div>
                    <div className="w-[215px] lg:w-full">
                      <h5 className="font-inter text-lg lg:text-2xl font-medium">
                        One-Off Session
                      </h5>
                      <p className="font-inter text-medium lg:text-lg text-neutral-500">
                        Create a one-time session with a mentee
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => renderOptionModal("RecurringSession")}
                    onKeyPress={(e: React.KeyboardEvent) => {
                      if (e.key === "Enter") {
                        renderOptionModal("RecurringSession");
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className={`flex justify-start border hover:bg-gray-400 items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] rounded-lg lg:h-[80px] lg:w-[504px] ${
                      selectedOption === "RecurringSession" ? "bg-gray-400" : ""
                    }`}
                  >
                    <div className="bg-Accent6 h-[60px] w-[60px] flex justify-center items-center">
                      <CalendarIcon />
                    </div>
                    <div className="w-[215px] lg:w-full">
                      <h5 className="font-inter lg:text-2xl text-lg font-medium">
                        Recurring Session
                      </h5>
                      <p className="font-inter lg:text-lg text-medium text-neutral-500">
                        Create a recurring session for continuous growth
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => renderOptionModal("FreeSession")}
                    onKeyPress={(e: React.KeyboardEvent) => {
                      if (e.key === "Enter") {
                        renderOptionModal("FreeSession");
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className={`flex justify-start border hover:bg-gray-400 items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] rounded-lg lg:h-[80px] lg:w-[504px] ${
                      selectedOption === "FreeSession" ? "bg-gray-400" : ""
                    }`}
                  >
                    <div className="bg-Accent6 h-[60px] w-[60px] flex justify-center items-center">
                      <CalendarIcon />
                    </div>
                    <div className="w-[215px] lg:w-full">
                      <h5 className="font-inter text-lg lg:text-2xl font-medium">
                        Free Session
                      </h5>
                      <p className="font-inter lg:text-lg text-medium text-neutral-500">
                        Create a free session for mentees
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedOption && (
        <div className="fixed top-6 left-[15%] lg:left-[29%] flex flex-col justify-start items-center overflow-visible hover:overflow-y-auto max-h-[100vh] z-50">
          <div
            onClick={closeModal}
            aria-hidden
            className="fixed inset-0 bg-black z-0 opacity-50"
          />
          <div
            className="modal bg-white z-50 rounded-lg shadow-md"
            ref={modalRef}
          >
            {renderSelectedModal()}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddNewSession;
