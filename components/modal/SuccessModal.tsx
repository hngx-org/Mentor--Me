"use client";

import { FC } from "react";

import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";

import { Button } from "../buttons/button";

import check from "../../public/assets/images/check.png";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  content?: string;
  title?: string;
  buttontext?: string; // Add a prop for the text content
}
const SuccessModal: FC<ModalProps> = ({
  isOpen,
  closeModal,
  content,
  buttontext,
  title,
}) => (
  <Transition appear show={isOpen}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-[520px] sm:p-20 p-10 transform overflow-hidden  rounded-[8px] bg-white  text-left align-middle shadow-xl transition-all">
              <div className="flex flex-col justify-center items-center">
                <div
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <Image
                    src={check}
                    alt="Authentication Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h4 className="font-Inter text-[#37A85D] text-lg text-center font-medium">
                  {title}
                </h4>
                <p className="text-center my-6 font-Hanken text-base">
                  {content}
                </p>
                <Button
                  variant="primary"
                  paddingLess
                  className="w-full h-[48px]"
                >
                  {buttontext}
                </Button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default SuccessModal;
