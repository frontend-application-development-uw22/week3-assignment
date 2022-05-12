import React from 'react'
import VacationList from './VacationList'
import PropTypes from "prop-types";


export default function VacationRental({bnbList, addToCart}) {

  return (
    <div>

      <div className="vacation-list">

        <VacationList bnbList={bnbList} addToCart={addToCart}/>

      </div>

    </div>

  )
}

VacationRental.propTypes = {

  bnbList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,

}


