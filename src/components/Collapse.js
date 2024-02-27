import React, { useState } from "react";
import Chevron from "../assets/img/Vector.png";

const Collapse = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };
  return (
    <div className="collapse">
      <button onClick={toggleState} className="collapse-visible">
        <span>{title}</span>
        <img
          className={toggle ? "active" : ""}
          src={Chevron}
          alt="icones chevron"
        />
      </button>
      <div>
        <p
          aria-hidden={toggle ? "true" : "false"}
          className={
            toggle ? "collapse animated" : "collapse-toggle paragraphe"
          }
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Collapse;
