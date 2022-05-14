import React from 'react';
import PropTypes from 'prop-types'

function Rentals({bnb, addItem}) {
    return(
        <div key = "idx">
            <h3>{bnb.title}</h3>
            <img src = {bnb.image} alt = {bnb.title}/>
            <p>{bnb.location.city}, {bnb.location.country}</p>
            <p>${bnb.payment.cost} a night</p>
            <p>{bnb.payment.description}</p>
            <button onClick={() => addItem(bnb)}>Add to Cart</button>
        </div>
    )
}

Rentals.propTypes={
    bnb:PropTypes.arrayOf(Object).isRequired,
    addItem:PropTypes.func.isRequired
}

export default Rentals;