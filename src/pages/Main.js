import { Button, Space } from "../components/atoms";
import styled from "styled-components";
import logoFull from "../assets/logoFull.svg";
import logoFooter from "../assets/logoFooter.svg";
import palette from "../styles/colors";

const Main = () => {
  return (
    <>
      <ButtonContainer>
        <Button text="지금 바로 지원하기" fontSize="18px" width="210px" height="59px" borderRadius="20px" />
      </ButtonContainer>
      <Section1>
        <Space height="114px" />
        <LogoContainer src={logoFull} />
        <TextIntro>Welcome to Sogang Likelion!</TextIntro>
        <TextIntroContainer>
          <TextIntro>Let's begin</TextIntro>
          <Space margin="0px 10px 0px 0px" />
          <TextIntroRed>the adventure</TextIntroRed>
        </TextIntroContainer>
      </Section1>
      <Section2>
        <TextContainer>
          <Space height="200px" />
          <TextBold>Possibility to Reality</TextBold>
          <Space height="25px" />
          <Text>
            가능성을 현실로 만들어가는 멋쟁이사자처럼은
            <br />
            꿈꾸는 자들을 위해 디지털 전문 교육을 제공하여
            <br />
            IT분야의 TECH 리더를 양성합니다.
          </Text>
        </TextContainer>
      </Section2>
      <Section3>
        <Space margin="0px 60px 0px 0px" />
        <TimeTable>
          <TextBold>지원 일정</TextBold>
          <TextList>서류 지원 : 2023.02.20 ~ 2023.03.09</TextList>
          <TextList>서류 발표 : 2023.03.13</TextList>
          <TextList>면접 : 2023.03.15 ~ 2023.03.17</TextList>
          <TextList>최종 발표 : 2023.03.20</TextList>
        </TimeTable>
      </Section3>
      <Section4>
        <TextBold>웹 개발 기본 과정을 합께 배웁니다</TextBold>
        <Text>멋쟁이 사자처럼 11기 아기사자들은 TECHIT 사이트에서 진행되는 개발 강의를 듣게 됩니다.</Text>
        <Button text="TECHIT 둘러보기" fontSize="18px" width="160px" height="44px" borderRadius="16px" />
        <Text>1번. 어쩌고 저쩌고</Text>
        <Text>2번. 어쩌고 저쩌고</Text>
        <Text>3번. 어쩌고 저쩌고</Text>
      </Section4>
      <Section5>
        <LogoFooterContainer src={logoFooter} />
        <Space height="25vh" />
      </Section5>
    </>
  );
};

export default Main;

const LogoContainer = styled.img`
  width: 767px;
  height: 132px;
`;

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  top: 47px;
  right: 90px;
  position: fixed;
`;

const TextIntroContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextIntro = styled.div`
  font-family: D2Coding;
  font-size: 32px;
`;

const TextIntroRed = styled.div`
  font-family: D2Coding;
  font-size: 32px;
  color: ${palette.darkred};
  font-weight: 600;
`;

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
`;

const TextContainer = styled.div`
  position: absolute;
  right: 20vh;
`;

const TextBold = styled.div`
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 700;
`;

const TextList = styled.li`
  font-size: 24px;
  font-weight: 400;
  line-height: 300%;
`;

const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

const TimeTable = styled.div`
  position: absolute;
  left: 20vh;
`;

const Text = styled.div`
  font-size: 24px;
  line-height: 200%;
`;

const Section4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

const Section5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
`;

const LogoFooterContainer = styled.img`
  width: 524px;
  height: 132px;
`;
