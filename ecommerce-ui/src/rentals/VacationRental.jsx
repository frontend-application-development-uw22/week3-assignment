/* eslint-disable react/prop-types */
import React from 'react'
import VacationList from './VacationList'


export default function VacationRental({bnbList, addToCart}) {

  return (
    <div>

      <div className="vacation-list">

        <VacationList bnbList={bnbList} addToCart={addToCart}/>

      </div>

    </div>

  )
}


