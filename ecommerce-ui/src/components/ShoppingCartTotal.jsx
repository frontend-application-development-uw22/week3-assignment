////////////////////////////////////////////////////////////////////////////////
// ShoppingCartTotal ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function ShoppingCartTotal ({cartContents}) {

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

ShoppingCartTotal.propTypes = {
  cartContents: PropTypes.array.isRequired
}

export default ShoppingCartTotal;