import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import CartInfo from './CartInfo';
import RemoveFromCart from "./RemoveFromCart";
import Total from "./Total"

function Cart ( {cname, cartItems, removeCartItem, total})
{
  console.log(cartItems)
  return(
    <div className={cname}>
      {cartItems.map((cartItem, idx) => (
        <div key={idx}>
          <CartInfo  cname={"bnbtextcell"} cartItem={cartItem} id={idx.toString()}/>
          <RemoveFromCart  cname={""} cartItem={cartItem} handleRemove={removeCartItem} id={idx}/>
        </div>
      ))}
      <Total total={total} />
    </div>

  )
}

Cart.propTypes =
{
  cname: PropTypes.string.isRequired,
  cartItems: PropTypes.array.isRequired ,
  removeCartItem: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
}

export default Cart;
