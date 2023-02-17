import { useEffect } from "react";
import { Input, Button, Space } from "../components/atoms";
import { SelectTrack } from "../components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const gotoApplication = () => {
    navigate("/apply");
  };

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
  });

  return (
    <>
      <Space height="10px" />
      <Flex>
        <Title>지원자 정보</Title>
        <Space height="10px" />
        <Description>
          리크루팅 용도로 사용될 정보입니다.
          <br />
          리크루팅 이후 안전하게 폐기될 예정입니다.
        </Description>
        <Space height="10px" />
        <Form>
          <FlexRow>
            <FlexCol>
              <Text>이름</Text>
              <Input width="188px" />
            </FlexCol>
            <FlexCol>
              <Text>학번</Text>
              <Input width="188px" />
            </FlexCol>
          </FlexRow>
          <Space height="10px" />
          <Text>2023학년도 1학기 기준 학기 (예시: 5학기)</Text>
          <Input />
          <Space height="10px" />
          <Text>전공</Text>
          <Input />
          <Space height="10px" />
          <Text>전화번호 (예시: 010-1234-5678)</Text>
          <Input />
          <Space height="10px" />
          <Text>지원 트랙 선택</Text>
          <SelectTrack />
        </Form>
        <Space height="18px" />
        <Click onClick={gotoApplication}>
          <Button
            width="459px"
            height="47px"
            text="지원자 정보 기입 완료"
            fontSize="18px"
            borderRadius="10px"
            type="submit"
          />
          <Space height="10px" />
        </Click>
      </Flex>
    </>
  );
};

export default Info;

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
  padding-bottom: 5px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  justify-content: flex-start;
`;

const Click = styled.div``;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
