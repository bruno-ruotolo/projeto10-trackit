import { createContext, useState } from "react";

export const UserInfos = createContext({});

export default function UserInfosProvider({ children }) {
  const [userData, setUserData] = useState({ token: "esse é o Token", image: "esse é a img" });
  console.log(userData)
  return (
    <UserInfos.Provider value={{ userData, setUserData }} >
      {children}
    </UserInfos.Provider>
  )
}

