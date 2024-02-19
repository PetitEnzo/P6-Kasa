import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const links = [
    { to: "/", title: "accueil" },
    { to: "/about", title: "à propos" },
  ];
  return (
    <div className="navigation">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
