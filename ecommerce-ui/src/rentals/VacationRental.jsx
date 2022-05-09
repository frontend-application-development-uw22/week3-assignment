/* eslint-disable react/prop-types */
import React from 'react'
import VacationList from './VacationList'
// import ShoppingCart from "./ShoppingCart";
// import {useState} from "@types/react";

export default function VacationRental({bnbs, addToCart}) {

  return (
    <div>

      <div>

        <VacationList bnbs={bnbs} addToCart={addToCart}/>

      </div>

    </div>

  )
}


