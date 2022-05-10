import React from "react";


function VacationRentals({ title, houseType, rentalImage, city, country, cost, costDescr, hostName, isSuperhost, stars, reviews }) {

    return (
        <article className="rental-options">
                <h2>{title}</h2>
                <div className="rental-info">
                    <img
                        src={rentalImage}
                        alt={title}
                        className="rental-image"
                    />
                    <div className="rental-card-info">
                        <p><span>Location: </span>{city}, {country} </p>
                        <p><span>Price per night:  $</span>{cost}</p>
                    </div>
                    <div className="button-container">
                        <div className="center-button">
                            <button className="add-rental">Add to the cart</button>
                        </div>
                    </div>
                </div>
        </article>
    )
}

export default VacationRentals
