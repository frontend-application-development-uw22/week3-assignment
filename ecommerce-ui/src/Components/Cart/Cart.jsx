import React from "react";
import CartCard from "./CartCard";

export default function Cart({ cartItems, onRemoveFromCartHandler }) {
  console.log(cartItems);
  return (
    <>
      <h1>Cart Items</h1>
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
