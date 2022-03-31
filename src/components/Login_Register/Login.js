import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import { useState, useContext, useEffect } from "react"
import axios from "axios"
import { UserInfosContext } from "../../contexts/UserInfosContext"

import Logo from "./Logo.svg"

export default function Login() {
  const navigate = useNavigate();
  const userTokenStorage = localStorage.getItem("token");

  const { setUserData } = useContext(UserInfosContext);

  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [loadingState, setLoadingState] = useState({ loading: false, formState: false })
  const { loading, formState } = loadingState;

  useEffect(() => {
    if (userTokenStorage) {
      navigate("/habitos");
    }
  }, [navigate, userTokenStorage]);

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
      localStorage.setItem('token', data.token);
      localStorage.setItem('image', data.image);
      navigate("/habitos");
    })

    promise.catch((error) => {
      alert(error.response.status === 401 ? error.response.data.message
        : "Algo deu errado, verifique seu email/senha e tente novamente!");
      setLoadingState({ loading: false, formState: false });
    })

  }
  return (
    <Conteiner >
      <img src={Logo} alt="TrackIt Logo" />
      <form onSubmit={sendData}>
        <input type="email" placeholder="email" value={userLogin.email} onChange={(e) => handleInput(e, "email")}
          required disabled={formState} />
        <input type="password" placeholder="senha" value={userLogin.password} autoComplete="on" onChange={(e) => handleInput(e, "password")}
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
    width: 303px;
    height: 45px;
  }

  button {
    width: 303px;
    height: 45px;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
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