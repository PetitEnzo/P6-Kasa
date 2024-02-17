import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import P404 from "./pages/P404";
import Logement from "./pages/Logement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
