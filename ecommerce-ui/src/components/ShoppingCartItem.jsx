////////////////////////////////////////////////////////////////////////////////
// ShoppingCartItem ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

const INDEX_PLACE = 18;

function ShoppingCartItem ({shoppingCartItemId, title, cost, cartContents, setCartContents}) {

  // removeFromCart ////////////////////////////////////////////////////////////
  // Rewrites [cartContents] having removed data related to this 
  // [ShoppingCartItem].
  const removeFromCart = () => {
    const index = shoppingCartItemId.slice(INDEX_PLACE);
    const tempCartContents = [...cartContents];
    tempCartContents.splice(index, 1);
    setCartContents(cartContents => [
      ...tempCartContents
    ]);
  }

  return (
    <li id={shoppingCartItemId} className="shoppingcart-item">
      <span className="shoppingcart-item-title">
        {title}
      </span>
      <span className="shoppingcart-item-price">
        ${cost}
      </span>
      <button 
        className="shoppingcart-item-x"
        onClick={removeFromCart}
      >
        ⨯
      </button>
    </li>
  );

}

ShoppingCartItem.propTypes = {
  shoppingCartItemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  cartContents: PropTypes.array.isRequired,
  setCartContents: PropTypes.func.isRequired
}

export default ShoppingCartItem;