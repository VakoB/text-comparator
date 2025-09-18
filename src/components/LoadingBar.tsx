import styled from "styled-components";
import progressIcon from "../assets/progressIcon.svg";

const LoadingBarContainer = styled.div`
  width: 280px;
  height: 80px;
  border-width: 1px;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #e1e1e1;
  display: flex;
  gap: 8px;
  align-self: center;
  margin: 192px 0 160px 0;
`;

const BarInfoAndText = styled.div``;

const BarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Bar = styled.div`
  position: relative;
  width: 159px;
  height: 8px;
  gap: 8px;
  opacity: 1;
  border-radius: 64px;
  padding-right: 155px;
  background-color: #f6f9ff;
  &::before {
    width: 63px;
    height: 8px;
    border-radius: 64px;
    position: absolute;
    content: "";
    background-color: #4571e4;
    left: 0;
    top: 0;
  }
`;

const LoadingMessage = styled.p`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #383a4899;
`;

const Percentage = styled.p`
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  vertical-align: bottom;
  color: #383a48;
`;

export default function LoadingBar() {
  return (
    <LoadingBarContainer>
      <img src={progressIcon} alt="progress icon" />
      <BarInfoAndText>
        <LoadingMessage>
          Converting...Thank you For your Patience
        </LoadingMessage>
        <BarInfo>
          <Percentage>30%</Percentage>
          <Bar></Bar>
        </BarInfo>
      </BarInfoAndText>
    </LoadingBarContainer>
  );
}
