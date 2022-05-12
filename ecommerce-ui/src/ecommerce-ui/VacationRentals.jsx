import React from "react";

function VacationRentals(props) {
    const { property } = props;

    return (
    <div>
        <h3> {property.title}</h3>
       <img className="small" src={property.image} alt={property.title}/>
       <p><span>Cost per night:</span> ${property.payment.cost}</p>
       <p><span>Location:</span> {property.location.city}, {property.location.country}</p>
    </div>
    )

}

export default VacationRentals
