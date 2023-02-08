import { Input, Button, Space } from "../components/atoms";
import styled from "styled-components";

const Info = () => {
  return (
    <>
      <Space height="135px" />
      <Flex>
        <Title>지원자 정보</Title>
        <Space height="10px" />
        <Description>
          리크루팅 용도로 사용될 정보입니다.
          <br />
          리크루팅 이후 안전하게 폐기될 에정입니다.
        </Description>
        <Space height="25px" />
        <Form>
          <Text>이름</Text>
          <Input />
          <Space height="29px" />
          <Text>2023학년도 1학기 기준 학기 (예시: 5학기)</Text>
          <Input />
          <Space height="29px" />
          <Text>전공</Text>
          <Input />
          <Space height="29px" />
          <Text>전화번호</Text>
          <Input />
        </Form>
        <Space height="29px" />
        <Click
          onClick={() => {
            console.log("submit");
          }}
        >
          <Button
            width="459px"
            height="47px"
            text="지원자 정보 기입 완료"
            fontSize="18px"
            borderRadius="10px"
          />
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
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  justify-content: flex-start;
`;

const Click = styled.div``;
