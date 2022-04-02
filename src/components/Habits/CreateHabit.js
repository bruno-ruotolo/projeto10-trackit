import styled from "styled-components"
import { useContext, useState } from "react";
import { CreateHabitsContext } from "../../contexts/CreateHabitsContext"
import { UserInfosContext } from "../../contexts/UserInfosContext"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios";

import CheckBox from "./CheckBox";

export default function CreateHabit(props) {
  const { creationTab, callBack } = props
  const weekDays = [
    { name: "D", number: 0 },
    { name: "S", number: 1 },
    { name: "T", number: 2 },
    { name: "Q", number: 3 },
    { name: "Q", number: 4 },
    { name: "S", number: 5 },
    { name: "S", number: 6 }
  ];

  const { createHabitsInfo, setCreateHabitsInfo } = useContext(CreateHabitsContext);
  const { name, boolean } = createHabitsInfo;

  const { userData: { token } } = useContext(UserInfosContext);

  const [toggleInputs, setToggleInputs] = useState(false);

  function sendData(e) {
    setToggleInputs(true);
    e.preventDefault();

    const { name, days } = createHabitsInfo;

    if (days.size === 0) {
      alert("Selecione pelo menos um dia")
      setToggleInputs(false)
    } else {
      let arrDays = [...days.keys()];
      arrDays = arrDays.sort((a, b) => a - b);

      const objPost = { name, days: arrDays };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
      const promise = axios.post(URL, objPost, config);

      promise.then((response) => {
        setToggleInputs(false);
        callBack(false);
        setCreateHabitsInfo({ name: "", days: new Map(), boolean: !boolean });
      })

      promise.catch(() => {
        setToggleInputs(false);
        alert("Ops, algo deu errado! Verifique se todos os campos estão preenchidos e tente novamente")
      })
    }
  }

  return creationTab ? (
    <CreationDiv>
      <form onSubmit={sendData}>
        <input type="text" placeholder="nome do hábito"
          value={name}
          required
          disabled={toggleInputs}
          onChange={(e) => setCreateHabitsInfo({ ...createHabitsInfo, name: e.target.value })} />

        <Checkboxes>
          {weekDays.map((weekDay, index) => {
            const { name } = weekDay;
            return (<CheckBox name={name} key={index} index={index} toggleInputs={toggleInputs} />)
          })}
        </Checkboxes>
        <Buttons>
          <button onClick={() => callBack(false)}>Cancelar</button>
          <button type="submit"> {toggleInputs ? <ThreeDots color="#ffffff" width="70px" /> : "Salvar"}</button>
        </Buttons>
      </form>

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