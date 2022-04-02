import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserInfosContext } from "../contexts/UserInfosContext";
import { ReactComponent as LogoutIcon } from "./logouticon.svg"

export default function Header() {
  const { userData: { image }, setUserData } = useContext(UserInfosContext);

  const navigate = useNavigate();

  return (
    <HeaderDiv>
      <h1>TrackIt</h1>
      <img src={image} alt="" />
      <LogoutIconDiv onClick={() => {
        setUserData({ token: "", image: "" });
        localStorage.removeItem('token')
        localStorage.removeItem('image')
        navigate("/");
      }} />
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
  z-index: 1;

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
    margin-right: 30px;
  }
`

const LogoutIconDiv = styled(LogoutIcon)`
  position: absolute;
  right: 2px;
  bottom: 2px;
  color: white;
`