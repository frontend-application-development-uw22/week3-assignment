import React from "react";
import "./CartCard.css";

export default function CartCard({
  onRemoveFromCartHandler,
  property,
  locationData,
}) {
  return (
    <div className="cart-card">
      <div className="cart-card__details">
        <img
          className="cart-card__image"
          src={property.image}
          alt={property.title}
        />
        <div className="cart-card__info">
          <h3 className="cart-card__title">{property.title}</h3>
          <p className="cart-card__location">
            {locationData[property.location].city},{" "}
            {locationData[property.location].state}
          </p>
          <p className="cart-card__cost">
            Unit Cost = ${property.payment.cost}
          </p>
          <button
            className="cart-card__button"
            onClick={() => onRemoveFromCartHandler(property)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}
