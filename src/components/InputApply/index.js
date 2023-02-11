import { useEffect, useState } from "react";
import styled from "styled-components";
import { Space } from "../atoms";

export const InputApply = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (text.length === 500) {
      setCount(499);
    }
    setCount(text.length);
  }, [text]);

  const changeHandler = (e) => {
    if (e.target.value.length > 499) {
      setText(e.target.value.slice(0, 499));
    }
    setText(e.target.value);
  };

  return (
    <>
      <Flex>
        <InputApplyContainer
          onChange={(e) => changeHandler(e)}
          type="text"
          maxLength="500"
        />
        <CountContainer>{count}/500자</CountContainer>
        <Space height="20px" />
      </Flex>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const InputApplyContainer = styled.textarea`
  width: 80vw;
  height: 280px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  font-family: Pretendard;
  font-size: 20px;
  background-color: black;
  color: white;
  caret-color: white;
  margin: 15px 0px 10px 0px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const CountContainer = styled.div`
  font-size: 20px;
`;
