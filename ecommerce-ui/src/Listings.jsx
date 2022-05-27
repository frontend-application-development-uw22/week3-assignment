import React from 'react';
import PropTypes from 'prop-types';
import bnbs from './bnbs.json';
import Oops from './Oops';
// import Stars from './Stars';
// import SuperHost from './SuperHost';

export default function Listings({ onAdd, cartItems }) {
  return (
    <>
      {bnbs.map((listing) => (
          <div key={listing.id} className="card Card-width m-2 p-2">
            <img src={listing.image} className="card-img-top" alt={listing.title} />
            <div className="card-body">
              <a href={listing.credit} className="Host-info">Image credit</a>
              <h4 className="card-title">{listing.title}</h4>
              <div className="card-text fw-bold">
                {listing.houseType} in {listing.location.city} {listing.location.country}</div>
              <div className="card-text">Your host: {listing.host.name}</div>
              <div className="card-text">${listing.payment.cost}</div>
              <div>{listing.payment.description}</div>
              {/* <Stars rating={listing.rating.stars} /> */}
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={() => cartItems.includes(listing) ? Oops() : onAdd(listing)} >Add to cart</button>
              {/* <SuperHost prop={listing.host.isSuperhost} /> */}
            </div>
          </div>
      ))}
    </>
  );
}

Listings.propTypes = {
  onAdd: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};
