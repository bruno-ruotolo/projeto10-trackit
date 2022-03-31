import { createContext, useState } from "react";


export const CreateHabitsContext = createContext();

export default function CreateHabitsProvider({ children }) {
  const [createHabitsInfo, setCreateHabitsInfo] = useState({ name: "", days: new Map(), boolean: false });

  return (
    <CreateHabitsContext.Provider value={{ createHabitsInfo, setCreateHabitsInfo }}>
      {children}
    </CreateHabitsContext.Provider>
  )
}