import React from "react";
import styled from "styled-components";
import palette from "../../../styles/colors";
import { Space } from "../Space";

export const DisplayDate = ({ value, isDanger }) => {
  return (
    <>
      {isDanger ? <CountdownRed /> : <Countdown />}
      <Day>D-{value}</Day>
      <Space margin="0px 20px 0px 0px" />
    </>
  );
};

const Day = styled.div`
  font-family: Wakeup;
  font-size: 55px;
`;

const CountdownRed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${palette.red};
  font-family: Wakeup;
`;

const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${palette.white};
  font-family: Wakeup;
`;
