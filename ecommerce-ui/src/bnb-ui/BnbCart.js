import React from 'react';
import BnbUpdateCart from './BnbUpdateCart';
// import PropTypes from 'prop-types';

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

// BnbCart.propTypes = {
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   houseType: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   stars: PropTypes.number.isRequired,
//   reviews: PropTypes.number.isRequired,
//   superhost: PropTypes.bool.isRequired,
//   cost: PropTypes.number.isRequired
// }