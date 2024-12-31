import styled from "styled-components";
import { Button } from "../styled/Button";
import MyInformation from "./MyInformation";
const StartGame = ( {toggle} ) => {
  return (
    <>
    <MyInformation/>
    <Container>
        <div>
            <img src="images/dices.png"/>
        </div>

        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
    </>
  );
};

export default StartGame;

const Container = styled.div`
    display: flex;
    overflow:hidden;
    max-width: 1182px;
    height: 100vh;
    gap: 5px;
    align-items: center;
    margin: 0 auto;
    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }

`;
