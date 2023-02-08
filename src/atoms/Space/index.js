import styled from "styled-components";
import React from "react";

export const Space = (props) => {
  const { margin, height } = props;
  return <SpaceBase margin={margin} height={height} />;
};

const SpaceBase = styled.div`
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
`;
