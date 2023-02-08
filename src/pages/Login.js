import { Input, Button, Space, InputPwd } from "../components/atoms";
import styled from "styled-components";
import { BsFillChatFill } from "react-icons/bs";

const Login = () => {
  return (
    <>
      <Space height="50px" />
      <Flex>
        <Title>로그인</Title>
        <Space height="25px" />
        <Form>
          <Text>e-mail</Text>
          <Input />
          <Space height="29px" />
          <Text>password</Text>
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
            text="로그인"
            fontSize="18px"
            borderRadius="10px"
          />
        </Click>
        <Space height="29px" />
        <Button
          width="459px"
          height="47px"
          text="회원가입 하러가기"
          fontSize="18px"
          borderRadius="10px"
        />
        <Space height="29px" />
        <KaKaoLoginBtn>
          <InlineFlex>
            <BsFillChatFill style={{ color: "#191604", marginRight: "15px" }} />
            카카오톡으로 로그인하기
          </InlineFlex>
        </KaKaoLoginBtn>
      </Flex>
    </>
  );
};

export default Login;

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

const InlineFlex = styled.div`
  display: inline-flex;
`;

const KaKaoLoginBtn = styled.button`
  width: 459px;
  height: 47px;
  cursor: pointer;
  background-color: #fee500;
  color: #181602;
  border: none;
  font-size: 18px;
  font-weight: 500;
  font-family: Pretendard;
  border-radius: 12px;
`;

const Click = styled.div``;
