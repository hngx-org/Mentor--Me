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
  is1stLoaded: any;
  setIs1stLoaded: Dispatch<SetStateAction<any>>;
  is2ndLoaded: any;
  setIs2ndLoaded: Dispatch<SetStateAction<any>>;
  is3rdLoaded: any;
  setIs3rdLoaded: Dispatch<SetStateAction<any>>;
}

export const MenteeContext = createContext<ContextProps>({
  mice: "",
  setMice: (): string => "",
  formInputs: {},
  setFormInputs: (): any => {},
  is1stLoaded: false,
  setIs1stLoaded: (): any => {},
  is2ndLoaded: false,
  setIs2ndLoaded: (): any => {},
  is3rdLoaded: false,
  setIs3rdLoaded: (): any => {},
});

interface myProps {
  children: any;
}

export function MenteeProvider({ children }: myProps) {
  const [mice, setMice] = useState(false);
  const [formInputs, setFormInputs] = useState({
    preferred_endTime: "18:00",
  });
  const [is1stLoaded, setIs1stLoaded] = useState(false);
  const [is2ndLoaded, setIs2ndLoaded] = useState(false);
  const [is3rdLoaded, setIs3rdLoaded] = useState(false);
  const myValues = useMemo(
    () => ({
      mice,
      setMice,
      formInputs,
      setFormInputs,
      is1stLoaded,
      is2ndLoaded,
      is3rdLoaded,
      setIs1stLoaded,
      setIs2ndLoaded,
      setIs3rdLoaded,
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

// web dev
