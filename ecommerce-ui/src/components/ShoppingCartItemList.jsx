////////////////////////////////////////////////////////////////////////////////
// ShoppingCartItemList ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCartItemList ({cartContents, setCartContents}) {

  // Map each [shoppingcart-item] in [cartContents] to a [ShoppingCartItem] in
  // [shoppingCartItemList].
  let iKey = -1;
  const shoppingCartItemList = cartContents.map((bnb) => {
    // Construct a unique key for each [ShoppingCartItem].
    iKey++;
    const shoppingCartItemId = "shoppingcart-item-" + iKey;
    return <ShoppingCartItem
      key={shoppingCartItemId}
      shoppingCartItemId={shoppingCartItemId}
      title={bnb.title}
      cost={bnb.cost}
      cartContents={cartContents}
      setCartContents={setCartContents}
    />
  });

  return (
    <ul className="shoppingcart-item-list">
      {shoppingCartItemList}
    </ul>
  );

}

ShoppingCartItemList.propTypes = {
  cartContents: PropTypes.array.isRequired,
  setCartContents: PropTypes.func.isRequired
}

export default ShoppingCartItemList;