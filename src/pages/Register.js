import { Input, Button, Space, InputPwd } from "../components/atoms";
import styled from "styled-components";

const Register = () => {
  return (
    <>
      <Space height="50px" />
      <Flex>
        <Title>회원가입</Title>
        <Space height="10px" />
        <Description>회원가입 후 지원서 작성이 가능합니다.</Description>
        <Space height="25px" />
        <Form>
          <Text>e-mail</Text>
          <Input />
          <Space height="29px" />
          <Text>password</Text>
          <InputPwd />
          <Space height="29px" />
          <Text>verify password</Text>
          <InputPwd />
        </Form>
        <Space height="29px" />
        <Click
          onClick={() => {
            console.log("login");
          }}
        >
          <Button
            width="459px"
            height="47px"
            text="회원가입 완료"
            fontSize="18px"
            borderRadius="10px"
          />
        </Click>
      </Flex>
    </>
  );
};

export default Register;

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 18px;
`;

const Text = styled.div`
  font-family: D2Coding;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
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
