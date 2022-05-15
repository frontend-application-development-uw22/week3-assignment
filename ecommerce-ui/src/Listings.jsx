import React from 'react';
import PropTypes from 'prop-types';
import bnbs from './bnbs.json';
import Stars from './Stars';
import Oops from './Oops';
// import SuperHost from './SuperHost';

export default function Listings({ onAdd, cartItems }) {
  return (
    <>
      {bnbs.map((listing) => (
          <div key={listing.id} className="card Card-width m-2 p-2">
            <img src={listing.image} className="card-img-top" alt={listing.title} />
            <div className="card-body">
              <h4 className="card-title">{listing.title}</h4>
              <div className="card-text fw-bold">
                {listing.houseType} in {listing.location.city}, {listing.location.country}</div>
              <div className="card-text">${listing.payment.cost}</div>
              <div>{listing.payment.description}</div>
              <Stars rating={listing.rating.stars} />
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
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  houseType: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
  payment: PropTypes.shape({
    cost: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onAdd: PropTypes.func.isRequired,
  Oops: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired
};
