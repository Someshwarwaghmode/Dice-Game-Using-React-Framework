import styled from "styled-components";
const MyInformation = () => {
  return (
    <InfoContainer>
        <div className="info">
            <h4>+91 7666473300 | someshwar.waghmode@indiraicem.ac.in | linkedin.com/in/someshwarwaghmode1212 </h4>
        </div>
    </InfoContainer>
  )
}

export default MyInformation;
const InfoContainer = styled.div`
    h4{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-top: 24px;
    }
`;
