import styled from "styled-components";

export const Radio = ({ children, value, name, defaultChecked, disabled }) => {
    return (
        <>
        <Label>
        <RadioBox
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        {children}
      </Label>
        </>

    );
  }

  const Label = styled.div`
  padding: 30px;
  `

  const RadioBox = styled.input` 
  `