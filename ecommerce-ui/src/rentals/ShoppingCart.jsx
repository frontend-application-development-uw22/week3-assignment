/* eslint-disable react/prop-types */
import React from 'react'
import VacationCard from "./VacationCard";

export default function ShoppingCart({cart}){

  const shoppingCartList = cart.map((card, idx)=>

    <VacationCard
      card={card}
      key={idx}
    />)

  return(

    <div>
      {shoppingCartList}
    </div>
  )

}
