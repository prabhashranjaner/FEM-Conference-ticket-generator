import { createContext, useContext, useState, type ReactNode } from "react";
import type { ContextType, UserInfo } from "../type";

const StateContext = createContext<ContextType | null>(null);

const initialState = {
  name: "",
  email: "",
  github: "",
  imageURL: "",
  isVerified: false,
};
function StateContextProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfo>(initialState);
  return (
    <StateContext.Provider value={{ state: userInfo, setter: setUserInfo }}>
      {children}
    </StateContext.Provider>
  );
}

export default StateContextProvider;

//eslint-disable-next-line
export function useStateData() {
  const context = useContext(StateContext);

  if (!context) throw new Error("Context called outside of provider");

  return context;
}
