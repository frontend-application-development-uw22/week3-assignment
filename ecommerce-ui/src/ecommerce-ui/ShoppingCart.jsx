import React from "react";
import CartItems from "./CartItems"


function ShoppingCart({ id, rentalItems, addRental, removeRental }) {
    // console.log(id);
    return (

        <aside className="block col-1">
            <h3>Your Shopping Cart</h3>
            <div>
                {rentalItems.length === 0 && <p>No properties have been selected</p>}
            </div>
            <div className="column" key="index">
                {rentalItems.map((item, index) => (
                    <CartItems
                        item={item}
                        index={index}
                        addRental={addRental} />
                ))}

            </div>
        </aside>
    )
}
export default ShoppingCart

