import { useState } from "react";
import { Input, Button, Space, InputPwd } from "../components/atoms";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [info, setInfo] = useState({
    email: "",
    pw1: "",
    pw2: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}registration/`, {
        email: info.email,
        password1: info.pw1,
        password2: info.pw2,
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/info");
        }
      })
      .catch(function (error) {
        console.log(error.request.response);
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

  axios.defaults.withCredentials = true;

  return (
    <>
      <Space height="50px" />
      <Flex>
        <Title>회원가입</Title>
        <Space height="10px" />
        <Description>회원가입 후 지원서 작성이 가능합니다.</Description>
        <Space height="25px" />
        <Form action="#" onSubmit={handleSubmit}>
          <Text>e-mail</Text>
          <Input onChange={(e) => handleChange(e)} id="email" value={info.email} />
          <Space height="29px" />
          <Text>password</Text>
          <InputPwd onChange={(e) => handleChange(e)} id="pw1" value={info.pw1} />
          <Space height="29px" />
          <Text>verify password</Text>
          <InputPwd onChange={(e) => handleChange(e)} id="pw2" value={info.pw2} />
          <Space height="24px" />
          <AgreeContainer>
            <Agree>
              <input required type="checkbox" />
              개인정보 수집 및 이용 동의서
            </Agree>
          </AgreeContainer>
          <Space height="24px" />
          <Button width="459px" height="47px" text="회원가입 완료" fontSize="18px" borderRadius="10px" type="submit" />
        </Form>
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

const Form = styled.form`
  justify-content: flex-start;
`;

const Agree = styled.label``;

const AgreeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
