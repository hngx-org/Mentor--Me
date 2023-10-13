"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  PlusIcon,
  MymodalComponent,
  CalendarIcon,
} from "@/svgs/Schedule/ScheduleMentor";
import { CancelIcon } from "@/public/SVGs";

function AddNewSession() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

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

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        onClick={openModal}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            openModal();
          }
        }}
        role="button"
        tabIndex={0}
        className=" rounded-lg h-[223px] w-full  px-2 border-neutral-400 border max-w-[295px] lg:h-[235px] flex justify-center items-center"
      >
        <div className="text-center flex flex-col space-x-1 items-center gap-1 justify-between">
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

      {/* the modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Dark background overlay */}
          <div
            onClick={closeModal}
            aria-hidden="true"
            className="fixed inset-0 bg-black z-0 opacity-50"
          />

          {/* Modal */}
          <div
            className="modal bg-white z-50 rounded-lg shadow-md"
            ref={modalRef}
          >
            {/* Modal content */}
            <div className="w-[380px] min-w-[300px] h-[436px] lg:w-[584px] lg:h-[474px] mx-auto flex justify-center items-center">
              <div className="w-[348px] h-[401px] lg:w-[504px] lg:h-[394px]">
                <div className="flex justify-between items-center">
                  <h2 className="font-Hanken text-2xl lg:text-[32px] font-bold">
                    Create a session
                  </h2>
                  <div
                    onClick={closeModal}
                    onKeyPress={(e) => {
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
                    onKeyPress={(e) => {
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
                  {/* First option */}
                  <Link href="/mentor-session-onoff">
                    <div
                      onClick={() => {
                        // Handle click for the first option here
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          // Handle click for the first option here
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      className="flex justify-start border hover:bg-gray-400 items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] lg:h-[80px] lg:w-[504px] rounded-lg"
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
                  </Link>
                  {/* Second option */}
                  <Link href="/mentor-session-form-recurring">
                    <div
                      onClick={() => {
                        // Handle click for the second option here
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          // Handle click for the second option here
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      className="flex justify-start border hover:bg-gray-400 items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] rounded-lg lg:h-[80px] lg:w-[504px]"
                    >
                      <div className="bg-Accent6 h-[60px] w-[60px] flex justify-center items-center">
                        <CalendarIcon />
                      </div>

                      <div className="w-[215px] lg:w-full">
                        <h5 className="font-inter lg:text-2xl text-lg font-medium">
                          Recurring Session
                        </h5>
                        <p className="font-inter lg:text-lg text-medium text-neutral-500">
                          Description for another session type
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Third option */}
                  <Link href="/mentor-session-forms">
                    <div
                      onClick={() => {
                        // Handle click for the third option here
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          // Handle click for the third option here
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      className="flex justify-start border hover:bg-gray-400 items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] rounded-lg lg:h-[80px] lg:w-[504px]"
                    >
                      <div className="bg-Accent6 h-[60px] w-[60px] flex justify-center items-center">
                        <CalendarIcon />
                      </div>

                      <div className="w-[215px] lg:w-full">
                        <h5 className="font-inter text-lg lg:text-2xl font-medium">
                          Free Session
                        </h5>
                        <p className="font-inter lg:text-lg text-medium text-neutral-500">
                          Description for another session type
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddNewSession;
