import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserInfosProvider from "../contexts/userInfos"
import styled from "styled-components"

import Login from "./Login_Register/Login"
import Register from "./Login_Register/Register"
import Today from "./Today"

export default function App() {

  return (
    <UserInfosProvider>
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </UserInfosProvider>
  )
}

const Main = styled.main`
 button {
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius: 4.63636px;
    border: none;
    font-family: 'Lexend Deca', sans-serif;
    color: #FFFFFF;
    background-color: #52B6FF;
 }

 input {
    font-family: 'Lexend Deca', sans-serif;
    margin-bottom: 6px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    padding-left: 11px;
  }

  input::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
  }

`