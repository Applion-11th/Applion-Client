import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";

// pages
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Info from "./pages/Info";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {window.location.pathname !== "/" ? <Header /> : <></>}
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
