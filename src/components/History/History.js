import styled from "styled-components";

import Footer from "../Footer";
import Header from "../Header";

export default function History() {

  return (
    <>
      <Header />
      <HistoryScreen>
        <FixedHistoryDiv>
          <h2>Histórico</h2>
        </FixedHistoryDiv>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </HistoryScreen>
      <Footer />
    </>
  )

}

const FixedHistoryDiv = styled.article`
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
`

const HistoryScreen = styled.section`
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
