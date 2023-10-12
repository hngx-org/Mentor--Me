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
  mice: any;
  setMice: Dispatch<SetStateAction<any>>;
  formInputs: any;
  setFormInputs: Dispatch<SetStateAction<any>>;
}

export const MentorContext = createContext<ContextProps>({
  mice: "",
  setMice: (): string => "",
  formInputs: {},
  setFormInputs: (): any => {},
});

interface myProps {
  children: any;
}

export function MentorProvider({ children }: myProps) {
  const [mice, setMice] = useState(false);
  const [formInputs, setFormInputs] = useState({});
  const myValues = useMemo(
    () => ({ mice, setMice, formInputs, setFormInputs }),
    [formInputs]
  );
  return (
    <MentorContext.Provider value={myValues}>{children}</MentorContext.Provider>
  );
}

export function useMentorContext() {
  return useContext(MentorContext);
}
