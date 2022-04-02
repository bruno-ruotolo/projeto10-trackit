import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import localePtbr from "dayjs/locale/pt-br";

import Footer from "../Footer";
import Header from "../Header";
import { UserInfosContext } from "../../contexts/UserInfosContext";
import TodayHabit from "./TodayHabit";
import { CreateHabitsContext } from "../../contexts/CreateHabitsContext"

export default function Today() {
  dayjs.locale(localePtbr);

  const { userData: { token } } = useContext(UserInfosContext);
  const { setTodayPercentage } = useContext(CreateHabitsContext);

  const [todayHabits, setTodayHabits] = useState([]);
  const [selectedHabits, setSelectedHabits] = useState(false);

  const dayJSWeekDay = dayjs().format('dddd')
  const dayJSYearDay = dayjs().format('DD/MM')

  const habitsDone = todayHabits.filter((todayHabit) => {
    return todayHabit.done
  })
  const percentageHabitsDone = Math.ceil((habitsDone.length / todayHabits.length) * 100);

  useEffect(() => setTodayPercentage(percentageHabitsDone), [percentageHabitsDone, setTodayPercentage]);

  useEffect(() => {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const promise = axios.get(URL, config)

    promise.then((response) => {
      setTodayHabits(response.data);

    })

    promise.catch(() => {
      console.log("Promise Error");
    })
  }
    , [token, selectedHabits])

  return (
    <>
      <Header />
      <TodayScreen>
        <FixedTodayDiv>
          <h2>{dayJSWeekDay.charAt(0).toUpperCase() + dayJSWeekDay.slice(1)}, {dayJSYearDay}</h2>
          {(percentageHabitsDone) > 0
            ? <DoneQuantity
            >{percentageHabitsDone} % dos hábitos concluídos
            </DoneQuantity>
            : <p>Nenhum hábito concluído ainda</p>}

        </FixedTodayDiv>

        {todayHabits.map((todayHabit, index) => {
          const { id, name, done, currentSequence, highestSequence } = todayHabit;
          return (
            <TodayHabit
              todayHabits={todayHabits}
              key={index}
              selectedHabits={selectedHabits}
              setSelectedHabits={(value) => setSelectedHabits(value)}
              id={id}
              name={name}
              done={done}
              currentSequence={currentSequence}
              highestSequence={highestSequence}
            />
          )
        })}
      </ TodayScreen>
      <Footer />
    </>
  )

}

const FixedTodayDiv = styled.article`
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      width: 330px;
      margin-bottom: 28px;
      margin-top: 28px;

      h2 {
      font-weight: 400;
      font-size: 22.976px;
      line-height: 29px;
      color: #126BA5;
    }
      `

const TodayScreen = styled.section`
      display: flex;
      flex-direction: column;
      align-items: center;
      top: 70px;
      background-color: #F2F2F2;
      min-height: calc(100vh - 140px);
      width: 100%;
      margin-bottom: 70px;
      margin-top: 70px;

      p {
      font-weight: 400;
      font-size: 17.976px;
      line-height: 22px;
      color: #666666;
    }
      `

const DoneQuantity = styled.span`
  color: #8FC549;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
`

