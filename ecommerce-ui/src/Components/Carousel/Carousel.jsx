import React from "react";
import "./Carousel.css";

export default function Carousel(props) {
  return (
    <div className="carousel">
      <h2 className="carousel__header">{props.title}</h2>
      <div className="carousel__content">{props.children}</div>
    </div>
  );
}
