import React from "react";
import data from "../assets/data/data.json";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import Tags from "../components/Tag";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rating from "../components/Rating";

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  const equipmentsList = logement.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <div>
      <Slider pictures={logement.pictures} />
      <h1 className="TitleLogement">{logement.title}</h1>
      <Host />
      <Rating />
      <p className="location">{logement.location}</p>
      <Tags />
      <div className="LogementCollapse">
        <Collapse title="Description" description={logement.description} />
        <Collapse title="Équipements" description={equipmentsList} />
      </div>
    </div>
  );
};

export default Logement;
