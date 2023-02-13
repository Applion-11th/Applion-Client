import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { Space } from "../atoms";
import { useNavigate } from "react-router";

export const Header = () => {

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <>
      <Space height="22px" />
      <Flex>
        <Space margin="0px 42px 0px 0px" /> 
        <Click onClick={goToMain}>
          <LogoContainer src={logo} />
        </Click>
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

const Click = styled.div`
  cursor: pointer;
`;
