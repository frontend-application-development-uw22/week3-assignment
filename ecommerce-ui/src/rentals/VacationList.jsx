import React from 'react'
import VacationCard from './VacationCard'
import PropTypes from "prop-types";

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

VacationList.propTypes = {

  bnbList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,

}
