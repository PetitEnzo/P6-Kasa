import React from "react";
import data from "../assets/data/data.json";
import { useParams } from "react-router-dom";

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  return (
    <div>
      <h1>{logement.description}</h1>
      <h2>{logement.rating} </h2>
      <img src={logement.host.picture} />
    </div>
  );
};

export default Logement;
