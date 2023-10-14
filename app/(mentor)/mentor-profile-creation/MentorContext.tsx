"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
} from "react";

interface ContextProps {
  formInputs: any;
  setFormInputs: Dispatch<SetStateAction<any>>;
  files: any;
  setFiles: Dispatch<SetStateAction<any>>;
  currForm: any;
  setCurrForm: Dispatch<SetStateAction<any>>;
  isRegistered: any;
  setIsRegistered: Dispatch<SetStateAction<any>>;
}

export const MentorContext = createContext<ContextProps>({
  formInputs: {},
  setFormInputs: (): any => {},
  currForm: "",
  setCurrForm: (): any => {},
  files: {},
  setFiles: (): any => {},
  isRegistered: false,
  setIsRegistered: (): any => {},
});

interface myProps {
  children: any;
}

export function MentorProvider({ children }: myProps) {
  const [formInputs, setFormInputs] = useState({
    preferred_endTime: "18:00",
  });
  const [files, setFiles] = useState({
    file1: "",
    file2: "",
    file3: "",
  });
  const [currForm, setCurrForm] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const myValues = useMemo(
    () => ({
      formInputs,
      setFormInputs,
      files,
      setFiles,
      currForm,
      setCurrForm,
      isRegistered,
      setIsRegistered,
    }),
    [formInputs, currForm, isRegistered]
  );
  return (
    <MentorContext.Provider value={myValues}>{children}</MentorContext.Provider>
  );
}

export function useMentorContext() {
  return useContext(MentorContext);
}
