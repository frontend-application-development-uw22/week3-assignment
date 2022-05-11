////////////////////////////////////////////////////////////////////////////////
// ShoppingCartTotal ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function ShoppingCartTotal ({cartContents, setCartContents}) {

  // Calculate [total] cost of all items in [cartContents].
  let total = 0;
  cartContents.forEach(cartItem => {
      total += cartItem.cost;
  });

  return (
    <div className="shoppingcart-total">
      <p>
        ${total}
      </p>
    </div>
  );

}

export default ShoppingCartTotal;