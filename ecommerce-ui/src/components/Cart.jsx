import React from 'react';

function Cart({item}) {
    return(
        <div key = "idx">
            <h3>{item.title}</h3>
            <img src = {item.image} alt = {item.title}/>
            <p>{item.location.city}, {item.location.country}</p>
            <p>${item.payment.cost} a night</p>
            <p>{item.payment.description}</p>
            {/* <button onClick={() => addItem(item)}>Add to Cart</button> */}
        </div>
    )
}

export default Cart;