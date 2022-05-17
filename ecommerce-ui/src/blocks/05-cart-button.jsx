import React, {useState} from "react";

function CartButton({amountTotal}){

    const [dayCount, updateCount] = useState(0);

    function incrementCount() {
        updateCount(dayCount + 1)
    }

    function decrementCount() {
        if((dayCount - 1) < 0 ){ return null } 
        else{ 
            updateCount(dayCount - 1)
        }
    }

    function removeEverything(){
        updateCount(dayCount - dayCount);
    }

    return (
        <div className="cart-button">
            <button onClick={incrementCount}>Add Day<br/>to Cart</button>
            <button onClick={decrementCount}>Remove Day<br/>from Cart</button>
            <button onClick={removeEverything}>Remove Stay<br/>from Cart</button>
            
            <div className="total-pricing">
                <p>Total Days:<span className="number-of-days"> {dayCount}</span></p>
                <p>Price Total:<span className="total-amount-of-stay"> ${amountTotal}</span></p>
            </div>
        </div>
    );
}

export default CartButton