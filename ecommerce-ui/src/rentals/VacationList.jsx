/* eslint-disable react/prop-types */
import React from 'react'
import VacationCard from './VacationCard'

export default function VacationList({bnbs, addToCart}){

    const vacationRentals = bnbs.map((card, idx)=>

    <VacationCard
      card={card}
      key={idx}
      onAdd = {()=>addToCart(card)}


    />)

  return(

    <div className="grid">
      {vacationRentals}
    </div>
  )

}

