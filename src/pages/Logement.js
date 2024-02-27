import React, { useEffect } from "react";
import data from "../assets/data/data.json";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Tags from "../components/Tag";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rating from "../components/Rating";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const logement = data.find((item) => item.id === id);
    if (!logement || !logement.equipments) {
      navigate("/404");
    }
  }, [id, navigate]);

  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return null;
  }

  const equipmentsList = logement.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <div>
      <Slider pictures={logement.pictures} />
      <div
        className="logementContainer
      "
      >
        <div className="logementDiv">
          <h1 className="TitleLogement">{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <Tags />
        </div>
        <div className="hostDiv">
          <Host />
          <Rating />
        </div>
      </div>
      <div className="LogementCollapse">
        <Collapse title="Description" description={logement.description} />
        <Collapse title="Équipements" description={equipmentsList} />
      </div>
    </div>
  );
};

export default Logement;
