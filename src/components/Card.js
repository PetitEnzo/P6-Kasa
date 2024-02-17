import React from "react";
import data from "/Users/enzo/Desktop/p6/src/assets/data/data.json";
const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.cover} alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
      </div>
    </div>
  );
};

export default Card;
