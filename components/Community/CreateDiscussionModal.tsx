"use client";

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";

// import Button from "@/components/ui/Button"
import { CloseIcon } from "@/public/SVGs";
import UploadIcon from "../../public/assets/Icons/mentee-communities/UploadImageIcon.svg";
import { Button } from "../buttons/button";
import { postSingleForum } from "@/lib/apiHelper";
import { Community } from "@/app/(mentee)/(dashboard-route)/mentee-community/data";

type prop = { onClose: () => void };
const CreateDiscussionModal: React.FC<prop> = ({ onClose }) => {
  function removeSpacesAndConvertToLower(inputString: string) {
    // Remove spaces with regex and convert to lowercase
    const result = inputString.replace(/\s+/g, "").toLowerCase();
    return result;
  }
  // Define state variables for form inputs and image

  const [topic, setTopic] = useState("");
  const [note, setNote] = useState("");
  const [image, setImage] = useState<File | null>(null); // Store the selected image as a File object

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  const handlePostDiscussion = () => {
    // Here, you can use the 'image' state to access the selected image
    // and send it to the backend, e.g., using FormData.

    // For example, to create a FormData object and append the image:

    const dataPost: Community = {
      slug: removeSpacesAndConvertToLower(topic),
      name: topic,
      description: note,
      members: [
        {
          name: "Member 1",
          isMentor: true,
        },
      ],
      discussions: [],
    };
    console.log(dataPost);

    // Now, you can send 'formData' to the backend using an HTTP request.
    // This will send the image data along with other form data.
    postSingleForum(dataPost);

    setTopic("");
    setNote("");
    // Close the modal
    onClose();
  };
  return (
    <div className="flex justify-center items-center fixed inset-0 backdrop-blur-[2px] transition z-[100] ">
      <div className="createDiscussionModal md:w-[560px] w-[100%] h-fit bg-white md:pt-10  md:px-10 md:pb-[35px]  gap-y-6 rounded-[10px] border-Neutra10 md:border">
        <div className="title flex justify-between items-center mb-10 w-full ">
          <h1 className="font-medium text-[24px] leading-[28.8px]  w-fit font-Inter text-NeutalBase pl-[90px] md:pl-[0]">
            Start discussion
          </h1>
          <button className="w-fit h-fit" type="button" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <form className=" flex flex-col gap-y-[35px]">
          <div className="topic flex flex-col gap-y-1">
            <label
              htmlFor="topic"
              className="topicLabel font-Hanken font-semibold text-[16px] leading-[19.2px] "
            >
              Topic
            </label>
            <div className="topicInput  border border-[#CCCCCC] md:py-2 md:px-3 p-[15px] rounded-[6px] ">
              {" "}
              <input
                type="text"
                className=" text-[14px] font-normal leading-[20.3px] placeholder:text-Neutra20 w-full font-Inter outline-0 "
                placeholder="Enter topic"
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="note flex flex-col gap-y-1">
            <label
              htmlFor="note"
              className="noteLabel font-Hanken font-semibold text-[16px] leading-[19.2px] "
            >
              Note
            </label>
            <div className="noteInput  border border-[#CCCCCC] p-[15px] md:py-2 md:px-3 rounded-[6px] ">
              {" "}
              <textarea
                className=" text-[14px] font-normal leading-[20.3px] placeholder:text-Neutra20 w-full font-Inter lg:max-h-[128px] lg:h-[128px] outline-0 min-h-[10rem] "
                placeholder="Write a note"
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="buttons flex w-full justify-between">
            {/* <Button

            variant="primary"
            title="Upload Image"
            iconPresent={UploadIcon}
            className="whitespace-nowrap text-[16px] text-Accent1 border-dashed border-Accent1 px-[30px] py-[15px] xl:max-w-[200px]  "

          
          

          /> */}
            <button
              type="button"
              className=" border-NeutalBase  flex items-center gap-x-1 rounded-[8px] lg:text-[16px] text-[10px] whitespace-nowrap px-[30px]   py-[10px] text-Accent1 bg-Accent6 border-0 relative"
            >
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                className=" w-full h-full absolute opacity-0 z-[101]"
                onChange={handleImageChange}
              />
              <Image alt="i" width={24} height={24} src={UploadIcon} />
              Upload Image
            </button>
            {/* <Link href="/mentee-communities/forums"> */}
            {/* <Button

              variant="primary"
              type="submit"
              title="Post"
              className="whitespace-nowrap text-[16px]  px-[40px] py-[20px] xl:max-w-fit "


            /> */}

            <button
              type="button"
              className="text-white border-dashed bg-NeutalBase flex items-center gap-x-1 rounded-[8px] lg:text-[16px] text-[10px]  whitespace-nowrap px-[30px]   py-[10px]  "
              onClick={handlePostDiscussion}
            >
              Post
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDiscussionModal;
