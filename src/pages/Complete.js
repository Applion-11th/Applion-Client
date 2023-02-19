import { useEffect, useState } from "react";
import styled from "styled-components";
import logoSogang from "../assets/logoSogang.svg";
import { Space, Button, Loading } from "../components/atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Complete = () => {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
  const [minute, setMinute] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();
  const gotoApplication = () => {
    setLoading(true);
    navigate("/apply");
  };
  const gotoMain = () => {
    setLoading(true);
    navigate("/");
  };
  
  useEffect(() => {
    if (year === null) {
      setLoading(1);
    } else {
      setLoading(0);
    }
  }, [year]);
  
  const ShowChangedate = () => {
    if (localStorage.getItem("access_token")) {
      axios
        .get(`${process.env.REACT_APP_SERVER_APPLY_URL}/${localStorage.getItem("id")}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            const Changedate = new Date(response.data.updated_at);
            setYear(Changedate.getFullYear());
            setMonth(Changedate.getMonth() + 1);
            setDay(Changedate.getDate());
            setTime(Changedate.getHours());
            setMinute(Changedate.getMinutes());
          }
        })
        .catch((error) => {
          console.log(error.request.response);
        });
    }
    return <TextMedium>{`최종 제출 시각 : ${year}년 ${month}월 ${day}일 ${time}시 ${minute}분`}</TextMedium>;
  };

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
  });

  return (
    <>
      {loading===1 ? (
        <Loading/>
      ) : (
        <Flex>
        <Space height="10px" />
        <Text>지원 완료되었습니다.</Text>
        <Space height="20px" />
        <ShowChangedate />
        <Space height="50px" />
        <ImgContainer src={logoSogang} />
        <Description>
          <TextContainer>
            <TextMedium>서류 발표 | 2023년 3월 13일(월) 개별 문자로 연락</TextMedium>
          </TextContainer>
          <Space height="10px" />
          <TextContainer>
            <TextMedium>면접 날짜 | 2023년 3월 15일(수) - 2023년 3월 17일(금)</TextMedium>
          </TextContainer>
          <Space height="10px" />
          <TextContainer>
            <Space margin="0px 80px 0px 0px" />
            <TextSmall>서류 발표 후, 면접 날짜 선택</TextSmall>
          </TextContainer>
          <Space height="10px" />
          <TextContainer>
            <TextMedium>최종 발표 | 2023년 3월 20일(월)</TextMedium>
          </TextContainer>
        </Description>
        <Space height="50px" />
        <ButtonContainer>
          <Click onClick={gotoMain}>
            <Button width="167px" height="47px" text="홈으로 돌아가기" fontSize="16px" borderRadius="10px" />
          </Click>
          <Click onClick={gotoApplication}>
            <Button width="167px" height="47px" text="지원서 수정하기" fontSize="16px" borderRadius="10px" />
          </Click>
        </ButtonContainer>
      </Flex>
      )}

    </>
  );
};

export default Complete;

const Text = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const TextMedium = styled.div`
  font-size: 18px;
`;

const TextSmall = styled.div`
  font-size: 15px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 18px;
`;

const ImgContainer = styled.img`
  padding-bottom: 50px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

const Click = styled.div``;
