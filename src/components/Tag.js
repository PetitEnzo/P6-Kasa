import React from "react";
import data from "../assets/data/data.json";
import { useParams } from "react-router-dom";

const Tags = ({ tags }) => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  const tagsList = logement.tags.map((tags, index) => (
    <li key={index}>{tags}</li>
  ));
  return (
    <div className="tags">
      <ul>{tagsList}</ul>
    </div>
  );
};

export default Tags;
