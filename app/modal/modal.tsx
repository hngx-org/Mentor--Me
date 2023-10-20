"use client";

import { FC } from "react";

import Link from "next/link";

// @ts-ignore
import { Dialog, Transition } from "@headlessui/react";


interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

// const pathName: string = window.location.pathname.slice(13);
// console.log(pathName)

// const linkHref =
//   pathName === "forget-password" ? window.location.href : "/mentor-auth/login";

const Modal: FC<ModalProps> = ({
  isOpen,
  closeModal,
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
            <Dialog.Panel className="w-full h-60px max-w-[520px] sm:p-20 p-10 transform overflow-hidden  rounded-[8px] bg-white  text-left align-middle shadow-xl transition-all">
              <div className="flex flex-col justify-center gap-4 items-center">
                <p className="font-Inter text-lg text-center font-medium">
                  You are not authenticated
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="text-black  bg-white rounded-[7px] border-[1px] text-[13px] w-[90px]  border-black p-2 "
                  >
                    <Link href="/welcome/login"> Log in</Link>
                  </button>
                  <button
                    type="button"
                    className="bg-[#121212] text-white rounded-[8px] w-[90px] p-2 text-[13px] "
                  >
                    <Link href="/welcome/signup"> Sign up</Link>
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default Modal;
