import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { Space, Button } from "../atoms";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    gotoMain();
  };

  return (
    <>
      {localStorage.getItem("access_token") ? (
        <ButtonContainer onClick={handleLogout}>
          <Button text="로그아웃" fontSize="18px" width="130px" height="48px" borderRadius="20px" />
        </ButtonContainer>
      ) : (
        <></>
      )}

      <Space height="22px" />
      <Flex>
        <Space margin="0px 42px 0px 0px" />
        <Click onClick={gotoMain}>
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

const ButtonContainer = styled.div`
  top: 40px;
  right: 50px;
  position: fixed;
  z-index: 10;
`;
