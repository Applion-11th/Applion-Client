import styled from "styled-components";

export const Radio = ({ children, value, name, defaultChecked, disabled }) => {
  return (
    <>
      <Label>
        <RadioBox type="checkbox" value={value} name={name} required={true} />
        {children}
      </Label>
    </>
  );
};

const Label = styled.div`
  padding: 30px;
`;

const RadioBox = styled.input``;
