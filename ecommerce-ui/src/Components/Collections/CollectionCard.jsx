import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

export default function CollectionCard({ size, data }) {
  return (
    <div className={`collection-card__container--${size}`}>
      <Link className={`collection-card__link`} to={`collection/${data.slug}`}>
        <img
          className={`collection-card__image--${size}`}
          src={data.image}
          alt={data.city}
        />
        <h4>{data.city}</h4>
      </Link>
    </div>
  );
}
