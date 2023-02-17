import { Button, Space } from "../components/atoms";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { debounce } from "lodash";
import { useNavigate } from "react-router";
import styled from "styled-components";
import logoSogang from "../assets/logoSogang.svg";
import logoFull from "../assets/logoFull.svg";
import logoFooter from "../assets/logoFooter.svg";
import mainanimation from "../assets/mainanimation.mkv";

const Main = () => {
  const VideoPlayer = () => {
    const playbackConst = 850;
    const vidRef = useRef(null);
    const frameNumberRef = useRef(0);

    useLayoutEffect(() => {
      const handleScroll = debounce(() => {
        const frameNumber = window.pageYOffset / playbackConst;
        vidRef.current.currentTime = frameNumber;
        frameNumberRef.current = frameNumber;
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (window.pageYOffset >= totalScrollHeight) {
          vidRef.current.currentTime = vidRef.current.duration;
        }
      }, 16.7);

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <Videowrapper>
        <Video ref={vidRef} loop muted>
          <source type="video/mp4;" src={mainanimation} />
        </Video>
      </Videowrapper>
    );
  };

  const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);

    return (
      <FadeContainer ref={domRef} isVisible={isVisible ? true : false}>
        {props.children}
      </FadeContainer>
    );
  };

  const openTech = () => {
    console.log("open tech");
    window.open("https://techit.education/", "_blank");
  };

  const navigate = useNavigate();
  const gotoApply = () => {
    localStorage.getItem("access_token") ? navigate("/apply") : navigate("/info");
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <VideoPlayer />
      <Section1>
        <FadeInSection>
          <CenterContainer>
            <Space height="100px" />
            <LogoContainer src={logoFull} />
            <Space height="50px" />
            <TextIntro>Welcome to Sogang Likelion!</TextIntro>
            <TextIntroContainer>
              <TextIntro>Let's begin the adventure</TextIntro>
            </TextIntroContainer>
          </CenterContainer>
        </FadeInSection>
      </Section1>
      <Section2>
        <FadeInSection>
          <div style={{ width: "100vw", display: "flex", justifyContent: "end" }}>
            <div
              style={{
                width: "50vw",
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <TextBold>Possibility to Reality</TextBold>
              <Space height="25px" />
              <Text>
                가능성을 현실로 만들어가는 멋쟁이사자처럼은
                <br />
                꿈꾸는 자들을 위해 디지털 전문 교육을 제공하여
                <br />
                IT분야의 TECH 리더를 양성합니다.
              </Text>
            </div>
          </div>
        </FadeInSection>
      </Section2>
      <Section3>
        <FadeInSection>
          <RowContainer>
            <Space margin="0px 200px 0px 0px" />
            <TimeTable>
              <TextBold>지원 일정</TextBold>
              <Space height="20px" />
              <TextList>서류 지원 : 2023.02.20 ~ 2023.03.09</TextList>
              <TextList>서류 발표 : 2023.03.13</TextList>
              <TextList>면접 : 2023.03.15 ~ 2023.03.17</TextList>
              <TextList>최종 발표 : 2023.03.20</TextList>
            </TimeTable>
          </RowContainer>
        </FadeInSection>
      </Section3>
      <Section4>
        <FadeInSection>
          <MaximumContainer>
            <TextContainer>
              <TextBold>웹 개발 기본 과정을</TextBold>
              <Space height="10px" />
              <TextBold>함께 배웁니다</TextBold>
              <Space height="25px" />
              <Text>멋쟁이 사자처럼 11기 아기사자들은</Text>
              <Text>TECHIT 사이트에서 진행되는 개발 강의를 듣습니다.</Text>
              <Space height="10px" />
              <Click onClick={openTech}>
                <Button text="TECHIT 둘러보기" fontSize="18px" width="200px" height="56px" borderRadius="16px" />
              </Click>
            </TextContainer>
            <Textbox>
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
                여러분의 서비스가 사용에게 닿는 순간까지, 멋사가 돕겠습니다.
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
          </MaximumContainer>
        </FadeInSection>
      </Section4>
      <Section5>
        <FadeInSection>
          <LogoFooterContainer src={logoFooter} />
          <Space height="30px" />
          {/* <ButtonContainer onClick={gotoApply}>
            <LogoSmallContainer src={logoSogang} />
          </ButtonContainer> */}
          <Space height="20vh" />
        </FadeInSection>
      </Section5>
    </div>
  );
};

export default Main;

const LogoContainer = styled.img``;

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 130vh;
  width: 100%;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TextIntroContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextIntro = styled.div`
  font-family: D2Coding;
  font-size: 32px;
  font-weight: bold;
`;

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 130vh;
  width: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding-left: 10vw;
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

const SmallList = styled.li`
  font-size: 15px;
  font-weight: 400;
`;

const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 120vh;
  width: 100%;
`;

const TimeTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 24px;
  line-height: 200%;
`;

const Section4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 120vh;
  width: 100vw;
`;

const Section5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const LogoFooterContainer = styled.img`
  width: 524px;
  height: 132px;
`;

const FadeContainer = styled.div`
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out;
  will-change: opacity, transform, visibility;
  ${(props) =>
    props.isVisible &&
    `
      opacity: 1;
      transform: none;
      visibility: visible;
    `}
`;

const Click = styled.div``;

const Video = styled.video`
  width: 100%;
  transform: translateZ(0);
`;

const Videowrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
`;

const Textbox = styled.div`
  background: rgba(87, 49, 49, 0.7);
  border-radius: 36px;
  width: 40vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 2.5vw;
`;

const TextboxBold = styled.div`
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 13px;
`;

const Textboxsmall = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 125%;
  margin-bottom: 20px;
  margin-left: 54px;
`;

const MaximumContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  border-radius: 16px;
  border: 1px solid gray;
`;

const LogoSmallContainer = styled.img`
  width: 120px;
`;
