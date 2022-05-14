import React from 'react';
import PropTypes from 'prop-types'

function Cart({item, deleteItem}) {
    return(
        <div key = "idx">
            <h3>{item.shortTitle}</h3>
            <p>{item.location.city}, {item.location.country}</p>
            <p>${item.payment.cost} a night</p>
            <p>{item.payment.description}</p>
            <button onClick={() => deleteItem(item)}>Delete</button>
        </div>
    )
}

Cart.propTypes={
    item:PropTypes.arrayOf(Object).isRequired,
    deleteItem:PropTypes.func.isRequired
}

export default Cart;