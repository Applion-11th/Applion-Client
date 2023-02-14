import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Header } from "./components";
import styled from "styled-components";

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

  return (
    <>
      {isPC ? (
        <>
          <BrowserRouter>
            {window.location.pathname !== "/" ? <Header />: <></>}
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
        <Text>PC환경에서 접속해주세요!</Text>
      )}
    </>
  );
};

export default App;

const Text = styled.div`
  font-size: 50px;
`;


