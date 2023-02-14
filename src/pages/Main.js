import { Button, Space } from "../components/atoms";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { debounce } from 'lodash';
import styled from "styled-components";
import logoFull from "../assets/logoFull.svg";
import logoFooter from "../assets/logoFooter.svg";
import palette from "../styles/colors";
import mainanimation from "../assets/mainanimation.mkv";
const Main = () => {
  const VideoPlayer = () => {
    const playbackConst = 850;
    const setHeightRef = useRef(null);
    const vidRef = useRef(null);
    const frameNumberRef = useRef(0);

    useLayoutEffect(() => {
      const setHeight = setHeightRef.current;
      const vid = vidRef.current;
      const handleScroll = debounce(() => {
        const frameNumber = window.pageYOffset / playbackConst;
        vidRef.current.currentTime = frameNumber;
        frameNumberRef.current = frameNumber;        
      }, 16.7);
  
      window.addEventListener('scroll', handleScroll, {Passive: true});
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
  
    return (
      <div >
        <div ref={setHeightRef}></div>
        <video
          tabIndex="0"
          preload="metadata"
          style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "90vh", transform: "translateZ(0)" }}
          ref={vidRef}
        >
          <source
            type='video/mp4;'
            src={mainanimation}
          />
        </video>
      </div>
    );
  }

  const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
      <FadeContainer ref={domRef} isVisible={isVisible ? true : false}>
        {props.children}
      </FadeContainer>
    );
  };

  return (
    <>
    <VideoPlayer></VideoPlayer>
      <ButtonContainer>
        <Button text="지금 바로 지원하기" fontSize="18px" width="210px" height="59px" borderRadius="20px" />
      </ButtonContainer>
      <Section1>
        <FadeInSection>
          <CenterContainer>
            <Space height="114px" />
            <LogoContainer src={logoFull} />
            <TextIntro>Welcome to Sogang Likelion!</TextIntro>
            <TextIntroContainer>
              <TextIntro>Let's begin</TextIntro>
              <Space margin="0px 10px 0px 0px" />
              <TextIntroRed>the adventure</TextIntroRed>
            </TextIntroContainer>
          </CenterContainer>
        </FadeInSection>
      </Section1>
      <Section2>
        <FadeInSection>
          <RowContainer>
            <TextContainer>
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
            <Space margin="200px 50px 0px 0px" />
          </RowContainer>
        </FadeInSection>
      </Section2>
      <Section3>
        <FadeInSection>
          <RowContainer>
            <Space margin="0px 60px 0px 0px" />
            <TimeTable>
              <TextBold>지원 일정</TextBold>
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
          <TextBold>웹 개발 기본 과정을 합께 배웁니다</TextBold>
          <Text>멋쟁이 사자처럼 11기 아기사자들은 TECHIT 사이트에서 진행되는 개발 강의를 듣게 됩니다.</Text>
          <Click onClick={console.log("open techit")}>
            <Button text="TECHIT 둘러보기" fontSize="18px" width="160px" height="44px" borderRadius="16px" />
          </Click>
          <Text>1번. 어쩌고 저쩌고</Text>
          <Text>2번. 어쩌고 저쩌고</Text>
          <Text>3번. 어쩌고 저쩌고</Text>
        </FadeInSection>
      </Section4>
      <Section5>
        <FadeInSection>
          <LogoFooterContainer src={logoFooter} />
          <Space height="25vh" />
        </FadeInSection>
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
  height: 120vh;
  width: 100%;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  align-items: flex-end;
  height: 120vh;
  width: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: flex-start;
  align-items: center;
  height: 120vh;
  width: 100%;
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
