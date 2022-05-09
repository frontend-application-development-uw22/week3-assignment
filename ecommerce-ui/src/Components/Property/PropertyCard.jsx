import React from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";

export default function PropertyCard({
  cartItems,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  size,
  data,
}) {
  let inCart = false;

  console.log(cartItems);

  if (cartItems) {
    inCart = cartItems.find((property) => property.id === data.id);
  }

  return (
    <div
      className={`property-card__container property-card__container--${size}`}
    >
      <div className="property-card__details">
        <h1 className={`property-card__title`}>{data.title}</h1>
        <p className={`property-card__house-type`}>
          {data.houseType} hosted by {data.host.name}
        </p>
        <p className={`property-card__location`}>
          {data.location.city}, {data.location.country}
        </p>
        <p className={`property-card__details`}>
          {data.rating.stars} stars | {data.rating.reviews} reviews
        </p>
        {!inCart && (
          <button onClick={() => onAddToCartHandler(data)}>Add to cart</button>
        )}
        {inCart && (
          <button onClick={() => onRemoveFromCartHandler(data)}>
            Remove from cart
          </button>
        )}
      </div>
      <img
        className={`property-card__image property-card__image--${size}`}
        src={data.image}
        alt={data.title}
      />
    </div>
  );
}
