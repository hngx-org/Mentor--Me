/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import {
  CloseIcon,
  UploadPostImgIcon,
} from "@/public/assets/Icons/mentor-communities";

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartDiscussionModal = ({ setIsModalOpen }: Props) => {
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => formSubmitHandler(e)}
      className="flex flex-col gap-4 p-6 rounded-lg fixed bg-white max-w-[21.875rem] z-50 top-0 right-0 left-0 bottom-0 m-auto md:max-w-[35rem] md:aspect-square md:border-solid md:border-[1px] md:border-Neutra20 md:max-h-[27.625rem]"
    >
      <div
        onClick={() => setIsModalOpen((p) => !p)}
        className="self-end cursor-pointer"
      >
        <CloseIcon />
      </div>
      {/* Heading */}
      <h3 className="font-Hanken font-bold text-[1.5rem] text-center">
        Start a discussion
      </h3>
      {/* inputs */}
      <fieldset className="flex flex-col gap-4">
        <label className="flex flex-col leading-[1.5] font-semibold font-Hanken">
          Topic
          <input
            type="text"
            placeholder="Enter topic"
            className="p-2 font-Inter rounded-lg outline-none borer-solid border-[1px] border-Neutra10"
          />
        </label>
        <label className="flex flex-col leading-[1.5] font-semibold font-Hanken">
          Note
          <textarea
            name="note"
            placeholder="Write a note"
            cols={30}
            rows={5}
            className="p-2 font-Inter rounded-lg outline-none borer-solid border-[1px] border-Neutra10"
          />
        </label>
      </fieldset>
      {/* actions */}
      <div className="flex justify-between">
        <div>
          <label
            htmlFor="postphoto"
            className="cursor-pointer flex items-center gap-1 border-dashed rounded-lg border-[1px] border-Accent1 text-Accent1 text-[.875rem] p-3"
          >
            <UploadPostImgIcon /> Upload Image
          </label>
          <input id="postphoto" type="file" className="hidden" />
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen((p) => !p)}
          className="text-white bg-NeutalBase rounded-lg font-Inter hover:bg-Neutral60 cursor-pointer py-2 px-6 text-[.875rem]"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default StartDiscussionModal;
