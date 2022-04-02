import styled from "styled-components"
import { useContext, useState } from "react"
import axios from "axios";

import { ReactComponent as CheckMark } from "./CheckMark.svg"
import { UserInfosContext } from "../../contexts/UserInfosContext"

export default function TodayHabit(props) {
  const {
    selectedHabits,
    setSelectedHabits,
    id, name, done,
    currentSequence,
    highestSequence
  } = props;

  const [selectedHabit, setSelectedHabit] = useState(done);
  const [buttonDisable, setButtonDisable] = useState(false);

  const { userData: { token } } = useContext(UserInfosContext);

  function handleHabit() {
    setButtonDisable(true);
    const URL = selectedHabit ? `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
      : `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const promise = axios.post(URL, id, config);
    promise.then((response) => {
      setButtonDisable(false);
      setSelectedHabit(!selectedHabit);
      setSelectedHabits(!selectedHabits)
    });

    promise.catch((error) => {
      setButtonDisable(false);
      console.log(`Ops, parece que algo deu errado! Erro ${error.response.status} tente novamente`);
    })
  }

  return (
    <TodayListDiv>
      <TodayInformations >
        <h3>{name}</h3>
        <h4>Sequência atual:&nbsp;
          <SpanCurrentSequence selectedHabit={selectedHabit}>
            {currentSequence} {currentSequence === 1 ? "dia" : "dias"}
          </SpanCurrentSequence>
        </h4>
        <h4>Seu recorde:&nbsp;
          <SpanHighestSequence
            currentSequence={currentSequence}
            highestSequence={highestSequence}
            selectedHabit={selectedHabit}
          >
            {highestSequence} {highestSequence === 1 ? "dia" : "dias"}
          </SpanHighestSequence>
        </h4>
      </TodayInformations>
      <CheckMarkDiv>
        <button onClick={() => handleHabit()} disabled={buttonDisable}>
          <CheckMark fill={selectedHabit ? "#8FC549" : "#EBEBEB"} />
        </button>
      </CheckMarkDiv>
    </TodayListDiv >
  )
}

const TodayListDiv = styled.article`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 340px;
  min-height: 91px;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 13px 13px 12px 15px;
  
  h3 {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
  }

  img {
    width: 69px;
    height: 69px;
    color: #8FC549;
  }

  h4 {
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
`

const SpanCurrentSequence = styled.span`
  color: ${({ selectedHabit }) => selectedHabit ? "#8FC549" : "#666666"};
`

const SpanHighestSequence = styled.span`
  color: ${({ currentSequence, highestSequence, selectedHabit }) => (currentSequence === highestSequence && selectedHabit)
    ? "#8FC549" : "#666666"};
`

const TodayInformations = styled.div`
display: flex;
flex-direction: column;
align-items: flex - start;
`

const CheckMarkDiv = styled.div`
  width: 69px;
  height: 69px;
  margin-left: 5px;

  button {
    border:none;
    padding:0;
    background: none;
  }
`