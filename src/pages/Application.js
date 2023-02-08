import logo from "../assets/logoFull.svg";
import lion from "../assets/lionWink.svg";
import styled from "styled-components";
import { Space } from "../components/atoms";

const Application = () => {
  return (
    <>
      <Flex>
        <ImgContainer src={logo} />
        <FlexRow>
          <ImgContainer src={lion} />
          <Space margin="0px 10px 0px 0px" />
          <DDate>D-7</DDate>
          <Space margin="0px 20px 0px 0px" />
          <DTime>17:30:40</DTime>
        </FlexRow>
      </Flex>
    </>
  );
};

export default Application;

const ImgContainer = styled.img``;

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
`;

const DDate = styled.div`
  font-family: Wakeup;
  font-size: 55px;
`;

const DTime = styled.div`
  font-family: Wakeup;
  font-size: 36px;
`;
