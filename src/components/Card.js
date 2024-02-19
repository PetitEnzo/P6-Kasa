import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <NavLink to={"/logement/" + item.id} className="card">
      <img src={item.cover} alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
      </div>
    </NavLink>
  );
};

export default Card;
