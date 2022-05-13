import React from "react";
import Properties from "../Properties/Properties";
import "./CartSummary.css";

export default function CartSummary({ cartItems }) {
  const items = cartItems.length;

  const apartments = cartItems.filter((property) => {
    return property.houseType === "Apartment";
  });

  const homes = cartItems.filter((property) => {
    return property.houseType === "House";
  });

  const condos = cartItems.filter((property) => {
    return property.houseType === "Condo";
  });

  const total = cartItems.reduce((prev, curr) => {
    return prev + curr.payment.cost;
  }, 0);

  return (
    <div className="cart-summary">
      <div className="cart-summary__details">
        <div className="cart-summary__total">
          <h3>Total cost = ${total}</h3>
        </div>
      </div>
    </div>
  );
}
