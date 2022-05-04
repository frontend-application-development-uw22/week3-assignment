import React from "react";

export default function Cart({ cartItems }) {
  console.log(cartItems);
  return (
    <>
      <h1>Cart Items</h1>
      {cartItems.length === 0 && <h3>Your cart is currently empty</h3>}
      {cartItems.map((property) => {
        return <p>{property.title}</p>;
      })}
    </>
  );
}
