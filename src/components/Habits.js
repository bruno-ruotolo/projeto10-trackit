import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";


export default function Habits() {

  return (
    <>
      <Header />
      <HabitsScreen>
        <FixedHabitsDiv>
          <h2>Meus hábitos</h2>
          <button><span>+</span></button>
        </FixedHabitsDiv>
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