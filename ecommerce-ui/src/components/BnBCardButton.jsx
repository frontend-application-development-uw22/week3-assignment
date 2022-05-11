////////////////////////////////////////////////////////////////////////////////
// BnBCardButton ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function BnBCardButton ({inCart, title, cost, cartContents, setCartContents}) {

  const test = () => {
    console.log(typeof(priceList));
  }

  return (
    <div>
      <button onClick={test} className="bnbcard-button">Add to Cart</button>
    </div>
  );

}

BnBCardButton.propTypes = {
  inCart: PropTypes.bool,
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  cartContents: PropTypes.array.isRequired,
  setCartContents: PropTypes.func.isRequired
}

export default BnBCardButton;