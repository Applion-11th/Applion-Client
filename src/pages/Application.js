import logo from "../assets/logoFull.svg";
import styled from "styled-components";

const Application = () => {
  return (
    <>
      <Flex>
        <LogoContainer src={logo} />
      </Flex>
    </>
  );
};

export default Application;

const LogoContainer = styled.img`
  width: 279px;
  height: 48px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
