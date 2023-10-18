/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import {
  CloseIcon,
  UploadPostImgIcon,
} from "@/public/assets/Icons/mentor-communities";

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartDiscussionModal = ({ setIsModalOpen }: Props) => {
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files && e.target.files[0];

    if (image && image.type.startsWith("image/")) {
      setImageUrl(image);
    } else {
      setImageUrl(null);
      // console.log("something went awfully wrong");
    }
  };

  const onFormSubmit = (data: FieldValues) => {
    //  todo send data to backend
    console.log("hello there");
    console.log("Form Data:", data);

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    // close modal
    setIsModalOpen((p) => !p);
  };
  // md:max-h-[28.625rem]
  return (
    <div className="flex justify-center items-center fixed inset-0 backdrop-blur-[2px] transition z-50 ">
      <motion.form
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        onSubmit={handleSubmit((data) => onFormSubmit(data))}
        className="w-full flex flex-col gap-4 p-6 rounded-lg bg-white max-w-[21.875rem] md:max-w-[31.25rem] border-solid md:border-[1px] border-Neutra20 discuss-box-shadow"
      >
        <div
          onClick={() => {
            setIsModalOpen((p) => !p);

            console.log("close modal");
          }}
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
              {...register("topic", {
                required: "Topic is required!",
                minLength: {
                  value: 2,
                  message: "Topic must be at least 2 characters long!",
                },
              })}
              type="text"
              placeholder="Enter topic"
              className="p-2 font-Inter rounded-lg outline-none borer-solid border-[1px] border-Neutra10 placeholder:font-normal"
            />
          </label>
          <label className="flex flex-col leading-[1.5] font-semibold font-Hanken">
            Note
            <textarea
              {...register("note", {
                required: "Note Required",
                minLength: {
                  value: 10,
                  message: "Note must be at least 10 characters long",
                },
              })}
              name="note"
              placeholder="Write a note"
              cols={30}
              rows={5}
              className="p-2 font-Inter rounded-lg outline-none borer-solid border-[1px] border-Neutra10 placeholder:font-normal"
            />
          </label>
        </fieldset>
        {/* uploaded image */}
        {imageUrl && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.1 }}
            className="h-[100px] rounded-lg overflow-hidden"
          >
            <div>
              <Image
                src={URL.createObjectURL(imageUrl)}
                alt="Discussion"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        )}
        {/* actions */}
        <div className="flex justify-between items-center">
          <div>
            {!imageUrl ? (
              <>
                <label
                  htmlFor="postphoto"
                  className="cursor-pointer flex items-center gap-1 border-dashed rounded-lg border-[1px] border-Accent1 text-Accent1 text-[.875rem] p-3"
                >
                  <UploadPostImgIcon /> Upload Image
                </label>
                <input
                  id="postphoto"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </>
            ) : (
              <span
                onClick={() => setImageUrl(null)}
                className="text-Accent2 underline font-Inter text-sm font-semibold hover:text-Accent1 transition cursor-pointer"
              >
                Remove Image
              </span>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="text-white bg-NeutalBase rounded-lg font-Inter hover:bg-Neutral60 cursor-pointer py-2 px-6 text-[.875rem] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default StartDiscussionModal;
