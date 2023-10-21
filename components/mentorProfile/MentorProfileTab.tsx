"use client";

import Image from "next/image";
import React, {
  ChangeEvent,
  Dispatch,
  Fragment,
  SetStateAction,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { Button } from "../buttons/button";
import Selector from "../selector";
import useAuth from "@/context/useAuth";
import AuthContextProvider, { useAuthCtx } from "@/context/AuthContext";
import { InfoCard, InfoCardProps, ModalState } from "./ProfileDetailCard";
import {
  MentorDetailsContext,
  UserDetails,
} from "@/app/(mentor)/(dashboard-mentor)/mentor-profile/DetailsContext";
import { AddIConv2, EditIConv2 } from "@/public/SVGs";
import ProfileCard from "./MentorProfileCard";

export type ModalType = {
  state: "basic info" | "Experience/ Certification" | "Social links";
};

export default function MentorProfileTabLayout({
  modalState,
  onClose,
}: {
  modalState: string;
  onClose: Dispatch<SetStateAction<ModalState>>;
}) {
  const [active, setActive] = useState(modalState);
  const [certification, setCertification] = useState<InfoCardProps[]>([]);
  const [experience, setExperience] = useState<InfoCardProps[]>([]);

  const ProfileBio = useContext(MentorDetailsContext);

  useEffect(() => {
    const certification = ProfileBio.details.certification
      .split("  ")
      .map((item, index) => ({
        type: "certification",
        heading: item,
        text: "present",
        id: index + 20,
      }));
    const experience = ProfileBio.details.experience
      .split("  ")
      .map((item, index) => ({
        type: "experience",
        heading: item,
        text: "present",
        id: index + 20,
      }));
    setCertification(certification);
    setExperience(experience);
  }, [ProfileBio.details]);
  return (
    <div className="w-[100%] my-5 min-h-fit h-fit ">
      <div className="flex justify-between w-[100%] text-Neutra10 text-xs sm:text-base cursor-pointer px-4   border-b-2">
        <div
          onClick={() => {
            setActive("basic info");
          }}
          className={`${
            active === "basic info" ? "border-b-2  border-Accent1" : ""
          }`}
          role="presentation"
        >
          <p> basic info</p>
        </div>
        <div
          onClick={() => {
            setActive("Experience/ Certification");
          }}
          className={`${
            active === "Experience/ Certification"
              ? "border-b-2  border-Accent1"
              : "border-0"
          }`}
          role="presentation"
        >
          <p className="truncate w-[100px] sm:w-fit ">
            Experience/ Certifications
          </p>
        </div>
        <div
          onClick={() => {
            setActive("Social links");
          }}
          className={`${
            active === "Social links" ? "border-b-2  border-Accent1" : ""
          }`}
          role="presentation"
        >
          <p>Social links</p>
        </div>
      </div>
      {active === "basic info" && (
        <BasicInfoTab
          onClose={onClose}
          bio={ProfileBio.details.bio}
          fullName={ProfileBio.details.fullName}
          updateUserInfo={ProfileBio.updateUserDetailsCtx}
        />
      )}
      {active === "Experience/ Certification" && (
        <>
          <ExpeCerts
            title="certification"
            items={certification || []}
            updateState={setCertification}
            updateUserDetails={ProfileBio.updateUserDetailsCtx}
          />
          <ExpeCerts
            title="experience"
            items={experience || []}
            updateState={setExperience}
            updateUserDetails={ProfileBio.updateUserDetailsCtx}
          />
        </>
      )}
      {active === "Social links" && (
        <Socials
          linkedIn={ProfileBio.details.linkedIn!}
          others={ProfileBio.details.otherlinks!}
        />
      )}
    </div>
  );
}

type Data = {
  bio: string;
  fullName: string;
};

function BasicInfoTab({
  onClose,
  updateUserInfo,
  bio,
  fullName,
}: {
  onClose: Dispatch<SetStateAction<ModalState>>;
  updateUserInfo: React.Dispatch<React.SetStateAction<UserDetails>>;
} & Data) {
  const [details, setDetail] = useState({
    bio,
    fullName,
  });
  const [selected, setSelected] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const isDisabled = details.bio?.length < 10;
  const handleSubmit = () => {
    updateUserInfo((prev) => ({
      ...prev,
      ...details,
    }));
    onClose({
      state: "basic info",
      isOpen: false,
    });
  };

  return (
    <div className="w-[100%] px-4">
      <ProfileCard userName={fullName} />
      <div className="w-[100%] h-[100%] space-y-5 text-Neutra50">
        <MentorProfileInput
          label="Your full name"
          value={details.fullName}
          name="fullName"
          onChange={handleChange}
        />
        {/* <Selector
          placeHolder="pick your gender"
          selected={selected}
          onSelect={setSelected}
          options={["male", "female", "other"]}
        /> */}
        <TextArea
          label="Bio"
          value={details.bio}
          name="bio"
          onChange={handleChange}
        />
      </div>
      <div
        className={`flex w-[100%] h-fit justify-end py-5 ${
          isDisabled && "opacity-50"
        }`}
      >
        <Button variant="primary" onClick={handleSubmit} disabled={isDisabled}>
          update profile
        </Button>
      </div>
    </div>
  );
}

type InputProps = {
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>
  ) => void;
  label: string;
  name: string;
};

export function MentorProfileInput({
  value,
  name,
  label,
  onChange,
}: InputProps) {
  return (
    <div className="w-[100%] h-fit flex flex-col">
      <label htmlFor={name} className="text-sm flex items-center">
        {label}
        <span className="text-ErrorBase">*</span>
      </label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        className="flex grow active:border-0 p-4 focus:outline-none border border-Neutra10 h-[46px] rounded-[6px]"
      />
    </div>
  );
}
export function TextArea({ value, label, name, onChange }: InputProps) {
  return (
    <div className="w-[100%] h-fit flex flex-col">
      <label htmlFor={name} className="text-sm ">
        {label} <span className="text-ErrorBase">*</span>
      </label>
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        className="flex grow active:border-0 p-4 focus:outline-none border border-Neutra10 h-[216px] rounded-[6px]"
      />
    </div>
  );
}

type ExpeCertsProps = {
  items: InfoCardProps[];
  title: string;
  updateState: React.Dispatch<React.SetStateAction<InfoCardProps[]>>;
  updateUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
};

interface View {
  view: "Edit" | "All" | "Add" | "select";
}
export function ExpeCerts({
  items,
  title,
  updateState,
  updateUserDetails,
}: ExpeCertsProps) {
  const [view, setView] = useState("All");
  const [action, setAction] = useState("");
  const [item, setItem] = useState({
    title: "",
    content: "",
  });
  const handleUpdata = (id: string | number) => {};
  const id = useId();

  const handleAdd = () => {
    const newItem: InfoCardProps = {
      type: title,
      id,
      heading: item.title,
      text: item.content,
    };

    updateState((prev) => [...prev, newItem]);
    setItem({
      content: "",
      title: "",
    });
    setView("All");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    updateUserDetails((prev) => ({ ...prev, [title]: item.title }));
    console.log(title);
    setView("All");
  };
  return (
    <div className="w-[100%]  relative h-fit max-h-[400px] flex flex-col border border-3  rounded-[6px] my-5 overflow-scroll hide-message-layout-scroll ">
      {view === "All" && (
        <div className="flex flex-col h-fit">
          <div className="w-[100%] h-[20px] py-6 flex justify-between px-4  items-center">
            <p>{title}</p>

            <div className="space-x-4 flex items-center cursor-pointer">
              <span
                className="text-[20px]"
                onClick={() => {
                  setView("select");
                  setAction("Edit");
                }}
                role="presentation"
              >
                <EditIConv2 />
              </span>
              {/* <span
                onClick={() => {
                  setView("update");
                  setAction("Add");
                }}
                role="presentation"
              >
                <AddIConv2 />
              </span> */}
            </div>
          </div>
          <div className="px-4">
            {items.length >= 1 &&
              items.slice(0, 4).map((item) => (
                <Fragment key={item.text}>
                  <InfoCard {...item} />
                  <hr />
                </Fragment>
              ))}
            {items.length === 0 && <p> click to add {title}</p>}
          </div>
          {items.length > 4 && (
            <div
              className="flex w-[100%] h-[30px] bg-Neutra50 p-5 cursor-pointer items-center text-xs text-Neutra10 font-bold "
              role="presentation"
              onClick={() => {
                setView("select");
              }}
            >
              <p>view {items.length - 4} more...</p>
            </div>
          )}
        </div>
      )}
      {view === "update" && (
        <EditView
          cancel={setView}
          action={action}
          content={item.content}
          title={item.title}
          handleChange={handleChange}
          setItem={setItem}
          type={title}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
      )}
      {view === "select" && (
        <ShowItemsView
          setView={setView}
          setAction={setAction}
          setItem={setItem}
          itemsList={items}
        />
      )}
    </div>
  );
}

type Socialsprops = {
  linkedIn: string;
  others: string;
};

function Socials({ linkedIn, others }: Socialsprops) {
  return (
    <div className="my-5">
      <SocialsField color="bg-blue-500" text={linkedIn} type="linkedin" />
      <SocialsField color="bg-gray-500" text={others} type="other" />
    </div>
  );
}

export function SocialsField({
  type,
  text,
  color,
}: {
  type: string;
  text: string;
  color?: string;
}) {
  return (
    <div
      className={`w-[100%] h-[60px] flex px-4  space-y-2 py-2 flex-col ${color}   text-white rounded-[6px] my-4`}
    >
      <div className="text-xs"> 🔗 {type} </div>
      <div className="text-xs">{text}</div>
    </div>
  );
}
interface EditViewProps {
  cancel: React.Dispatch<React.SetStateAction<string>>;
  action: string;
  title: string;
  content: string;
  setItem: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
    }>
  >;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  handleAdd: () => void;
  handleEdit: () => void;
}

const getInputDesc = (type: string) => {
  if (type.toLocaleLowerCase() === "experience") {
    return ["company", "postion"];
  }
  if (type === "certification") {
    return ["issuing organisation", "course"];
  }
  return ["title", "content"];
};
function EditView({
  cancel,
  action,
  title,
  content,
  setItem,
  type,
  handleChange,
  handleAdd,
  handleEdit,
}: EditViewProps) {
  return (
    <div className="min-h-[80%] h-fit w-[100%] p-4">
      <div className="flex justify-end w-[100%] justify-between">
        <p className="font-bold uppercase text-lg">{action}</p>
        <Button
          variant="outline-primary"
          className="w-fit px-2 py-0 "
          paddingLess
          onClick={() => {
            cancel("All");
            setItem({
              title: "",
              content: "",
            });
          }}
        >
          cancel
        </Button>
      </div>

      <div className="w-[100%]  flex flex-col  my-4">
        <p className="text-Neutra30 text-sm font-bold">
          {getInputDesc(type)[0]}
          <span className="text-Error50">*</span>
        </p>
        <input
          className="  active:border-0 placeholder:text-xs  border w-[100%] rounded-[6px] p-2 focus:outline-none"
          placeholder="company"
          value={title}
          name="title"
          onChange={handleChange}
        />
      </div>
      <div className="w-[100%]  flex flex-col  my-4">
        <p className="text-Neutra30 text-sm font-bold">
          {getInputDesc(type)[1]}
          <span className="text-Error50">*</span>
        </p>
        <input
          className="  active:border-0 placeholder:text-xs  border w-[100%] rounded-[6px] p-2 focus:outline-none"
          placeholder="position"
          value={content}
          name="content"
          onChange={handleChange}
        />
      </div>
      {action === "Edit" ? (
        <Button variant="primary" onClick={handleEdit}>
          update
        </Button>
      ) : (
        <Button
          variant="primary"
          onClick={() => {
            handleAdd();
          }}
          disabled={content.length <= 0 || title.length <= 0}
        >
          Add
        </Button>
      )}
    </div>
  );
}

interface ShowItemsViewProps {
  setView: React.Dispatch<React.SetStateAction<string>>;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  setItem: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
    }>
  >;
  itemsList: InfoCardProps[];
}

function ShowItemsView({
  setView,
  setAction,
  setItem,
  itemsList,
}: ShowItemsViewProps) {
  return (
    <div className="w-[100%] h-fit px-4 ">
      <div className=" flex justify-end sticky h-fit top-[0px] bg-white py-4">
        <Button
          variant="outline-primary"
          className="w-fit px-2 py-0 "
          paddingLess
          onClick={() => {
            setView("All");
          }}
        >
          cancel
        </Button>
      </div>
      {itemsList.map((item) => (
        <ItemsCard
          title={item.heading!}
          content={item.text!}
          setAction={setAction}
          setItem={setItem}
          setView={setView}
        />
      ))}
    </div>
  );
}

function ItemsCard({
  title,
  content,
  setAction,
  setItem,
  setView,
}: {
  title: string;
  content: string;
  setAction: Dispatch<SetStateAction<string>>;
  setItem: Dispatch<SetStateAction<{ title: string; content: string }>>;
  setView: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div
      className="w-[100%] h-fit rounded-[4px] p-3 bg-gray-50 my-4 cursor-pointer text-Neutra40"
      onClick={() => {
        setView("update");
        setAction("Edit");
        setItem({
          content,
          title,
        });
      }}
      role="presentation"
    >
      <p className="font-extrabold">{title}</p>
      <p>{content}</p>
    </div>
  );
}
