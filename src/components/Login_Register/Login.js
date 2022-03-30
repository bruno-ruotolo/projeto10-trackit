import styled from "styled-components"
import { Link } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import { useState, useContext } from "react"

import Logo from "./Logo.svg"
import { UserInfos } from "../../contexts/userInfos"

export default function Login() {

  const { userData: token, userData: image } = useContext(UserInfos);
  console.log(token)
  return (
    <Conteiner >
      <img src={Logo} alt="TrackIt Logo" />
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" autoComplete="on" />
        <button type="submit"> Entrar </button>
      </form>

      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Conteiner>
  )
}

const Conteiner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 68px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
  }

  input {
    font-family: 'Lexend Deca', sans-serif;
    margin-bottom: 6px;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
  }

  input::placeholder {
    position: relative;
    left: 11px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
  }

  button {
    display:flex;
    align-items:center;
    justify-content: center;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;
  }

  p {
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
  }
`