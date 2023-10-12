import { createContext } from "react";

export interface UserAuth {
  token: string;
  id: string | null;
}

export interface AuthContextType {
  userAuth: UserAuth;
  setUserAuth: (auth: UserAuth) => void;
}

const AuthCtx = createContext<AuthContextType | undefined>(undefined);

export default AuthCtx;
