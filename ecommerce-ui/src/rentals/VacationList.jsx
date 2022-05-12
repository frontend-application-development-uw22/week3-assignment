/* eslint-disable react/prop-types */
import React from 'react'
import VacationCard from './VacationCard'

export default function VacationList({bnbList, addToCart}){

    const vacationRentals = bnbList.map((card, idx)=>

    <VacationCard
      card={card}
      key={idx}
      onAdd = {()=>addToCart(card)}

    />)

  return(

    <div className="vacation-card">
      {vacationRentals}
    </div>
  )

}

