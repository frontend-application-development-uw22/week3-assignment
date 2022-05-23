import React, { useState } from "react";
import PropTypes from 'prop-types';
import bnbList from '../_data/bnbs.json';
import Bnb from './Bnb'
import Section from './Section'
import Cart from './Cart'
import '../week3.css'

function BnbShop ()
{
  const [cartItems, updateCart] = useState([])
  const [cartTotal, updateTotal] = useState(0)

  const handleAdd = bnbItem => {
    updateCart(cartItems => [...cartItems, bnbItem])
    updateTotal(cartTotal + bnbItem.payment.cost)
  }

  const handleRemove = (id) => {

    updateTotal(cartTotal - cartItems[id].payment.cost)
    updateCart([...cartItems.slice(0, id), ...cartItems.slice(id + 1, cartItems.length)])
  }

  return (
    <div className="container" >
      <Section sectionName={"Available Rentals"} />
      <Section sectionName={"Cart"} />
      <div className="bnbcontainer">
        {bnbList.map( bnbItem => (
          <Bnb cname={"bnbcell"} key={bnbItem.title} id={bnbItem.title} bnbItem={bnbItem} handleAdd={handleAdd}/>
        ))}
      </div>
      <div className="sccontainer">
        <Cart cname={""} cartItems={cartItems} removeCartItem={handleRemove} total={cartTotal}/>
      </div>
    </div>
  );
}



BnbShop.propTypes =
  {}

export default BnbShop;
