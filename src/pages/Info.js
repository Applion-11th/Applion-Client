import { useEffect, useState } from "react";
import { Input, Button, Space, Loading } from "../components/atoms";
import { SelectTrack } from "../components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Info = () => {
  const [loading, setLoading] = useState(null);
  const [moreInfo, setmoreInfo] = useState({
    name: "",
    student_num: "",
    major: "",
    semester: "",
    phone_num: "",
    position: "",
  });

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}user/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setmoreInfo({
              ...moreInfo,
              name: response.data.name,
              student_num: response.data.student_num,
              semester: response.data.semester,
              major: response.data.major,
              phone_num: response.data.phone_num,
              position: response.data.position,
            });
          }
        })
        .catch((error) => {
          console.log(error.request.response);
        });
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setmoreInfo({
      ...moreInfo,
      [id]: value,
    });
  };

  const handleSelected = (selectedData) => {
    setmoreInfo({
      ...moreInfo,
      position: selectedData,
    });
  };

  const moreInfoSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}user/`,
        {
          name: moreInfo.name,
          student_num: moreInfo.student_num,
          semester: moreInfo.semester,
          major: moreInfo.major,
          phone_num: moreInfo.phone_num,
          position: moreInfo.position,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigate("/apply");
          localStorage.setItem("position", moreInfo.position);
          console.log(moreInfo);
        }
      })
      .catch((error) => {
        console.log(error.request.response);
      });
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
  });

  return (
    <>
      <Space height="10px" />
      {loading && <Loading/>}
      <Flex>
        <Title>지원자 정보</Title>
        <Space height="10px" />
        <Description>리크루팅으로 사용될 정보로, 이후 안전하게 폐기될 예정입니다.</Description>
        <Space height="20px" />
        <Form>
          <FlexRow>
            <FlexCol>
              <Text>이름</Text>
              <Input width="188px" id="name" value={moreInfo.name || ""} onChange={(e) => handleChange(e)} />
            </FlexCol>
            <FlexCol>
              <Text>학번</Text>
              <Input
                width="188px"
                id="student_num"
                value={moreInfo.student_num || ""}
                onChange={(e) => handleChange(e)}
              />
            </FlexCol>
          </FlexRow>
          <Space height="10px" />
          <Text>2023학년도 1학기 기준 학기 (예시: 5학기)</Text>
          <Input id="semester" value={moreInfo.semester || ""} onChange={(e) => handleChange(e)} />
          <Space height="10px" />
          <Text>전공</Text>
          <Input id="major" value={moreInfo.major || ""} onChange={(e) => handleChange(e)} />
          <Space height="10px" />
          <Text>전화번호 (예시: 010-1234-5678)</Text>
          <Input id="phone_num" value={moreInfo.phone_num || ""} onChange={(e) => handleChange(e)} />
          <Space height="10px" />
          <Text>지원 트랙 선택</Text>
          <SelectTrack onSelected={handleSelected} value={moreInfo.position || ""} />
          <Space height="18px" />
          <Click onClick={moreInfoSubmit}>
            <Button
              width="459px"
              height="47px"
              text="지원자 정보 기입 완료"
              fontSize="18px"
              borderRadius="10px"
              type="submit"
            />
            <Space height="10px" />
          </Click>
        </Form>
      </Flex>
    </>
  );
};

export default Info;

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
  padding-bottom: 5px;
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

const Click = styled.div``;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
