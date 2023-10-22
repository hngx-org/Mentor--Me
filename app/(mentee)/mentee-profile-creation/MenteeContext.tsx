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
  currForm: any;
  setCurrForm: Dispatch<SetStateAction<any>>;
  loader: any;
  setLoader: Dispatch<SetStateAction<any>>;
}

export const MenteeContext = createContext<ContextProps>({
  formInputs: {},
  setFormInputs: (): any => {},
  loader: false,
  setLoader: (): any => {},
  currForm: "",
  setCurrForm: (): any => {},
});

interface myProps {
  children: any;
}

export function MenteeProvider({ children }: myProps) {
  const [formInputs, setFormInputs] = useState({});
  const [currForm, setCurrForm] = useState(0);
  const [loader, setLoader] = useState(false);

  const myValues = useMemo(
    () => ({
      formInputs,
      setFormInputs,
      currForm,
      setCurrForm,
      loader,
      setLoader,
    }),
    [formInputs, currForm, loader]
  );
  return (
    <MenteeContext.Provider value={myValues}>{children}</MenteeContext.Provider>
  );
}

export function useMenteeContext() {
  return useContext(MenteeContext);
}
