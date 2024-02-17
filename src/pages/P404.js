import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const P404 = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h6 className="404">404</h6>
      <br />
      <p className="404">Oups ! La page que vous demandez n'existe pas.</p>
      <br />
      <a href="/" className="LinkHome">
        {" "}
        Retourner sur la page d'accueil
      </a>
    </div>
  );
};

export default P404;
