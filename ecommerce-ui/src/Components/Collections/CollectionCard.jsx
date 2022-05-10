import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

export default function CollectionCard({
  onAddToCartHandler,
  size,
  locationData,
}) {
  return (
    <div className={`collection-card__container--${size}`}>
      <Link
        className={`collection-card__link`}
        to={`collection/${locationData.slug}`}
      >
        <img
          className={`collection-card__image collection-card__image--${size}`}
          src={locationData.image}
          alt={locationData.city}
        />
        <h4>{locationData.city}</h4>
      </Link>
    </div>
  );
}
