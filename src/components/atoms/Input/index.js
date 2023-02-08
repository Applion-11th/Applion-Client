import styled from "styled-components";

export const Input = () => {
  return (
    <>
      <InputContainer />
    </>
  );
};

const InputContainer = styled.input`
  width: 459px;
  height: 47px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 0px 15px 0px 15px;
  font-family: D2Coding;
  font-size: 20px;
  background-color: black;
  color: white;
  caret-color: white;

  &:focus {
    outline: none;
  }
`;
