import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CartCard from "./CartCard";
import CartSummary from "./CartSummary";
import "./Cart.css";

export default function Cart({
  cartItems,
  onRemoveFromCartHandler,
  locationData,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="cart-header">
        <h1 className="cart-header__title">Cart Items</h1>
      </div>
      <div className="cart">
        <div className="cart-contents">
          {cartItems.length === 0 ? (
            <h3>Your cart is currently empty</h3>
          ) : (
            cartItems.map((property) => {
              return (
                <CartCard
                  key={property.id}
                  onRemoveFromCartHandler={onRemoveFromCartHandler}
                  property={property}
                  locationData={locationData}
                />
              );
            })
          )}
        </div>
        {cartItems.length !== 0 && <CartSummary cartItems={cartItems} />}
      </div>
    </>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onRemoveFromCartHandler: PropTypes.func.isRequired,
  locationData: PropTypes.array.isRequired,
};
