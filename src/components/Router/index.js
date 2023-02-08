import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Main from "../../pages/Main";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Info from "../../pages/Info";

//test page
import Test from "../../pages/Test";

export const Router = ({ user }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" exact element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};
