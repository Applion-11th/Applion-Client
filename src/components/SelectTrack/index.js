import React, { useState } from "react";
import styled from "styled-components";

export const SelectTrack = () => {
  const selectList = ["백엔드", "프론트엔드"];
  const [selected, setSelected] = useState('');

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const options = [
    { value: "백엔드", label: "백엔드" },
    { value: "프론트엔드", label: "프론트엔드" },
  ];

  return (
    <>
      <SelectContainer onChange={handleSelect} value={selected}>
      <SelectOption value="" disabled={true} >
            지원트랙을 선택해주세요
      </SelectOption>
        {selectList.map((item) => (
          <SelectOption value={item} key={item}>
            {item}
          </SelectOption>
        ))}
      </SelectContainer>
    </>
  );
};

const SelectContainer = styled.select`
  width: 460px;
  height: 45px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0px 15px 0px 15px;
  font-family: Pretendard;
  font-size: 20px;
  background-color: black;
  color: white;
  caret-color: white;

  &:focus {
    outline: none;
  }
`;

const SelectOption = styled.option`
  font-family: Pretendard;
`;
