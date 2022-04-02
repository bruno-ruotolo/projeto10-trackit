import styled from "styled-components";
import axios from "axios";
import { useContext, useState, useEffect } from "react";

import TrashCanIcon from "./trashcan2.svg"
import { UserInfosContext } from "../../contexts/UserInfosContext";
import { CreateHabitsContext } from "../../contexts/CreateHabitsContext"

export default function HabitsList() {
  const { createHabitsInfo, setCreateHabitsInfo } = useContext(CreateHabitsContext);
  const { boolean } = createHabitsInfo;

  let selectedDay = false;

  const { userData: { token } } = useContext(UserInfosContext);

  const [habitsList, setHabitsList] = useState([])

  const weekDays = [
    { name: "D", number: 0 },
    { name: "S", number: 1 },
    { name: "T", number: 2 },
    { name: "Q", number: 3 },
    { name: "Q", number: 4 },
    { name: "S", number: 5 },
    { name: "S", number: 6 }
  ];

  useEffect(() => {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const promise = axios.get(URL, config);

    promise.then((response) => {
      setHabitsList(response.data);
    });

    promise.catch((error) => {
      alert("Algo deu errado, tente reiniciar a página novamente");
    });

  }, [token, boolean])

  function handleHabits(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

    const confirmar = window.confirm("Tem certeza que quer apagar?")

    if (confirmar) {
      const promise = axios.delete(URL, config);
      promise.then(() => {
        setCreateHabitsInfo({ ...createHabitsInfo, boolean: !boolean })
      });
      promise.catch(() => alert("Ops, algo deu errado! Tente novamente"));
    }
  }

  return habitsList.length !== 0 ? (
    habitsList.map((habit, index) => {
      const { name, days, id } = habit;
      return (
        <HabitsListDiv key={index}>
          <h3>{name}</h3>
          <img src={TrashCanIcon} alt="TrashCanIcon" onClick={() => handleHabits(id)} />
          <CheckboxesList >
            {weekDays.map((weekDay, indexWeekDays) => {
              const { name, number } = weekDay;
              if (days.includes(number)) {
                selectedDay = true;
              } else {
                selectedDay = false;
              }
              return (
                <CheckboxList key={indexWeekDays} selectedDay={selectedDay}>
                  <span>{name}</span>
                </CheckboxList>
              )
            })}
          </CheckboxesList>
        </HabitsListDiv>
      )
    })
  ) : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
}

const HabitsListDiv = styled.article`
  position: relative;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width: 340px;
  min-height: 91px;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 13px 10px 15px 15px;
  
  h3 {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
    margin-right: 10px;
  }

  img {
    position: absolute;
    top: 11px;
    right: 10px;
    width: 16px;
    height: 18px;
  }
`

const CheckboxesList = styled.div`
  display:flex;
  align-items:center;
`
const CheckboxList = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 30px;
  height: 30px; 
  background-color: ${(props) => props.selectedDay ? "#CFCFCF" : "#FFFFFF"};
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  margin-right: 4px;

  span {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${(props) => props.selectedDay ? "#FFFFFF" : "#DBDBDB"};
  }
`