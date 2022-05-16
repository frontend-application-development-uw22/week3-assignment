import React from "react";
import propTypes from "prop-types";

function CartBtn({onAdd, rental, isInCart}){
    
    if(isInCart){
       return <button className="btn btn-info add-to-cart-invalid" type="button">In Cart</button>
    }else{
        return <button className="btn btn-info add-to-cart" type="button" onClick={() => onAdd(rental)}>Add To Cart</button>
    }
}

CartBtn.propTypes ={
    onAdd: propTypes.func,
    rental: propTypes.string,
    isInCart: propTypes.func
  }

export default CartBtn;