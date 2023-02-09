import styled from "styled-components";

export const InputPwd = () => {
  return <InputPwdContainer />;
};

const InputPwdContainer = styled.input.attrs((props) => ({ type: "password" }))`
  width: 427px;
  height: 45px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0px 15px 0px 15px;
  font-family: D2Coding, sans-serif;
  font-size: 20px;
  type: password;
  background-color: black;
  color: white;
  caret-color: white;

  &:focus {
    outline: none;
  }
`;
