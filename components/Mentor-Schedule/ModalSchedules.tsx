import React from "react";
import { CloseIcon } from "@/public/SVGs";

interface ModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => (
  <div className="fixed inset-0 w-screen p-4 bg-[#020202c8] flex items-center justify-center overflow-y-auto">
    <div className="w-[98%] lg:w-1/2 rounded bg-white p-5 md:p-10 text-Neutral60 m-auto overflow-y-auto h-[400px] md:h-auto">
      <div className="flex items-center justify-between mb-7">
        <p className="font-Inter text-lg font-medium">Session Details</p>
        <button
          onClick={closeModal}
          type="button"
          className="p-1 rounded-full border border-Neutral60 grid place-content-center"
        >
          <CloseIcon />
        </button>
      </div>
      {children}
    </div>
  </div>
);

export default Modal;
