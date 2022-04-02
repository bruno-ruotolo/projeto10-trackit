import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

import Logo from "./Logo.svg"

export default function Register() {
  const [userRegister, setUserRegister] = useState({ email: "", password: "", name: "", image: "" })
  const [loadingState, setloadingState] = useState({ formState: false, loading: false });
  const { loading, formState } = loadingState;

  const navigate = useNavigate();

  function handleData(e, property) {
    setUserRegister({ ...userRegister, [property]: e.target.value })
  }

  function sendData(e) {
    e.preventDefault();
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    setloadingState({ formState: true, loading: true });

    const promise = axios.post(URL, userRegister);
    promise.then(() => {
      navigate("/")
    });

    promise.catch((error) => {
      setloadingState({ formState: false, loading: false });
      alert(error.response.status === 409 ? error.response.data.message : "Ops, algo deu errado! Tente novamente");
    });
  }

  return (
    <Conteiner >
      <img src={Logo} alt="TrackIt Logo" />
      <form onSubmit={sendData}>
        <input type="email" placeholder="email" value={userRegister.email} onChange={(e) => handleData(e, "email")}
          disabled={formState} required />

        <input type="password" placeholder="senha" autoComplete="on" value={userRegister.password} onChange={(e) => handleData(e, "password")}
          disabled={formState} required />

        <input type="text" placeholder="nome" value={userRegister.name} onChange={(e) => handleData(e, "name")}
          disabled={formState} required />

        <input type="url" placeholder="foto" value={userRegister.image} onChange={(e) => handleData(e, "image")}
          disabled={formState} required />

        <button type="submit" disabled={formState}>{loading ? <ThreeDots color="#ffffff" />
          : "Cadastrar"}</button>
      </form>
      <p onClick={() => navigate("/")}>Já tem uma conta? Faça login!</p>
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
    width: 303px;
    height: 45px;
  }

  button {
    width: 303px;
    height: 45px;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    background-color:#52B6FF;
  }

  p {
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
    cursor: pointer;
  }

`