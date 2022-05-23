import React from 'react';
import BnbUpdateCart from './BnbUpdateCart';
import PropTypes from 'prop-types';

export default function BnbCart({cartItems, removeItem, totalCost}) {
  const cartRender = cartItems.map((cartItem,index) =>
    <BnbUpdateCart
        key = {index}
        cartItem = {cartItem}
        removeItem = {removeItem}
    />
  )
  // console.log(totalCost);
  return (
    <div className='cart'>
      <div>
        {totalCost === 0 && <div>Your cart is currently empty.</div>}
        {totalCost !== 0 && (
          <>
            {cartRender}
            <div className='total'>
              Price details
              <br></br>
              Total &#40;USD&#41; ${totalCost}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

BnbCart.propTypes = {
  cartItems: PropTypes.any.isRequired,
  removeItem: PropTypes.func.isRequired,
  totalCost: PropTypes.number.isRequired
}