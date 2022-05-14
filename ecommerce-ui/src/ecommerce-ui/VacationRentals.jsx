import React from "react";
import PropTypes from 'prop-types'

function VacationRentals({ property, addRental }) {
    

    return (
        <div>
            <h3> {property.title}</h3>
            <img className="small" src={property.image} alt={property.title} />
            <p><span>Cost per night:</span> ${property.payment.cost}</p>
            <p><span>Location:</span> {property.location.city}, {property.location.country}</p>
            <p>{property.payment.description}</p>
            <div>
                <button onClick={() => addRental(property)}>Add to Cart</button>
            </div>
        </div>

    )

}

VacationRentals.propTypes = {
    properties: PropTypes.arrayOf(Object).isRequired,
    addRental: PropTypes.func.isRequired

}

export default VacationRentals
