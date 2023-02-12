import { Button } from "../components/atoms";
import styled from "styled-components";
import logoFull from "../assets/logoFull.svg";

const Main = () => {
  return (
    <>
      <Button text="지금 바로 지원하기" fontSize="18px" width="210px" height="59px" borderRadius="20px" />
      <Flex>
        <LogoContainer src={logoFull} />
      </Flex>
    </>
  );
};

export default Main;

const LogoContainer = styled.img`
  width: 767px;
  height: 132px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
`;
