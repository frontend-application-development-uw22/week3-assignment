////////////////////////////////////////////////////////////////////////////////
// NavShoppingCartButton ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function NavShoppingCartButton ({cartContents, cartOpen, setCartOpen}) {

  // Get [itemCount] of items in cart.
  let itemCount = cartContents.length;

  // [toggleCart] closed if open; open if closed.
  const toggleCart = () => {
    cartOpen ? setCartOpen(false) : setCartOpen(true);
  }

  const itemCountClasses =
    itemCount ? "shoppingcart-button-itemcount red-highlight" : "shoppingcart-button-itemcount";

  return (
    <li onClick={toggleCart} className="shoppingcart-button">
      <span className={itemCountClasses}>
        {itemCount}
      </span> Cart
    </li>
  );

}

NavShoppingCartButton.propTypes = {
  cartContents: PropTypes.array.isRequired,
  cartOpen: PropTypes.bool.isRequired,
  setCartOpen: PropTypes.func.isRequired
}

export default NavShoppingCartButton;