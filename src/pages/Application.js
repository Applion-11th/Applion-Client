import logo from "../assets/logoFullApply.svg";
import lion from "../assets/lionWink.svg";
import styled from "styled-components";
import { Button, Space } from "../components/atoms";
import { InputApply, CountdownTimer } from "../components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Application = () => {
  const FINALDATE = "2023-03-09T23:59:59";
  const navigate = useNavigate();

  // 지원 마감 시 나올 페이지 별도로 필요할듯 (카운터 부분만 차지하는 것 말고)

  return (
    <>
      <Container>
        <Flex>
          <Space height="20px" />
          <ImgContainer src={logo} />
          <Space height="20px" />
          <FlexRow>
            <ImgContainer src={lion} />
            <Space margin="0px 10px 0px 0px" />
            <CountdownTimer targetDate={FINALDATE} />
          </FlexRow>
          <FinalMent>지원서 제출 버튼을 누르셔도 2023년 3월 9일까지 로그인 후 수정 가능합니다.</FinalMent>
          <Space height="30px" />
          <Form>
            <Text>
              1. 다양한 IT동아리 중에서 멋쟁이사자처럼 대학 11기를 선택하고 지원하시게 된 이유를 작성해주세요. (500자
              이내)
            </Text>
            <InputApply />
          </Form>
          <Form>
            <Text>
              2. 파트를 선택한 이유와 관련 경험을 해본 적이 있는지, 그리고 이 파트를 통해 어떠한 성장을 희망하시는지
              작성해주세요. (500자 이내)
            </Text>
            <InputApply />
          </Form>
          <Form>
            <Text>
              3. 멋쟁이사자처럼 대학은 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. 지원자 본인이 협업과
              팀워크를 진행해보았던 경험과, 그 경험을 멋쟁이 사자처럼 대학에서 어떻게 적용시킬 수 있을지 작성해주세요.
              (500자 이내)
            </Text>
            <InputApply />
          </Form>
          <Form>
            <Text>
              4. 멋쟁이사자처럼 대학은 최소 주 2회 모임(월요일&amp;수요일 6시30분~9시)과 이외에도 추가 공부시간이
              필요합니다. 활동 기간동안 얼마나 열정적으로, 매주 얼만큼의 시간을 할애하실 수 있는지 작성해주세요. (500자
              이내)
            </Text>
            <InputApply />
          </Form>
          <Form>
            <FlexEnd>
              <Text>+ Github 계정 링크 (선택)</Text>
              <Text>*계정 정보는 서류 평가 점수에 반영되지 않습니다.</Text>
            </FlexEnd>
            <InputGit />
          </Form>
        </Flex>
        <Space height="40px" />
        <ButtonContainer>
          <Click
            onClick={() => {
              console.log("save");
            }}
          >
            <Button text="< 내 정보 수정하기" width="150px" height="59px" fontSize="18px" borderRadius="20px" />
          </Click>
          <Click
            onClick={() => {
              console.log("submit");
            }}
          >
            <Button text="지원서 제출하기 >" width="150px" height="59px" fontSize="18px" borderRadius="20px" />
          </Click>
        </ButtonContainer>
        <Space height="40px" />
      </Container>
    </>
  );
};

export default Application;

const ImgContainer = styled.img`
  padding-top: 20px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.div`
  max-width: 80vw;
  margin: auto;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 480px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Text = styled.div`
  font-size: 20px;
  line-height: 150%;
  font-weight: bold;
`;

const Click = styled.div``;

const FinalMent = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
`;

const InputGit = styled.textarea`
  width: 80vw;
  height: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 15px 15px 15px 15px;
  font-family: Pretendard;
  font-size: 20px;
  background-color: black;
  color: white;
  caret-color: white;
  margin: 15px 0px 10px 0px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const FlexEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
