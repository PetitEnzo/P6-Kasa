import React from "react";
import data from "../assets/data/data.json";
import { useParams } from "react-router-dom";
import StarActive from "../assets/img/star-active 1.png";
import StarInactive from "../assets/img/star-inactive 1.png";

const Rating = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  // Fonction pour générer les étoiles en fonction du score
  const generateStars = (score) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < score) {
        stars.push(<img src={StarActive} />);
      } else {
        stars.push(<img src={StarInactive} alt="star" />);
      }
    }
    return stars;
  };

  return <div className="Rating">{generateStars(logement.rating)}</div>;
};

export default Rating;
