import React from "react";
import bnbs from './bnbs.json';

export default function VacationRentals () {
    const addToCart = (e) => {
        e.preventDefault();

    }
    const rentals = bnbs.map((bnb, idx) => {
        return (
            // <tr><th>{bnb.title}</th><td><img src={bnb.image}></img></td><td>{bnb.location.city}, {bnb.location.country}</td><td>${bnb.payment.cost} with {bnb.payment.description}</td><td><img src='file:///C:/Personal/PEMCO/Certificate%20Programs/Fullstack%20JS%20Certificate%20320B/week3-assignment/ecommerce-ui/src/shoppingcart.png'></img></td></tr>
            <div className="listing-item">
                <div className="listing-item__figure-container">
                    <div className="listing-item__figure">
                        <img className="listing-item__image" src={bnb.image}></img>
                    </div>
                </div>
                <div className="listing-item__body">
                    <dl>
                        <div className="detail-box__item">
                            <dt className="detail-box__label">House Type</dt>
                            <dd className="detail-box__value">{bnb.houseType}</dd>
                        </div>
                        <div className="detail-box__item">
                            <dt className="detail-box__label">Location</dt>
                            <dd className="detail-box__value">{bnb.location.city}, {bnb.location.country}</dd>
                        </div>
                        <div className="detail-box__item">
                            <dt className="detail-box__label">Payment</dt>
                            <dd className="detail-box__value">{bnb.payment.cost} with {bnb.payment.description}</dd>
                        </div>
                        <div className="detail-box__item">
                            <dt className="detail-box__label">Host</dt>
                            <dd className="detail-box__value">{bnb.host.name}</dd>
                        </div>
                        <h2 className="listing-item__title js-listing-title">{bnb.title}</h2>
                        <p>Rating for this host is {bnb.rating.stars}/5 for {bnb.rating.reviews} reviews.</p>
                        <button className="btnAddToCart" type="submit">Add to Cart</button>
                    </dl>
                </div>
            </div>
        );
    })
    return (
        <div>
            <h1>Vacation Rental Options</h1>
            <div className="listings">
                <form onSubmit={addToCart}>
                    {rentals}
                </form>
            </div>
        </div>
    );
}