import styled from "styled-components";
import logoSogang from "../assets/logoSogang.svg";
import { Space, Button } from "../components/atoms";
import { useNavigate } from "react-router-dom";

const Overdue = () => {
  const navigate = useNavigate();
  const gotoMain = () => {
    navigate("/");
  };
  return (
    <>
      <Flex>
        <Space height="20px" />
        <Text>모집이 마감되었습니다.</Text>
        <Space height="20px" />
        <ImgContainer src={logoSogang} />
        <Description>
          <TextContainer>
            <TextMedium>서류 발표 | 2023년 3월 13일(월) 개별 문자로 연락</TextMedium>
          </TextContainer>
          <Space height="10px" />
          <TextContainer>
            <Space margin="0px 36px 0px 0px" />
            <TextMedium>면접 | 2023년 3월 15일(수) - 2023년 3월 17일(금)</TextMedium>
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
        <Space height="20px" />
        <ButtonContainer>
          <Click onClick={gotoMain}>
            <Button width="167px" height="47px" text="홈으로 돌아가기" fontSize="16px" borderRadius="10px" />
          </Click>
        </ButtonContainer>
      </Flex>
    </>
  );
};

export default Overdue;

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
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  justify-content: center;
`;

const Click = styled.div``;
