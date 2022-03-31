import styled from "styled-components";
import { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import CreateHabit from "./CreateHabit";
import HabitsList from "./HabitsList";

export default function Habits() {
  const [creationTab, setCreationTab] = useState(false);
  return (
    <>
      <Header />
      <HabitsScreen>
        <FixedHabitsDiv>
          <h2>Meus hábitos</h2>
          <button onClick={() => setCreationTab(true)}><span>+</span></button>
        </FixedHabitsDiv>
        <CreateHabit creationTab={creationTab} callBack={(value) => setCreationTab(value)} />
        <HabitsList />
      </HabitsScreen>
      <Footer />
    </>
  )
}

const HabitsScreen = styled.section`
  display:flex;
  flex-direction: column;
  align-items:center;
  top: 70px;
  background-color: #F2F2F2;
  min-height: calc(100vh - 140px);
  width: 100%;
  margin-bottom: 70px;
  margin-top: 70px;
  
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
  width: 330px;
  margin-bottom: 28px;
  margin-top:28px;

  h2 {
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
  }

  button {
    width: 40px;
    height: 35px;
    font-weight: 400;
    font-size: 27px;

    span {
      height: 37px;
    }
  }
`