import { createContext, useState } from "react";


export const CreateHabitsContext = createContext();

export default function CreateHabitsProvider({ children }) {
  const [createHabitsInfo, setCreateHabitsInfo] = useState({ name: "", days: new Map(), boolean: false });
  const [todayPercentage, setTodayPercentage] = useState(0);

  return (
    <CreateHabitsContext.Provider value={{ createHabitsInfo, setCreateHabitsInfo, todayPercentage, setTodayPercentage }}>
      {children}
    </CreateHabitsContext.Provider>
  )
}