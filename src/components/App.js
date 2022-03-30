import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserInfosProvider from "../contexts/userInfos"

import Login from "./Login_Register/Login"
import Register from "./Login_Register/Register"

export default function App() {

  return (
    <UserInfosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserInfosProvider>
  )
}