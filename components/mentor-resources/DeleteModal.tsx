"use client";

import { useState } from "react";

import { CancelIcon } from "@/public/SVGs";

interface DeleteModalProps {
  resourceName: string;
  closeModal: () => void;
}

const DeleteModal = ({ resourceName, closeModal }: DeleteModalProps) => {
  const [confirmatoryAnswer, setConfirmatoryAnswer] = useState("");
  return (
    <div className="font-Inter text-NeutalBase w-[min(100%_,470px)] bg-white rounded-[8px] pb-4">
      <p className="flex items-center justify-between font-semibold text-lg pt-4 px-4">
        Are you sure?{" "}
        <CancelIcon onClick={closeModal} className="cursor-pointer" />
      </p>
      <p className="bg-[#feeddd] px-4 text-[#bb4a26] py-3 border-y-[#e8baa5] border-y-[1px] my-4 font-medium">
        Unexpected bad things will happen if you don&apos;t read this
      </p>
      <p className="text-[#91969f] px-4">
        This action{" "}
        <span className="text-NeutalBase font-semibold">cannot</span> be undone.
        This will permanently delete the{" "}
        <span className="text-NeutalBase font-semibold select-none">
          {resourceName}
        </span>{" "}
        resource.
      </p>
      <label
        htmlFor="confirmatory-input"
        className=" block font-medium px-4 mt-4"
      >
        Please type in the name of the resource to confirm.
        <input
          onChange={(e) => {
            setConfirmatoryAnswer(e.target.value);
          }}
          type="text"
          className="block border-[#e7e9ec] mt-3 border-[2px] rounded-[6px] outline-none w-full px-4 py-2"
          id="confirmatory-input"
        />
      </label>
      <div className="px-4 mt-4">
        <button
          type="button"
          className="block bg-[#f05251] text-white outline-none border-none px-4 py-3 w-full rounded-[6px] text-center cursor-pointer disabled:cursor-not-allowed disabled:bg-[#8a8e97]"
          disabled={
            confirmatoryAnswer.toLowerCase() !== resourceName.toLowerCase()
          }
        >
          I understand, delete this repository
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
