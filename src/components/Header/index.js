import logo from "../../assets/logo.svg";
import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <LogoContainer src={logo} />
    </>
  );
};

const LogoContainer = styled.img`
  width: 279px;
  height: 48px;
`;
