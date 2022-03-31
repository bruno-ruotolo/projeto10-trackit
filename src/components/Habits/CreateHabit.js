import styled from "styled-components"

export default function CreateHabit(props) {
  const { creationTab } = props;

  return creationTab ? (
    <CreationDiv>
      <input type="text" placeholder="nome do hábito" />
      <Checkboxes>
        <Checkbox><span>D</span></Checkbox>
        <Checkbox><span>S</span></Checkbox>
        <Checkbox><span>T</span></Checkbox>
        <Checkbox><span>Q</span></Checkbox>
        <Checkbox><span>Q</span></Checkbox>
        <Checkbox><span>S</span></Checkbox>
      </Checkboxes>
      <Buttons>
        <button>Cancelar</button>
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

  input{
    width: 303px;
    height: 45px;   
  }
`

const Checkboxes = styled.div`
  display:flex;
  align-items:center;

`

const Checkbox = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 30px;
  height: 30px; 
  background-color: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  margin-right: 4px;

  span {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
  }
`

const Buttons = styled.div`
  display:flex;
  align-items:center;
  width: 100%;
  justify-content: flex-end;

  button:last-child {
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
  }
`