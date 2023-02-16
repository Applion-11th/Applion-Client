import { Input, Button, Space, InputPwd } from "../components/atoms";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const goToInfo = () => {
    navigate("/info");
  };

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
          <Space height="24px" />
          <AgreeContainer>
            <Agree>
              <input required type="checkbox" />
              개인정보 수집 및 이용 동의서
            </Agree>
          </AgreeContainer>
          <Space height="24px" />
        </Form>
        <Click onClick={goToInfo}>
          <Button width="459px" height="47px" text="회원가입 완료" fontSize="18px" borderRadius="10px" />
        </Click>
      </Flex>
      <Space height="50px" />
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

const Agree = styled.label``;

const AgreeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
