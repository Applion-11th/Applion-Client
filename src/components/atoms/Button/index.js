import styled from "styled-components";
import palette from "../../../styles/colors";

export const Button = (props) => {
  const { width, height, text, fontSize } = props;
  return (
    <RedButton width={width} height={height}>
      <Text fontSize={fontSize}>{text}</Text>
    </RedButton>
  );
};

const RedButton = styled.button`
  background-color: ${palette.red};
  border: 1px solid white;
  border-radius: 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Text = styled.div`
  font-family: Pretendard;
  color: white;
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
`;
