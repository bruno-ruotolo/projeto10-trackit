import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  return (
    <FooterDiv>
      <p onClick={() => navigate("/habitos")}>Hábitos</p>
      <p onClick={() => navigate("/hoje")}>HOJE</p>
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