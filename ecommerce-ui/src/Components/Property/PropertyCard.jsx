import React from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";

export default function PropertyCard({ onAddToCartHandler, size, data }) {
  const addItem = () => {
    onAddToCartHandler(data);
  };

  return (
    <div className={`property-card__container--${size}`}>
      <Link className={`property-card__link`} to={`/property/${data.id}`}>
        <img
          className={`property-card__image property-card__image--${size}`}
          src={data.image}
          alt={data.title}
        />
        <h4 className={`property-card__title`}>{data.title}</h4>
        <h5 className={`property-card__location`}>
          {data.location.city}, {data.location.country}
        </h5>
        <h5 className={`property-card__details`}>
          {data.rating.stars} stars | {data.rating.reviews} reviews
        </h5>
      </Link>
      <button onClick={addItem}>Add to cart</button>
    </div>
  );
}
