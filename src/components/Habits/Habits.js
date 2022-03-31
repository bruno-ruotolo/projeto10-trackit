import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Header from "../Header";
import Footer from "../Footer";
import { UserInfosContext } from "../../contexts/UserInfosContext";
import CreateHabit from "./CreateHabit";

export default function Habits() {
  const { userData: { token } } = useContext(UserInfosContext);

  const [creationTab, setCreationTab] = useState(false);

  useEffect(() => {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const promise = axios.get(URL, config);

    promise.then((response) => {
      console.log(response);
    });

    promise.catch((error) => {
      alert("Algo deu errado, tente reiniciar a página novamente");
    });

  }, [token])

  //TEM QUE MANTER OS DADOS AO CANCELAR, USAR USECONTEXT
  return (
    <>
      <Header />
      <HabitsScreen>
        <FixedHabitsDiv>
          <h2>Meus hábitos</h2>
          <button onClick={() => setCreationTab(true)}><span>+</span></button>
        </FixedHabitsDiv>
        <CreateHabit creationTab={creationTab} callBack={(value) => setCreationTab(value)} />
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </HabitsScreen>
      <Footer />
    </>

  )
}

const HabitsScreen = styled.section`
  position:absolute;
  display:flex;
  flex-direction: column;
  align-items:center;
  top: 70px;
  background-color: #F2F2F2;
  height: calc(100vh - 70px);
  
  p {
    margin: 0 18px;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`

const FixedHabitsDiv = styled.article`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 28px;
  margin-top:28px;

  h2 {
    margin-left: 18px;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
  }

  button {
    margin-right: 18px;
    width: 40px;
    height: 35px;
    font-weight: 400;
    font-size: 27px;

    span {
      height: 37px;
    }
  }
`