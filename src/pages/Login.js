import { Header } from "../components";
import { Input, Button, Space, InputPwd } from "../components/atoms";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <Header />

      <Flex>
        <Form>
          <Text>e-mail</Text>
          <Input />
          <Text>password</Text>
          <InputPwd />
        </Form>
        <Button width="130px" height="59px" text="임시 저장" fontSize="20px" />
        <Space margin="0px 21px 0px 0px" />
        <Button width="130px" height="59px" text="작성 완료" fontSize="20px" />
      </Flex>
    </>
  );
};

export default Login;

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
