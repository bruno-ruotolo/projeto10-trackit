import styled from "styled-components";
import { useState } from "react";

export default function CheckBox(props) {
  const { weekDay } = props;
  const [selectedDay, setSelectedDay] = useState(false);

  return (
    <Checkbox selectedDay={selectedDay} onClick={() => setSelectedDay(!selectedDay)} >
      <span>{weekDay}</span>
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