import React from 'react'
import ShopItem from "./ShopItem";
import PropTypes from "prop-types";

export default function ShoppingCart({cart, removeFromCart}){

  const shoppingCartList = cart.map((card, idx)=>

    <ShopItem
      card={card}
      key={idx}
      onRemove={()=>removeFromCart(idx)}
    />)

  return(

    <div className="shopping-cart-component">
      {shoppingCartList}
    </div>
  )

}


ShoppingCart.propTypes = {

  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,

}
