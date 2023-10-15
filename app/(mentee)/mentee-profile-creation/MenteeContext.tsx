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
}

export const MenteeContext = createContext<ContextProps>({
  formInputs: {},
  setFormInputs: (): any => {},
});

interface myProps {
  children: any;
}

export function MenteeProvider({ children }: myProps) {
  const [formInputs, setFormInputs] = useState({});

  const myValues = useMemo(
    () => ({
      formInputs,
      setFormInputs,
    }),
    [formInputs]
  );
  return (
    <MenteeContext.Provider value={myValues}>{children}</MenteeContext.Provider>
  );
}

export function useMenteeContext() {
  return useContext(MenteeContext);
}
