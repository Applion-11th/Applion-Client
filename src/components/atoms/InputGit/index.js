import styled from "styled-components";

export const InputGit = (props) => {
  const { onChange, value, id } = props;
  return <InputContainer value={value} id={id} onChange={(e) => onChange(e)} />;
};

const InputContainer = styled.input`
  width: 80vw;
  height: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  font-family: Pretendard;
  font-size: 20px;
  background-color: black;
  color: white;
  caret-color: white;
  margin: 15px 0px 10px 0px;

  &:focus {
    outline: none;
  }
`;
