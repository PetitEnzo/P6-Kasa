import React, { useState, useEffect } from "react";
import Chevron from "../assets/img/Vector.png";

const Collapse = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const refHeight = React.createRef();

  useEffect(() => {
    if (refHeight.current) {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    }
  }, []);

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
      <div
        className={toggle ? "collapse-toggle animated" : "collapse-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <p aria-hidden={toggle ? "true" : "false"}>{description}</p>
      </div>
    </div>
  );
};

export default Collapse;
