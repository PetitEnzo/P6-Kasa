import React from "react";
import data from "../assets/data/data.json";
import { useParams } from "react-router-dom";

const Host = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  return (
    <div className="HostCard">
      <span>{logement.host.name}</span>
      <img src={logement.host.picture} alt="host picture" />
    </div>
  );
};

export default Host;
