import { useState } from "react";
import { Input, Button, Space, InputPwd } from "../components/atoms";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  // const [email, setEmail] = useState("");
  // const [pw1, setPw1] = useState("");
  // const [pw2, setPw2] = useState("");
  const [info, setInfo] = useState({
    email: "",
    pw1: "",
    pw2: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://port-0-applion-server-108dypx2ale6pqivi.sel3.cloudtype.app/api/user/dj-rest-auth/registration/", {
        email: info.email,
        password1: info.password1,
        password2: info.password2,
      })
      .then((response) => {
        if (response.data.code === 201) {
          navigate("/info");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEmail = (value) => {
    setInfo({
      ...info,
      email: value,
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
        <Form action="" onSubmit={handleSubmit}>
          <Text>e-mail</Text>
          <Input onChange={handleEmail} value={info.email} />
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
