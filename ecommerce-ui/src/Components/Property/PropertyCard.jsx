import React from "react";
import "./PropertyCard.css";
import { Link } from "react-router-dom";

export default function PropertyCard({
  cartItems,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  size,
  propertyData,
}) {
  let inCart = false;

  if (cartItems) {
    inCart = cartItems.find((property) => property.id === propertyData.id);
  }

  return (
    <div
      className={`property-card__container property-card__container--${size}`}
    >
      <div className="property-card__details">
        {size === "large" && (
          <h1 className={`property-card__title`}>{propertyData.title}</h1>
        )}
        {size === "medium" && (
          <Link to={`/property/${propertyData.id}`}>
            <h4 className={`property-card__title`}>{propertyData.title}</h4>
          </Link>
        )}
        <p className={`property-card__type`}>
          {propertyData.houseType} hosted by {propertyData.host.name}
        </p>
        <p className={`property-card__location`}>
          {propertyData.location.city}, {propertyData.location.country}
        </p>
        <p className={`property-card__rating`}>
          {propertyData.rating.stars} stars | {propertyData.rating.reviews}{" "}
          reviews
        </p>
        <p className={`property-card__cost`}>
          ${propertyData.payment.cost} / night (
          {propertyData.payment.description})
        </p>
        {!inCart && (
          <button
            className="property-card__button"
            onClick={() => onAddToCartHandler(propertyData)}
          >
            Add to cart
          </button>
        )}
        {inCart && (
          <button
            className="property-card__button"
            onClick={() => onRemoveFromCartHandler(propertyData)}
          >
            Remove from cart
          </button>
        )}
      </div>
      <Link to={`/property/${propertyData.id}`}>
        <img
          className={`property-card__image property-card__image--${size}`}
          src={propertyData.image}
          alt={propertyData.title}
        />
      </Link>
    </div>
  );
}
