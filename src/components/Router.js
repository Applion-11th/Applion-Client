import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Main from "../pages/Main";
import Test from "../pages/Test";

const Router = ({ user }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" exact element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
