import React from "react";
import Router from "./components/Router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
