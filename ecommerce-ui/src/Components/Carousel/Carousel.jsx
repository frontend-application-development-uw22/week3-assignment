import React from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

export default function Carousel({ title, children }) {
  return (
    <div className="carousel">
      <h2 className="carousel__header">{title}</h2>
      <div className="carousel__content">{children}</div>
    </div>
  );
}

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
