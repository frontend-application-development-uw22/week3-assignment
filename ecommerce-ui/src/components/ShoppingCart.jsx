////////////////////////////////////////////////////////////////////////////////
// ShoppingCart ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItemList from './ShoppingCartItemList';
import ShoppingCartTotal from './ShoppingCartTotal';

function ShoppingCart ({cartContents, setCartContents, cartOpen, setCartOpen}) {

  const shoppingCartClasses =
    cartOpen ? "shoppingcart" : "shoppingcart hidden";

  const shoppingCartEmptyClasses =
    cartContents.length ? "shoppingcart-empty hidden" : "shoppingcart-empty";

  const closeCart = () => {
    setCartOpen(false);
  }

  return (
    <div className={shoppingCartClasses}>
      <h2>
        Cart
        <span onClick={closeCart} className="shoppingcart-close-button">
          ⨯
        </span>
      </h2>
      <p className={shoppingCartEmptyClasses}>
        Your cart is empty.
      </p>
      <ShoppingCartItemList
        cartContents={cartContents}
        setCartContents={setCartContents}
      />
      <ShoppingCartTotal
        cartContents={cartContents}
        setCartContents={setCartContents}
      />
    </div>
  );

}

ShoppingCart.propTypes = {
  cartContents: PropTypes.array.isRequired,
  setCartContents: PropTypes.func.isRequired,
  cartOpen: PropTypes.bool.isRequired,
  setCartOpen: PropTypes.func.isRequired
}

export default ShoppingCart;