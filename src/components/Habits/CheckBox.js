import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { CreateHabitsContext } from "../../contexts/CreateHabitsContext"

export default function CheckBox(props) {
  const { name, index } = props;

  const [selectedDay, setSelectedDay] = useState(false);

  const { createHabitsInfo, setCreateHabitsInfo } = useContext(CreateHabitsContext);
  const { days } = createHabitsInfo;
  const selectedMapDay = days.has(index)

  useEffect(() => {
    if (selectedMapDay) {
      setSelectedDay(true);
    } else {
      setSelectedDay(false);
    }
  }, [selectedMapDay])

  function handleWeekDays() {
    if (selectedMapDay) {
      setSelectedDay(!selectedMapDay);
      days.delete(index);
      setCreateHabitsInfo({ ...createHabitsInfo, days });
    } else {
      setSelectedDay(!selectedMapDay);
      days.set(index, name);
      setCreateHabitsInfo({ ...createHabitsInfo, days });
    }
  }
  return (
    <Checkbox selectedDay={selectedDay} onClick={handleWeekDays} >
      <span>{name}</span>
    </Checkbox>
  )
}

const Checkbox = styled.div`
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