import styled from "styled-components";

export default function HabitsList(props) {
  const { habitsList } = props;
  let selectedDay = false;

  const weekDays = [
    { name: "D", number: 1 },
    { name: "S", number: 2 },
    { name: "T", number: 3 },
    { name: "Q", number: 4 },
    { name: "Q", number: 5 },
    { name: "S", number: 6 },
    { name: "S", number: 7 }
  ];


  return habitsList !== [] ? (
    habitsList.map((habit, index) => {
      const { name, days } = habit;
      return (
        <HabitsListDiv key={index}>
          <h3>{name}</h3>
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
  ) : <></>
}

const HabitsListDiv = styled.article`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width: 340px;
  height: 91px;
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