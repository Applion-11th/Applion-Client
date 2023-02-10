import React from "react";
import styled from "styled-components";
import palette from "../../../styles/colors";

export const DisplayTime = ({ value, isDanger }) => {
  return (
    <>
      {isDanger ? <CountdownRed /> : <Countdown />}
      <Timer>{value}</Timer>
    </>
  );
};

const Timer = styled.div`
  font-family: Wakeup;
  font-size: 36px;
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
