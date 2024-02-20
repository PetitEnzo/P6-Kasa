import React from "react";
import LogoWhite from "../assets/img/LogoWhite.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={LogoWhite} alt="Logo Kasa blanc" />
      <div className="footerText">
        <p>© 2024 Kasa.All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
