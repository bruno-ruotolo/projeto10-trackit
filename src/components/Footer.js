import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { CreateHabitsContext } from "../contexts/CreateHabitsContext"

export default function Footer() {

  const { todayPercentage } = useContext(CreateHabitsContext);

  const navigate = useNavigate();

  return (
    <FooterDiv>
      <p onClick={() => navigate("/habitos")}>Hábitos</p>
      <CircularProgressBarDiv onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          background
          backgroundPadding={6}
          value={todayPercentage}
          text={"Hoje"}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#ffffff",
            pathColor: "#ffffff",
            trailColor: "transparent",
            strokeLinecap: "round",
            textSize: "17.98px",
          })}
        />
      </CircularProgressBarDiv>
      <p onClick={() => navigate("/historico")}>Histórico</p>
    </FooterDiv>
  )
}

const FooterDiv = styled.footer`
  position: fixed;
  bottom:0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  display: flex;
  align-items:center;
  justify-content:space-around;

  p{
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #52B6FF;
  }
`

const CircularProgressBarDiv = styled.div`
  width: 91px;
  height: 91px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`