import { Input, Button, Space, InputPwd } from "../components/atoms";
import styled from "styled-components";
import { BsFillChatFill } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import palette from "../styles/colors";

const Login = () => {
  useEffect(() => {
    if (localStorage.getItem("refresh_token")) {
      navigate("/apply");
    }
  });

  const [info, setInfo] = useState({
    username: "",
    pw: "",
    correct: true,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/apply");
    }
  });

  const goToRegister = () => {
    navigate("/register");
  };

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}login/`, {
        username: info.username,
        password: info.pw,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("access_token", response.data.access_token);
          navigate("/info");
        }
      })
      .catch((error) => {
        console.log(error.request.response);
        setInfo({ correct: false });
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInfo({
      ...info,
      [id]: value,
    });
  };

  return (
    <>
      <Space height="50px" />
      <Flex>
        <Title>로그인</Title>
        <Space height="25px" />
        <Form action="#" onSubmit={handleSubmit} onKeyDown={onCheckEnter}>
          <Text>id</Text>
          <Input onChange={(e) => handleChange(e)} id="username" value={info.username} />
          <Space height="29px" />
          <Text>password</Text>
          <InputPwd onChange={(e) => handleChange(e)} id="pw" value={info.pw} />
          <Space height="9px" />
          {info.correct ? (
            <></>
          ) : (
            <TextRed>
              <CgDanger /> 로그인 정보를 확인해주세요
            </TextRed>
          )}

          <Space height="20px" />
          <Button width="459px" height="47px" text="로그인" fontSize="18px" borderRadius="10px" type="submit" />
        </Form>

        <Space height="29px" />
        <Click onClick={goToRegister}>
          <Button width="459px" height="47px" text="회원가입 하러가기" fontSize="18px" borderRadius="10px" />
        </Click>
        <Space height="29px" />
        <KaKaoLoginBtn onClick={() => (window.location.href = `${process.env.REACT_APP_KAKAO_URL}`)}>
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

const Form = styled.form`
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

const TextRed = styled.div`
  display: inline-flex;
  color: ${palette.lightred};
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 500;
  align-items: center;
  text-align: center;
`;
