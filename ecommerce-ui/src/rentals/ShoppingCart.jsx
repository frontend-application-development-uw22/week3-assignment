/* eslint-disable react/prop-types */
import React from 'react'
// import VacationCard from "./VacationCard";
import ShopItem from "./ShopItem";

export default function ShoppingCart({cart, removeFromCart}){

  const shoppingCartList = cart.map((card, idx)=>

    <ShopItem
      card={card}
      key={idx}
      onRemove={()=>removeFromCart(idx)}
    />)

  return(

    <div>
      {shoppingCartList}
    </div>
  )

}
