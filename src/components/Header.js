import React from "react";
import LOGO from "..//assets/img/LOGO.png";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <img src={LOGO} alt="Logo Kasa" />
      <Navigation />
    </header>
  );
};

export default Header;
