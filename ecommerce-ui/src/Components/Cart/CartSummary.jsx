import React from "react";
import "./CartSummary.css";

export default function CartSummary({ cartItems }) {
  return (
    <div className="cart-summary">
      <h2 className="cart-summary__heading">Summary</h2>
      <div className="cart-summary__details">
        <div className="cart-summary__subtotal">
          <p>Subtotal</p>
          <p>$</p>
        </div>
        <div className="cart-summary__taxes">
          <p>Estimated Taxes</p>
          <p>$</p>
        </div>
        <div className="cart-summary__fees">
          <p>Estimated Fees</p>
          <p>$</p>
        </div>
        <div className="cart-summary__total">
          <h3>Total</h3>
          <p>${}</p>
        </div>
      </div>
    </div>
  );
}
