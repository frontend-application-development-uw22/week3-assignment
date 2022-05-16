import React from "react";
import propTypes from "prop-types";

function CartItem({cartItems, onRemove}){
    return(
        cartItems.map(rental =>{
        return  <div className='cart-item'>
            <p className="cart-item-title">{rental.title}</p>
            <p className="cart-item-cost">${rental.payment.cost} / Night</p>
            <button className="btn btn-info cart-btn" type="button" onClick={() => onRemove(rental)}>Remove from Cart</button>
        </div>
        })
    )
}

CartItem.propTypes = {
    cartItems: propTypes.string,
    onRemove: propTypes.func,
   }
   

export default CartItem