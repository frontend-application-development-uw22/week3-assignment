import React from "react";
import CartItem from "./cartitem";
import PropTypes from 'prop-types';
import propTypes from "prop-types";

function Cart({cartItems, onRemove}){
    let cartTotal = 0;
    for (const item of cartItems){
       cartTotal += item.payment.cost;
    }
     return  <div className='cart-ui-main-container col-12 col-md-3' id="cart">
                <div className='cart-header'>Your Cart</div>
                <div>
                    {cartItems.length === 0 ? <div>Cart is Empty</div> : 
                    
                        <div>
                            <CartItem cartItems={cartItems} onRemove={onRemove}/>
                            <div className="cart-total">Your total is:
                                <div className="total">${cartTotal}</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
}

Cart.propTypes = {
 cartItems: propTypes.string,
 onRemove: propTypes.func,
 cartTotal: PropTypes.func,
}

export default Cart;