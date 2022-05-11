////////////////////////////////////////////////////////////////////////////////
// ShoppingCart ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItemList from './ShoppingCartItemList';
import ShoppingCartTotal from './ShoppingCartTotal';

function ShoppingCart ({cartContents, setCartContents}) {

  return (
    <div className="shoppingcart">
      <h2>
        Cart
      </h2>
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
  setCartContents: PropTypes.func.isRequired
}


export default ShoppingCart;