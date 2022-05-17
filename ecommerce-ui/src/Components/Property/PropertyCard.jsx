import React from "react";
import PropTypes from "prop-types";
import "./PropertyCard.css";
import { Link } from "react-router-dom";

export default function PropertyCard({
  cartItems,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  size,
  propertyData,
  locationData,
}) {
  let inCart = false;

  if (cartItems) {
    inCart = cartItems.find((property) => property.id === propertyData.id);
  }

  const location = locationData[propertyData.location];

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
          <Link to={`../collection/${location.slug}`}>
            {location.city}, {location.state}
          </Link>
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
            className={`property-card__button property-card__button--${size}`}
            onClick={() => onAddToCartHandler(propertyData)}
          >
            Add to cart
          </button>
        )}
        {inCart && (
          <button
            className={`property-card__button property-card__button--${size}`}
            onClick={() => onRemoveFromCartHandler(propertyData)}
          >
            Remove from cart
          </button>
        )}
      </div>
      {size === "medium" && (
        <Link to={`/property/${propertyData.id}`}>
          <img
            className={`property-card__image property-card__image--${size}`}
            src={propertyData.image}
            alt={propertyData.title}
          />
        </Link>
      )}
      {size !== "medium" && (
        <img
          className={`property-card__image property-card__image--${size}`}
          src={propertyData.image}
          alt={propertyData.title}
        />
      )}
    </div>
  );
}

PropertyCard.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onAddToCartHandler: PropTypes.func.isRequired,
  onRemoveFromCartHandler: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  propertyData: PropTypes.object.isRequired,
  locationData: PropTypes.array.isRequired,
};
