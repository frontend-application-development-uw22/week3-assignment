/* eslint-disable react/prop-types */
import React from 'react'
import VacationCard from "./VacationCard";
// import VacationCard from "./VacationCard";

export default function ShoppingCart({cart}){

  const shoppingCartList = cart.map((card, idx)=>

    <VacationCard
      card={card}
      key={idx}
    />)

  return(

    <div className="grid">
      {shoppingCartList}
    </div>
  )

  // const items = cartList.map((item, idx)=>{
  //
  //   return (
  //
  //     <VacationCard key={idx} card={item} onAdd={()=>addToCart(item)}/>
  //
  //   )
  //
  // })
  //
  // return (
  //   <div>
  //     <ul>
  //
  //       {items}
  //
  //     </ul>
  //
  //
  //
  //     {/*Shopping Cart*/}
  //
  //     {/*Shop*/}
  //
  //   </div>
  // )

}
