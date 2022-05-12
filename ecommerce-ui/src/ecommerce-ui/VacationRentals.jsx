import React from "react";

function VacationRentals({ property, addRental }) {
    

    return (
        <div>
            <h3> {property.title}</h3>
            <img className="small" src={property.image} alt={property.title} />
            <p><span>Cost per night:</span> ${property.payment.cost}</p>
            <p><span>Location:</span> {property.location.city}, {property.location.country}</p>
            <div>
                <button onClick={addRental}>Add to Cart</button>
            </div>
        </div>

    )

}

export default VacationRentals
