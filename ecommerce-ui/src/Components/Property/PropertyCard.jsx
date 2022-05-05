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

  if (cartItems) {
    inCart = cartItems.find((property) => property.id === data.id);
  }

  return (
    <div className={`property-card__container--${size}`}>
      {inCart && <p>In cart</p>}
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
      {!inCart && (
        <button onClick={() => onAddToCartHandler(data)}>Add to cart</button>
      )}
      {inCart && (
        <button onClick={() => onRemoveFromCartHandler(data)}>
          Remove from cart
        </button>
      )}
    </div>
  );
}
