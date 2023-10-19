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
  loader: any;
  setLoader: Dispatch<SetStateAction<any>>;
}

export const MentorContext = createContext<ContextProps>({
  formInputs: {},
  setFormInputs: (): any => {},
  currForm: "",
  setCurrForm: (): any => {},
  files: {},
  setFiles: (): any => {},
  loader: false,
  setLoader: (): any => {},
});

interface myProps {
  children: any;
}

export function MentorProvider({ children }: myProps) {
  const [formInputs, setFormInputs] = useState({
    preferred_endTime: "18:00",
    year_of_graduation: 0,
    certification_file: "hey",
  });
  const [files, setFiles] = useState({
    file1: "",
    file2: "",
    file3: "",
  });
  const [currForm, setCurrForm] = useState(0);
  const [loader, setLoader] = useState(false);
  const myValues = useMemo(
    () => ({
      formInputs,
      setFormInputs,
      files,
      setFiles,
      currForm,
      setCurrForm,
      loader,
      setLoader,
    }),
    [formInputs, currForm, loader]
  );
  return (
    <MentorContext.Provider value={myValues}>{children}</MentorContext.Provider>
  );
}

export function useMentorContext() {
  return useContext(MentorContext);
}
