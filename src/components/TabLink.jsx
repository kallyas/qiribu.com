import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./icons/Arrow";

const TabLink = ({ href, isActive, label }) => {
  return (
    <li
      className={`wow animate__fadeInUp animated ${isActive ? "active" : ""}`}
    >
      <Link
        className={`active`}
        to={href}
        data-bs-toggle="tab"
        role="tab"
        aria-controls={href.slice(1)}
        aria-selected={isActive}
      >
        <span>{label}</span>
        <Arrow svgStyle={"w-6 h-6 icon-16 ml-5"} />
      </Link>
    </li>
  );
};

export default TabLink;