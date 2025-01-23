import { useState } from "react";
import styled from "styled-components";
import NumberSelecter from "./NumberSelecter";
import TotalScore from "./TotalScore";
import RollDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
import MyInformation from "./MyInformation";

const GamePlay = () => {
  const[score,setScore] = useState(0);
  const [selectedNumber,setSelectednumber] = useState();
  const[currDice,setCurrDice]=useState(1);
  const [error,setError]=useState();
  const [showRules,setShowRules]=useState(false);

  const genRandomNumber = (min , max) => {
    console.log(Math.floor(Math.random() * (max-min)+min));
    return Math.floor(Math.random() * (max-min)+min);
};
const roleDice = () => {
  if (!selectedNumber) {
    setError("You have not selected any number");
    return;
  };
  setError("");
  const randomNumber = genRandomNumber(1,7);
  setCurrDice((prev)=>randomNumber);
  
  

  if(selectedNumber==randomNumber){
    setScore((prev)=>prev+randomNumber)
  }else{
    setScore((prev)=>prev-2)
  }
  setSelectednumber(undefined);
};
const resetScore = () =>{
  setScore(0);
}


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelecter error={error} setError={setError} selectedNumber={selectedNumber} setSelectednumber={setSelectednumber}/>
      </div>
      <RollDice currDice={currDice} roleDice={roleDice}/>
      <div className="btns">
        <OutlineButton onClick={resetScore}> change reset btn</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
 
  );
};

export default GamePlay;
  const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
      height: calc(100vh - 600px);
      display: flex;
      justify-content: space-around;
      align-items: end;
    }
    .btns{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  `;