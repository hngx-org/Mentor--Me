"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  PlusIcon,
  MymodalComponent,
  CalendarIcon,
} from "@/svgs/Schedule/ScheduleMentor";
import { CancelIcon } from "@/public/SVGs";
import Modal from "./ModalSchedules";
import RecurringSessionForm from "../modal/MentorSessionModalForms/RecurringSessionForm";
import OneOffSessionForm from "../modal/MentorSessionModalForms/OneOffSessionForm";
import FreeSessionForm from "../modal/MentorSessionModalForms/FreeSessionForm";

function AddNewSession() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFormModal, setIsFormModal] = useState("");
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
    setIsFormModal("");
    window.location.reload(); // Reload the page
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
        className=" rounded-lg h-[235px] w-full  px-2 border-neutral-400 border max-w-[295px] lg:h-[235px] flex justify-center items-center"
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
            className="modal h-full md:h-3/4 w-full md:w-2/3 lg:w-1/2  bg-white z-50 rounded-lg shadow-md"
            ref={modalRef}
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            {/* Modal content */}
            {isFormModal === "free" ? (
              <FreeSessionForm />
            ) : isFormModal === "recurring" ? (
              <RecurringSessionForm />
            ) : isFormModal === "one-off" ? (
              <OneOffSessionForm />
            ) : (
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

                    <button
                      type="button"
                      onClick={() => setIsFormModal("one-off")}
                      className="flex justify-start text-left border hover:bg-gray-400 items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] lg:h-[80px] lg:w-[504px] rounded-lg"
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
                    </button>

                    {/* Second option */}
                    <button
                      type="button"
                      onClick={() => setIsFormModal("recurring")}
                      className="flex text-left justify-start border hover:bg-gray-400 items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] rounded-lg lg:h-[80px] lg:w-[504px]"
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
                    </button>

                    {/* Third option */}

                    <button
                      type="button"
                      onClick={() => setIsFormModal("free")}
                      className="flex text-left justify-start border hover:bg-gray-400 items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] rounded-lg lg:h-[80px] lg:w-[504px]"
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
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* {isFormModal === "free" && (
        <Modal closeModal={closeFormModal}>
          <FreeSessionForm />
        </Modal>
      )} */}
    </div>
  );
}

export default AddNewSession;
