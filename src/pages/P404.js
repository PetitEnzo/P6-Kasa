import React from "react";

const P404 = () => {
  return (
    <div className="errorContainer">
      <p className="errorNumber">404</p>
      <br />
      <p className="errorText">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <br />
      <a href="/" className="LinkHome">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
};

export default P404;
