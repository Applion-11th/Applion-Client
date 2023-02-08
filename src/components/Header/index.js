import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { Space } from "../atoms";

export const Header = () => {
  return (
    <>
      <Space height="22px" />
      <Flex>
        <Space margin="0px 42px 0px 0px" /> <LogoContainer src={logo} />
      </Flex>
    </>
  );
};

const LogoContainer = styled.img`
  width: 279px;
  height: 48px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;
