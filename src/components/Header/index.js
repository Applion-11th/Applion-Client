import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { Space } from "../../atoms";

export const Header = () => {
  return (
    <>
      <Space height="22px" />
      <LogoContainer src={logo} />
    </>
  );
};

const LogoContainer = styled.img`
  width: 279px;
  height: 48px;
`;
