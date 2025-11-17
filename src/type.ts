import type { Dispatch, SetStateAction } from "react";

export type UserInfo = {
  name: string;
  email: string;
  github: string;
  imageURL: string;
  isVerified: boolean;
};

export type ContextType = {
  state: UserInfo;
  setter: Dispatch<SetStateAction<UserInfo>>;
};
