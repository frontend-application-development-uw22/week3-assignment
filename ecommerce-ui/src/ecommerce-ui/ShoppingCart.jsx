import React from "react";

function ShoppingCart(props) {
    const { rentalItems, addRental, removeRental} = props;

    console.log(rentalItems.shortTitle);
    return (

        <aside className="block col-1">
            <h3>Your Shopping Cart</h3>
            <div>
                {rentalItems.length === 0 && <p>No properties have been selected</p> }
            </div>
            {rentalItems.map((item, index => (
                <div key={index} className = "row">
                    <div>{item.shortTitle}</div>   
               
                    <div>
                        <button onClick={()=>addRental(item)} className="add"> + </button>
                        <button onClick={()=>removeRental(item)} className="remove"> - </button>
                    </div>
                </div>
            ))}
        </aside>
    )
}
export default ShoppingCart