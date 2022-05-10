import React from "react";
import CartCard from "./CartCard";
import "./Cart.css";

export default function Cart({ cartItems, onRemoveFromCartHandler }) {
  let totalCost = cartItems.reduce((total, individual) => {
    return (total += individual.payment.cost);
  }, 0);

  return (
    <>
      <div className="cart-header">
        <h1 className="cart-header__title">Cart Items</h1>
        <p className="cart-header__total-cost">Total Cost = ${totalCost}</p>
      </div>
      {cartItems.length === 0 && <h3>Your cart is currently empty</h3>}
      {cartItems.map((property) => {
        return (
          <CartCard
            onRemoveFromCartHandler={onRemoveFromCartHandler}
            property={property}
          />
        );
      })}
    </>
  );
}
