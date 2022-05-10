import React, { useState } from "react";
import VacationRentals from "./VacationRentals"
import ShoppingCart from "./ShoppingCart"
import rentalData from "../_data/bnbs.json"
import '../App.css';
import '../images/beach-banner.png'

// import vacationRentals from '../_data/bnbs.json';
function ECommerceUIApp() {
  
    const [rentalToAdd, setRentalObject] = useState({});
    // const [rentals, setRentals] = useState([])


 

    return (
        <main>
            <div className="header-container">
                <header>
                    <h1>Rent-2-Relax</h1>
                    <h3>Find yourself a piece of heaven</h3>
                </header>
            </div>
            <div className="container">
                <section className="rentals">
                    <h1>Vacation Rentals Available</h1>

                    <div className="rental-group">
                        {rentalData.map((rental, index) =>
                            <VacationRentals
                                key={index}
                                id={rental.id}
                                image={rental.image}
                                title={rental.title}
                                houseType={rental.houseType}
                                rentalImage={rental.image}
                                city={rental.location.city}
                                country={rental.location.country}
                                cost={rental.payment.cost}
                                costDescr={rental.payment.description}
                                hostName={rental.host.name}
                                isSuperhost={rental.host.isSuperhost}
                                start={rental.rating.stars}
                                reviews={rental.rating.reviews}
                                rentalToAdd={rentalToAdd}
                                // addRental={addRental}
                                setRentalObject={setRentalObject}
                            />
                        )}

                    </div>
                </section>
                <aside className="cart">
                    <h2> Your Shopping Cart</h2>
                    <div className="cart-group">
                        <ShoppingCart
                            // rentals={rentals} 
                            />
                    </div>
                </aside>
            </div>
        </main>
    )

}

export default ECommerceUIApp

  // for (let i = 0; i < rentals.length; i++) {
    //     rentals.push({
    //         key = { index },
    //             image = { rental.image },
    //             title = { rental.title },
    //             houseType = { rental.houseType },
    //             rentalImage = { rental.image },
    //             city = { rental.location.city },
    //             country = { rental.location.country },
    //             cost = { rental.payment.cost },
    //             costDescr = { rental.payment.description },
    //             hostName = { rental.host.name },
    //             isSuperhost = { rental.host.isSuperhost },
    //             start = { rental.rating.stars },
    //             reviews = { rental.rating.reviews },
    //             rentalToAdd = { rentalToAdd },
    //             addRental = { addRental },
    //             setRentalObject = { setRentalObject }
    //     })
    //}