import { createContext, useState } from "react";

export const UserInfosContext = createContext({});

export default function UserInfosProvider({ children }) {
  const [userData, setUserData] = useState(LocalStorage);

  function LocalStorage() {

    const userTokenStorage = localStorage.getItem("token");
    const userImageStorage = localStorage.getItem("image");

    if (userTokenStorage && userImageStorage) {
      return ({ token: userTokenStorage, image: userImageStorage })
    } else {
      return ({ token: "", image: "" })
    }
  }

  return (
    <UserInfosContext.Provider value={{ userData, setUserData }} >
      {children}
    </UserInfosContext.Provider>
  )
}

