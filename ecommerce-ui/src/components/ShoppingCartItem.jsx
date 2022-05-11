////////////////////////////////////////////////////////////////////////////////
// ShoppingCartItem ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function ShoppingCartItem ({id, title, cost, cartContents, setCartContents}) {

  // removeFromCart ////////////////////////////////////////////////////////////
  // Rewrites [cartContents] with an added object representing this 
  // BnBCardButton's BnB.
  const removeFromCart = () => {
    const index = id.slice(18); 
    console.log("index " + index);
    const tempCartContents = [...cartContents];
    tempCartContents.splice(index, 1);
    setCartContents(cartContents => [
      ...tempCartContents
    ])
  }

  return (
    <li id={id} className="shoppingcart-item">
      {title} - ${cost}
      <button 
        className="shoppingcart-item-x"
        onClick={removeFromCart}
      >
        ⨯
      </button>
    </li>
  );

}

export default ShoppingCartItem;