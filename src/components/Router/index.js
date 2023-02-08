import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Main from "../../pages/Main";

//test page
import Test from "../../pages/Test";

export const Router = ({ user }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" exact element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
