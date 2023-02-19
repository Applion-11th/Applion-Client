import { useState } from "react";
import { Input, Button, Space, InputPwd, Loading } from "../components/atoms";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import palette from "../styles/colors";
import Modal from "../components/atoms/Modal";

const Register = () => {
  const [loading, setLoading] = useState(null);
  const [info, setInfo] = useState({
    username: "",
    pw1: "",
    pw2: "",
  });

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}registration/`, {
        username: info.username,
        password1: info.pw1,
        password2: info.pw2,
      })
      .then((response) => {
        if (response.status === 201) {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("id", response.data.user.id);
          localStorage.setItem("position", response.data.user.position);
          navigate("/info");
        }
      })
      .catch((error) => {
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

    if (id === "username") {
      verifyusername(value);
      setFilled({
        ...filled,
        username: true,
      });
    } else if (id === "pw1") {
      verifyPW(value);
      setFilled({
        ...filled,
        pw1: true,
      });
    } else if (id === "pw2") {
      isPWSame(value);
      setFilled({
        ...filled,
        pw2: true,
      });
    }
  };

  const [isValid, setIsValid] = useState({ username: false, pw: false, duplicate: true, match: false });
  const [filled, setFilled] = useState({ username: false, pw1: false, pw2: false });

  const verifyusername = () => {
    let usernameVal = info.username;
    const usernameRegEx = /^[A-za-z0-9]{5,15}/g;

    if (usernameVal.match(usernameRegEx) != null) {
      setIsValid({ ...isValid, username: true });
    } else {
      setIsValid({ ...isValid, username: false });
    }
  };

  const verifyPW = () => {
    let pwVal = info.pw1;
    const pwRegEx = /^[A-Za-z0-9]{7,19}$/;

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

  const isDuplicate = () => {
    console.log(info.username);
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}checkid/${info.username}`, {})
      .then((response) => {
        if (response.status === 200) {
          if (response.data.is_unique) {
            alert("사용 가능한 아이디입니다.");
          } else {
            setIsValid({ ...isValid, duplicate: false });
            alert("사용 불가능한 아이디입니다.");
          }
        }
      })
      .catch((error) => {
        alert("에러");
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
      {loading && <Loading/>}
      <Flex>
        <Title>회원가입</Title>
        <Modal isMount={isModal} onClick={showModal} />
        <Space height="10px" />
        <Description>회원가입 후 지원서 작성이 가능합니다.</Description>
        <Space height="25px" />
        <Form action="#" onSubmit={handleSubmit}>
          <Text>id</Text>
          <FlexRow>
            <FlexInfo>
              <Input onChange={(e) => handleChange(e)} id="username" value={info.username} width="310px" />
              <TextSmall>영문 대소문자, 숫자를 혼합하여 8~20자로 구성</TextSmall>
            </FlexInfo>
            <Click onClick={isValid.username ? isDuplicate : ""}>
              <Button
                width="100px"
                height="47px"
                text="중복확인"
                fontSize="18px"
                borderRadius="10px"
                color={isValid.username ? palette.red : "gray"}
              />
            </Click>
          </FlexRow>
          <Space height="5px" />
          <Text>password</Text>
          <FlexInfo>
            <InputPwd onChange={(e) => handleChange(e)} id="pw1" value={info.pw1} />
            <TextSmall>영문 대소문자, 숫자를 혼합하여 8~20자로 구성</TextSmall>
          </FlexInfo>
          <Space height="5px" />
          <Text>verify password</Text>
          <InputPwd onChange={(e) => handleChange(e)} id="pw2" value={info.pw2} />
          <div style={{ display: "flex", justifyContent: "end", height: "15px" }}>
            <span style={{ fontFamily: "Pretendard", color: isValid.pw ? "green" : "red", fontSize: "12px" }}>
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
            color={
              isValid.username && isValid.pw && isValid.duplicate && filled.username && filled.pw1 && filled.pw2
                ? palette.red
                : "gray"
            }
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

const TextSmall = styled.div`
  font-size: 12px;
  font-family: Pretendard;
`;

const FlexInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Click = styled.div``;
