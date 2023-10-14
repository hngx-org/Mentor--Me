"use client";

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";

// import Button from "@/components/ui/Button"
import { useRouter } from "next/navigation";
import { CloseIcon } from "@/public/SVGs";
import UploadIcon from "../../public/assets/Icons/mentee-communities/UploadImageIcon.svg";
import { Button } from "../buttons/button";
import { useMenteeCommunity } from "@/context/MenteeContext/MenteeCommunityContext";

type prop = {
  onClose: () => void;
  isLoggedIn: boolean;
};

const CreateDiscussionModal: React.FC<prop> = ({ onClose, isLoggedIn }) => {
  // Define state variables for form inputs and image
  const [topic, setTopic] = useState("");
  const [note, setNote] = useState("");
  const [image, setImage] = useState<File | null>(null); // Store the selected image as a File object
  const data = useMenteeCommunity();

  const { sliderInfo } = data;
  const { updateSliderInfo } = data;
  console.log(sliderInfo);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };
  useEffect(() => {
    // Check if sliderInfo exists in local storage
    const sliderInfoJSON = localStorage.getItem("sliderInfo");
    if (sliderInfoJSON) {
      // Parse the JSON string back to an array
      const savedSliderInfo = JSON.parse(sliderInfoJSON);
      // Update the sliderInfo state with the data from local storage

      updateSliderInfo(savedSliderInfo);
    }
  }, []);
  const handlePostDiscussion = () => {
    // Retrieve the existing sliderInfo from local storage
    const sliderInfoJSON = localStorage.getItem("sliderInfo");
    let updatedSliderInfo = [];
    if (sliderInfoJSON) {
      // Parse the JSON string to an array
      updatedSliderInfo = JSON.parse(sliderInfoJSON);
    }

    const newDiscussion = {
      title: topic,
      members: 1,
      desc: note,
      id: 17 + updateSliderInfo.length,
      slideComments: [
        {
          mentor: false,
          name: "Your Name", // Replace with the actual name
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: "",
          title: topic,
          desc: topic,
          commentid: updatedSliderInfo.length + 1,
        },
      ],
    };

    // Append the new discussion to the existing array
    updatedSliderInfo.push(newDiscussion);

    // Update the context state with the new data
    updateSliderInfo(updatedSliderInfo);

    // Convert the updated sliderInfo array to a JSON string
    const updatedSliderInfoJSON = JSON.stringify(updatedSliderInfo);

    // Save the updated JSON string back to local storage
    localStorage.setItem("sliderInfo", updatedSliderInfoJSON);
    onClose();
  };

  return (
    <div className="modalOverLay flex fixed w-[100vw] h-[100vh] bg-opacity-80 lg:items-center  justify-center z-[100] bg-Neutra10">
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
                className=" text-[14px] font-normal leading-[20.3px] text-black placeholder:text-Neutra20  w-full font-Inter outline-0 "
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
                className=" text-[14px] font-normal leading-[20.3px] text-black placeholder:text-Neutra20  w-full font-Inter lg:max-h-[128px] lg:h-[128px] outline-0 min-h-[10rem] "
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
              onClick={() => {
                handlePostDiscussion();
              }}
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
