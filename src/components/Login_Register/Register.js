import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

import Logo from "./Logo.svg"


export default function Register() {
  const [userData, setUserData] = useState({})
  const [loadingState, setloadingState] = useState({ formState: false, loading: false });
  const { loading, formState } = loadingState;

  const navigate = useNavigate();

  function handleData(e, property) {
    setUserData({ ...userData, [property]: e.target.value })
  }

  function sendData(event) {
    event.preventDefault();
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    setloadingState({ formState: true, loading: true });

    const promise = axios.post(URL, null);
    promise.then(() => {
      alert("Registro realizado com sucesso!");
      navigate("/")
    });

    promise.catch(() => {
      setloadingState({ formState: false, loading: false });
      alert("Ops, algo deu errado! Tente novamente");
    });
  }

  return (
    <Conteiner >
      <img src={Logo} alt="TrackIt Logo" />
      <form onSubmit={sendData}>
        <input type="email" placeholder="email" onChange={(e) => handleData(e, "email")} disabled={formState} required />
        <input type="password" placeholder="senha" autoComplete="on"
          onChange={(e) => handleData(e, "password")} disabled={formState} required />
        <input type="text" placeholder="nome" onChange={(e) => handleData(e, "name")} disabled={formState} required />
        <input type="url" placeholder="foto" onChange={(e) => handleData(e, "image")} disabled={formState} required />
        <button type="submit" disabled={formState}>{loading ? <ThreeDots color="#ffffff" /> : "Cadastrar"}</button>
      </form>


      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
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
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
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