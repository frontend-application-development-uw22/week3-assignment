/* eslint-disable react/prop-types */
import React from 'react'
import VacationList from './VacationList'


export default function VacationRental({bnbs, addToCart}) {

  return (
    <div>

      <div className="vacation-list">

        <VacationList bnbs={bnbs} addToCart={addToCart}/>

      </div>

    </div>

  )
}


