import React from "react";
import CartItems from "./CartItems"


function ShoppingCart({ rentalItems, addRental, removeRental}) {
   return (

        <aside className="block col-1">
            <h3>Your Shopping Cart</h3>
            <div>
                {rentalItems.length === 0 && <p>No properties have been selected</p> }
            </div>
            <div className="row">
                {rentalItems.map((item, index) => (
                    <CartItems 
                    key={index} 
                    item={item} 
                    addRental={addRental} />
                ))}

            </div>
        </aside>
    )
}
export default ShoppingCart

