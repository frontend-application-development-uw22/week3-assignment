import React from 'react';
import Rentals from './bnbs.json';
import RentalCard from './BnBApp/RentalCard.jsx';


const Home = () => {
    return (
        <div className='container-fluid'>
            <h3 className='text-center mt-5 text-uppercase'>Shop Page</h3>
            <div className="container py-4">
                <div className="row">
                    {Rentals.map((rental, index) => {
                        return (
                            <RentalCard img={rental.image} title={rental.housetype} desc={rental.description} price={rental.payment.cost} Rental={rental} key={index} />
                        )
                    })}

                </div>
            </div>
        </div>

    )
}

export default Home