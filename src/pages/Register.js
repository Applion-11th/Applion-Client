import { Header } from "../components";
import { Input, Button, Space, InputPwd } from "../components/atoms";
import styled from "styled-components";
import { BsFillChatFill } from "react-icons/bs";

const Register = () => {
  return (
    <>
      <Header />
      <Space height="135px" />
      <Flex>
        <Title>회원가입</Title>
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
        <div
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
        </div>
      </Flex>
    </>
  );
};

export default Register;

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

const Text = styled.div`
  font-family: D2Coding;
  font-size: 20px;
  font-weight: 700;
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
