"use client";

// This component renders only the forms and NOT the heading or the progressbar
// It accepts props(from formData) that were passed down from the parent component to render the input fields in the form
//  The buttons trigger the change of the currForm state from here using props. Which in turn changes which form is shown
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { MentorCreationArrDown } from "@/public";
import { useMenteeContext } from "@/app/(mentee)/mentee-profile-creation/MenteeContext";
import LoadingSpinner from "../loaders/LoadingSpinner";
import arrowDown from "@/public/assets/images/mentor-profile-creation/mentor-arrow-down.svg";
import { PlusIcon } from "@/svgs/Schedule/ScheduleMentor";

interface myProps {
  children?: any;
  content: any;
  handleBack(): unknown;
  handleClick: () => void;
}

export default function MenteeFormBuilder({
  children,
  content,
  handleBack,
  handleClick,
}: myProps) {
  const form = useRef<HTMLFormElement | null>(null);
  const { formInputs, setFormInputs, currForm, loader } = useMenteeContext();
  const [isFull, setIsFull] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const [isValid, setIsValid] = useState(false);

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
    setFormInputs((prevInputs: any) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));

    setIsValid(form.current!.checkValidity());
  }

  function handleValidity(params: any) {
    setIsValid(params);
  }

  return (
    <form ref={form} className="flex flex-col gap-6">
      {content.map((input: any) => {
        // if the input is not a text-area, i.e every screen except screen 4, return this
        if (input.type !== "textarea") {
          return (
            <div key={input.id} className="flex flex-col gap-2 relative z-[1]">
              <label
                htmlFor={input.placeholder}
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
                  isMultiple={input.multiple}
                  handleValidity={() => {
                    handleValidity(false || true);
                  }}
                />
              ) : (
                <input
                  className="w-full border-[#d0d5dd] border-[1px] rounded-md p-4 placeholder:text-[#98A2B3] "
                  type={input.type}
                  placeholder={input.placeholder}
                  id={input.placeholder}
                  required
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
          className={`${
            isValid
              ? "bg-[#121212] cursor-pointer"
              : "bg-[#6c6c6c] cursor-not-allowed"
          } ${
            loader ? "bg-[#6c6c6c]" : "bg-[#121212]"
          } text-white font-semibold border-[1px] w-[100%] max-w-[200px] py-5 rounded-md font-Inter text-center relative`}
          onClick={(e) => {
            e.preventDefault();
            const valid = (form.current! as HTMLFormElement).reportValidity();

            if (isValid) {
              handleClick();
            }
          }}
        >
          {currForm === 3 && loader ? (
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <LoadingSpinner />
            </div>
          ) : (
            ""
          )}
          {currForm === 3 ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
}

interface selectProps {
  label: any;
  dropList: [];
  handleInput: (e: any) => void;
  placeholder: any;
  apiName: any;
  isMultiple: boolean;
  handleValidity: (params: any) => void;
}

function SelectComponent({
  label,
  dropList,
  handleInput,
  placeholder,
  apiName,
  isMultiple,
  handleValidity,
}: selectProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const { formInputs, setFormInputs } = useMenteeContext();
  const [newList, setNewList] = useState([...dropList]);
  const [listShown, setListShown] = useState(false);
  const [inpValue, setInpValue] = useState("");

  function handleDelete(e: any) {
    const content =
      e.target.parentElement.querySelector(".tool-box").textContent;
    // @ts-ignore
    setSelectedValues((prevValues) => {
      const newArr = prevValues.filter((value: any) => value !== content);
      const selectName =
        e.target.parentElement.parentElement.parentElement.querySelector(
          "input"
        ).name;
      return newArr;
    });
  }

  function updateInput(e: any) {
    setInpValue(e.target.value);
    if (e.target.value !== "") {
      setListShown(true);
    } else if (e.target.value === "") {
      setListShown(false);
    }
    setNewList((prevList) => {
      const newArr = dropList.filter((option: any) =>
        option.toLowerCase().includes(e.target.value.toLowerCase())
      );
      return newArr;
    });

    handleValidity(false);
  }

  // This function is the click function for each of the options in the list
  // when clicked,it adds a skill that isn't already there
  function handleOptionClick(e: any) {
    // if the user selects the same value again, it won't be added to the list
    setSelectedValues((prevValues: any) => {
      if (prevValues.includes(e.target.textContent)) return prevValues;
      return [...prevValues, e.target.textContent];
    });
    setInpValue("");
    setListShown(false);
  }

  // This function is the click function for the plus icon
  // when clicked,it adds a skill that isn't already there
  function handlePlusClick() {
    if (newList.length !== 0 && inpValue === "") {
      toast.error("please type out your skill or select one from the list");
      return;
    }

    setSelectedValues((prevValues: any) => {
      if (prevValues.includes(inpValue)) return prevValues;
      return [...prevValues, inpValue];
    });
    setInpValue("");
    setListShown(false);
    handleValidity(true);
  }

  // This function is for the arrow down on the input field
  // It toggles the dropDown list and its state
  function handleArrowClick() {
    setNewList(dropList);
    setListShown(!listShown);
  }

  // this useffect, checks for the state of the arrow rotation
  useEffect(() => {
    if (newList.length === 0) {
      setListShown(false);
    }
  }, [inpValue]);

  useEffect(() => {
    // update the formInput state with the array of values
    setFormInputs((prevInputs: any) => ({
      ...prevInputs,
      [apiName]: selectedValues.join(", "),
    }));
  }, [selectedValues]);

  return isMultiple ? (
    <>
      <div className="relative overflow-hidden">
        <input
          onBlur={(e) => {
            console.log();
            if (
              e.target.value !== "" &&
              !e.relatedTarget?.classList.contains("exempted")
            ) {
              toast.error(
                "please click on the plus icon or select a skill from the list"
              );
              e.target.focus();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handlePlusClick();
            }
          }}
          type="text"
          className={`w-full border-[#d0d5dd] border-[1px] rounded-md pr-[4.5rem] p-4 text-Neutral60
          }`}
          onChange={updateInput}
          value={inpValue}
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={handlePlusClick}
          className="exempted absolute right-12  top-[50%] translate-y-[-50%] text-4xl"
          id="chuck"
        >
          <PlusIcon className="stroke-[#d0d5dd]" />
        </button>

        <button
          type="button"
          onClick={handleArrowClick}
          className="exempted absolute right-0 top-[50%] translate-y-[-50%] w-10 border-[#d0d5dd] border-l-2 h-[90%] flex justify-center items-center"
        >
          <Image
            src={arrowDown}
            alt="arrow"
            className={`${
              listShown ? "rotate-180 transition-all duration-150" : ""
            } max-w-[12px]`}
          />
        </button>
      </div>

      {listShown && newList.length > 0 ? (
        <div className="flex flex-col p-4 gap-2 border-[#d0d5dd] border-[1px] exempted">
          {" "}
          {newList.map((option: any) => (
            <button
              type="button"
              className="w-full exempted text-left"
              onClick={handleOptionClick}
              key={option}
            >
              {option}
            </button>
          ))}{" "}
        </div>
      ) : (
        ""
      )}

      {/* This div contains a display of all the options that the user has selected */}
      <div className="flex gap-2 flex-wrap">
        {selectedValues.map((value) => (
          <div
            key={value}
            className="border-black border-[1px] p-2 rounded-md w-fit flex gap-4 items-center"
          >
            <p className="tool-box">{value}</p>

            <button
              type="button"
              onClick={handleDelete}
              className="border-black rounded-[50%] border-[1px] px-[5px] text-center cursor-pointer"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </>
  ) : (
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
