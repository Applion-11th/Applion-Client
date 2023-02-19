import React, { forwardRef } from "react";
import { Space } from "../atoms";
import styled from "styled-components";
import logoFull from "../../assets/logoFull.svg";
import logoApply from "../../assets/logoFullApply.svg";
import logoFooter from "../../assets/logoFooter.svg";
import "../../styles/styles.css";
import palette from "../../styles/colors";

export const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current.toFixed(2);
    }}
    className="scroll"
    overflow="hidden"
  >
    <div style={{ height: "200vh", display: "flex", justifyContent: "center" }}>
      <div className="dot">
        <Section1>
          <CenterContainer>
            <Space height="100px" />
            <LogoContainer src={logoFull} />
            <Space height="50px" />
            <TextIntro>Welcome to Sogang Likelion!</TextIntro>
            <Space height="20px" />
            <TextIntro>Let's begin the adventure</TextIntro>
            <Space height="200px" />
            <TextIntroRed>scroll down</TextIntroRed>
          </CenterContainer>
        </Section1>
      </div>
    </div>
    <div style={{ height: "200vh", display: "flex", justifyContent: "start" }}>
      <div className="dot">
        <Section2>
          <FlexStart>
            <Space height="100px" />
            <TextBold>Possibility to Reality</TextBold>
            <Space height="60px" />
            <Text>
              가능성을 현실로 만들어가는 멋쟁이사자처럼은
              <br />
              꿈꾸는 자들을 위해 디지털 전문 교육을 제공하여
              <br />
              IT분야의 TECH 리더를 양성합니다.
            </Text>
          </FlexStart>
        </Section2>
      </div>
    </div>
    <div style={{ height: "200vh", display: "flex", justifyContent: "end" }}>
      <div className="dot">
        <Section3>
          <RowContainer>
            <Space margin="100px 120px 0px 0px" />
            <TimeTable>
              <Space height="200px" />
              <TextBold>지원 일정</TextBold>
              <Space height="60px" />
              <TextList>서류 지원 | 2023.02.20 ~ 2023.03.09</TextList>
              <TextList>서류 발표 | 2023.03.13</TextList>
              <TextList>면접 | 2023.03.15 ~ 2023.03.17</TextList>
              <TextList>최종 발표 | 2023.03.20</TextList>
            </TimeTable>
          </RowContainer>
        </Section3>
      </div>
    </div>
    <div style={{ height: "200vh", display: "flex", justifyContent: "center" }}>
      <div className="dot">
        <TextContainer>
          <Space height="100px" />
          <TextCenter>
            <TextBold>웹 개발 기본 과정을</TextBold>
            <Space height="50px" />
            <TextBold>함께 배웁니다</TextBold>
            <Space height="30px" />
            <Space height="25px" />
            <Text>멋쟁이 사자처럼 11기 아기사자들은</Text>
            <Text>TECHIT 사이트에서 진행되는 개발 강의를 듣습니다.</Text>
            <Space height="30px" />
          </TextCenter>
        </TextContainer>
      </div>
    </div>
    <div style={{ height: "200vh", display: "flex", justifyContent: "start" }}>
      <div className="dot">
        <Textbox>
          <Space height="100px" />
          <TextboxBold>01 | 서비스 구현에 필요한 기본적인 개발지식을 배웁니다</TextboxBold>
          <Textboxsmall>
            프론트엔드, 백엔드, 풀스택 개발자까지. <br />
            HTML/CSS, Javascript, React, Python, Django
          </Textboxsmall>
          <TextboxBold>02 | 팀을 이뤄 서비스를 만듭니다</TextboxBold>
          <Textboxsmall>
            만들고 싶은 서비스가 있으신가요?
            <br />
            팀원들과 생각을 나누고, Github에서 협업하며
            <br />
            가치있는 서비스를 만들어보세요.
            <br />
            여러분의 서비스가 사용자에게 닿는 순간까지, 멋사가 돕겠습니다.
            <br />
            아이디에이션 &gt; 기획 &gt; 개발 &gt; 배포 &gt; 유저관리
          </Textboxsmall>
          <TextboxBold>03 | 함께 아이디어를 공유합니다</TextboxBold>
          <Textboxsmall>
            다른 사람들은 어떤 서비스를 만들었을까요?
            <br />
            서로의 생각을 나누면서 성장하는 시간을 가져봅시다.
            <Space height="10px" />
            <SmallList>nn개 대학의 멋사인들과 함께하는 해커톤</SmallList>
            <SmallList>서강대학교 멋사만의 해커톤 / 복커톤</SmallList>
            <SmallList>서강대, 연세대, 이화여대가 함께하는 신촌톤</SmallList>
          </Textboxsmall>
        </Textbox>
      </div>
    </div>
    <div style={{ height: "200vh", display: "flex", justifyContent: "center" }}>
      <div className="dot">
        <TextCenter>
          <Space height="200px" />
          <TextBold>내 아이디어를</TextBold>
          <Space height="50px" />
          <TextBold>내 손으로</TextBold>
          <Space height="50px" />
          <TextBold>실현한다</TextBold>
        </TextCenter>
      </div>
    </div>
    <div style={{ height: "200vh", display: "flex", justifyContent: "center" }}>
      <div className="dot">
        <Space height="200px" />
        <LogoFooterContainer src={logoFooter} />
      </div>
    </div>
    <LogoEnd>
      <LogoBottomContainer src={logoApply} />
    </LogoEnd>
  </div>
));

const LogoContainer = styled.img``;

const LogoBottomContainer = styled.img`
  width: 90vw;
`;

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TextIntroRed = styled.div`
  font-family: D2Coding;
  font-size: 32px;
  font-weight: bold;
  color: ${palette.red};
`;

const TextIntro = styled.div`
  font-family: D2Coding;
  font-size: 32px;
  font-weight: bold;
  color: white;
`;

const Section2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 130vh;
  width: 100%;
  color: white;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TextBold = styled.div`
  font-family: Pretendard;
  font-size: 60px;
  font-weight: 700;
  width: 100%;
  color: white;
`;

const FlexStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TextList = styled.li`
  font-size: 24px;
  font-weight: 400;
  line-height: 200%;
  font-family: Pretendard;
`;

const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 120vh;
  width: 100%;
  color: white;
`;

const TimeTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.div`
  font-size: 24px;
  line-height: 160%;
  font-weight: 500;
  font-family: Pretendard;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-family: Pretendard;
`;

const TextCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LogoFooterContainer = styled.img`
  width: 524px;
  height: 132px;
`;

const Textbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const TextboxBold = styled.div`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 13px;
  color: white;
`;

const Textboxsmall = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 125%;
  margin-bottom: 20px;
  margin-left: 54px;
  color: white;
`;

const SmallList = styled.li`
  font-size: 15px;
  font-weight: 400;
  font-family: Pretendard;
`;

const LogoEnd = styled.div`
  margin-bottom: 250px;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
`;
