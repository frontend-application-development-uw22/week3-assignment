import React from 'react'
import VacationCard from "./VacationCard";
import PropTypes from "prop-types"

export default function VacationRental({bnbs}){

  const vacationRentals = bnbs.map((card, idx)=>


    <VacationCard key={idx} card={card}/>)

  return(

    <div className="grid">
      {vacationRentals}
    </div>
  )

}

VacationRental.propTypes = {

  bnbs: PropTypes.arrayOf(PropTypes.object).isRequired

}

