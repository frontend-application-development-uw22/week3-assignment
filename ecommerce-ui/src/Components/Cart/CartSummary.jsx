import React from "react";
import PropTypes from "prop-types";
import "./CartSummary.css";

export default function CartSummary({ cartItems }) {
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

CartSummary.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
