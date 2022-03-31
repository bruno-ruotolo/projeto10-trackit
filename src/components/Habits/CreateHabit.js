import styled from "styled-components"

import CheckBox from "./CheckBox";

export default function CreateHabit(props) {
  const { creationTab, callBack } = props
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

  return creationTab ? (
    <CreationDiv>
      <input type="text" placeholder="nome do hábito" />
      <Checkboxes>
        {weekDays.map((weekDay, index) => {
          return (<CheckBox weekDay={weekDay} key={index} />)
        })}
      </Checkboxes>
      <Buttons>
        <button onClick={() => callBack(false)}>Cancelar</button>
        <button>Salvar</button>
      </Buttons>

    </CreationDiv>
  ) : <></>
}

const CreationDiv = styled.article`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width: 340px;
  height: 180px;
  left: 17px;
  top: 147px;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 29px;

  input{
    width: 303px;
    height: 45px;   
  }
`

const Checkboxes = styled.div`
  display:flex;
  align-items:center;

`

const Buttons = styled.div`
  display:flex;
  align-items:center;
  width: 100%;
  justify-content: flex-end;
  margin-top: 25px;

  button:last-child {
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #FFFFFF;
  }

  button:first-child{
    width: 84px;
    height: 35px;
    background-color: transparent;
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    color: #52B6FF;
    margin-right: 15.5px;
  }
`