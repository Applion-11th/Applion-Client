import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Space } from "./components/atoms";
import { Header } from "./components";
import logoPlaceHolder from "./assets/logoPlaceHolder.svg";
import placeholder from "./assets/placeHolder.svg";
import styled from "styled-components";
import { useState, useEffect } from "react";
// pages
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Info from "./pages/Info";
import Application from "./pages/Application";
import Complete from "./pages/Complete";

const App = () => {
  const isPC = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1920px)",
  });

  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    const refresh_token = localStorage.getItem("refresh_token");
    if (refresh_token) setloggedIn(true);
  }, []);

  return (
    <>
      {isPC ? (
        <>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/complete" element={<Complete />} />
              <Route path="/info" element={<Info />} />
              <Route path="/apply" element={<Application />} />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <>
          <Flex>
            <Space height="100px" />
            <LogoContainer src={logoPlaceHolder} />
            <Text>768px 이상의 화면에서 접속해주세요!</Text>
            <ImgContainer src={placeholder} />
          </Flex>
        </>
      )}
    </>
  );
};

export default App;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 32px;
  font-weight: 500;
`;

const LogoContainer = styled.img`
  padding-bottom: 50px;
`;

const ImgContainer = styled.img`
  padding-bottom: 50px;
`;
