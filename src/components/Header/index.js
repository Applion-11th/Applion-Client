import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { Button } from "../atoms";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setDisplay(false);
    }
  }, [location.pathname]);

  const gotoMain = () => {
    navigate("/");
  };

  const gotoApply = () => {
    localStorage.getItem("access_token") ? navigate("/apply") : navigate("/info");
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    gotoMain();
  };

  return (
    <HeaderContainer>
      <InnerContainer>
        {display ? (
          <Click onClick={gotoMain}>
            <LogoContainer src={logo} />
          </Click>
        ) : (
          <Holder />
        )}
        {!display ? (
          <ButtonContainer onClick={gotoApply}>
            <Button text="지금 바로 지원하기" fontSize="18px" width="210px" height="59px" borderRadius="20px" />
          </ButtonContainer>
        ) : localStorage.getItem("access_token") ? (
          <ButtonContainer onClick={handleLogout}>
            <Button text="로그아웃" fontSize="18px" width="130px" height="48px" borderRadius="20px" />
          </ButtonContainer>
        ) : (
          <Holder />
        )}
      </InnerContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 10;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const LogoContainer = styled.img`
  width: 279px;
  height: 48px;
  margin-left: 27px;
`;

const Click = styled.div`
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  margin-right: 30px;
`;

const InnerContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Holder = styled.div`
  width: 100px;
  height: 30px;
`;
