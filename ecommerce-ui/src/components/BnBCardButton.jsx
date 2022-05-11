////////////////////////////////////////////////////////////////////////////////
// BnBCardButton ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function BnBCardButton ({bnbId, title, cost, cartContents, setCartContents}) {

  // addToCart /////////////////////////////////////////////////////////////////
  // Rewrites [cartContents] with an added object representing this 
  // BnBCardButton's BnB.
  const addToCart = () => {
    setCartContents(cartContents => 
      [...cartContents, 
      {
        id: bnbId,
        title: title,
        cost: cost,
      }]);
  }

  return (
    <div>
      <button onClick={addToCart} className="bnbcard-button">
        Add to Cart
      </button>
    </div>
  );

}

BnBCardButton.propTypes = {
  bnbId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  cartContents: PropTypes.array.isRequired,
  setCartContents: PropTypes.func.isRequired
}

export default BnBCardButton;