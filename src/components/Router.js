import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import P404 from "../pages/P404";
import Logement from "../pages/Logement";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </>
  );
};

export default Router;
