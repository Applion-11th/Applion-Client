import styled from "styled-components";

export const InputApply = () => {
  return <InputApplyContainer />;
};

const InputApplyContainer = styled.textarea`
  width: 80vw;
  height: 280px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  font-family: Pretendard;
  font-size: 20px;
  background-color: black;
  color: white;
  caret-color: white;
  margin: 15px 0px 30px 0px;
  &:focus {
    outline: none;
  }
`;
