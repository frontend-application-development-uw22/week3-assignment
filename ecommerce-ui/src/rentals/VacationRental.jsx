/* eslint-disable react/prop-types */
import React from 'react'
import VacationList from './VacationList'
// import ShoppingCart from "./ShoppingCart";
// import {useState} from "@types/react";

export default function VacationRental({bnbs, addToCart}) {

  // const [cart, setCart] = useState([])
  //
  // function addToCart(card){
  //
  //   console.log('button clicked')
  //   console.log(cart)
  //
  //   setCart([...cart, card])
  //
  // }

  return (
    <div>

      <div>

        <VacationList bnbs={bnbs} addToCart={addToCart}/>

      </div>


      {/*<div>*/}

      {/*  <ShoppingCart cart={cart}/>*/}

      {/*</div>*/}


    </div>

  )
}


