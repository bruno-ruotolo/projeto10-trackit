import { createContext, useState } from "react";

export const UserInfosContext = createContext({});

export default function UserInfosProvider({ children }) {
  const [userData, setUserData] = useState({ token: "", image: "" });
  return (
    <UserInfosContext.Provider value={{ userData, setUserData }} >
      {children}
    </UserInfosContext.Provider>
  )
}

