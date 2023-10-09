import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "../buttons/button";
import { CloseIcon } from "@/public/SVGs";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalDataType {
  date: string;
  mentee_name: string;
  session_name: string;
  status: string;
  pricing: number;
  plan: string;
  type: string;
}

const modalData = {
  date: "23-Oct-2023 11:40 P.M",
  mentee_name: "Kelly Casper",
  session_name: "Portfolio Review",
  status: "pending",
  pricing: 20000,
  plan: "Pay/session",
  type: "1 one 1",
};
export default function Modal({ isOpen, setIsOpen }: ModalProps) {
  return (
    <Transition show={isOpen}>
      <Dialog
        className="relative z-50"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[#020202c8]">
          <Dialog.Panel className="w-[90%] lg:w-1/2 rounded bg-white p-7 text-Neutral60">
            <Dialog.Title className="flex items-center justify-between mb-7">
              <p className="font-Inter text-lg font-medium">Session Details</p>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="p-1 rounded-full border border-Neutral60 grid place-content-center"
              >
                <CloseIcon />
              </button>
            </Dialog.Title>
            <Dialog.Description>
              <div className="grid grid-cols-2 gap-5 mb-10 justify-between font-Hanken w-full">
                <div>
                  <p className="text-Neutra30">Name of Mentee</p>
                  <p>{modalData.mentee_name}</p>
                </div>
                <div className=" self-end">
                  <p className="text-Neutra30">Session Name</p>
                  <p>{modalData.session_name}</p>
                </div>
                <div>
                  <p className="text-Neutra30">Date of Session</p>
                  <p>{modalData.date}</p>
                </div>
                <div>
                  <p className="text-Neutra30">Status</p>
                  <p>{modalData.status}</p>
                </div>
                <div>
                  <p className="text-Neutra30">Pricing Plan</p>
                  <p>{modalData.plan}</p>
                </div>
                <div>
                  <p className="text-Neutra30">Pricing</p>
                  <p>{modalData.pricing}</p>
                </div>
                <div>
                  <p className="text-Neutra30">Type of session</p>
                  <p>{modalData.type}</p>
                </div>
              </div>
            </Dialog.Description>

            <p>
              Hi Treasure, good day. Please I’d appreciate if the mentorship
              covers the necessary basic tips to getting started as a designer
              and how I can accelerate my growth career.
            </p>
            <div className="flex justify-center gap-5 mt-10">
              <Button variant="outline-primary">Decline</Button>
              <Button variant="primary">Accept</Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
