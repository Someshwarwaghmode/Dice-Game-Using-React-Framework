import { useState } from "react";
import styled from "styled-components"
const NumberSelecter = ( {setError,error,selectedNumber, setSelectednumber}) => {
    const arrNumber = [1 , 2 , 3 , 4 , 5 , 6 ];
    
    console.log(selectedNumber);
    const numberSelectorHandler = (value) =>{
        setSelectednumber(value);
        setError("");
    }
  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
         <div className="flex">
            {
                arrNumber.map((value , i) => (<Box isSelected ={value == selectedNumber} key={i} onClick={() =>   numberSelectorHandler(value)}> {value} </Box>))
            }
         </div>
         <p>Select Number</p>
    </NumberSelectorContainer>
    
  );
};

export default NumberSelecter;
const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    .error{
        color: red;
    }
`;
const Box = styled.div`
    border: 1px solid black;
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
   
`;