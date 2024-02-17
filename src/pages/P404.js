import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const P404 = () => {
  return (
    <div className="errorContainer">
      <Logo />
      <Navigation />
      <p className="errorNumber">404</p>
      <br />
      <p className="errorText">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <br />
      <a href="/" className="LinkHome">
        Retourner sur la page d'accueil
      </a>
      <Footer />
    </div>
  );
};

export default P404;
