import React from "react";
import CartItems from "./CartItems"
import PropTypes from 'prop-types'


function ShoppingCart({ id, rentalItems, removeRental }) {
    const itemsPrice = rentalItems.reduce((a, c) => a + c.qty * c.payment.cost, 0);
    
    return (

        <aside className="block col-1">
            <h3>Your Shopping Cart</h3>
            <div>
                {rentalItems.length === 0 && <p>No properties have been selected</p>}
            </div>

            <div key="id" className="column" > 
                {rentalItems.map((item, index) => (
                    <CartItems
                        key={id}
                        id={id}
                        item={item}
                        index={index}
                        removeRental={removeRental}
                      
                         />
                ))}

            </div>
            <div>Total Cost:  ${itemsPrice}</div>
        </aside>
    )
}

ShoppingCart.propTypes = {
    rentalItems: PropTypes.arrayOf(Object).isRequired,
    removeRental: PropTypes.func.isRequired,
    id: PropTypes.number

}

export default ShoppingCart

