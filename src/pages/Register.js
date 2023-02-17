import { useState } from "react";
import { Input, Button, Space, InputPwd } from "../components/atoms";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import palette from "../styles/colors";
import Modal from "../components/atoms/Modal";

const Register = () => {
  const [info, setInfo] = useState({
    email: "",
    pw1: "",
    pw2: "",
  });

  axios.defaults.withCredentials = true;

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
          localStorage.setItem("access_token", response.data.access_token);
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

    if (id === "email") {
      verifyEmail(value);
    } else if (id === "pw1") {
      verifyPW(value);
    } else if (id === "pw2") {
      isPWSame(value);
    }
  };

  const [isValid, setIsValid] = useState({ email: false, pw: false, duplicate: true });

  const verifyEmail = () => {
    let emailVal = info.email;
    const emailRegEx = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;

    if (emailVal.match(emailRegEx) != null) {
      setIsValid({ ...isValid, email: true });
    } else {
      setIsValid({ ...isValid, email: false });
    }
  };

  const verifyPW = () => {
    let pwVal = info.pw1;
    const pwRegEx = /^[A-Za-z0-9]{8,20}$/;

    if (pwVal.match(pwRegEx) != null) {
      setIsValid({ ...isValid, pw: true });
    } else {
      setIsValid({ ...isValid, pw: false });
    }
  };

  const isPWSame = (value) => {
    if (info.pw1 === value) {
      setIsValid({ ...isValid, pw: true });
    } else {
      setIsValid({ ...isValid, pw: false });
    }
  };

  const isDuplicated = () => {
    console.log(info.email);
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}checkemail/`, {
        email: info.email,
      })
      .then((response) => {
        if (response.status === 200) {
          if (response.data.is_unique) {
            console.error("unique");
          } else {
            setIsValid({ ...isValid, duplicate: false });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div style={{ position: "relative" }}>
      <Space height="50px" />
      <Flex>
        <Title>회원가입</Title>
        <Modal isMount={isModal} onClick={showModal} />
        <Space height="10px" />
        <Description>회원가입 후 지원서 작성이 가능합니다.</Description>
        <Space height="25px" />
        <div style={{ display: "flex", justifyContent: "end", width: "459px", marginTop: "20px" }}>
          {isValid.email ? (
            <div style={{ padding: "5px", borderRadius: "10px", backgroundColor: palette.lightred }}>
              <span style={{ fontSize: "12px" }} onClick={isDuplicated}>
                아이디 중복검사
              </span>
            </div>
          ) : (
            ""
          )}
        </div>

        <Form action="#" onSubmit={handleSubmit}>
          <Text>e-mail</Text>
          <Input onChange={(e) => handleChange(e)} id="email" value={info.email} />
          <FlexInfo>
            <span
              style={{
                fontFamily: "Pretendard",
                color: isValid.email ? "green" : `${palette.lightred}`,
                fontSize: "12px",
              }}
            >
              {info.email === "" ? "" : isValid.email ? "" : "이메일 형식이 잘못되었습니다"}
            </span>
            <span
              style={{
                fontFamily: "Pretendard",
                color: isValid.duplicate ? `${palette.lightred}` : "green",
                fontSize: "12px",
              }}
            >
              {info.email === "" ? "" : isValid.duplicate ? "중복 검사가 되지 않았습니다" : "중복이 없는 아이디입니다"}
            </span>
          </FlexInfo>

          <Space height="5px" />
          <Text>password</Text>
          <FlexInfo>
            <InputPwd onChange={(e) => handleChange(e)} id="pw1" value={info.pw1} />
            <TextRed>영문 대소문자, 숫자를 혼합하여 8~20자로 구성</TextRed>
          </FlexInfo>
          <Space height="5px" />
          <Text>verify password</Text>
          <InputPwd onChange={(e) => handleChange(e)} id="pw2" value={info.pw2} />
          <div style={{ display: "flex", justifyContent: "end", height: "15px" }}>
            <span style={{ fontFamily: "D2coding", color: isValid.pw ? "green" : "red", fontSize: "12px" }}>
              {info.pw2 === "" ? "" : isValid.pw ? "비밀번호가 동일합니다" : "비밀번호가 동일하지 않습니다"}
            </span>
          </div>
          <Space height="12px" />
          <AgreeContainer>
            <Agree>
              <input required type="checkbox" />
              개인정보 수집 및 이용 동의서
            </Agree>
            <span
              onClick={showModal}
              style={{ cursor: "pointer", marginLeft: "10px", fontSize: "10px", color: "lightGray", marginTop: "5px" }}
            >
              더보기
            </span>
          </AgreeContainer>
          <Space height="24px" />
          <Button
            width="459px"
            height="47px"
            text="회원가입 완료"
            fontSize="18px"
            borderRadius="10px"
            type="submit"
            color={isValid.email && isValid.pw ? palette.lightred : "gray"}
          />
        </Form>
      </Flex>
      <Space height="50px" />
    </div>
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
  position: relative;
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

const TextRed = styled.div`
  color: ${palette.lightred};
  font-size: 12px;
  font-family: Pretendard;
`;

const FlexInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
