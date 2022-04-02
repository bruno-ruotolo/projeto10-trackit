import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserInfosProvider from "./contexts/UserInfosContext"
import GlobalStyle from "./GlobalStyles/GlobalStyles";

import Login from "./components/Login_Register/Login"
import Register from "./components/Login_Register/Register"
import Habits from "./components/Habits/Habits"
import CreateHabitsProvider from "./contexts/CreateHabitsContext"
import Today from "./components/Today/Today";
import History from "./components/History/History";

export default function App() {
  return (
    <UserInfosProvider>
      <CreateHabitsProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </BrowserRouter>
      </CreateHabitsProvider>
    </UserInfosProvider>
  )
}