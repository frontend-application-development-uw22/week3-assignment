import React, { useEffect, useState } from "react";
import bnbs from './bnbs.json';

export default function VacationRentals () {
    const [total, setTotal] = useState(0);
    const addToCart = (event, bnbCost) => {
        event.preventDefault();
        console.log(bnbCost);
        if (event.target.innerText.indexOf('Add') > -1) {
            setTotal(total + bnbCost);
            event.target.innerText = 'Remove from Cart';
        } else {
            setTotal(total - bnbCost);
            event.target.innerText = 'Add to Cart';
        }
        console.log(total);
        console.log(event.target.innerText);
    }

    return (
        <div>
            <h1>Vacation Rental Options</h1>
            <div className="listings">
                <form>
                    <div className="grid">
                        <div className="grid__large-9 grid__medium-12 grid__small-12 listing-detail__body">
                            {bnbs.map(bnb => {
                                return (
                                <div className="listing-item" key={bnb.title}>
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
                                                <dd className="detail-box__value">${bnb.payment.cost} with {bnb.payment.description}</dd>
                                            </div>
                                            <div className="detail-box__item">
                                                <dt className="detail-box__label">Host</dt>
                                                <dd className="detail-box__value">{bnb.host.name}</dd>
                                            </div>
                                            <h2 className="listing-item__title js-listing-title">{bnb.title}</h2>
                                            <p>Rating for this host is {bnb.rating.stars}/5 for {bnb.rating.reviews} reviews.</p>
                                            <button className="btnAddToCart" type="submit" onClick={event => addToCart(event, bnb.payment.cost)}>Add to Cart</button>
                                        </dl>
                                    </div>
                                </div>
                            )})}
                        </div>
                        <div className="grid__large-3 grid__medium-12 grid__small-12 sidebar">
                            <div className="hand-hidden tablet-hidden u-pad-bs">
                                <div>Shopping Cart</div>
                                <h2 className="font-weight-normal d-inline-block">
                                    Total payment due: 
                                </h2>
                                <h3 className="font-weight-normal" id='total'>
                                    
                                    ${total}/mo
                                    </h3>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}