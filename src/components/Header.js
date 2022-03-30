import styled from "styled-components";
import { useContext } from "react";
import { UserInfosContext } from "../contexts/UserInfosContext";

export default function Header() {
  const { userData: { image } } = useContext(UserInfosContext);

  return (
    <HeaderDiv>
      <h1>TrackIt</h1>
      <img src={image} alt="" />
    </HeaderDiv>
  )
}

const HeaderDiv = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);  

  h1 {
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    margin-left: 18px;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 18px;
  }
`