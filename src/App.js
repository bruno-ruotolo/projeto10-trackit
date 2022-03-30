import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserInfosProvider from "./contexts/UserInfosContext"
import GlobalStyle from "./GlobalStyles/GlobalStyles";

import Login from "./components/Login_Register/Login"
import Register from "./components/Login_Register/Register"
import Today from "./components/Today"

export default function App() {

  return (
    <UserInfosProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/hoje" element={<Today />} />
        </Routes>
      </BrowserRouter>
    </UserInfosProvider>
  )
}