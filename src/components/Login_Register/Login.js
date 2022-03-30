import styled from "styled-components"
import { Link } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import { useState, useContext } from "react"
import axios from "axios"
import { UserInfos } from "../../contexts/userInfos"

import Logo from "./Logo.svg"

export default function Login() {
  const { userData, setUserData } = useContext(UserInfos);

  const [userLogin, setUserLogin] = useState({});
  const [loadingState, setLoadingState] = useState({ loading: false, formState: false })
  const { loading, formState } = loadingState;

  function handleInput(e, property) {
    setUserLogin({ ...userLogin, [property]: e.target.value });
  }

  function sendData(e) {
    setLoadingState({ loading: true, formState: true });
    e.preventDefault();
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const promise = axios.post(URL, userLogin)

    promise.then((response) => {
      const { data } = response;
      setUserData({ token: data.token, image: data.image })
      console.log("Loguei");
      console.log(response)
    })

    promise.catch((error) => {
      console.log(error.response.status)
      alert(error.response.status === 401 ? error.response.data.message
        : "Algo deu errado, verifique seu email/senha e tente novamente!");
      setLoadingState({ loading: false, formState: false });
    })
  }
  return (
    <Conteiner >
      <img src={Logo} alt="TrackIt Logo" />
      <form onSubmit={sendData}>
        <input type="email" placeholder="email" onChange={(e) => handleInput(e, "email")}
          required disabled={formState} />
        <input type="password" placeholder="senha" autoComplete="on" onChange={(e) => handleInput(e, "password")}
          required disabled={formState} />
        <button type="submit"> {loading ? <ThreeDots color="#ffffff" /> : "Entrar"}</button>
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