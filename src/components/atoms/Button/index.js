import styled from "styled-components";
import palette from "../../../styles/colors";

export const Button = (props) => {
  const { width, height, text, fontSize, borderRadius, type, color, cursor = "pointer", events = "auto" } = props;
  return (
    <RedButton
      width={width}
      height={height}
      borderRadius={borderRadius}
      type={type}
      color={color}
      cursor={cursor}
      events={events}
    >
      <Text fontSize={fontSize}>{text}</Text>
    </RedButton>
  );
};

const RedButton = styled.button`
  background-color: ${(prop) => (prop.color ? prop.color : palette.red)};
  border: none;
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: ${(props) => props.cursor};
  pointer-events: ${(props) => props.events};
`;

const Text = styled.div`
  font-family: Pretendard;
  color: white;
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
`;
