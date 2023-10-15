"use client";

// This component renders only the forms and NOT the heading or the progressbar
// It accepts props(from formData) that were passed down from the parent component to render the input fields in the form
//  The buttons trigger the change of the currForm state from here using props. Which in turn changes which form is shown
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMentorContext } from "@/app/(mentor)/mentor-profile-creation/MentorContext";

interface myProps {
  children?: any;
  content: any;
  handleBack(): unknown;
  handleClick: () => void;
}

export default function MentorFormBuilder({
  children,
  content,
  handleBack,
  handleClick,
}: myProps) {
  const { formInputs, setFormInputs } = useMentorContext();
  const form = useRef(null);
  const [isFull, setIsFull] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  function checkTextArea(e: any) {
    const words = e.target.value;

    // this gets the number of words by getting the value from the textarea, splitting it into an array with the " " as demacation
    // It then gets all the words that aren't and empty string
    const numWords = words.split(" ").filter((word: any) => word !== "");

    setTextLength(numWords.length);

    if (numWords.length > 250) {
      setIsFull(true);
    } else {
      setIsFull(false);
    }

    // update the general state holding the input values
    setFormInputs((prevData: any) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleInput(e: any) {
    setIsFull(false);
    let value: any = "";
    if (e.target.type === "number") {
      value = Number(e.target.value);
    } else {
      value = e.target.value;
    }
    // console.log(e.target.type);
    // update the general state holding the input values
    setFormInputs((prevData: any) => ({
      ...prevData,
      [e.target.name]: value,
    }));
    // console.log(formInputs);
  }

  return (
    <form ref={form} className="flex flex-col gap-6">
      {content.map((input: any) => {
        // if the input is not a text-area, i.e every screen except screen 4, return this
        if (input.type !== "textarea") {
          return (
            <div key={input.id} className="flex flex-col gap-2 relative z-[1]">
              <label
                htmlFor={input.label}
                className="font-Inter text-Neutral60 font-[500]"
              >
                {input.label}
              </label>

              {input.nature === "dropdown" ? (
                <SelectComponent
                  dropList={input.dropList}
                  label={input.label}
                  handleInput={(e) => {
                    handleInput(e);
                  }}
                  placeholder={input.placeholder}
                  apiName={input.apiName}
                />
              ) : (
                <input
                  className="w-full border-[#d0d5dd] border-[1px] rounded-md p-4 placeholder:text-[#98A2B3] "
                  type={input.type}
                  placeholder={input.placeholder}
                  id={input.label}
                  required
                  autoComplete="off"
                  onInput={handleInput}
                  name={input.apiName}
                />
              )}
            </div>
          );

          // if its a text area, i.e screen 4, return this
        }

        return (
          <div key={input.id} className="w-full mt-10 flex flex-col gap-2">
            <label
              htmlFor="textArea"
              className="font-Inter text-Neutral60 font-[500]"
            >
              <p>{input.label}</p>
            </label>
            <textarea
              className=" border-[#D0D5DD] w-full border-[1px] p-4 rounded-lg"
              id="textArea"
              cols={30 as number}
              rows={10 as number}
              placeholder="Write something"
              onInput={checkTextArea}
              name={input.apiName}
              required
            />

            <div className="flex justify-between items-center">
              <p className="font-Inter text-Neutra30">
                Not more than 250 words
              </p>
              <div className="flex flex-col items-center">
                <p className={`${isFull ? "text-[red]" : ""}`}>
                  {!isFull
                    ? `${250 - Number(textLength)} words left`
                    : "too many words"}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* this children prop is for the variations for each of the forms. So it's basically a fix */}
      {children}

      {/* container for the buttons */}
      <div className="flex gap-3 mt-[50px] justify-between">
        <button
          type="button"
          className="cursor-pointer border-[#121212] text-black font-semibold border-[1px] w-[100%] max-w-[200px] py-5 rounded-md font-Inter text-center"
          onClick={() => {
            handleBack();
          }}
        >
          Back
        </button>
        <button
          type="submit"
          className=" bg-[#121212] text-white font-semibold border-[1px] w-[100%] max-w-[200px] py-5 rounded-md font-Inter text-center"
          onClick={(e) => {
            e.preventDefault();
            const valid = (form.current! as HTMLFormElement).reportValidity();

            if (isFull) {
              alert("You have too many words, please reduce them");
            }

            if (valid && !isFull) {
              handleClick();
              // console.log(formInputs);
            }
          }}
        >
          Next
        </button>
      </div>
    </form>
  );
}

interface selectProps {
  label: any;
  dropList: any;
  handleInput: (e: any) => void;
  placeholder: any;
  apiName: any;
}

function SelectComponent({
  label,
  dropList,
  handleInput,
  placeholder,
  apiName,
}: selectProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <select
      onInput={(e) => {
        handleInput(e);
        setIsSelected(true);
        // @ts-ignore
        setSelectedValue(e.target.value);
      }}
      className={`w-full border-[#d0d5dd] border-[1px] rounded-md  p-4 ${
        isSelected ? "text-Neutral60" : "text-[#98A2B3]"
      }`}
      name={apiName}
      required
      value={selectedValue}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {dropList.map((list: any) => (
        <option key={list}>{list}</option>
      ))}
    </select>
  );
}
